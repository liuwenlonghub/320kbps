import { replaceExtension } from "@/lib/ffmpeg/command-builder/utils";
import type { VideoToMp3Options } from "@/lib/ffmpeg/presets/video-to-mp3";

export function buildVideoToMp3OutputFilename(
  { input }: VideoToMp3Options,
): string {
  return replaceExtension(input, "mp3");
}