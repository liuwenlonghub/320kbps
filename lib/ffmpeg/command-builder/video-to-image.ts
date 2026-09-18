import { quoteShellArgument } from "./utils";
import type { VideoToImageOptions } from "@/lib/ffmpeg/presets/video-to-image";

export function buildVideoToImageCommand(
  options: VideoToImageOptions,
): string {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(options.input),
    "-ss",
    quoteShellArgument(options.time),
    "-frames:v",
    "1",
    quoteShellArgument(options.output),
  ].join(" ");
}