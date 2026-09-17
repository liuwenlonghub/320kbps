import { mp4ToWebmPreset } from "@/lib/ffmpeg/presets/mp4-to-webm";
import { PresetPage } from "@/components/preset/preset-page";

export const metadata = {
  title: mp4ToWebmPreset.title,
  description: mp4ToWebmPreset.description,
};

export default function Mp4ToWebmPage() {
  return <PresetPage preset={mp4ToWebmPreset} />;
}