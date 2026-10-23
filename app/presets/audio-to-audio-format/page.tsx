import type { Metadata } from "next";
import { PresetPage } from "@/components/preset/preset-page";
import { audioToAudioFormatPreset } from "@/lib/ffmpeg/presets/audio-to-audio-format";

export const metadata: Metadata = {
  title: audioToAudioFormatPreset.title,
  description: audioToAudioFormatPreset.description,
};

export default function AudioToAudioFormatPage() {
  return <PresetPage preset={audioToAudioFormatPreset} />;
}
