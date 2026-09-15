import { buildCompressVideoOutputFilename } from "./compress-video";
import type { CompressVideoOptions } from "@/lib/ffmpeg/presets/compress-video";

import { buildResizeVideoOutputFilename } from "./resize-video";
import type { ResizeVideoOptions } from "@/lib/ffmpeg/presets/resize-video";

import { buildVideoToMp3OutputFilename } from "./video-to-mp3";
import type { VideoToMp3Options } from "@/lib/ffmpeg/presets/video-to-mp3";

type OutputValues = Record<string, string | number>;

type OutputBuilder = (
  values: OutputValues,
) => string;

export const outputBuilders: Record<
  string,
  OutputBuilder
> = {
  "video-to-mp3": (values) =>
    buildVideoToMp3OutputFilename({
      input: String(values.input),
      bitrate: Number(values.bitrate),
      output: String(values.output),
    } satisfies VideoToMp3Options),

  "resize-video": (values) =>
    buildResizeVideoOutputFilename({
      input: String(values.input),
      width: Number(values.width),
      output: String(values.output),
    } satisfies ResizeVideoOptions),

  "compress-video": (values) =>
    buildCompressVideoOutputFilename({
      input: String(values.input),
      quality:
        String(
          values.quality,
        ) as CompressVideoOptions["quality"],
      output: String(values.output),
    } satisfies CompressVideoOptions),
};