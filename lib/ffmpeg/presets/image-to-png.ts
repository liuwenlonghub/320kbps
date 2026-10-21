import type { Preset } from "../types/preset";

export type ImageToPngOptions = {
  input: string;
  output: string;
};

export const imageToPngPreset: Preset<ImageToPngOptions> = {
  id: "image-to-png",
  title: "Image → PNG",
  description: "Convert images to PNG while preserving transparency.",
  category: "image",
  featured: false,

  input: {
    type: "media",
    extensions: ["jpg", "jpeg", "gif", "bmp", "tif", "tiff", "webp"],
  },

  options: {
    input: "input.jpg",
    output: "output.png",
  },

  fields: [
    {
      type: "file",
      id: "input",
      label: "Input file",
      accept: "image/*",
    },
    {
      type: "text",
      id: "output",
      label: "Output file",
      placeholder: "output.png",
      defaultValue: "output.png",
    },
  ],

  explanation: {
    title: "About this command",
    description:
      "This command converts the input image to PNG. PNG supports transparency; animated inputs are converted using their first frame.",
    parameters: [
      {
        flag: "-i",
        description: "Specifies the input image file.",
      },
      {
        flag: "-frames:v 1",
        description: "Writes one frame, using the first frame for animated images.",
      },
      {
        flag: "-c:v png",
        description: "Encodes the image using the lossless PNG codec.",
      },
    ],
  },
};
