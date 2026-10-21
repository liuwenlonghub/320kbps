import { describe, expect, it } from "vitest";
import { buildOutputFilename } from "../build-output-filename";
import { videoToMp3Preset } from "@/lib/ffmpeg/presets/video-to-mp3";
import { trimAudioPreset } from "@/lib/ffmpeg/presets/trim-audio";
import { resizeImagePreset } from "@/lib/ffmpeg/presets/resize-image";
import { audioToMp3Preset } from "@/lib/ffmpeg/presets/audio-to-mp3";
import { compressImagePreset } from "@/lib/ffmpeg/presets/compress-image";
import { imageToJpegPreset } from "@/lib/ffmpeg/presets/image-to-jpeg";
import { imageToPngPreset } from "@/lib/ffmpeg/presets/image-to-png";

describe("buildOutputFilename", () => {
  it("builds an output filename for a registered preset", () => {
    const filename = buildOutputFilename(videoToMp3Preset, {
      input: "my video.mp4",
      bitrate: 320,
      output: "output.mp3",
    });

    expect(filename).toBe("my video.mp3".replace(".mp4", ".mp3"));
  });

  it("builds an MP3 filename for the general audio-to-MP3 preset", () => {
    expect(
      buildOutputFilename(audioToMp3Preset, {
        input: "recording.m4a",
        bitrate: 192,
        output: "output.mp3",
      }),
    ).toBe("recording.mp3");
  });

  it("returns an empty string for an unknown preset", () => {
    const filename = buildOutputFilename(
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

    expect(filename).toBe("");
  });

  it("builds a trimmed output filename for the audio trimming preset", () => {
    expect(
      buildOutputFilename(trimAudioPreset, {
        input: "song.flac",
        start: "00:00:15",
        duration: "00:00:10",
        output: "output.mp3",
      }),
    ).toBe("song-trimmed.flac");
  });

  it("builds a resized output filename for the image resizing preset", () => {
    expect(
      buildOutputFilename(resizeImagePreset, {
        input: "photo.webp",
        width: 640,
        output: "output.jpg",
      }),
    ).toBe("photo-640.webp");
  });

  it("builds a WebP output filename for the image compression preset", () => {
    expect(
      buildOutputFilename(compressImagePreset, {
        input: "photo.png",
        quality: 75,
        compressionLevel: 6,
        output: "output.webp",
      }),
    ).toBe("photo.webp");
  });

  it("builds a JPEG output filename for the image to JPEG preset", () => {
    expect(
      buildOutputFilename(imageToJpegPreset, {
        input: "photo.png",
        quality: 5,
        output: "output.jpg",
      }),
    ).toBe("photo.jpg");
  });

  it("builds a PNG output filename for the image to PNG preset", () => {
    expect(
      buildOutputFilename(imageToPngPreset, {
        input: "photo.webp",
        output: "output.png",
      }),
    ).toBe("photo.png");
  });
});