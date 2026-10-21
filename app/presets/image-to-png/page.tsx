import type { Metadata } from "next";
import { PresetPage } from "@/components/preset/preset-page";
import { imageToPngPreset } from "@/lib/ffmpeg/presets/image-to-png";

export const metadata: Metadata = {
  title: imageToPngPreset.title,
  description: imageToPngPreset.description,
};

export default function ImageToPngPage() {
  return <PresetPage preset={imageToPngPreset} />;
}
