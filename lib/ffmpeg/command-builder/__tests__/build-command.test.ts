import { describe, expect, it } from "vitest";
import { buildCommand } from "../build-command";
import { videoToMp3Preset } from "@/lib/ffmpeg/presets/video-to-mp3";
import { trimAudioPreset } from "@/lib/ffmpeg/presets/trim-audio";

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

  it("builds a command for the audio trimming preset", () => {
    expect(
      buildCommand(trimAudioPreset, {
        input: "song.flac",
        start: "00:00:15",
        duration: "00:00:10",
        output: "song-trimmed.flac",
      }),
    ).toBe(
      "ffmpeg -ss '00:00:15' -i 'song.flac' -t '00:00:10' -vn -c:a copy 'song-trimmed.flac'",
    );
  });
});