"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

function subscribe() {
  return () => {};
}

export default function BrutalistThemeToggle() {
  // Returns false on server (renders nothing), true on client — avoids SSR mismatch
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  // Lazy initializer runs synchronously on the client — reads correct preference
  // before first render, so there's no state correction needed after mount
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof globalThis.matchMedia === "function") {
      return globalThis.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const page = document.querySelector(".brutalist-page");
    if (page instanceof HTMLElement) {
      page.dataset.theme = theme;
    }
  }, [theme]);

  if (!isClient) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="brutalist-theme-toggle"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
