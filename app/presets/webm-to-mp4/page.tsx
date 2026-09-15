import { PresetPage } from "@/components/preset/preset-page";
import { webmToMp4Preset } from "@/lib/ffmpeg/presets/webm-to-mp4";

export default function WebmToMp4Page() {
  return <PresetPage preset={webmToMp4Preset} />;
}