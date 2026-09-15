import { PresetPage } from "@/components/preset/preset-page";
import { videoToMp3Preset } from "@/lib/ffmpeg/presets/video-to-mp3";

export default function VideoToMp3Page() {
  return <PresetPage preset={videoToMp3Preset} />;
}