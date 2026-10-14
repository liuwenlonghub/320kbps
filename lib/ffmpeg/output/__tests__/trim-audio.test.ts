import { describe, expect, it } from "vitest";
import { buildTrimAudioOutputFilename } from "../trim-audio";

describe("buildTrimAudioOutputFilename", () => {
  it("preserves the input audio format", () => {
    expect(
      buildTrimAudioOutputFilename({
        input: "recording.flac",
        start: "00:00:00",
        duration: "00:00:30",
        output: "output.mp3",
      }),
    ).toBe("recording-trimmed.flac");
  });

  it("preserves filenames with spaces", () => {
    expect(
      buildTrimAudioOutputFilename({
        input: "my recording.m4a",
        start: "00:00:00",
        duration: "00:00:30",
        output: "output.mp3",
      }),
    ).toBe("my recording-trimmed.m4a");
  });
});
