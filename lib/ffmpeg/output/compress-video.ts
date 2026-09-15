import { removeExtension } from "@/lib/ffmpeg/command-builder/utils";
import type { CompressVideoOptions } from "@/lib/ffmpeg/presets/compress-video";

export function buildCompressVideoOutputFilename(
  { input }: CompressVideoOptions,
): string {
  return `${removeExtension(input)}-compressed.mp4`;
}