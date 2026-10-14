import type { Preset } from "@/lib/ffmpeg/types/preset";

export type TrimAudioOptions = {
  input: string;
  start: string;
  duration: string;
  output: string;
};

export const trimAudioPreset: Preset<TrimAudioOptions> = {
  id: "trim-audio",
  title: "Trim Audio",
  description:
    "Cut an audio file by specifying a start time and duration.",
  category: "audio",
  featured: false,

  input: {
    type: "media",
    extensions: [
      ".mp3",
      ".wav",
      ".flac",
      ".m4a",
      ".aac",
      ".ogg",
      ".opus",
    ],
  },

  options: {
    input: "input.mp3",
    start: "00:00:00",
    duration: "00:00:30",
    output: "output.mp3",
  },

  fields: [
    {
      type: "file",
      id: "input",
      label: "Input file",
      accept: ".mp3,.wav,.flac,.m4a,.aac,.ogg,.opus",
    },
    {
      type: "text",
      id: "start",
      label: "Start time",
      placeholder: "HH:MM:SS",
      defaultValue: "00:00:00",
    },
    {
      type: "text",
      id: "duration",
      label: "Duration",
      placeholder: "HH:MM:SS",
      defaultValue: "00:00:30",
    },
    {
      type: "text",
      id: "output",
      label: "Output filename",
      defaultValue: "output.mp3",
    },
  ],

  explanation: {
    title: "Trim Audio",
    description:
      "Extract an audio segment from the selected start time for the specified duration. The audio stream is copied without re-encoding.",
    parameters: [
      {
        flag: "-ss",
        description:
          "Set the start position of the audio segment.",
      },
      {
        flag: "-t",
        description:
          "Set the duration of the output segment.",
      },
      {
        flag: "-vn -c:a copy",
        description:
          "Discard any video stream and copy the audio without re-encoding.",
      },
    ],
  },
};
