import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { en } from "@/lib/i18n/en";
import { zhCN } from "@/lib/i18n/zh-cn";
import { ja } from "@/lib/i18n/ja";

const languages = {
  en,
  "zh-cn": zhCN,
  ja,
} as const;

type Locale = keyof typeof languages;

export function generateStaticParams() {
  return Object.keys(languages).map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!(locale in languages)) {
    notFound();
  }

  const t = languages[locale as Locale];

  return {
    title: {
      default: `${t.site.name} — ${t.site.tagline}`,
      template: `%s — ${t.site.name}`,
    },
    description: t.site.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(locale in languages)) {
    notFound();
  }

  return children;
}