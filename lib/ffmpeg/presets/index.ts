import { resizeVideoPreset } from "./resize-video";
import { videoToMp3Preset } from "./video-to-mp3";
import { compressVideoPreset } from "./compress-video";

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