import { compressVideoPreset } from "./compress-video";
import { resizeVideoPreset } from "./resize-video";
import { videoToMp3Preset } from "./video-to-mp3";

export const presets = [
  videoToMp3Preset,
  resizeVideoPreset,
  compressVideoPreset,
] as const;

export {
  compressVideoPreset,
  resizeVideoPreset,
  videoToMp3Preset,
};