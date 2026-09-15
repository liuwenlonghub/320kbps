import { quoteShellArgument } from "./utils";
import type { WebmToMp4Options } from "@/lib/ffmpeg/presets/webm-to-mp4";

export function buildWebmToMp4Command({
  input,
  output,
}: WebmToMp4Options): string {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(input),
    "-c:v",
    "libx264",
    "-c:a",
    "aac",
    "-movflags",
    "+faststart",
    quoteShellArgument(output),
  ].join(" ");
}