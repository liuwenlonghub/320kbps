import { describe, expect, it } from "vitest";
import { buildImageToPngOutputFilename } from "../image-to-png";

describe("buildImageToPngOutputFilename", () => {
  it("changes the input extension to png", () => {
    expect(
      buildImageToPngOutputFilename({
        input: "photo.webp",
        output: "output.png",
      }),
    ).toBe("photo.png");
  });

  it("handles filenames with spaces", () => {
    expect(
      buildImageToPngOutputFilename({
        input: "my photo.jpg",
        output: "output.png",
      }),
    ).toBe("my photo.png");
  });
});
