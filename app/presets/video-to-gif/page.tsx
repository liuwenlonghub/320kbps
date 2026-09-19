import { videoToGifPreset } from "@/lib/ffmpeg/presets/video-to-gif";
import { PresetPage } from "@/components/preset/preset-page";

export const metadata = {
  title: videoToGifPreset.title,
  description: videoToGifPreset.description,
};

export default function VideoToGifPage() {
  return <PresetPage preset={videoToGifPreset} />;
}