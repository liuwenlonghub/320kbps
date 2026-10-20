import { describe, expect, it } from "vitest";
import { buildImageToJpegOutputFilename } from "../image-to-jpeg";

describe("buildImageToJpegOutputFilename", () => {
  it("changes the input extension to jpg", () => {
    expect(
      buildImageToJpegOutputFilename({
        input: "photo.png",
        quality: 5,
        output: "output.jpg",
      }),
    ).toBe("photo.jpg");
  });

  it("handles filenames with spaces", () => {
    expect(
      buildImageToJpegOutputFilename({
        input: "my photo.webp",
        quality: 10,
        output: "output.jpg",
      }),
    ).toBe("my photo.jpg");
  });
});
