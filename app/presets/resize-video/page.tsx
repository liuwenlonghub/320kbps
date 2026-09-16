import type { Metadata } from "next";
import { PresetPage } from "@/components/preset/preset-page";
import { resizeVideoPreset } from "@/lib/ffmpeg/presets/resize-video";

export const metadata: Metadata = {
  title: "Resize Video",
  description:
    "Resize video files to a chosen resolution using FFmpeg. Convert directly in your browser or get the FFmpeg command.",
};

export default function ResizeVideoPage() {
  return <PresetPage preset={resizeVideoPreset} />;
}