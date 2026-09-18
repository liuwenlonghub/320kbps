import { trimVideoPreset } from "@/lib/ffmpeg/presets/trim-video";
import { PresetPage } from "@/components/preset/preset-page";

export const metadata = {
  title: trimVideoPreset.title,
  description: trimVideoPreset.description,
};

export default function TrimVideoPage() {
  return <PresetPage preset={trimVideoPreset} />;
}