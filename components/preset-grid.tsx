import { PresetCard } from "@/components/preset-card";
import { PresetCategory as PresetCategoryLabel } from "@/components/preset-category";
import type { Preset, PresetCategory } from "@/lib/ffmpeg/types/preset";

type PresetGridProps = {
  presets: readonly Preset[];
  categories: readonly PresetCategory[];
};

export function PresetGrid({
  presets,
  categories,
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
            <PresetCategoryLabel category={category} />

            <div className="grid gap-4 sm:grid-cols-2">
              {categoryPresets.map((preset) => (
                <PresetCard
                  key={preset.id}
                  id={preset.id}
                  title={preset.title}
                  description={preset.description}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}