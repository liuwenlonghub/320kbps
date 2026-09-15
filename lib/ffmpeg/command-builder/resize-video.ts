import { quoteShellArgument } from "./utils";
import type { ResizeVideoOptions } from "@/lib/ffmpeg/presets/resize-video";

export function buildResizeVideoCommand({
  input,
  width,
  output,
}: ResizeVideoOptions): string {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(input),
    "-vf",
    `scale=${width}:-2`,
    quoteShellArgument(output),
  ].join(" ");
}