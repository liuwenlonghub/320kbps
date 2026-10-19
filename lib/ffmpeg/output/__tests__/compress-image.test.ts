import { describe, expect, it } from "vitest";
import { buildCompressImageOutputFilename } from "../compress-image";

describe("buildCompressImageOutputFilename", () => {
  it("changes the input extension to WebP", () => {
    expect(
      buildCompressImageOutputFilename({
        input: "photo.png",
        quality: 75,
        compressionLevel: 6,
        output: "output.webp",
      }),
    ).toBe("photo.webp");
  });

  it("handles input filenames with spaces", () => {
    expect(
      buildCompressImageOutputFilename({
        input: "my photo.jpeg",
        quality: 60,
        compressionLevel: 6,
        output: "output.webp",
      }),
    ).toBe("my photo.webp");
  });
});
