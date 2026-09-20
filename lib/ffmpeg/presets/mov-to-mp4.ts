import type { Preset } from "@/lib/ffmpeg/types/preset";

export type MovToMp4Options = {
  input: string;
  output: string;
};

export const movToMp4Preset: Preset = {
  id: "mov-to-mp4",
  title: "MOV → MP4",
  description:
    "Convert MOV videos to MP4 for broader compatibility.",
  category: "video",
  featured: false,

  input: {
    type: "media",
    extensions: [".mov"],
  },

  options: {
    input: "input.mov",
    output: "output.mp4",
  },

  fields: [
    {
      type: "file",
      id: "input",
      label: "Input file",
      accept: "video/quicktime,.mov",
    },
    {
      type: "text",
      id: "output",
      label: "Output filename",
      defaultValue: "output.mp4",
    },
  ],

  explanation: {
    title: "MOV → MP4",
    description:
      "Convert a MOV container to MP4 without re-encoding the media streams.",
    parameters: [
      {
        flag: "-i",
        description:
          "Input MOV video.",
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