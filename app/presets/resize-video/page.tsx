import { PresetPage } from "@/components/preset/preset-page";
import { resizeVideoPreset } from "@/lib/ffmpeg/presets/resize-video";

export default function ResizeVideoPage() {
  return <PresetPage preset={resizeVideoPreset} />;
}