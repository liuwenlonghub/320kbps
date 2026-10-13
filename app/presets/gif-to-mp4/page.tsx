import { PresetPage } from "@/components/preset/preset-page";
import { gifToMp4Preset } from "@/lib/ffmpeg/presets/gif-to-mp4";

export const metadata = {
  title: gifToMp4Preset.title,
  description: gifToMp4Preset.description,
};

export default function GifToMp4Page() {
  return <PresetPage preset={gifToMp4Preset} />;
}