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
import { buildVideoToGifCommand } from "./video-to-gif";
import type { VideoToGifOptions } from "@/lib/ffmpeg/presets/video-to-gif";
import { buildMkvToMp4Command } from "./mkv-to-mp4";
import type { MkvToMp4Options } from "@/lib/ffmpeg/presets/mkv-to-mp4";
import { buildMovToMp4Command } from "./mov-to-mp4";
import type { MovToMp4Options } from "@/lib/ffmpeg/presets/mov-to-mp4";
import { buildVideoToMp4Command } from "./video-to-mp4";
import type { VideoToMp4Options } from "@/lib/ffmpeg/presets/video-to-mp4";
import { buildGifToMp4Command } from "./gif-to-mp4";
import type { GifToMp4Options } from "@/lib/ffmpeg/presets/gif-to-mp4";
import { buildTrimAudioCommand } from "./trim-audio";
import type { TrimAudioOptions } from "@/lib/ffmpeg/presets/trim-audio";
import { buildResizeImageCommand } from "./resize-image";
import type { ResizeImageOptions } from "@/lib/ffmpeg/presets/resize-image";
import { buildAudioToMp3Command } from "./audio-to-mp3";
import type { AudioToMp3Options } from "@/lib/ffmpeg/presets/audio-to-mp3";
import { buildCompressImageCommand } from "./compress-image";
import type { CompressImageOptions } from "@/lib/ffmpeg/presets/compress-image";

type CommandValues =
  Record<string, string | number>;

type CommandBuilder = (
  values: CommandValues,
) => string;

export const commandBuilders: Record<
  string,
  CommandBuilder
> = {
  "audio-to-mp3": (values) =>
    buildAudioToMp3Command({
      input: String(values.input),
      bitrate: Number(values.bitrate),
      output: String(values.output),
    } satisfies AudioToMp3Options),

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
  
  "video-to-gif": (values) =>
    buildVideoToGifCommand({
      input: String(values.input),
      start: String(values.start),
      duration: String(values.duration),
      fps: Number(values.fps),
      width: Number(values.width),
      output: String(values.output),
    } satisfies VideoToGifOptions),
  
  "mkv-to-mp4": (values) =>
    buildMkvToMp4Command({
      input: String(values.input),
      output: String(values.output),
    } satisfies MkvToMp4Options),

  "mov-to-mp4": (values) =>
    buildMovToMp4Command({
      input: String(values.input),
      output: String(values.output),
    } satisfies MovToMp4Options),

  "video-to-mp4": (values) =>
    buildVideoToMp4Command({
      input: String(values.input),
      output: String(values.output),
    } satisfies VideoToMp4Options),

  "gif-to-mp4": (values) =>
    buildGifToMp4Command({
      input: String(values.input),
      output: String(values.output),
    } satisfies GifToMp4Options),

  "trim-audio": (values) =>
    buildTrimAudioCommand({
      input: String(values.input),
      start: String(values.start),
      duration: String(values.duration),
      output: String(values.output),
    } satisfies TrimAudioOptions),

  "resize-image": (values) =>
    buildResizeImageCommand({
      input: String(values.input),
      width: Number(values.width),
      output: String(values.output),
    } satisfies ResizeImageOptions),

  "compress-image": (values) =>
    buildCompressImageCommand({
      input: String(values.input),
      quality: Number(values.quality),
      compressionLevel: Number(values.compressionLevel),
      output: String(values.output),
    } satisfies CompressImageOptions),
    
};