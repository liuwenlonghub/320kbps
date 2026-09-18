import { quoteShellArgument } from "./utils";
import type { TrimVideoOptions } from "@/lib/ffmpeg/presets/trim-video";

export function buildTrimVideoCommand(
  options: TrimVideoOptions,
): string {
  return [
    "ffmpeg",
    "-ss",
    quoteShellArgument(options.start),
    "-i",
    quoteShellArgument(options.input),
    "-t",
    quoteShellArgument(options.duration),
    "-c",
    "copy",
    quoteShellArgument(options.output),
  ].join(" ");
}