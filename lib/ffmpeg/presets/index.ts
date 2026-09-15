import { resizeVideoPreset } from "./resize-video";
import { videoToMp3Preset } from "./video-to-mp3";

export const presets = [
  videoToMp3Preset,
  resizeVideoPreset,
] as const;

export {
  resizeVideoPreset,
  videoToMp3Preset,
};