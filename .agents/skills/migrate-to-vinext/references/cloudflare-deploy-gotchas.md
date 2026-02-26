# Cloudflare Deploy Gotchas — Lessons from Real Migration

Real-world issues encountered when migrating a Next.js 16 App Router project to vinext with Cloudflare Workers deployment.

## Error 1: `@vitejs/plugin-rsc` not installed

```
Cannot find module '@vitejs/plugin-rsc/rsc' imported from 'virtual:vinext-rsc-entry'
```

**Cause:** `vinext init` does NOT install `@vitejs/plugin-rsc` automatically for App Router projects. The RSC plugin is required for React Server Components to work.

**Fix:**
```bash
pnpm add -D @vitejs/plugin-rsc
```

## Error 2: `next/font/google` named imports fail

```
(0 , __vite_ssr_import_4__.Outfit) is not a function
```

**Cause:** vinext's `next/font/google` shim uses a `Proxy` on the **default export** for dynamic font names. Only common fonts (Inter, Roboto, Geist, etc.) have explicit named exports. Uncommon fonts like `Outfit` or `Zen_Maru_Gothic` must go through the Proxy.

ESM named imports (`import { Outfit } from "next/font/google"`) bypass the Proxy — they look for real named exports which don't exist for uncommon fonts.

**Fix:** Use default import destructuring instead of named imports:
```diff
-import { Outfit, Zen_Maru_Gothic } from "next/font/google";
+import googleFonts from "next/font/google";
+const { Outfit, Zen_Maru_Gothic } = googleFonts;
```

## Error 3: `next.config.ts` — Unknown file extension ".ts"

```
[vinext] Failed to load next.config.ts: Unknown file extension ".ts"
```

**Cause:** Node.js cannot natively load `.ts` files. During production builds, vinext tries to load the Next.js config using Node's module system, which fails on `.ts` extensions.

**Fix:** Rename `next.config.ts` → `next.config.mjs` (or `.js` with `"type": "module"`):
```js
/** @type {import('next').NextConfig} */
const nextConfig = {};
export default nextConfig;
```

## Error 4: Entry-point file not found

```
✘ [ERROR] The entry-point file at "vinext/server/app-router-entry" was not found.
```

**Cause:** `wrangler.jsonc` had `"main": "vinext/server/app-router-entry"` — a Node module specifier. Wrangler resolves `main` as a **file path**, not a module specifier, so it can't find it.

**Fix:** Point `main` to the actual worker entry file that `vinext deploy` generates:
```diff
-"main": "vinext/server/app-router-entry"
+"main": "./worker/index.ts"
```

Generate `worker/index.ts` by running:
```bash
npx vinext deploy --dry-run
```

## Error 5: Missing `directory` in assets config

```
✘ [ERROR] The `assets` property in your configuration is missing the required `directory` property.
```

**Cause:** `wrangler.jsonc` had `assets: { "not_found_handling": "none" }` without a `directory` field. Wrangler requires `directory` when `assets` is specified (unless `@cloudflare/vite-plugin` manages it).

**Fix:** Add binding and let the Cloudflare Vite plugin manage the directory:
```jsonc
"assets": {
    "binding": "ASSETS",
    "not_found_handling": "none"
}
```

> **Important:** Do NOT add `"directory"` when using `@cloudflare/vite-plugin` — the plugin manages it automatically. Only add `"directory"` if deploying with standalone `wrangler deploy` without the Vite plugin.

## Error 6: Cannot resolve `virtual:vinext-rsc-entry`

```
✘ [ERROR] Could not resolve "virtual:vinext-rsc-entry"
    worker/index.ts → vinext/server/app-router-entry.js:15
```

**Cause — the big one:** This is the most subtle error. Here's the chain:

1. `vinext deploy` checks if `vite.config.ts` exists
2. If it exists, **it skips generating a new one** (respects user config)
3. Our `vite.config.ts` only had `plugins: [vinext()]` — **no `cloudflare()` plugin**
4. The Vite build succeeds (vinext handles RSC internally)
5. But then `wrangler deploy` tries to **re-bundle** `worker/index.ts` with esbuild
6. esbuild can't resolve `virtual:vinext-rsc-entry` — that's a Vite-only virtual module

**Root cause:** `vinext deploy` generates a `vite.config.ts` with `cloudflare()` plugin **only if no config exists**. If you already have one (e.g., from `vinext init`), you must add the Cloudflare plugin yourself.

**Fix:** Add `cloudflare()` to `vite.config.ts`:
```ts
import { defineConfig } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    vinext(),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
});
```

## Error 7: Wrangler version too old

```
Error: The installed version of Wrangler (4.66.0) does not satisfy the peer dependency
required by @cloudflare/vite-plugin (^4.68.1).
```

**Cause:** `@cloudflare/vite-plugin@1.25.5` requires `wrangler@^4.68.1`.

**Fix:**
```bash
pnpm add -D wrangler@latest
```

## Key Takeaways

### `vinext init` vs `vinext deploy` — different configs!

| Command | Purpose | `vite.config.ts` generated |
|---------|---------|---------------------------|
| `vinext init` | Local dev setup | `plugins: [vinext()]` — NO cloudflare |
| `vinext deploy` | Cloudflare deployment | `plugins: [vinext(), cloudflare({...})]` — WITH cloudflare |

If you run `vinext init` first (which creates `vite.config.ts`), then `vinext deploy` later, the deploy will **skip** generating the Cloudflare-enabled config because the file already exists. You must add `cloudflare()` manually.

### `wrangler.jsonc` for vinext + Cloudflare

The correct minimal config:
```jsonc
{
    "$schema": "node_modules/wrangler/config-schema.json",
    "name": "your-app-name",
    "main": "./worker/index.ts",
    "compatibility_date": "2026-02-26",
    "compatibility_flags": ["nodejs_compat"],
    "assets": {
        "binding": "ASSETS",
        "not_found_handling": "none"
    },
    "images": {
        "binding": "IMAGES"
    }
}
```

### Migration checklist (order matters)

1. `vinext init` — sets up local dev
2. Install `@vitejs/plugin-rsc` — required for App Router
3. Fix `next/font/google` imports — use default import for uncommon fonts
4. Rename `next.config.ts` → `.mjs` — Node can't load `.ts`
5. Add `cloudflare()` to `vite.config.ts` — **critical for deploy**
6. Generate `worker/index.ts` via `vinext deploy --dry-run`
7. Set `wrangler.jsonc` `main` to `./worker/index.ts`
8. Ensure `wrangler` version satisfies `@cloudflare/vite-plugin` peer dep
9. Update `.gitignore` — add `/dist/`, remove `.open-next`
