import type { Preset } from "@/lib/ffmpeg/types/preset";

export type VideoToMp4Options = {
  input: string;
  output: string;
};

export const videoToMp4Preset: Preset = {
  id: "video-to-mp4",
  title: "Video → MP4",
  description:
    "Convert compatible video files to MP4 without re-encoding.",
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
      type: "text",
      id: "output",
      label: "Output filename",
      defaultValue: "output.mp4",
    },
  ],

  explanation: {
    title: "Video → MP4",
    description:
      "Convert a compatible video container to MP4 by copying the existing video and audio streams without re-encoding.",
    parameters: [
      {
        flag: "-i",
        description:
          "Input video file.",
      },
      {
        flag: "-c copy",
        description:
          "Copy the existing video and audio streams without re-encoding.",
      },
      {
        flag: "-movflags +faststart",
        description:
          "Move MP4 metadata to the beginning of the file for faster playback over the web.",
      },
    ],
  },
};