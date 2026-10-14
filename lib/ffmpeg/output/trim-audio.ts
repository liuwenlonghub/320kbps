import { getDefaultOutputFilename } from "../command-builder/utils";
import type { TrimAudioOptions } from "../presets/trim-audio";

export function buildTrimAudioOutputFilename(
  options: TrimAudioOptions,
): string {
  const inputExtension = options.input
    .split(".")
    .pop()
    ?.toLowerCase();
  const extension =
    inputExtension && inputExtension !== options.input
      ? inputExtension
      : "mp3";

  return getDefaultOutputFilename(
    options.input,
    extension,
    "trimmed",
  );
}
