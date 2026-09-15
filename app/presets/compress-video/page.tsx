import { PresetPage } from "@/components/preset/preset-page";
import { compressVideoPreset } from "@/lib/ffmpeg/presets/compress-video";

export default function CompressVideoPage() {
  return <PresetPage preset={compressVideoPreset} />;
}