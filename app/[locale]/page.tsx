import { notFound } from "next/navigation";
import Link from "next/link";

import { presets } from "@/lib/ffmpeg/presets";
import type { PresetCategory } from "@/lib/ffmpeg/types/preset";
import { en } from "@/lib/i18n/en";
import { zhCN } from "@/lib/i18n/zh-cn";
import { ja } from "@/lib/i18n/ja";
import { PresetGrid } from "@/components/preset-grid";
import type { Metadata } from "next";

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
    return {};
  }

  const t = languages[locale as Locale];

  return {
    title: t.home.title,
    description: t.home.description,
  };
}

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(locale in languages)) {
    notFound();
  }

  const t = languages[locale as Locale];

  const categories: PresetCategory[] = [
    "audio",
    "video",
    "image",
  ];

  return (
    <div className="mx-auto max-w-[1100px] bg-white px-[6vw] text-zinc-950">
      {/* Hero */}
      <section className="flex min-h-[680px] flex-col justify-center py-24">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium tracking-wide text-zinc-500">
            {t.site.tagline}
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            {t.home.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500 sm:text-xl">
            {t.home.description}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
            <span aria-hidden="true">✓</span>
            <span>{t.privacy.description}</span>
          </div>

          <div className="mt-10">
            <Link
              href={`/${locale}#presets`}
              className="inline-flex h-11 items-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              {t.home.explorePresets}
            </Link>
          </div>
        </div>
      </section>

      {/* Presets */}
      <section id="presets" className="pb-32">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            {t.home.browseAll}
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            {t.home.presetsDescription}
          </p>
        </div>

        <PresetGrid
          presets={presets}
          categories={categories}
          locale={locale as Locale}
        />
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-zinc-200 py-16"
      >
        <h2 className="text-2xl font-semibold tracking-tight">
          {t.navigation.about}
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-500">
          {t.about.description}
        </p>
      </section>
    </div>
  );
}