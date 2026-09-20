import { movToMp4Preset } from "@/lib/ffmpeg/presets/mov-to-mp4";
import { PresetPage } from "@/components/preset/preset-page";

export const metadata = {
  title: movToMp4Preset.title,
  description: movToMp4Preset.description,
};

export default function MovToMp4Page() {
  return <PresetPage preset={movToMp4Preset} />;
}