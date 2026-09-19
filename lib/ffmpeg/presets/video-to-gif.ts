import type { Preset } from "@/lib/ffmpeg/types/preset";

export type VideoToGifOptions = {
  input: string;
  start: string;
  duration: string;
  fps: number;
  width: number;
  output: string;
};

export const videoToGifPreset: Preset = {
  id: "video-to-gif",
  title: "Video → GIF",
  description:
    "Convert a short video segment to an animated GIF.",
  category: "video",
  featured: false,

  input: {
    type: "media",
    extensions: [
      ".mp4",
      ".mkv",
      ".mov",
      ".webm",
      ".avi",
    ],
  },

  options: {
    input: "input.mp4",
    start: "00:00:00",
    duration: "00:00:05",
    fps: 10,
    width: 480,
    output: "output.gif",
  },

  fields: [
    {
      type: "file",
      id: "input",
      label: "Input file",
      accept: "video/*",
    },
    {
      type: "text",
      id: "start",
      label: "Start time",
      placeholder: "HH:MM:SS",
      defaultValue: "00:00:00",
    },
    {
      type: "text",
      id: "duration",
      label: "Duration",
      placeholder: "HH:MM:SS",
      defaultValue: "00:00:05",
    },
    {
      type: "select",
      id: "fps",
      label: "Frame rate",
      options: [
        { label: "8 fps", value: 8 },
        { label: "10 fps", value: 10 },
        { label: "12 fps", value: 12 },
        { label: "15 fps", value: 15 },
      ],
      defaultValue: 10,
    },
    {
      type: "select",
      id: "width",
      label: "Width",
      options: [
        { label: "320 px", value: 320 },
        { label: "480 px", value: 480 },
        { label: "640 px", value: 640 },
        { label: "854 px", value: 854 },
      ],
      defaultValue: 480,
    },
    {
      type: "text",
      id: "output",
      label: "Output filename",
      defaultValue: "output.gif",
    },
  ],

  explanation: {
    title: "Video → GIF",
    description:
      "Convert a short section of a video into an animated GIF with a selected frame rate and width.",
    parameters: [
      {
        flag: "-ss",
        description:
          "Set the starting position of the GIF.",
      },
      {
        flag: "-t",
        description:
          "Set the duration of the GIF.",
      },
      {
        flag: "-vf",
        description:
          "Set the frame rate and output width.",
      },
      {
        flag: "-f gif",
        description:
          "Write the output as an animated GIF.",
      },
    ],
  },
};