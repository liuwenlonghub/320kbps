import type { Metadata } from "next";
import { PresetPage } from "@/components/preset/preset-page";
import { videoToMp3Preset } from "@/lib/ffmpeg/presets";

export const metadata: Metadata = {
  title: "Video to MP3",
  description:
    "Convert video files to MP3 audio with FFmpeg. Choose your bitrate and convert directly in your browser.",
};

export default function VideoToMp3Page() {
  return <PresetPage preset={videoToMp3Preset} />;
}