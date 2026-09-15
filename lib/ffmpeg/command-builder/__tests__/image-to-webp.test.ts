import { describe, expect, it } from "vitest";

import { buildImageToWebpCommand } from "../image-to-webp";

describe("buildImageToWebpCommand", () => {
  it("builds an image to WebP command", () => {
    const command = buildImageToWebpCommand({
      input: "input.jpg",
      quality: 80,
      output: "output.webp",
    });

    expect(command).toBe(
      "ffmpeg -i 'input.jpg' -c:v libwebp -q:v 80 'output.webp'",
    );
  });

  it("uses the selected quality", () => {
    const command = buildImageToWebpCommand({
      input: "image.png",
      quality: 100,
      output: "image.webp",
    });

    expect(command).toBe(
      "ffmpeg -i 'image.png' -c:v libwebp -q:v 100 'image.webp'",
    );
  });

  it("quotes filenames containing spaces", () => {
    const command = buildImageToWebpCommand({
      input: "my photo.jpg",
      quality: 60,
      output: "my photo.webp",
    });

    expect(command).toBe(
      "ffmpeg -i 'my photo.jpg' -c:v libwebp -q:v 60 'my photo.webp'",
    );
  });
});