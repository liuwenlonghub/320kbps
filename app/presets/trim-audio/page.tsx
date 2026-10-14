import { PresetPage } from "@/components/preset/preset-page";
import { trimAudioPreset } from "@/lib/ffmpeg/presets/trim-audio";

export const metadata = {
  title: trimAudioPreset.title,
  description: trimAudioPreset.description,
};

export default function TrimAudioPage() {
  return <PresetPage preset={trimAudioPreset} />;
}
