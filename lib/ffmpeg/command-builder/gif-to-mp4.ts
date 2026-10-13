import type { GifToMp4Options } from "@/lib/ffmpeg/presets/gif-to-mp4";
import { quoteShellArgument } from "./utils";

export function buildGifToMp4Command({
  input,
  output,
}: GifToMp4Options): string {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(input),
    "-an",
    "-vf",
    quoteShellArgument(
      "scale=trunc(iw/2)*2:trunc(ih/2)*2,format=yuv420p",
    ),
    "-c:v",
    "libx264",
    "-fps_mode",
    "vfr",
    "-movflags",
    "+faststart",
    quoteShellArgument(output),
  ].join(" ");
}