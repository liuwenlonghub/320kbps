import { quoteShellArgument } from "./utils";
import type { FlacToMp3Options } from "@/lib/ffmpeg/presets/flac-to-mp3";

export function buildFlacToMp3Command(
  options: FlacToMp3Options,
): string {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(options.input),
    "-codec:a",
    "libmp3lame",
    "-b:a",
    `${options.bitrate}k`,
    quoteShellArgument(options.output),
  ].join(" ");
}