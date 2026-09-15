import { buildVideoToMp3Command } from "./index";

import type { Preset } from "../types/preset";

export function buildCommand(
  preset: Preset,
  values: Record<string, string | number>,
): string {
  switch (preset.id) {
    case "video-to-mp3":
      return buildVideoToMp3Command({
        input: String(values.input),
        bitrate: Number(values.bitrate),
        output: String(values.output),
      });

    default:
      return "";
  }
}