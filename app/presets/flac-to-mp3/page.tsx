import { flacToMp3Preset } from "@/lib/ffmpeg/presets/flac-to-mp3";
import { PresetPage } from "@/components/preset/preset-page";

export const metadata = {
  title: flacToMp3Preset.title,
  description: flacToMp3Preset.description,
};

export default function FlacToMp3Page() {
  return <PresetPage preset={flacToMp3Preset} />;
}