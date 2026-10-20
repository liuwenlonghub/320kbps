import type { Preset } from "../types/preset";

export type ImageToJpegOptions = {
  input: string;
  quality: number;
  output: string;
};

export const imageToJpegPreset: Preset<ImageToJpegOptions> = {
  id: "image-to-jpeg",
  title: "Image → JPEG",
  description: "Convert images to JPEG with adjustable quality.",
  category: "image",
  featured: false,

  input: {
    type: "media",
    extensions: ["jpg", "jpeg", "png", "gif", "bmp", "tif", "tiff", "webp"],
  },

  options: {
    input: "input.png",
    quality: 5,
    output: "output.jpg",
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
      label: "Quality (lower is better)",
      options: [
        { label: "2", value: 2 },
        { label: "5", value: 5 },
        { label: "10", value: 10 },
        { label: "15", value: 15 },
        { label: "20", value: 20 },
        { label: "25", value: 25 },
        { label: "31", value: 31 },
      ],
      defaultValue: 5,
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
      "This command converts the input image to JPEG. JPEG does not support transparency, so transparent areas are flattened during conversion.",
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
        flag: "-c:v mjpeg",
        description: "Encodes the image using the Motion JPEG codec.",
      },
      {
        flag: "-q:v",
        description:
          "Sets JPEG quality from 2 (best quality) to 31 (smallest output).",
      },
    ],
  },
};
