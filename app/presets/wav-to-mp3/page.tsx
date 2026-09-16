import { PresetPage } from "@/components/preset/preset-page";
import { wavToMp3Preset } from "@/lib/ffmpeg/presets/wav-to-mp3";

export const metadata = {
  title: "WAV → MP3",
  description:
    "Convert WAV audio files to compressed MP3 files.",
};

export default function WavToMp3Page() {
  return (
    <PresetPage preset={wavToMp3Preset} />
  );
}