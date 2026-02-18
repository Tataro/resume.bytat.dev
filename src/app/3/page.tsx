"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Design3() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}
