import type { Preset } from "@/lib/ffmpeg/types/preset";

export type VideoToMp4Options = {
  input: string;
  quality: number;
  output: string;
};

export const videoToMp4Preset: Preset = {
  id: "video-to-mp4",
  title: "Video → MP4",
  description:
    "Convert videos to MP4 with H.264 video and AAC audio.",
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
    quality: 23,
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
      label: "Quality",
      options: [
        { label: "High", value: 18 },
        { label: "Balanced", value: 23 },
        { label: "Small", value: 28 },
      ],
      defaultValue: 23,
    },
    {
      type: "text",
      id: "output",
      label: "Output filename",
      defaultValue: "output.mp4",
    },
  ],

  explanation: {
    title: "Video → MP4",
    description:
      "Convert a video to MP4 using H.264 video and AAC audio for broad playback compatibility.",
    parameters: [
      {
        flag: "-i",
        description:
          "Input video file.",
      },
      {
        flag: "-c:v libx264",
        description:
          "Encode the video using H.264.",
      },
      {
        flag: "-crf",
        description:
          "Control video quality. Lower values produce higher quality and larger files.",
      },
      {
        flag: "-c:a aac",
        description:
          "Encode the audio using AAC.",
      },
      {
        flag: "-b:a 128k",
        description:
          "Set the audio bitrate to 128 kbps.",
      },
      {
        flag: "-movflags +faststart",
        description:
          "Move MP4 metadata to the beginning of the file for faster playback over the web.",
      },
    ],
    dynamic: {
      field: "quality",
      title: "Quality",
      values: {
        "18": {
          label: "High",
          description:
            "Higher image quality with a larger output file.",
        },
        "23": {
          label: "Balanced",
          description:
            "A balance between image quality and file size.",
        },
        "28": {
          label: "Small",
          description:
            "Smaller output files with lower image quality.",
        },
      },
    },
  },
};