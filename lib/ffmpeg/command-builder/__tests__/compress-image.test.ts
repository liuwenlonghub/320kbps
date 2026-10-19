import { describe, expect, it } from "vitest";
import { buildCompressImageCommand } from "../compress-image";

describe("buildCompressImageCommand", () => {
  it("builds a WebP compression command with the selected quality", () => {
    expect(
      buildCompressImageCommand({
        input: "photo.png",
        quality: 60,
        compressionLevel: 6,
        output: "photo.webp",
      }),
    ).toBe(
      "ffmpeg -i 'photo.png' -c:v libwebp -q:v 60 -compression_level 6 'photo.webp'",
    );
  });

  it("quotes filenames containing spaces", () => {
    expect(
      buildCompressImageCommand({
        input: "my photo.jpg",
        quality: 75,
        compressionLevel: 6,
        output: "my photo.webp",
      }),
    ).toBe(
      "ffmpeg -i 'my photo.jpg' -c:v libwebp -q:v 75 -compression_level 6 'my photo.webp'",
    );
  });
});
