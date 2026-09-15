import type { Preset } from "../types/preset";

export type VideoToMp3Options = {
  input: string;
  bitrate: number;
  output: string;
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
    input: "input.mp4",
    bitrate: 320,
    output: "output.mp3",
  },

  fields: [
    {
      type: "file",
      id: "input",
      label: "Input file",
      accept: "video/*",
    },
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
    {
      type: "text",
      id: "output",
      label: "Output file",
      placeholder: "output.mp3",
      defaultValue: "output.mp3",
    },
  ],
  explanation: {
    title: "About this command",
    description:
      "Extracts the audio track from a video and encodes it as an MP3 file.",
    parameters: [
      {
        flag: "-i",
        description: "Specifies the input video file.",
      },
      {
        flag: "-codec:a libmp3lame",
        description: "Uses the LAME MP3 encoder for the audio stream.",
      },
      {
        flag: "-b:a 320k",
        description: "Sets the audio bitrate to 320 kbps.",
      },
    ],
  },
};