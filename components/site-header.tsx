"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./language-switcher";
import { getDictionary } from "@/lib/i18n";

export function SiteHeader() {
  const pathname = usePathname();

  const locale =
    pathname.split("/")[1] === "zh-cn"
      ? "zh-cn"
      : pathname.split("/")[1] === "ja"
        ? "ja"
        : "en";

  return (
    <header className="flex h-20 w-full items-center justify-between border-b border-[#e5e5e5] px-[6vw] max-[700px]:h-16">
      <Link
        href={`/${locale}`}
        className="text-[14px] font-semibold tracking-[0.08em] text-[#111111]"
      >
        320kbps
      </Link>

      <nav className="flex items-center gap-7 text-[14px] text-[#111111] max-[700px]:hidden">
        <Link
          href={`/${locale}#about`}
          className="transition-opacity hover:opacity-50"
        >
          {getDictionary(locale).navigation.about}
        </Link>

        <a
          href="https://x.com/liuwenlong"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-50"
        >
          Twitter/X
        </a>

        <a
          href="https://github.com/liuwenlonghub/320kbps"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-50"
        >
          GitHub
        </a>

        <LanguageSwitcher />
      </nav>
    </header>
  );
}