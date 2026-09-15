import { quoteShellArgument } from "./utils";

export type ResizeVideoOptions = {
  input: string;
  width: number;
  output: string;
};

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