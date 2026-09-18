import { compressVideoPreset } from "./compress-video";
import { resizeVideoPreset } from "./resize-video";
import { videoToMp3Preset } from "./video-to-mp3";
import { webmToMp4Preset } from "./webm-to-mp4";
import { imageToWebpPreset } from "./image-to-webp";
import { wavToMp3Preset } from "./wav-to-mp3";
import { flacToMp3Preset } from "./flac-to-mp3";
import { mp4ToWebmPreset } from "./mp4-to-webm";
import { trimVideoPreset } from "./trim-video";
import { videoToImagePreset } from "./video-to-image";

export const presets = [
  videoToMp3Preset,
  wavToMp3Preset,
  flacToMp3Preset,
  mp4ToWebmPreset,
  trimVideoPreset,
  videoToImagePreset,
  resizeVideoPreset,
  compressVideoPreset,
  webmToMp4Preset,
  imageToWebpPreset,
] as const;

export {
  compressVideoPreset,
  flacToMp3Preset,
  imageToWebpPreset,
  mp4ToWebmPreset,
  resizeVideoPreset,
  trimVideoPreset,
  videoToImagePreset,
  videoToMp3Preset,
  wavToMp3Preset,
  webmToMp4Preset,
};