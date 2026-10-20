import { replaceExtension } from "@/lib/ffmpeg/command-builder/utils";
import type { ImageToJpegOptions } from "@/lib/ffmpeg/presets/image-to-jpeg";

export function buildImageToJpegOutputFilename(
  { input }: ImageToJpegOptions,
): string {
  return replaceExtension(input, "jpg");
}
