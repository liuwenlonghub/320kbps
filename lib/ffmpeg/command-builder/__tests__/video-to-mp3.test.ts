import { describe, expect, it } from "vitest";

import { buildVideoToMp3Command } from "../video-to-mp3";

describe("buildVideoToMp3Command", () => {
  it("builds a 320 kbps MP3 command", () => {
    const command = buildVideoToMp3Command({
      input: "input.mp4",
      bitrate: 320,
      output: "output.mp3",
    });

    expect(command).toBe(
      "ffmpeg -i 'input.mp4' -codec:a libmp3lame -b:a 320k 'output.mp3'",
    );
  });

  it("uses the selected bitrate", () => {
    const command = buildVideoToMp3Command({
      input: "video.mkv",
      bitrate: 192,
      output: "audio.mp3",
    });

    expect(command).toBe(
      "ffmpeg -i 'video.mkv' -codec:a libmp3lame -b:a 192k 'audio.mp3'",
    );
  });

  it("quotes filenames containing spaces", () => {
    const command = buildVideoToMp3Command({
      input: "my video.mp4",
      bitrate: 320,
      output: "my audio.mp3",
    });

    expect(command).toBe(
      "ffmpeg -i 'my video.mp4' -codec:a libmp3lame -b:a 320k 'my audio.mp3'",
    );
  });
});