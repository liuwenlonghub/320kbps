"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  getInitialLocale,
} from "@/lib/i18n/get-locale";
import {
  setLocaleCookie,
} from "@/lib/i18n/locale-cookie";
import type { Locale } from "@/lib/i18n";

const localeLabels: Record<Locale, string> = {
  en: "English",
  "zh-cn": "简体中文",
  ja: "日本語",
};

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const [locale, setLocale] =
    useState<Locale>("en");

  useEffect(() => {
    const currentLocale =
      pathname.split("/")[1];

    if (
      currentLocale === "en" ||
      currentLocale === "zh-cn" ||
      currentLocale === "ja"
    ) {
      setLocale(currentLocale);
    } else {
      setLocale(getInitialLocale());
    }
  }, [pathname]);

  function handleChange(
    event: React.ChangeEvent<HTMLSelectElement>,
  ) {
    const nextLocale =
      event.target.value as Locale;

    setLocale(nextLocale);
    setLocaleCookie(nextLocale);

    const segments = pathname.split("/");

    if (
      segments[1] === "en" ||
      segments[1] === "zh-cn" ||
      segments[1] === "ja"
    ) {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }

    router.push(segments.join("/"));
  }

  return (
    <select
      value={locale}
      onChange={handleChange}
      aria-label="Language"
      className="bg-transparent text-sm text-zinc-600 outline-none"
    >
      {(Object.keys(localeLabels) as Locale[]).map(
        (value) => (
          <option key={value} value={value}>
            {localeLabels[value]}
          </option>
        ),
      )}
    </select>
  );
}