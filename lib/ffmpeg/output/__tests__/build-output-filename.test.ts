import { describe, expect, it } from "vitest";
import { buildOutputFilename } from "../build-output-filename";
import { videoToMp3Preset } from "@/lib/ffmpeg/presets/video-to-mp3";

describe("buildOutputFilename", () => {
  it("builds an output filename for a registered preset", () => {
    const filename = buildOutputFilename(videoToMp3Preset, {
      input: "my video.mp4",
      bitrate: 320,
      output: "output.mp3",
    });

    expect(filename).toBe("my video.mp3".replace(".mp4", ".mp3"));
  });

  it("returns an empty string for an unknown preset", () => {
    const filename = buildOutputFilename(
      {
        ...videoToMp3Preset,
        id: "unknown-preset",
      },
      {
        input: "input.mp4",
        bitrate: 320,
        output: "output.mp3",
      },
    );

    expect(filename).toBe("");
  });
});