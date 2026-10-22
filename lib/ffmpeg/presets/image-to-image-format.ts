import type { Preset } from "../types/preset";

export type ImageOutputFormat = "jpeg" | "png" | "webp";

export type ImageToImageFormatOptions = {
  input: string;
  format: ImageOutputFormat;
  quality: number;
  output: string;
};

export function parseImageOutputFormat(value: unknown): ImageOutputFormat {
  if (value === "jpeg" || value === "png" || value === "webp") {
    return value;
  }

  throw new Error(`Unsupported image output format: ${String(value)}`);
}

export function getImageFormatQuality(
  format: ImageOutputFormat,
  quality: number,
): number | undefined {
  if (!Number.isFinite(quality) || quality < 0 || quality > 100) {
    throw new RangeError("Image quality must be between 0 and 100.");
  }

  if (format === "png") {
    return undefined;
  }

  if (format === "jpeg") {
    return Math.round(31 - (quality * 29) / 100);
  }

  return quality;
}

export const imageToImageFormatPreset: Preset<ImageToImageFormatOptions> = {
  id: "image-to-image-format",
  title: "Image format converter",
  description: "Convert images to JPEG, PNG, or WebP.",
  category: "image",
  featured: false,

  input: {
    type: "media",
    extensions: ["jpg", "jpeg", "png", "gif", "bmp", "tif", "tiff", "webp"],
  },

  options: {
    input: "input.png",
    format: "webp",
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
      id: "format",
      label: "Output format",
      options: [
        { label: "JPEG", value: "jpeg" },
        { label: "PNG", value: "png" },
        { label: "WebP", value: "webp" },
      ],
      defaultValue: "webp",
    },
    {
      type: "select",
      id: "quality",
      label: "Quality (ignored for PNG)",
      options: [
        { label: "50", value: 50 },
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
      "Convert an image to JPEG, PNG, or WebP. Animated inputs are converted using their first frame. PNG preserves transparency; JPEG does not.",
    parameters: [
      {
        flag: "-frames:v 1",
        description: "Writes one frame, using the first frame for animated images.",
      },
      {
        flag: "-c:v",
        description:
          "Selects the encoder for the chosen output format: mjpeg for JPEG, png for PNG, or libwebp for WebP.",
      },
      {
        flag: "-q:v",
        description:
          "Controls JPEG or WebP quality. PNG is lossless and does not use this option.",
      },
    ],
  },
};
