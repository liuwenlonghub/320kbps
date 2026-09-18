import { replaceExtension } from "../command-builder/utils";
import type { VideoToImageOptions } from "../presets/video-to-image";

export function buildVideoToImageOutputFilename(
  options: VideoToImageOptions,
): string {
  return replaceExtension(options.input, "jpg");
}