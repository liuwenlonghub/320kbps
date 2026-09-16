import type { Metadata } from "next";
import { PresetPage } from "@/components/preset/preset-page";
import { webmToMp4Preset } from "@/lib/ffmpeg/presets/webm-to-mp4";

export const metadata: Metadata = {
  title: "WebM to MP4",
  description:
    "Convert WebM videos to MP4 using FFmpeg. Process files directly in your browser or get the FFmpeg command.",
};

export default function WebmToMp4Page() {
  return <PresetPage preset={webmToMp4Preset} />;
}