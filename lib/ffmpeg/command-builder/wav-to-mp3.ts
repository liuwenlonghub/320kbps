import { quoteShellArgument } from "./utils";
import type { WavToMp3Options } from "@/lib/ffmpeg/presets/wav-to-mp3";

export function buildWavToMp3Command(
  options: WavToMp3Options,
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