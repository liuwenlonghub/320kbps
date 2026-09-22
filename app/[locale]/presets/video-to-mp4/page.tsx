import { notFound } from "next/navigation";

import { en } from "@/lib/i18n/en";
import { zhCN } from "@/lib/i18n/zh-cn";
import { ja } from "@/lib/i18n/ja";

import { PresetPage } from "@/components/preset/preset-page";
import { presets } from "@/lib/ffmpeg/presets";
import type { Metadata } from "next";

const languages = {
  en,
  "zh-cn": zhCN,
  ja,
} as const;

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

  const t = languages[locale as "en" | "zh-cn" | "ja"];

  return {
    title: t.presets.videoToMp4.title,
    description: t.presets.videoToMp4.description,
  };
}

export default async function LocaleVideoToMp4Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(locale in languages)) {
    notFound();
  }

  const preset = presets.find(
    (item) => item.id === "video-to-mp4",
  );

  if (!preset) {
    notFound();
  }

  return (
    <PresetPage
      preset={preset}
      locale={locale as "en" | "zh-cn" | "ja"}
    />
  );
}