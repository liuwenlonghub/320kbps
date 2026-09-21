import { PresetPage } from "@/components/preset/preset-page";
import { videoToMp4Preset } from "@/lib/ffmpeg/presets/video-to-mp4";

export const metadata = {
  title: videoToMp4Preset.title,
  description: videoToMp4Preset.description,
};

export default function VideoToMp4Page() {
  return <PresetPage preset={videoToMp4Preset} />;
}