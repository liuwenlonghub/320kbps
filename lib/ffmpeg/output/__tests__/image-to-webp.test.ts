import { describe, expect, it } from "vitest";
import { buildImageToWebpOutputFilename } from "../image-to-webp";

describe("buildImageToWebpOutputFilename", () => {
  it("changes the extension to webp", () => {
    expect(
      buildImageToWebpOutputFilename({
        input: "input.jpg",
        quality: 80,
        output: "output.webp",
      }),
    ).toBe("input.webp");
  });

  it("works with png input", () => {
    expect(
      buildImageToWebpOutputFilename({
        input: "image.png",
        quality: 90,
        output: "output.webp",
      }),
    ).toBe("image.webp");
  });

  it("preserves filenames with spaces", () => {
    expect(
      buildImageToWebpOutputFilename({
        input: "my photo.jpeg",
        quality: 70,
        output: "output.webp",
      }),
    ).toBe("my photo.webp");
  });
});