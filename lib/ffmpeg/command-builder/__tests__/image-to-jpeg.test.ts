import { describe, expect, it } from "vitest";
import { buildImageToJpegCommand } from "../image-to-jpeg";

describe("buildImageToJpegCommand", () => {
  it("builds a JPEG conversion command using the selected quality", () => {
    expect(
      buildImageToJpegCommand({
        input: "photo.png",
        quality: 5,
        output: "photo.jpg",
      }),
    ).toBe(
      "ffmpeg -i 'photo.png' -frames:v 1 -c:v mjpeg -q:v 5 'photo.jpg'",
    );
  });

  it("quotes filenames containing spaces", () => {
    expect(
      buildImageToJpegCommand({
        input: "my photo.webp",
        quality: 10,
        output: "my photo.jpg",
      }),
    ).toBe(
      "ffmpeg -i 'my photo.webp' -frames:v 1 -c:v mjpeg -q:v 10 'my photo.jpg'",
    );
  });
});
