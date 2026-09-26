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
  return Object.keys(languages).flatMap((locale) =>
    presets.map((preset) => ({
      locale,
      presetId: preset.id,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: string;
    presetId: string;
  }>;
}) {
  const { locale, presetId } = await params;

  if (!(locale in languages)) {
    notFound();
  }

  const preset = presets.find(
    (item) => item.id === presetId,
  );

  if (!preset) {
    notFound();
  }

  const t = languages[locale as Locale];

  if (preset.id === "video-to-mp4") {
    return {
      title: t.presets.videoToMp4.title,
      description: t.presets.videoToMp4.description,
    };
  }

  if (preset.id === "mkv-to-mp4") {
    return {
      title: t.presets.mkvToMp4.title,
      description: t.presets.mkvToMp4.description,
    };
  }

  if (preset.id === "video-to-mp3") {
    return {
      title: t.presets.videoToMp3.title,
      description: t.presets.videoToMp3.description,
    };
  }

  if (preset.id === "flac-to-mp3") {
    return {
      title: t.presets.flacToMp3.title,
      description: t.presets.flacToMp3.description,
    };
  }

  if (preset.id === "wav-to-mp3") {
    return {
      title: t.presets.wavToMp3.title,
      description: t.presets.wavToMp3.description,
    };
  }

  if (preset.id === "resize-video") {
    return {
      title: t.presets.resizeVideo.title,
      description: t.presets.resizeVideo.description,
    };
  }

  return {
    title: preset.title,
    description: preset.description,
  };
}

export default async function LocalePresetPage({
  params,
}: {
  params: Promise<{
    locale: string;
    presetId: string;
  }>;
}) {
  const { locale, presetId } = await params;

  if (!(locale in languages)) {
    notFound();
  }

  const preset = presets.find(
    (item) => item.id === presetId,
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