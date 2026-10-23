import { quoteShellArgument } from "./utils";
import {
  getAudioFormatEncoder,
  type AudioToAudioFormatOptions,
} from "@/lib/ffmpeg/presets/audio-to-audio-format";

export function buildAudioToAudioFormatCommand({
  input,
  format,
  bitrate,
  output,
}: AudioToAudioFormatOptions): string {
  const usesBitrate = format !== "wav" && format !== "flac";

  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(input),
    "-vn",
    "-c:a",
    getAudioFormatEncoder(format),
    ...(usesBitrate ? ["-b:a", `${bitrate}k`] : []),
    quoteShellArgument(output),
  ].join(" ");
}
