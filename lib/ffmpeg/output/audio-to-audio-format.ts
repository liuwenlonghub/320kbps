import { replaceExtension } from "@/lib/ffmpeg/command-builder/utils";
import type { AudioToAudioFormatOptions } from "@/lib/ffmpeg/presets/audio-to-audio-format";

export function buildAudioToAudioFormatOutputFilename({
  input,
  format,
}: AudioToAudioFormatOptions): string {
  return replaceExtension(input, format);
}
