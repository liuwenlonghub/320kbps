import { notFound } from "next/navigation";

import { PresetPage } from "@/components/preset/preset-page";
import { presets } from "@/lib/ffmpeg/presets";
import { getPresetCopy, languages, type Locale } from "@/lib/i18n";

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

  return getPresetCopy(preset, locale as Locale);
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