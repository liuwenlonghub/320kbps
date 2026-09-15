import { removeExtension } from "@/lib/ffmpeg/command-builder/utils";
import type { ResizeVideoOptions } from "@/lib/ffmpeg/presets/resize-video";

export function buildResizeVideoOutputFilename(
  { input, width }: ResizeVideoOptions,
): string {
  return `${removeExtension(input)}-${width}.mp4`;
}