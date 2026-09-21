import { replaceExtension } from "../command-builder/utils";
import type { VideoToMp4Options } from "../presets/video-to-mp4";

export function buildVideoToMp4OutputFilename(
  options: VideoToMp4Options,
): string {
  return replaceExtension(options.input, "mp4");
}