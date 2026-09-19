import { replaceExtension } from "../command-builder/utils";
import type { MkvToMp4Options } from "../presets/mkv-to-mp4";

export function buildMkvToMp4OutputFilename(
  options: MkvToMp4Options,
): string {
  return replaceExtension(options.input, "mp4");
}