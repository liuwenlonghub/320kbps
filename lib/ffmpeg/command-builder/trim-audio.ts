import { quoteShellArgument } from "./utils";
import type { TrimAudioOptions } from "@/lib/ffmpeg/presets/trim-audio";

export function buildTrimAudioCommand(
  options: TrimAudioOptions,
): string {
  return [
    "ffmpeg",
    "-ss",
    quoteShellArgument(options.start),
    "-i",
    quoteShellArgument(options.input),
    "-t",
    quoteShellArgument(options.duration),
    "-vn",
    "-c:a",
    "copy",
    quoteShellArgument(options.output),
  ].join(" ");
}
