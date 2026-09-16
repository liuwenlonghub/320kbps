import { replaceExtension } from "../command-builder/utils";
import type { FlacToMp3Options } from "../presets/flac-to-mp3";

export function buildFlacToMp3OutputFilename(
  options: FlacToMp3Options,
): string {
  return replaceExtension(options.input, "mp3");
}