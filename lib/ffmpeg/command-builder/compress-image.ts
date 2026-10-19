import { quoteShellArgument } from "./utils";
import type { CompressImageOptions } from "@/lib/ffmpeg/presets/compress-image";

export function buildCompressImageCommand({
  input,
  quality,
  compressionLevel,
  output,
}: CompressImageOptions): string {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(input),
    "-c:v",
    "libwebp",
    "-q:v",
    quality,
    "-compression_level",
    compressionLevel,
    quoteShellArgument(output),
  ].join(" ");
}
