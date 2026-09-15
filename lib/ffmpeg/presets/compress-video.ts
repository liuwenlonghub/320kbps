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
      "This command re-encodes the video with H.264 and AAC. The CRF value controls the balance between visual quality and file size.",

    dynamic: {
      field: "quality",
      title: "Compression level",
      values: {
        high: {
          label: "High quality · CRF 20",
          description:
            "Higher visual quality with a larger output file.",
        },
        balanced: {
          label: "Balanced · CRF 23",
          description:
            "A good balance between visual quality and file size.",
        },
        small: {
          label: "Smaller file · CRF 28",
          description:
            "Produces a smaller file size at the cost of some visual quality.",
        },
      },
    },

    parameters: [
      {
        flag: "-i",
        description:
          "Specifies the input video file.",
      },
      {
        flag: "-c:v libx264",
        description:
          "Encodes the video using H.264, a widely supported video codec with good compression efficiency.",
      },
      {
        flag: "-crf",
        description:
          "Controls video quality. Lower values produce better quality and larger files, while higher values produce smaller files with lower quality.",
      },
      {
        flag: "-preset medium",
        description:
          "Controls the encoding speed and compression efficiency. Slower presets generally produce smaller files at the same quality, but take longer to encode.",
      },
      {
        flag: "-c:a aac",
        description:
          "Encodes the audio using AAC.",
      },
      {
        flag: "-b:a",
        description:
          "Sets the audio bitrate. Higher bitrates generally preserve more audio quality but produce larger files.",
      },
    ],
  },
};