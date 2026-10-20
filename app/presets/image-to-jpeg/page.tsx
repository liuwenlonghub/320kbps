import type { Metadata } from "next";
import { PresetPage } from "@/components/preset/preset-page";
import { imageToJpegPreset } from "@/lib/ffmpeg/presets/image-to-jpeg";

export const metadata: Metadata = {
  title: imageToJpegPreset.title,
  description: imageToJpegPreset.description,
};

export default function ImageToJpegPage() {
  return <PresetPage preset={imageToJpegPreset} />;
}
