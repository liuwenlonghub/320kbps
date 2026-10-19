import type { Preset } from "../types/preset";

export type CompressImageOptions = {
  input: string;
  quality: number;
  compressionLevel: number;
  output: string;
};

export const compressImagePreset: Preset<CompressImageOptions> = {
  id: "compress-image",
  title: "Compress Image",
  description: "Compress an image to WebP with adjustable quality.",
  category: "image",
  featured: false,

  input: {
    type: "media",
    extensions: ["jpg", "jpeg", "png", "gif", "bmp", "tif", "tiff", "webp"],
  },

  options: {
    input: "input.jpg",
    quality: 75,
    compressionLevel: 6,
    output: "output.webp",
  },

  fields: [
    {
      type: "file",
      id: "input",
      label: "Input file",
      accept: "image/*",
    },
    {
      type: "select",
      id: "quality",
      label: "Quality",
      options: [
        { label: "40", value: 40 },
        { label: "60", value: 60 },
        { label: "75", value: 75 },
        { label: "90", value: 90 },
      ],
      defaultValue: 75,
    },
    {
      type: "text",
      id: "output",
      label: "Output file",
      placeholder: "output.webp",
      defaultValue: "output.webp",
    },
  ],

  explanation: {
    title: "About this command",
    description:
      "This command encodes the input image as WebP. The quality setting controls the balance between visual quality and file size, while maximum compression effort favors smaller output files.",
    parameters: [
      {
        flag: "-i",
        description: "Specifies the input image file.",
      },
      {
        flag: "-c:v libwebp",
        description: "Encodes the image using the WebP image codec.",
      },
      {
        flag: "-q:v",
        description:
          "Sets WebP image quality. Lower values generally produce smaller files.",
      },
      {
        flag: "-compression_level 6",
        description:
          "Uses the highest WebP compression effort to favor smaller output files.",
      },
    ],
  },
};
