import { describe, expect, it } from "vitest";
import { buildVideoToMp3OutputFilename } from "../video-to-mp3";

describe("buildVideoToMp3OutputFilename", () => {
  it("changes the extension to mp3", () => {
    expect(
      buildVideoToMp3OutputFilename({
        input: "input.mp4",
        bitrate: 320,
        output: "output.mp3",
      }),
    ).toBe("input.mp3");
  });

  it("works with different video extensions", () => {
    expect(
      buildVideoToMp3OutputFilename({
        input: "video.mkv",
        bitrate: 192,
        output: "output.mp3",
      }),
    ).toBe("video.mp3");
  });

  it("preserves filenames with spaces", () => {
    expect(
      buildVideoToMp3OutputFilename({
        input: "my video.mov",
        bitrate: 256,
        output: "output.mp3",
      }),
    ).toBe("my video.mp3");
  });
});