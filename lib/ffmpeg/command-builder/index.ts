import { quoteShellArgument } from "./utils";

import type { VideoToMp3Options } from "@/lib/ffmpeg/presets/video-to-mp3";

export type CommandBuilder<TOptions> = (
  options: TOptions,
) => string;

export const buildVideoToMp3Command: CommandBuilder<
  VideoToMp3Options
> = ({ input, bitrate, output }) => {
  return [
    "ffmpeg",
    "-i",
    quoteShellArgument(input),
    "-codec:a",
    "libmp3lame",
    "-b:a",
    `${bitrate}k`,
    quoteShellArgument(output),
  ].join(" ");
};