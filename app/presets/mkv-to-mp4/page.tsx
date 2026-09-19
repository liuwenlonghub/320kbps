import { mkvToMp4Preset } from "@/lib/ffmpeg/presets/mkv-to-mp4";
import { PresetPage } from "@/components/preset/preset-page";

export const metadata = {
  title: mkvToMp4Preset.title,
  description: mkvToMp4Preset.description,
};

export default function MkvToMp4Page() {
  return <PresetPage preset={mkvToMp4Preset} />;
}