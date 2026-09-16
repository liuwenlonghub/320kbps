import type { Metadata } from "next";
import { PresetPage } from "@/components/preset/preset-page";
import { compressVideoPreset } from "@/lib/ffmpeg/presets/compress-video";

export const metadata: Metadata = {
  title: "Compress Video",
  description:
    "Compress video files with FFmpeg using simple quality presets. Convert directly in your browser or get the FFmpeg command.",
};

export default function CompressVideoPage() {
  return <PresetPage preset={compressVideoPreset} />;
}