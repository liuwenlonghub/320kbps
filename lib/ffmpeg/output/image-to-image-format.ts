import { replaceExtension } from "@/lib/ffmpeg/command-builder/utils";
import type { ImageToImageFormatOptions } from "@/lib/ffmpeg/presets/image-to-image-format";

export function buildImageToImageFormatOutputFilename({
  input,
  format,
}: ImageToImageFormatOptions): string {
  return replaceExtension(input, format === "jpeg" ? "jpg" : format);
}
