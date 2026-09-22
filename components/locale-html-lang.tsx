"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function LocaleHtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = pathname.split("/")[1];

    const lang =
      locale === "zh-cn"
        ? "zh-CN"
        : locale === "ja"
          ? "ja"
          : "en";

    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}