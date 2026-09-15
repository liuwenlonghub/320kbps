import type { Preset } from "../types/preset";

export type CompressVideoOptions = {
  input: string;
  quality: "high" | "balanced" | "small";
  output: string;
};

export const compressVideoPreset: Preset<
  CompressVideoOptions
> = {
  id: "compress-video",
  title: "Compress Video",
  description:
    "Reduce video file size while keeping good visual quality.",
  category: "video",

  input: {
    type: "media",
    extensions: ["mp4", "mkv", "mov", "webm", "avi"],
  },

  options: {
    input: "input.mp4",
    quality: "balanced",
    output: "output.mp4",
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
      id: "quality",
      label: "Compression",
      options: [
        {
          label: "High quality",
          value: "high",
        },
        {
          label: "Balanced",
          value: "balanced",
        },
        {
          label: "Smaller file",
          value: "small",
        },
      ],
      defaultValue: "balanced",
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
      "Compresses the video using H.264 and adjusts the CRF value to balance image quality and file size.",
    parameters: [
      {
        flag: "-c:v libx264",
        description:
          "Encodes the video using the widely supported H.264 codec.",
      },
      {
        flag: "-crf",
        description:
          "Controls the video quality. Lower values produce higher quality and larger files.",
      },
      {
        flag: "-preset medium",
        description:
          "Controls the encoding speed and compression efficiency.",
      },
      {
        flag: "-c:a aac",
        description:
          "Encodes the audio using AAC.",
      },
      {
        flag: "-b:a",
        description:
          "Sets the audio bitrate for the compressed output.",
      },
    ],
  },
};