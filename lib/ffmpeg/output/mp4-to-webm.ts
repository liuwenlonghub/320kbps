import { replaceExtension } from "../command-builder/utils";
import type { Mp4ToWebmOptions } from "../presets/mp4-to-webm";

export function buildMp4ToWebmOutputFilename(
  options: Mp4ToWebmOptions,
): string {
  return replaceExtension(options.input, "webm");
}