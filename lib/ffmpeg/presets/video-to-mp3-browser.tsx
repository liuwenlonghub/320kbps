"use client";

import { FFmpeg } from "@ffmpeg/ffmpeg";
import {
  fetchFile,
  toBlobURL,
} from "@ffmpeg/util";

const ffmpeg = new FFmpeg();

let loaded = false;

async function ensureFFmpegLoaded() {
  if (loaded) {
    return;
  }

  const baseURL =
    "https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd";

  await ffmpeg.load({
    coreURL: await toBlobURL(
      `${baseURL}/ffmpeg-core.js`,
      "text/javascript",
    ),
    wasmURL: await toBlobURL(
      `${baseURL}/ffmpeg-core.wasm`,
      "application/wasm",
    ),
  });

  loaded = true;
}

export async function convertVideoToMp3InBrowser(
  file: File,
  bitrate: number,
  onProgress?: (progress: number) => void,
): Promise<Blob> {
  await ensureFFmpegLoaded();

  const progressHandler = ({
    progress,
  }: {
    progress: number;
  }) => {
    onProgress?.(
      Math.min(100, Math.round(progress * 100)),
    );
  };

  ffmpeg.on("progress", progressHandler);

  const inputFilename = `input-${Date.now()}-${file.name}`;
  const outputFilename = "output.mp3";

  try {
    await ffmpeg.writeFile(
      inputFilename,
      await fetchFile(file),
    );

    await ffmpeg.exec([
      "-i",
      inputFilename,
      "-codec:a",
      "libmp3lame",
      "-b:a",
      `${bitrate}k`,
      outputFilename,
    ]);

    const data = await ffmpeg.readFile(outputFilename);

    if (typeof data === "string") {
      throw new Error(
        "FFmpeg returned text instead of binary data.",
      );
    }

    const buffer = new ArrayBuffer(data.byteLength);
    new Uint8Array(buffer).set(data);

    return new Blob([buffer], {
      type: "audio/mpeg",
    });
  } finally {
    ffmpeg.off("progress", progressHandler);

    try {
      await ffmpeg.deleteFile(inputFilename);
    } catch {
      // Ignore cleanup errors.
    }

    try {
      await ffmpeg.deleteFile(outputFilename);
    } catch {
      // Ignore cleanup errors.
    }
  }
}