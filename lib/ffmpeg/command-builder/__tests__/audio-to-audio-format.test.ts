import { describe, expect, it } from "vitest";
import { buildAudioToAudioFormatCommand } from "../audio-to-audio-format";

describe("buildAudioToAudioFormatCommand", () => {
  it.each([
    ["mp3", "libmp3lame", "-b:a 192k"],
    ["m4a", "aac", "-b:a 192k"],
    ["aac", "aac", "-b:a 192k"],
    ["ogg", "libvorbis", "-b:a 192k"],
    ["opus", "libopus", "-b:a 192k"],
  ] as const)("builds a %s command with the selected bitrate", (format, encoder, bitrate) => {
    expect(
      buildAudioToAudioFormatCommand({
        input: "voice recording.wav",
        format,
        bitrate: 192,
        output: `voice recording.${format}`,
      }),
    ).toBe(
      `ffmpeg -i 'voice recording.wav' -vn -c:a ${encoder} ${bitrate} 'voice recording.${format}'`,
    );
  });

  it.each([
    ["wav", "pcm_s16le"],
    ["flac", "flac"],
  ] as const)("omits bitrate for lossless %s output", (format, encoder) => {
    expect(
      buildAudioToAudioFormatCommand({
        input: "voice.mp3",
        format,
        bitrate: 192,
        output: `voice.${format}`,
      }),
    ).toBe(`ffmpeg -i 'voice.mp3' -vn -c:a ${encoder} 'voice.${format}'`);
  });
});
