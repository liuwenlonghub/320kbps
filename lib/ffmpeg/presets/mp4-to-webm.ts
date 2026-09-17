import type { Preset } from "@/lib/ffmpeg/types/preset";

export type Mp4ToWebmOptions = {
  input: string;
  output: string;
};

export const mp4ToWebmPreset: Preset = {
  id: "mp4-to-webm",
  title: "MP4 → WebM",
  description:
    "Convert MP4 videos to WebM format for web-friendly playback.",
  category: "video",
  featured: false,

  input: {
    type: "media",
    extensions: [".mp4"],
  },

  options: {
    input: "input.mp4",
    output: "output.webm",
  },

  fields: [
    {
      type: "file",
      id: "input",
      label: "Input file",
      accept: "video/mp4",
    },
    {
      type: "text",
      id: "output",
      label: "Output filename",
      defaultValue: "output.webm",
    },
  ],

  explanation: {
    title: "MP4 → WebM",
    description:
      "Convert an MP4 video to WebM using the VP8 video codec and Vorbis audio codec.",
    parameters: [
      {
        flag: "-i",
        description: "Input MP4 video.",
      },
      {
        flag: "-c:v libvpx",
        description:
          "Encode the video using the VP8 codec.",
      },
      {
        flag: "-c:a libvorbis",
        description:
          "Encode the audio using the Vorbis codec.",
      },
    ],
  },
};