import { replaceExtension } from "@/lib/ffmpeg/command-builder/utils";
import type { ImageToPngOptions } from "@/lib/ffmpeg/presets/image-to-png";

export function buildImageToPngOutputFilename(
  { input }: ImageToPngOptions,
): string {
  return replaceExtension(input, "png");
}
