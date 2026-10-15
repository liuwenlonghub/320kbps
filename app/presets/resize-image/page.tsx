import { PresetPage } from "@/components/preset/preset-page";
import { resizeImagePreset } from "@/lib/ffmpeg/presets/resize-image";

export const metadata = {
  title: resizeImagePreset.title,
  description: resizeImagePreset.description,
};

export default function ResizeImagePage() {
  return <PresetPage preset={resizeImagePreset} />;
}
