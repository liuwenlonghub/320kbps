import type { Metadata } from "next";
import { PresetPage } from "@/components/preset/preset-page";
import { compressImagePreset } from "@/lib/ffmpeg/presets/compress-image";

export const metadata: Metadata = {
  title: compressImagePreset.title,
  description: compressImagePreset.description,
};

export default function CompressImagePage() {
  return <PresetPage preset={compressImagePreset} />;
}
