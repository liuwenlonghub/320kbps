import { PresetPage } from "@/components/preset/preset-page";
import { imageToWebpPreset } from "@/lib/ffmpeg/presets/image-to-webp";

export default function ImageToWebpPage() {
  return <PresetPage preset={imageToWebpPreset} />;
}