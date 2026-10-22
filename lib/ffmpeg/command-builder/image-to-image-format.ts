import { quoteShellArgument } from "./utils";
import {
  getImageFormatQuality,
  type ImageToImageFormatOptions,
} from "@/lib/ffmpeg/presets/image-to-image-format";

export function buildImageToImageFormatCommand({
  input,
  format,
  quality,
  output,
}: ImageToImageFormatOptions): string {
  const encoder =
    format === "jpeg"
      ? "mjpeg"
      : format === "png"
        ? "png"
        : "libwebp";
  const encoderQuality = getImageFormatQuality(format, quality);

  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(input),
    "-frames:v",
    1,
    "-c:v",
    encoder,
    ...(encoderQuality === undefined
      ? []
      : ["-q:v", encoderQuality]),
    quoteShellArgument(output),
  ].join(" ");
}
