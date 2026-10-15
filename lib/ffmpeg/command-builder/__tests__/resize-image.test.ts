import { describe, expect, it } from "vitest";
import { buildResizeImageCommand } from "../resize-image";

describe("buildResizeImageCommand", () => {
  it("builds a scaling command that preserves aspect ratio", () => {
    expect(
      buildResizeImageCommand({
        input: "input.png",
        width: 640,
        output: "input-640.png",
      }),
    ).toBe(
      "ffmpeg -i 'input.png' -vf scale=640:-1 'input-640.png'",
    );
  });

  it("quotes filenames containing spaces", () => {
    expect(
      buildResizeImageCommand({
        input: "my photo.jpg",
        width: 1280,
        output: "my photo-1280.jpg",
      }),
    ).toBe(
      "ffmpeg -i 'my photo.jpg' -vf scale=1280:-1 'my photo-1280.jpg'",
    );
  });
});
