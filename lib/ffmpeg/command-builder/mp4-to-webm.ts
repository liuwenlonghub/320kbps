import { quoteShellArgument } from "./utils";
import type { Mp4ToWebmOptions } from "@/lib/ffmpeg/presets/mp4-to-webm";

export function buildMp4ToWebmCommand(
  options: Mp4ToWebmOptions,
): string {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(options.input),
    "-c:v",
    "libvpx",
    "-c:a",
    "libvorbis",
    quoteShellArgument(options.output),
  ].join(" ");
}