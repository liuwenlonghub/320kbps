import type { Preset } from "../types/preset";

export type VideoToMp3Options = {
  bitrate: readonly number[];
};

export const videoToMp3Preset: Preset<VideoToMp3Options> = {
  id: "video-to-mp3",
  title: "Video → MP3",
  description: "Extract audio from a video file.",
  category: "audio",
  input: {
    type: "media",
    extensions: ["mp4", "mkv", "mov", "webm", "avi"],
  },
  options: {
    bitrate: [128, 192, 256, 320],
  },
};