import {
  buildCompressVideoCommand,
} from "./compress-video";
import type {
  CompressVideoOptions,
} from "@/lib/ffmpeg/presets/compress-video";

import {
  buildResizeVideoCommand,
} from "./resize-video";
import type {
  ResizeVideoOptions,
} from "@/lib/ffmpeg/presets/resize-video";

import {
  buildWebmToMp4Command,
} from "./webm-to-mp4";
import type {
  WebmToMp4Options,
} from "@/lib/ffmpeg/presets/webm-to-mp4";

import { buildVideoToMp3Command } from "./index";
import type {
  VideoToMp3Options,
} from "@/lib/ffmpeg/presets/video-to-mp3";

type CommandValues =
  Record<string, string | number>;

type CommandBuilder = (
  values: CommandValues,
) => string;

export const commandBuilders: Record<
  string,
  CommandBuilder
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

  "compress-video": (values) =>
    buildCompressVideoCommand({
      input: String(values.input),
      quality:
        String(
          values.quality,
        ) as CompressVideoOptions["quality"],
      output: String(values.output),
    } satisfies CompressVideoOptions),

  "webm-to-mp4": (values) =>
    buildWebmToMp4Command({
      input: String(values.input),
      output: String(values.output),
    } satisfies WebmToMp4Options),
};