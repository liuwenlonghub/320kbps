import {
  buildResizeVideoCommand,
  buildVideoToMp3Command,
} from "./index";

import type { ResizeVideoOptions } from "@/lib/ffmpeg/command-builder/resize-video";
import type { VideoToMp3Options } from "@/lib/ffmpeg/presets/video-to-mp3";

type CommandValues = Record<string, string | number>;

export const commandBuilders: Record<
  string,
  (values: CommandValues) => string
> = {
  "video-to-mp3": (values) =>
    buildVideoToMp3Command({
      input: String(values.input),
      bitrate: Number(values.bitrate),
      output: String(values.output),
    } satisfies VideoToMp3Options),

  "resize-video": (values) =>
    buildResizeVideoCommand({
      input: String(values.input),
      width: Number(values.width),
      output: String(values.output),
    } satisfies ResizeVideoOptions),
};