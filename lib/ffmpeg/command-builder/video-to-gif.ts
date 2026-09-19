import { quoteShellArgument } from "./utils";
import type { VideoToGifOptions } from "@/lib/ffmpeg/presets/video-to-gif";

export function buildVideoToGifCommand(
  options: VideoToGifOptions,
): string {
  return [
    "ffmpeg",
    "-ss",
    quoteShellArgument(options.start),
    "-i",
    quoteShellArgument(options.input),
    "-t",
    quoteShellArgument(options.duration),
    "-vf",
    quoteShellArgument(
      `fps=${options.fps},scale=${options.width}:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=256[p];[s1][p]paletteuse`,
    ),
    "-f",
    "gif",
    quoteShellArgument(options.output),
  ].join(" ");
}