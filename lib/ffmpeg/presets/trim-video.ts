import type { Preset } from "@/lib/ffmpeg/types/preset";

export type TrimVideoOptions = {
  input: string;
  start: string;
  duration: string;
  output: string;
};

export const trimVideoPreset: Preset = {
  id: "trim-video",
  title: "Trim Video",
  description:
    "Cut a video by specifying a start time and duration.",
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
    start: "00:00:00",
    duration: "00:00:30",
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
      defaultValue: "output.mp4",
    },
  ],

  explanation: {
    title: "Trim Video",
    description:
      "Extract a section of a video starting at the specified time and continuing for the selected duration.",
    parameters: [
      {
        flag: "-ss",
        description:
          "Set the start position of the trimmed video.",
      },
      {
        flag: "-i",
        description:
          "Input video file.",
      },
      {
        flag: "-t",
        description:
          "Set the duration of the output segment.",
      },
    ],
  },
};