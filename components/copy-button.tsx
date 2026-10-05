"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

type CopyButtonProps = {
  value: string;
  locale: Locale;
};

export function CopyButton({
  value,
  locale,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const t = getDictionary(locale);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
    >
      {copied
        ? t.presetPage.copied
        : t.presetPage.copyCommand}
    </button>
  );
}