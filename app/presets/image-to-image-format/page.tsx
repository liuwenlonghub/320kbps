import type { Metadata } from "next";
import { PresetPage } from "@/components/preset/preset-page";
import { imageToImageFormatPreset } from "@/lib/ffmpeg/presets/image-to-image-format";

export const metadata: Metadata = {
  title: imageToImageFormatPreset.title,
  description: imageToImageFormatPreset.description,
};

export default function ImageToImageFormatPage() {
  return <PresetPage preset={imageToImageFormatPreset} />;
}
