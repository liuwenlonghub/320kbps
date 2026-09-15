import type { Preset } from "../types/preset";

export type ImageToWebpOptions = {
  input: string;
  quality: number;
  output: string;
};

export const imageToWebpPreset: Preset<ImageToWebpOptions> = {
  id: "image-to-webp",
  title: "Image → WebP",
  description: "Convert an image to WebP.",
  category: "image",
  featured: false,

  input: {
    type: "media",
    extensions: ["jpg", "jpeg", "png", "gif", "bmp", "tiff"],
  },

  options: {
    input: "input.jpg",
    quality: 80,
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
        { label: "60", value: 60 },
        { label: "70", value: 70 },
        { label: "80", value: 80 },
        { label: "90", value: 90 },
        { label: "100", value: 100 },
      ],
      defaultValue: 80,
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
      "This command converts the input image to WebP. The quality value controls the balance between image quality and file size.",

    parameters: [
      {
        flag: "-i",
        description:
          "Specifies the input image file.",
      },
      {
        flag: "-c:v libwebp",
        description:
          "Encodes the image using the WebP image codec.",
      },
      {
        flag: "-q:v",
        description:
          "Controls WebP image quality. Higher values generally produce better quality and larger files.",
      },
    ],
  },
};