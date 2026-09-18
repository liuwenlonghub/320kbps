import { videoToImagePreset } from "@/lib/ffmpeg/presets/video-to-image";
import { PresetPage } from "@/components/preset/preset-page";

export const metadata = {
  title: videoToImagePreset.title,
  description: videoToImagePreset.description,
};

export default function VideoToImagePage() {
  return <PresetPage preset={videoToImagePreset} />;
}