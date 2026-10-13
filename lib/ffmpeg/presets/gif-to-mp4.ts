import type { Preset } from "@/lib/ffmpeg/types/preset";

export type GifToMp4Options = {
  input: string;
  output: string;
};

export const gifToMp4Preset: Preset<GifToMp4Options> = {
  id: "gif-to-mp4",
  title: "GIF → MP4",
  description:
    "Convert an animated GIF to an MP4 video.",
  category: "video",
  featured: false,

  input: {
    type: "media",
    extensions: [".gif"],
  },

  options: {
    input: "input.gif",
    output: "output.mp4",
  },

  output: {
    extension: "mp4",
  },

  fields: [
    {
      type: "file",
      id: "input",
      label: "Input GIF",
      accept: "image/gif",
    },
    {
      type: "text",
      id: "output",
      label: "Output filename",
      placeholder: "output.mp4",
      defaultValue: "output.mp4",
    },
  ],

  explanation: {
    title: "GIF → MP4",
    description:
      "Convert an animated GIF to an H.264 MP4 video. The GIF animation is played once, without audio.",
    parameters: [
      {
        flag: "-an",
        description: "Disable audio; GIF files do not contain an audio track.",
      },
      {
        flag: "-c:v libx264",
        description: "Encode the video using the widely supported H.264 codec.",
      },
      {
        flag: "-pix_fmt yuv420p",
        description:
          "Use a pixel format supported by most MP4 players. Odd image dimensions are rounded down to even values.",
      },
      {
        flag: "-fps_mode vfr",
        description: "Preserve the GIF's frame timing in the output video.",
      },
    ],
  },
};