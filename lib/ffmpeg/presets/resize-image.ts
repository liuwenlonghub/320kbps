import type { Preset } from "../types/preset";

export type ResizeImageOptions = {
  input: string;
  width: number;
  output: string;
};

export const resizeImagePreset: Preset<ResizeImageOptions> = {
  id: "resize-image",
  title: "Resize Image",
  description:
    "Resize an image to a specific width while preserving its aspect ratio.",
  category: "image",
  featured: false,

  input: {
    type: "media",
    extensions: ["jpg", "jpeg", "png", "webp", "bmp", "tif", "tiff"],
  },

  options: {
    input: "input.jpg",
    width: 1280,
    output: "output.jpg",
  },

  fields: [
    {
      type: "file",
      id: "input",
      label: "Input file",
      accept: ".jpg,.jpeg,.png,.webp,.bmp,.tif,.tiff",
    },
    {
      type: "select",
      id: "width",
      label: "Width",
      options: [
        { label: "320 px", value: 320 },
        { label: "640 px", value: 640 },
        { label: "1280 px", value: 1280 },
        { label: "1920 px", value: 1920 },
      ],
      defaultValue: 1280,
    },
    {
      type: "text",
      id: "output",
      label: "Output file",
      placeholder: "output.jpg",
      defaultValue: "output.jpg",
    },
  ],

  explanation: {
    title: "About this command",
    description:
      "This command scales the image to the selected width while calculating its height to preserve the original aspect ratio.",
    parameters: [
      {
        flag: "-i",
        description: "Specifies the input image file.",
      },
      {
        flag: "-vf scale",
        description: "Applies FFmpeg's image scaling filter.",
      },
      {
        flag: "scale=1280:-1",
        description:
          "Sets the image width to 1280 pixels and calculates the height to preserve its aspect ratio.",
      },
    ],
  },
};
