import { describe, expect, it } from "vitest";
import { buildResizeImageOutputFilename } from "../resize-image";

describe("buildResizeImageOutputFilename", () => {
  it("preserves the input image format and adds the target width", () => {
    expect(
      buildResizeImageOutputFilename({
        input: "photo.webp",
        width: 640,
        output: "output.jpg",
      }),
    ).toBe("photo-640.webp");
  });

  it("handles names without extensions", () => {
    expect(
      buildResizeImageOutputFilename({
        input: "photo",
        width: 320,
        output: "output.jpg",
      }),
    ).toBe("photo-320.jpg");
  });
});
