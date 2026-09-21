import { quoteShellArgument } from "./utils";
import type { VideoToMp4Options } from "@/lib/ffmpeg/presets/video-to-mp4";

export function buildVideoToMp4Command(
  options: VideoToMp4Options,
): string {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(options.input),
    "-c",
    "copy",
    "-movflags",
    "+faststart",
    quoteShellArgument(options.output),
  ].join(" ");
}