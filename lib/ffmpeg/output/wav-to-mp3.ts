import { replaceExtension } from "../command-builder/utils";
import type { WavToMp3Options } from "../presets/wav-to-mp3";

export function buildWavToMp3OutputFilename(
  options: WavToMp3Options,
): string {
  return replaceExtension(options.input, "mp3");
}