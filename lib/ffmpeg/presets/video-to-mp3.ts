import type { Preset } from "../types/preset";

export type VideoToMp3Options = {
  bitrate: number;
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
    bitrate: 320,
  },

  fields: [
    {
      type: "select",
      id: "bitrate",
      label: "Bitrate",
      options: [
        { label: "128 kbps", value: 128 },
        { label: "192 kbps", value: 192 },
        { label: "256 kbps", value: 256 },
        { label: "320 kbps", value: 320 },
      ],
      defaultValue: 320,
    },
  ],
};