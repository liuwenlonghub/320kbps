import type { Preset } from "@/lib/ffmpeg/types/preset";

export type VideoToImageOptions = {
  input: string;
  time: string;
  output: string;
};

export const videoToImagePreset: Preset = {
  id: "video-to-image",
  title: "Video → Image",
  description:
    "Extract a single frame from a video at a specified time.",
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
    time: "00:00:10",
    output: "frame.jpg",
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
      id: "time",
      label: "Time",
      placeholder: "HH:MM:SS",
      defaultValue: "00:00:10",
    },
    {
      type: "text",
      id: "output",
      label: "Output filename",
      defaultValue: "frame.jpg",
    },
  ],

  explanation: {
    title: "Video → Image",
    description:
      "Extract one frame from a video at the specified timestamp and save it as a JPEG image.",
    parameters: [
      {
        flag: "-i",
        description:
          "Input video file.",
      },
      {
        flag: "-ss",
        description:
          "Seek to the specified position in the video.",
      },
      {
        flag: "-frames:v 1",
        description:
          "Extract exactly one video frame.",
      },
    ],
  },
};