import { replaceExtension } from "@/lib/ffmpeg/command-builder/utils";
import type { CompressImageOptions } from "@/lib/ffmpeg/presets/compress-image";

export function buildCompressImageOutputFilename(
  { input }: CompressImageOptions,
): string {
  return replaceExtension(input, "webp");
}
