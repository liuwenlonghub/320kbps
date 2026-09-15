import { replaceExtension } from "@/lib/ffmpeg/command-builder/utils";
import type { ImageToWebpOptions } from "@/lib/ffmpeg/presets/image-to-webp";

export function buildImageToWebpOutputFilename(
  { input }: ImageToWebpOptions,
): string {
  return replaceExtension(input, "webp");
}