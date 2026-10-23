import { describe, expect, it } from "vitest";
import { buildAudioToAudioFormatOutputFilename } from "../audio-to-audio-format";

describe("buildAudioToAudioFormatOutputFilename", () => {
  it.each(["mp3", "wav", "flac", "m4a", "aac", "ogg", "opus"] as const)(
    "uses the selected %s extension",
    (format) => {
      expect(
        buildAudioToAudioFormatOutputFilename({
          input: "voice recording.wav",
          format,
          bitrate: 192,
          output: "custom.mp3",
        }),
      ).toBe(`voice recording.${format}`);
    },
  );
});
