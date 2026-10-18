import { replaceExtension } from "@/lib/ffmpeg/command-builder/utils";
import type { AudioToMp3Options } from "@/lib/ffmpeg/presets/audio-to-mp3";

export function buildAudioToMp3OutputFilename(
  { input }: AudioToMp3Options,
): string {
  return replaceExtension(input, "mp3");
}
