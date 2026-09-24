import { PresetCard } from "@/components/preset-card";
import { PresetCategory as PresetCategoryLabel } from "@/components/preset-category";
import type { Preset, PresetCategory } from "@/lib/ffmpeg/types/preset";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

type PresetGridProps = {
  presets: readonly Preset[];
  categories: PresetCategory[];
  locale?: Locale;
};

export function PresetGrid({
  presets,
  categories,
  locale = "en",
}: PresetGridProps) {
  const t = getDictionary(locale);
  return (
    <div className="space-y-12">
      {categories.map((category) => {
        const categoryPresets = presets.filter(
          (preset) => preset.category === category,
        );

        if (categoryPresets.length === 0) {
          return null;
        }

        return (
          <div key={category}>
            <PresetCategoryLabel category={category} />

            <div className="grid gap-4 sm:grid-cols-2">
              {categoryPresets.map((preset) => (
                <PresetCard
                  key={preset.id}
                  id={preset.id}
                  title={
                    preset.id === "video-to-mp4"
                      ? t.presets.videoToMp4.title
                      : preset.id === "mkv-to-mp4"
                        ? t.presets.mkvToMp4.title
                        : preset.id === "video-to-mp3"
                          ? t.presets.videoToMp3.title
                          : preset.id === "wav-to-mp3"
                            ? t.presets.wavToMp3.title
                            : preset.id === "flac-to-mp3"
                              ? t.presets.flacToMp3.title
                              : preset.title
                  }
                  description={
                    preset.id === "video-to-mp4"
                      ? t.presets.videoToMp4.description
                      : preset.id === "mkv-to-mp4"
                        ? t.presets.mkvToMp4.description
                        : preset.id === "video-to-mp3"
                          ? t.presets.videoToMp3.description
                          : preset.id === "wav-to-mp3"
                            ? t.presets.wavToMp3.description
                            : preset.id === "flac-to-mp3"
                              ? t.presets.flacToMp3.description
                              : preset.description
                  }
                  locale={locale}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}