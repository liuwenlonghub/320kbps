import type { VideoToMp3Options } from "@/lib/ffmpeg/presets/video-to-mp3";
import { quoteShellArgument } from "./utils";

export function buildVideoToMp3Command({
  input,
  bitrate,
  output,
}: VideoToMp3Options): string {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(input),
    "-codec:a",
    "libmp3lame",
    "-b:a",
    `${bitrate}k`,
    quoteShellArgument(output),
  ].join(" ");
}