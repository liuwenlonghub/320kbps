import { quoteShellArgument } from "./utils";
import type { VideoToMp4Options } from "@/lib/ffmpeg/presets/video-to-mp4";

export function buildVideoToMp4Command(
  options: VideoToMp4Options,
): string {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(options.input),
    "-c:v",
    "libx264",
    "-crf",
    String(options.quality),
    "-preset",
    "medium",
    "-c:a",
    "aac",
    "-b:a",
    "128k",
    "-movflags",
    "+faststart",
    quoteShellArgument(options.output),
  ].join(" ");
}