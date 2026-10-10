"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getInitialLocale } from "@/lib/i18n/get-locale";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const locale = getInitialLocale();
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}