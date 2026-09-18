import { replaceExtension } from "../command-builder/utils";
import type { TrimVideoOptions } from "../presets/trim-video";

export function buildTrimVideoOutputFilename(
  options: TrimVideoOptions,
): string {
  return replaceExtension(options.input, "mp4");
}