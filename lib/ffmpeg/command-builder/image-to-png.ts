import { quoteShellArgument } from "./utils";
import type { ImageToPngOptions } from "@/lib/ffmpeg/presets/image-to-png";

export function buildImageToPngCommand({
  input,
  output,
}: ImageToPngOptions): string {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(input),
    "-frames:v",
    1,
    "-c:v",
    "png",
    quoteShellArgument(output),
  ].join(" ");
}
