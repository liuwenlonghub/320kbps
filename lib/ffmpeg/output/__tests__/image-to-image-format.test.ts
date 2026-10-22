import { describe, expect, it } from "vitest";
import { buildImageToImageFormatOutputFilename } from "../image-to-image-format";

describe("buildImageToImageFormatOutputFilename", () => {
  it.each([
    ["jpeg", "photo.jpg"],
    ["png", "photo.png"],
    ["webp", "photo.webp"],
  ] as const)("uses the selected %s extension", (format, expected) => {
    expect(
      buildImageToImageFormatOutputFilename({
        input: "photo.tiff",
        format,
        quality: 80,
        output: "custom-name.webp",
      }),
    ).toBe(expected);
  });
});
