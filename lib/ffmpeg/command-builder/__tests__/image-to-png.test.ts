import { describe, expect, it } from "vitest";
import { buildImageToPngCommand } from "../image-to-png";

describe("buildImageToPngCommand", () => {
  it("builds a PNG conversion command using the first frame", () => {
    expect(
      buildImageToPngCommand({
        input: "photo.webp",
        output: "photo.png",
      }),
    ).toBe(
      "ffmpeg -i 'photo.webp' -frames:v 1 -c:v png 'photo.png'",
    );
  });

  it("quotes filenames containing spaces", () => {
    expect(
      buildImageToPngCommand({
        input: "my photo.jpg",
        output: "my photo.png",
      }),
    ).toBe(
      "ffmpeg -i 'my photo.jpg' -frames:v 1 -c:v png 'my photo.png'",
    );
  });
});
