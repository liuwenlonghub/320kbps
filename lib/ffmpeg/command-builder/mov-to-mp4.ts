import { quoteShellArgument } from "./utils";
import type { MovToMp4Options } from "@/lib/ffmpeg/presets/mov-to-mp4";

export function buildMovToMp4Command(
  options: MovToMp4Options,
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