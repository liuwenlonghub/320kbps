import { en } from "./en";
import { ja } from "./ja";
import { zhCN } from "./zh-cn";

export const languages = {
  en,
  "zh-cn": zhCN,
  ja,
} as const;

export type Locale = keyof typeof languages;

type PresetCopySource = {
  id: string;
  title: string;
  description: string;
};

const presetTranslationKeys: Record<string, keyof typeof en.presets> = {
  "video-to-mp4": "videoToMp4",
  "gif-to-mp4": "gifToMp4",
  "mkv-to-mp4": "mkvToMp4",
  "video-to-mp3": "videoToMp3",
  "audio-to-mp3": "audioToMp3",
  "audio-to-audio-format": "audioToAudioFormat",
  "flac-to-mp3": "flacToMp3",
  "wav-to-mp3": "wavToMp3",
  "resize-video": "resizeVideo",
  "compress-video": "compressVideo",
  "webm-to-mp4": "webmToMp4",
  "image-to-webp": "imageToWebp",
  "image-to-jpeg": "imageToJpeg",
  "image-to-png": "imageToPng",
  "image-to-image-format": "imageToImageFormat",
  "compress-image": "compressImage",
  "mp4-to-webm": "mp4ToWebm",
  "trim-video": "trimVideo",
  "video-to-image": "videoToImage",
  "video-to-gif": "videoToGif",
  "mov-to-mp4": "movToMp4",
  "trim-audio": "trimAudio",
  "resize-image": "resizeImage",
};

export function getDictionary(
  locale: Locale,
) {
  return languages[locale];
}

export function getPresetCopy(
  preset: PresetCopySource,
  locale: Locale,
) {
  const translationKey = presetTranslationKeys[preset.id];

  if (!translationKey) {
    return {
      title: preset.title,
      description: preset.description,
    };
  }

  const copy = getDictionary(locale).presets[translationKey];
  return {
    title: copy.title,
    description: copy.description,
  };
}