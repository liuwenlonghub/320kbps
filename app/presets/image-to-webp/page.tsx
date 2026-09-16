import type { Metadata } from "next";
import { PresetPage } from "@/components/preset/preset-page";
import { imageToWebpPreset } from "@/lib/ffmpeg/presets/image-to-webp";

export const metadata: Metadata = {
  title: "Image to WebP",
  description:
    "Convert images to WebP using FFmpeg with adjustable quality. Process files directly in your browser.",
};

export default function ImageToWebpPage() {
  return <PresetPage preset={imageToWebpPreset} />;
}