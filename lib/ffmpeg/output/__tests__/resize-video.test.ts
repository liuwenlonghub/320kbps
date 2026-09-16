import { describe, expect, it } from "vitest";
import { buildResizeVideoOutputFilename } from "../resize-video";

describe("buildResizeVideoOutputFilename", () => {
  it("adds the selected width to the filename", () => {
    expect(
      buildResizeVideoOutputFilename({
        input: "input.mp4",
        width: 1280,
        output: "output.mp4",
      }),
    ).toBe("input-1280.mp4");
  });

  it("preserves filenames with spaces", () => {
    expect(
      buildResizeVideoOutputFilename({
        input: "my video.mov",
        width: 1920,
        output: "output.mp4",
      }),
    ).toBe("my video-1920.mp4");
  });

  it("handles filenames without an extension", () => {
    expect(
      buildResizeVideoOutputFilename({
        input: "video",
        width: 854,
        output: "output.mp4",
      }),
    ).toBe("video-854.mp4");
  });
});