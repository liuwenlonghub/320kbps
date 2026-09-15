import { compressVideoPreset } from "./compress-video";
import { resizeVideoPreset } from "./resize-video";
import { videoToMp3Preset } from "./video-to-mp3";
import { webmToMp4Preset } from "./webm-to-mp4";
import { imageToWebpPreset } from "./image-to-webp";

export const presets = [
  videoToMp3Preset,
  resizeVideoPreset,
  compressVideoPreset,
  webmToMp4Preset,
  imageToWebpPreset,
] as const;

export {
  compressVideoPreset,
  resizeVideoPreset,
  videoToMp3Preset,
  webmToMp4Preset,
  imageToWebpPreset,
};