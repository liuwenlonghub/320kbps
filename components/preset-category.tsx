import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import type { PresetCategory as PresetCategoryType } from "@/lib/ffmpeg/types/preset";

type PresetCategoryProps = {
  category: PresetCategoryType;
  locale?: Locale;
};

export function PresetCategory({
  category,
  locale = "en",
}: PresetCategoryProps) {
  const t = getDictionary(locale);

  return (
    <h3 className="mb-4 text-sm font-medium text-zinc-500">
      {t.categories[category]}
    </h3>
  );
}