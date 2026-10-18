import type { AudioToMp3Options } from "@/lib/ffmpeg/presets/audio-to-mp3";
import { quoteShellArgument } from "./utils";

export function buildAudioToMp3Command({
  input,
  bitrate,
  output,
}: AudioToMp3Options): string {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(input),
    "-vn",
    "-codec:a",
    "libmp3lame",
    "-b:a",
    `${bitrate}k`,
    quoteShellArgument(output),
  ].join(" ");
}
