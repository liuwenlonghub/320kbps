import type { Preset } from "@/lib/ffmpeg/types/preset";

export type MkvToMp4Options = {
  input: string;
  output: string;
};

export const mkvToMp4Preset: Preset = {
  id: "mkv-to-mp4",
  title: "MKV → MP4",
  description:
    "Convert MKV videos to MP4 for broader compatibility.",
  category: "video",
  featured: false,

  input: {
    type: "media",
    extensions: [".mkv"],
  },

  options: {
    input: "input.mkv",
    output: "output.mp4",
  },

  fields: [
    {
      type: "file",
      id: "input",
      label: "Input file",
      accept: "video/x-matroska,.mkv",
    },
    {
      type: "text",
      id: "output",
      label: "Output filename",
      defaultValue: "output.mp4",
    },
  ],

  explanation: {
    title: "MKV → MP4",
    description:
      "Convert an MKV container to MP4 without re-encoding the media streams.",
    parameters: [
      {
        flag: "-i",
        description:
          "Input MKV video.",
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