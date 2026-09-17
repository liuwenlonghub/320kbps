import { buildCompressVideoOutputFilename } from "./compress-video";
import type { CompressVideoOptions } from "@/lib/ffmpeg/presets/compress-video";
import { buildResizeVideoOutputFilename } from "./resize-video";
import type { ResizeVideoOptions } from "@/lib/ffmpeg/presets/resize-video";
import { buildVideoToMp3OutputFilename } from "./video-to-mp3";
import type { VideoToMp3Options } from "@/lib/ffmpeg/presets/video-to-mp3";
import { buildWebmToMp4OutputFilename } from "./webm-to-mp4";
import type { WebmToMp4Options } from "@/lib/ffmpeg/presets/webm-to-mp4";
import { buildImageToWebpOutputFilename } from "./image-to-webp";
import type { ImageToWebpOptions } from "@/lib/ffmpeg/presets/image-to-webp";
import { buildWavToMp3OutputFilename } from "./wav-to-mp3";
import type { WavToMp3Options } from "@/lib/ffmpeg/presets/wav-to-mp3";
import { buildFlacToMp3OutputFilename } from "./flac-to-mp3";
import type { FlacToMp3Options } from "../presets/flac-to-mp3";
import { buildMp4ToWebmOutputFilename } from "./mp4-to-webm";
import type { Mp4ToWebmOptions } from "../presets/mp4-to-webm";

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

  "webm-to-mp4": (values) =>
    buildWebmToMp4OutputFilename({
      input: String(values.input),
      output: String(values.output),
    } satisfies WebmToMp4Options),
    
  "image-to-webp": (values) =>
    buildImageToWebpOutputFilename({
      input: String(values.input),
      quality: Number(values.quality),
      output: String(values.output),
    } satisfies ImageToWebpOptions),

  "wav-to-mp3": (values) =>
    buildWavToMp3OutputFilename({
      input: String(values.input),
      bitrate: Number(values.bitrate),
      output: String(values.output),
    } satisfies WavToMp3Options),

  "flac-to-mp3": (values) =>
    buildFlacToMp3OutputFilename({
      input: String(values.input),
      bitrate: Number(values.bitrate),
      output: String(values.output),
    } satisfies FlacToMp3Options),
    
  "mp4-to-webm": (values) =>
    buildMp4ToWebmOutputFilename({
      input: String(values.input),
      output: String(values.output),
    } satisfies Mp4ToWebmOptions),
    
};