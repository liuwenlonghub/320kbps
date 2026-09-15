import { describe, expect, it } from "vitest";

import { buildResizeVideoCommand } from "../resize-video";

describe("buildResizeVideoCommand", () => {
  it("builds a 1280px resize command", () => {
    const command = buildResizeVideoCommand({
      input: "input.mp4",
      width: 1280,
      output: "output-1280.mp4",
    });

    expect(command).toBe(
      "ffmpeg -i 'input.mp4' -vf scale=1280:-2 'output-1280.mp4'",
    );
  });

  it("uses the selected width", () => {
    const command = buildResizeVideoCommand({
      input: "video.mp4",
      width: 1920,
      output: "video-1920.mp4",
    });

    expect(command).toBe(
      "ffmpeg -i 'video.mp4' -vf scale=1920:-2 'video-1920.mp4'",
    );
  });

  it("quotes filenames containing spaces", () => {
    const command = buildResizeVideoCommand({
      input: "my video.mp4",
      width: 854,
      output: "my video-854.mp4",
    });

    expect(command).toBe(
      "ffmpeg -i 'my video.mp4' -vf scale=854:-2 'my video-854.mp4'",
    );
  });
});