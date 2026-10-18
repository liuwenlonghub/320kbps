import { describe, expect, it } from "vitest";
import { buildCommand } from "../build-command";
import { videoToMp3Preset } from "@/lib/ffmpeg/presets/video-to-mp3";
import { trimAudioPreset } from "@/lib/ffmpeg/presets/trim-audio";
import { resizeImagePreset } from "@/lib/ffmpeg/presets/resize-image";
import { audioToMp3Preset } from "@/lib/ffmpeg/presets/audio-to-mp3";

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

  it("builds a command for the general audio-to-MP3 preset", () => {
    expect(
      buildCommand(audioToMp3Preset, {
        input: "recording.m4a",
        bitrate: 192,
        output: "recording.mp3",
      }),
    ).toBe(
      "ffmpeg -i 'recording.m4a' -vn -codec:a libmp3lame -b:a 192k 'recording.mp3'",
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

  it("builds a command for the image resizing preset", () => {
    expect(
      buildCommand(resizeImagePreset, {
        input: "photo.png",
        width: 640,
        output: "photo-640.png",
      }),
    ).toBe(
      "ffmpeg -i 'photo.png' -vf scale=640:-1 'photo-640.png'",
    );
  });
});