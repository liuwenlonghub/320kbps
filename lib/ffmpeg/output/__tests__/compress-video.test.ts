import { describe, expect, it } from "vitest";
import { buildCompressVideoOutputFilename } from "../compress-video";

describe("buildCompressVideoOutputFilename", () => {
  it("adds -compressed before the extension", () => {
    expect(
      buildCompressVideoOutputFilename({
        input: "input.mp4",
        quality: "balanced",
        output: "output.mp4",
      }),
    ).toBe("input-compressed.mp4");
  });

  it("preserves filenames with spaces", () => {
    expect(
      buildCompressVideoOutputFilename({
        input: "my video.mov",
        quality: "high",
        output: "output.mp4",
      }),
    ).toBe("my video-compressed.mp4");
  });

  it("handles filenames without an extension", () => {
    expect(
      buildCompressVideoOutputFilename({
        input: "video",
        quality: "small",
        output: "output.mp4",
      }),
    ).toBe("video-compressed.mp4");
  });
});