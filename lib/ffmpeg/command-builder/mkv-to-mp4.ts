import { quoteShellArgument } from "./utils";
import type { MkvToMp4Options } from "@/lib/ffmpeg/presets/mkv-to-mp4";

export function buildMkvToMp4Command(
  options: MkvToMp4Options,
): string {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(options.input),
    "-c",
    "copy",
    "-movflags",
    "+faststart",
    quoteShellArgument(options.output),
  ].join(" ");
}