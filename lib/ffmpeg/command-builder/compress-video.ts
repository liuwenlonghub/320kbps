import { quoteShellArgument } from "./utils";
import type { CompressVideoOptions } from "@/lib/ffmpeg/presets/compress-video";

const qualitySettings = {
  high: {
    crf: 20,
    audioBitrate: 128,
  },
  balanced: {
    crf: 23,
    audioBitrate: 128,
  },
  small: {
    crf: 28,
    audioBitrate: 96,
  },
} as const;

export function buildCompressVideoCommand({
  input,
  quality,
  output,
}: CompressVideoOptions): string {
  const settings = qualitySettings[quality];

  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(input),
    "-c:v",
    "libx264",
    "-crf",
    settings.crf,
    "-preset",
    "medium",
    "-c:a",
    "aac",
    "-b:a",
    `${settings.audioBitrate}k`,
    quoteShellArgument(output),
  ].join(" ");
}