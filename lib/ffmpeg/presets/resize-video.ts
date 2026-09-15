import type { Preset } from "../types/preset";

export type ResizeVideoOptions = {
  input: string;
  width: number;
  output: string;
};

export const resizeVideoPreset: Preset<ResizeVideoOptions> = {
  id: "resize-video",
  title: "Resize Video",
  description: "Resize a video while keeping its aspect ratio.",
  category: "video",

  input: {
    type: "media",
    extensions: ["mp4", "mkv", "mov", "webm", "avi"],
  },

  options: {
    input: "input.mp4",
    width: 1280,
    output: "output.mp4",
  },

  output: {
    extension: "mp4",
    suffix: "width",
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
      id: "width",
      label: "Width",
      options: [
        { label: "3840 px — 4K", value: 3840 },
        { label: "2560 px — 1440p", value: 2560 },
        { label: "1920 px — 1080p", value: 1920 },
        { label: "1280 px — 720p", value: 1280 },
        { label: "854 px — 480p", value: 854 },
        { label: "640 px — 360p", value: 640 },
      ],
      defaultValue: 1280,
    },
    {
      type: "text",
      id: "output",
      label: "Output file",
      placeholder: "output.mp4",
      defaultValue: "output.mp4",
    },
  ],

  explanation: {
    title: "About this command",
    description:
      "Resizes the video to the selected width while automatically calculating the height to preserve the original aspect ratio.",
    parameters: [
      {
        flag: "-i",
        description: "Specifies the input video file.",
      },
      {
        flag: "-vf scale",
        description:
          "Applies FFmpeg's video scaling filter.",
      },
      {
        flag: "scale=1280:-2",
        description:
          "Sets the video width to 1280 pixels and automatically calculates the height while preserving the aspect ratio.",
      },
    ],
  },
};