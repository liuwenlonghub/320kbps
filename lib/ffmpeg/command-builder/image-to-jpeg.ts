import { quoteShellArgument } from "./utils";
import type { ImageToJpegOptions } from "@/lib/ffmpeg/presets/image-to-jpeg";

export function buildImageToJpegCommand({
  input,
  quality,
  output,
}: ImageToJpegOptions): string {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(input),
    "-frames:v",
    1,
    "-c:v",
    "mjpeg",
    "-q:v",
    quality,
    quoteShellArgument(output),
  ].join(" ");
}
