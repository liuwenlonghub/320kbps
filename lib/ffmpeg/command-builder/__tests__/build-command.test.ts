import { describe, expect, it } from "vitest";
import { buildCommand } from "../build-command";
import { videoToMp3Preset } from "@/lib/ffmpeg/presets/video-to-mp3";

describe("buildCommand", () => {
  it("builds a command for a registered preset", () => {
    const command = buildCommand(videoToMp3Preset, {
      input: "input.mp4",
      bitrate: 320,
      output: "output.mp3",
    });

    expect(command).toBe(
      "ffmpeg -i 'input.mp4' -codec:a libmp3lame -b:a 320k 'output.mp3'",
    );
  });

  it("returns an empty string for an unknown preset", () => {
    const command = buildCommand(
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

    expect(command).toBe("");
  });
});