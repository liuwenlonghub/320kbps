import { removeExtension } from "@/lib/ffmpeg/command-builder/utils";
import type { WebmToMp4Options } from "@/lib/ffmpeg/presets/webm-to-mp4";

export function buildWebmToMp4OutputFilename(
  { input }: WebmToMp4Options,
): string {
  return `${removeExtension(input)}.mp4`;
}