import type { Preset } from "@/lib/ffmpeg/types/preset";

export type AudioToMp3Options = {
  input: string;
  bitrate: number;
  output: string;
};

export const audioToMp3Preset: Preset<AudioToMp3Options> = {
  id: "audio-to-mp3",
  title: "Audio → MP3",
  description: "Convert common audio files to MP3.",
  category: "audio",
  featured: false,

  input: {
    type: "media",
    extensions: [
      ".wav",
      ".flac",
      ".m4a",
      ".aac",
      ".ogg",
      ".opus",
      ".aiff",
      ".aif",
      ".wma",
    ],
  },

  options: {
    input: "input.wav",
    bitrate: 320,
    output: "output.mp3",
  },

  fields: [
    {
      type: "file",
      id: "input",
      label: "Input file",
      accept: ".wav,.flac,.m4a,.aac,.ogg,.opus,.aiff,.aif,.wma",
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
      placeholder: "output.mp3",
      defaultValue: "output.mp3",
    },
  ],

  explanation: {
    title: "How it works",
    description:
      "Convert a supported audio file to MP3 using the selected bitrate.",
    parameters: [
      {
        flag: "-i",
        description: "Specifies the input audio file.",
      },
      {
        flag: "-vn",
        description: "Excludes embedded video or cover-art streams.",
      },
      {
        flag: "-codec:a libmp3lame",
        description: "Encodes the audio using the LAME MP3 encoder.",
      },
      {
        flag: "-b:a",
        description: "Sets the MP3 audio bitrate.",
      },
    ],
  },
};
