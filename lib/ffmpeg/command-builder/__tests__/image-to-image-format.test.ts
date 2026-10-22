import { describe, expect, it } from "vitest";
import { buildImageToImageFormatCommand } from "../image-to-image-format";

describe("buildImageToImageFormatCommand", () => {
  it("builds a WebP conversion command", () => {
    expect(
      buildImageToImageFormatCommand({
        input: "photo.png",
        format: "webp",
        quality: 80,
        output: "photo.webp",
      }),
    ).toBe(
      "ffmpeg -i 'photo.png' -frames:v 1 -c:v libwebp -q:v 80 'photo.webp'",
    );
  });

  it("maps normalized quality to JPEG quality", () => {
    expect(
      buildImageToImageFormatCommand({
        input: "photo.webp",
        format: "jpeg",
        quality: 80,
        output: "photo.jpg",
      }),
    ).toBe(
      "ffmpeg -i 'photo.webp' -frames:v 1 -c:v mjpeg -q:v 8 'photo.jpg'",
    );
  });

  it("omits quality for lossless PNG output", () => {
    expect(
      buildImageToImageFormatCommand({
        input: "photo.jpg",
        format: "png",
        quality: 80,
        output: "photo.png",
      }),
    ).toBe("ffmpeg -i 'photo.jpg' -frames:v 1 -c:v png 'photo.png'");
  });

  it("quotes filenames containing spaces", () => {
    expect(
      buildImageToImageFormatCommand({
        input: "my photo.jpg",
        format: "webp",
        quality: 60,
        output: "my photo.webp",
      }),
    ).toBe(
      "ffmpeg -i 'my photo.jpg' -frames:v 1 -c:v libwebp -q:v 60 'my photo.webp'",
    );
  });
});
