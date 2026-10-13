import { replaceExtension } from "../command-builder/utils";
import type { GifToMp4Options } from "../presets/gif-to-mp4";

export function buildGifToMp4OutputFilename(
  options: GifToMp4Options,
): string {
  return replaceExtension(options.input, "mp4");
}