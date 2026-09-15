import { describe, expect, it } from "vitest";

import { buildCompressVideoCommand } from "../compress-video";

describe("buildCompressVideoCommand", () => {
  it("uses CRF 20 for high quality", () => {
    const command = buildCompressVideoCommand({
      input: "input.mp4",
      quality: "high",
      output: "output-compressed.mp4",
    });

    expect(command).toBe(
      "ffmpeg -i 'input.mp4' -c:v libx264 -crf 20 -preset medium -c:a aac -b:a 128k 'output-compressed.mp4'",
    );
  });

  it("uses CRF 23 for balanced quality", () => {
    const command = buildCompressVideoCommand({
      input: "input.mp4",
      quality: "balanced",
      output: "output-compressed.mp4",
    });

    expect(command).toBe(
      "ffmpeg -i 'input.mp4' -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k 'output-compressed.mp4'",
    );
  });

  it("uses CRF 28 for small files", () => {
    const command = buildCompressVideoCommand({
      input: "input.mp4",
      quality: "small",
      output: "output-compressed.mp4",
    });

    expect(command).toBe(
      "ffmpeg -i 'input.mp4' -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 96k 'output-compressed.mp4'",
    );
  });
});