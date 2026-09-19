import { replaceExtension } from "../command-builder/utils";
import type { VideoToGifOptions } from "../presets/video-to-gif";

export function buildVideoToGifOutputFilename(
  options: VideoToGifOptions,
): string {
  return replaceExtension(options.input, "gif");
}