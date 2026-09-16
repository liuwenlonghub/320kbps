import { describe, expect, it } from "vitest";
import { buildWebmToMp4OutputFilename } from "../webm-to-mp4";

describe("buildWebmToMp4OutputFilename", () => {
  it("changes the extension to mp4", () => {
    expect(
      buildWebmToMp4OutputFilename({
        input: "input.webm",
        output: "output.mp4",
      }),
    ).toBe("input.mp4");
  });

  it("preserves filenames with spaces", () => {
    expect(
      buildWebmToMp4OutputFilename({
        input: "my video.webm",
        output: "output.mp4",
      }),
    ).toBe("my video.mp4");
  });
});