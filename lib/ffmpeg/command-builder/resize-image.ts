import { quoteShellArgument } from "./utils";
import type { ResizeImageOptions } from "@/lib/ffmpeg/presets/resize-image";

export function buildResizeImageCommand({
  input,
  width,
  output,
}: ResizeImageOptions): string {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(input),
    "-vf",
    `scale=${width}:-1`,
    quoteShellArgument(output),
  ].join(" ");
}
