import { quoteShellArgument } from "./utils";

export type CommandBuilder<TOptions> = (
  options: TOptions,
) => string;

export type VideoToMp3Options = {
  input: string;
  bitrate: number;
  output: string;
};

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