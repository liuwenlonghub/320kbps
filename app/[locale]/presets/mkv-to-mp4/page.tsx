import { notFound } from "next/navigation";

import { en } from "@/lib/i18n/en";
import { zhCN } from "@/lib/i18n/zh-cn";
import { ja } from "@/lib/i18n/ja";

import { PresetPage } from "@/components/preset/preset-page";
import { presets } from "@/lib/ffmpeg/presets";

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
}) {
  const { locale } = await params;

  if (!(locale in languages)) {
    notFound();
  }

  const t = languages[locale as Locale];

  return {
    title: t.presets.mkvToMp4.title,
    description: t.presets.mkvToMp4.description,
  };
}

export default async function LocaleMkvToMp4Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(locale in languages)) {
    notFound();
  }

  const preset = presets.find(
    (item) => item.id === "mkv-to-mp4",
  );

  if (!preset) {
    notFound();
  }

  return (
    <PresetPage
      preset={preset}
      locale={locale as Locale}
    />
  );
}