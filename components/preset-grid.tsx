import { PresetCard } from "@/components/preset-card";
import { PresetCategory as PresetCategoryLabel } from "@/components/preset-category";
import type { Preset, PresetCategory } from "@/lib/ffmpeg/types/preset";
import { getPresetCopy, type Locale } from "@/lib/i18n";

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
            <PresetCategoryLabel
              category={category}
              locale={locale}
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoryPresets.map((preset) => {
                const copy = getPresetCopy(preset, locale);

                return (
                  <PresetCard
                    key={preset.id}
                    id={preset.id}
                    title={copy.title}
                    description={copy.description}
                    locale={locale}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}