import { describe, expect, it } from "vitest";

import { buildGifToMp4Command } from "../gif-to-mp4";

describe("buildGifToMp4Command", () => {
  it("builds an H.264 MP4 command and preserves GIF frame timing", () => {
    const command = buildGifToMp4Command({
      input: "input.gif",
      output: "output.mp4",
    });

    expect(command).toBe(
      "ffmpeg -i 'input.gif' -an -vf 'scale=trunc(iw/2)*2:trunc(ih/2)*2,format=yuv420p' -c:v libx264 -fps_mode vfr -movflags +faststart 'output.mp4'",
    );
  });

  it("quotes filenames containing spaces", () => {
    const command = buildGifToMp4Command({
      input: "animated logo.gif",
      output: "animated logo.mp4",
    });

    expect(command).toContain("'animated logo.gif'");
    expect(command).toContain("'animated logo.mp4'");
  });
});