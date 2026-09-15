import { quoteShellArgument } from "./utils";
import type { ImageToWebpOptions } from "@/lib/ffmpeg/presets/image-to-webp";

export function buildImageToWebpCommand({
  input,
  quality,
  output,
}: ImageToWebpOptions): string {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(input),
    "-c:v",
    "libwebp",
    "-q:v",
    quality,
    quoteShellArgument(output),
  ].join(" ");
}