import { PresetPage } from "@/components/preset/preset-page";
import { audioToMp3Preset } from "@/lib/ffmpeg/presets/audio-to-mp3";

export const metadata = {
  title: audioToMp3Preset.title,
  description: audioToMp3Preset.description,
};

export default function AudioToMp3Page() {
  return <PresetPage preset={audioToMp3Preset} />;
}
