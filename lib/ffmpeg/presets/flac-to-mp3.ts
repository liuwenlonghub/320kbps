import type { Preset } from "@/lib/ffmpeg/types/preset";

export type FlacToMp3Options = {
  input: string;
  bitrate: number;
  output: string;
};

export const flacToMp3Preset: Preset = {
  id: "flac-to-mp3",
  title: "FLAC → MP3",
  description:
    "Convert lossless FLAC audio files to compressed MP3 files.",
  category: "audio",
  featured: false,

  input: {
    type: "media",
    extensions: [".flac"],
  },

  options: {
    input: "input.flac",
    bitrate: 320,
    output: "output.mp3",
  },

  fields: [
    {
      type: "file",
      id: "input",
      label: "Input file",
      accept: "audio/flac",
    },
    {
      type: "select",
      id: "bitrate",
      label: "Bitrate",
      options: [
        { label: "128 kbps", value: 128 },
        { label: "192 kbps", value: 192 },
        { label: "256 kbps", value: 256 },
        { label: "320 kbps", value: 320 },
      ],
      defaultValue: 320,
    },
    {
      type: "text",
      id: "output",
      label: "Output filename",
      defaultValue: "output.mp3",
    },
  ],

  explanation: {
    title: "FLAC → MP3",
    description:
      "Convert lossless FLAC audio into a smaller MP3 file using the selected bitrate.",
    parameters: [
      {
        flag: "-i",
        description: "Input FLAC file.",
      },
      {
        flag: "-codec:a libmp3lame",
        description:
          "Encode the audio using the LAME MP3 encoder.",
      },
      {
        flag: "-b:a",
        description:
          "Set the MP3 audio bitrate.",
      },
    ],
  },
};