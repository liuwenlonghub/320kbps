import { describe, expect, it } from "vitest";

import { buildWebmToMp4Command } from "../webm-to-mp4";

describe("buildWebmToMp4Command", () => {
  it("builds a WebM to MP4 conversion command", () => {
    const command = buildWebmToMp4Command({
      input: "input.webm",
      output: "output.mp4",
    });

    expect(command).toBe(
      "ffmpeg -i 'input.webm' -c:v libx264 -c:a aac -movflags +faststart 'output.mp4'",
    );
  });

  it("quotes filenames containing spaces", () => {
    const command = buildWebmToMp4Command({
      input: "my recording.webm",
      output: "converted video.mp4",
    });

    expect(command).toBe(
      "ffmpeg -i 'my recording.webm' -c:v libx264 -c:a aac -movflags +faststart 'converted video.mp4'",
    );
  });
});