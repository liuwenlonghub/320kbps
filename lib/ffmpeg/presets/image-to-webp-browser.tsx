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

export async function convertImageInBrowser(
  file: File,
  quality: number | undefined,
  onProgress?: (progress: number) => void,
  compressionLevel?: number,
  outputFormat: "webp" | "jpeg" | "png" = "webp",
  firstFrameOnly = false,
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
  const outputFilename = `output.${
    outputFormat === "jpeg" ? "jpg" : outputFormat
  }`;

  try {
    await ffmpeg.writeFile(
      inputFilename,
      await fetchFile(file),
    );

    const command = ["-i", inputFilename];

    if (
      outputFormat === "jpeg" ||
      outputFormat === "png" ||
      firstFrameOnly
    ) {
      command.push("-frames:v", "1", "-c:v", outputFormat === "jpeg" ? "mjpeg" : "png");
    }

    if (outputFormat !== "png") {
      if (quality === undefined) {
        throw new Error("Quality is required for JPEG and WebP output.");
      }

      if (outputFormat === "webp") {
        command.push("-c:v", "libwebp");
      }

      command.push("-q:v", String(quality));
    }

    if (outputFormat === "webp" && compressionLevel !== undefined) {
      command.push("-compression_level", String(compressionLevel));
    }

    command.push(outputFilename);
    await ffmpeg.exec(command);

    const data = await ffmpeg.readFile(outputFilename);

    if (typeof data === "string") {
      throw new Error(
        "FFmpeg returned text instead of binary data.",
      );
    }

    const buffer = new ArrayBuffer(data.byteLength);
    new Uint8Array(buffer).set(data);

    return new Blob([buffer], {
      type:
        outputFormat === "jpeg"
          ? "image/jpeg"
          : outputFormat === "png"
            ? "image/png"
            : "image/webp",
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