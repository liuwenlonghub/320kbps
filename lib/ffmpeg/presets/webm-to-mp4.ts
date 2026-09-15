import type { Preset } from "../types/preset";

export type WebmToMp4Options = {
  input: string;
  output: string;
};

export const webmToMp4Preset: Preset<WebmToMp4Options> = {
  id: "webm-to-mp4",
  title: "WebM → MP4",
  description: "Convert a WebM video to MP4.",
  category: "video",
  featured: true,

  input: {
    type: "media",
    extensions: ["webm"],
  },

  options: {
    input: "input.webm",
    output: "output.mp4",
  },

  fields: [
    {
      type: "file",
      id: "input",
      label: "Input file",
      accept: "video/webm",
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
      "This command converts the WebM video to MP4 using H.264 video and AAC audio for broad compatibility.",

    parameters: [
      {
        flag: "-i",
        description:
          "Specifies the input WebM video file.",
      },
      {
        flag: "-c:v libx264",
        description:
          "Encodes the video using H.264, which is widely supported by devices and media players.",
      },
      {
        flag: "-c:a aac",
        description:
          "Encodes the audio using AAC.",
      },
      {
        flag: "-movflags +faststart",
        description:
          "Moves MP4 metadata to the beginning of the file so playback can start sooner when streaming.",
      },
    ],
  },
};