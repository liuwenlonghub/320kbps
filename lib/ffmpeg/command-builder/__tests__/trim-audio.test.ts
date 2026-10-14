import { describe, expect, it } from "vitest";
import { buildTrimAudioCommand } from "../trim-audio";

describe("buildTrimAudioCommand", () => {
  it("builds an audio trimming command without re-encoding", () => {
    expect(
      buildTrimAudioCommand({
        input: "input.flac",
        start: "00:01:05",
        duration: "00:00:20",
        output: "output.flac",
      }),
    ).toBe(
      "ffmpeg -ss '00:01:05' -i 'input.flac' -t '00:00:20' -vn -c:a copy 'output.flac'",
    );
  });

  it("quotes filenames containing spaces", () => {
    expect(
      buildTrimAudioCommand({
        input: "my recording.mp3",
        start: "00:00:10",
        duration: "00:00:05",
        output: "trimmed recording.mp3",
      }),
    ).toBe(
      "ffmpeg -ss '00:00:10' -i 'my recording.mp3' -t '00:00:05' -vn -c:a copy 'trimmed recording.mp3'",
    );
  });
});
