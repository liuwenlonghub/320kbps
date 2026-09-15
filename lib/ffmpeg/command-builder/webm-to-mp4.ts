import { quoteShellArgument } from "./utils";

export type WebmToMp4Options = {
  input: string;
  output: string;
};

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