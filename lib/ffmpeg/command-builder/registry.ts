import { buildCompressVideoCommand } from "./compress-video";
import type { CompressVideoOptions } from "@/lib/ffmpeg/presets/compress-video";
import { buildResizeVideoCommand } from "./resize-video";
import type { ResizeVideoOptions } from "@/lib/ffmpeg/presets/resize-video";
import { buildWebmToMp4Command } from "./webm-to-mp4";
import type { WebmToMp4Options } from "@/lib/ffmpeg/presets/webm-to-mp4";
import { buildVideoToMp3Command } from "./video-to-mp3";
import type { VideoToMp3Options } from "@/lib/ffmpeg/presets/video-to-mp3";
import { buildImageToWebpCommand } from "./image-to-webp";
import type { ImageToWebpOptions } from "@/lib/ffmpeg/presets/image-to-webp";
import { buildWavToMp3Command } from "./wav-to-mp3";
import type { WavToMp3Options } from "@/lib/ffmpeg/presets/wav-to-mp3";
import { buildFlacToMp3Command } from "./flac-to-mp3";
import type { FlacToMp3Options } from "@/lib/ffmpeg/presets/flac-to-mp3";
import { buildMp4ToWebmCommand } from "./mp4-to-webm";
import type { Mp4ToWebmOptions } from "@/lib/ffmpeg/presets/mp4-to-webm";
import { buildTrimVideoCommand } from "./trim-video";
import type { TrimVideoOptions } from "@/lib/ffmpeg/presets/trim-video";
import { buildVideoToImageCommand } from "./video-to-image";
import type { VideoToImageOptions } from "@/lib/ffmpeg/presets/video-to-image";

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
  
  "wav-to-mp3": (values) =>
    buildWavToMp3Command({
      input: String(values.input),
      bitrate: Number(values.bitrate),
      output: String(values.output),
    } satisfies WavToMp3Options),

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

  "image-to-webp": (values) =>
    buildImageToWebpCommand({
      input: String(values.input),
      quality: Number(values.quality),
      output: String(values.output),
    } satisfies ImageToWebpOptions),

  "flac-to-mp3": (values) =>
    buildFlacToMp3Command({
      input: String(values.input),
      bitrate: Number(values.bitrate),
      output: String(values.output),
    } satisfies FlacToMp3Options),

  "mp4-to-webm": (values) =>
    buildMp4ToWebmCommand({
      input: String(values.input),
      output: String(values.output),
    } satisfies Mp4ToWebmOptions),
    
  "trim-video": (values) =>
    buildTrimVideoCommand({
      input: String(values.input),
      start: String(values.start),
      duration: String(values.duration),
      output: String(values.output),
    } satisfies TrimVideoOptions),

  "video-to-image": (values) =>
    buildVideoToImageCommand({
      input: String(values.input),
      time: String(values.time),
      output: String(values.output),
    } satisfies VideoToImageOptions),
    
};