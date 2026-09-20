import { replaceExtension } from "../command-builder/utils";
import type { MovToMp4Options } from "../presets/mov-to-mp4";

export function buildMovToMp4OutputFilename(
  options: MovToMp4Options,
): string {
  return replaceExtension(options.input, "mp4");
}