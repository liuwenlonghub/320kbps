import type { PresetCategory } from "@/lib/ffmpeg/types/preset";

const categoryLabels: Record<
  PresetCategory,
  string
> = {
  audio: "Audio",
  video: "Video",
  image: "Image",
};

type PresetCategoryProps = {
  category: PresetCategory;
};

export function PresetCategory({
  category,
}: PresetCategoryProps) {
  return (
    <h3 className="mb-4 text-sm font-medium text-zinc-500">
      {categoryLabels[category]}
    </h3>
  );
}