import { FFmpeg } from "@ffmpeg/ffmpeg";
import {
  fetchFile,
  toBlobURL,
} from "@ffmpeg/util";

let ffmpeg: FFmpeg | null = null;

async function getFFmpeg() {
  if (ffmpeg) {
    return ffmpeg;
  }

  const instance = new FFmpeg();

  const baseURL =
    "https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd";

  await instance.load({
    coreURL: await toBlobURL(
      `${baseURL}/ffmpeg-core.js`,
      "text/javascript",
    ),
    wasmURL: await toBlobURL(
      `${baseURL}/ffmpeg-core.wasm`,
      "application/wasm",
    ),
  });

  ffmpeg = instance;

  return instance;
}

export async function trimAudioInBrowser(
  file: File,
  start: string,
  duration: string,
  onProgress?: (progress: number) => void,
): Promise<Blob> {
  const instance = await getFFmpeg();

  instance.on("progress", ({ progress }) => {
    onProgress?.(
      Math.min(100, Math.round(progress * 100)),
    );
  });

  const extension =
    file.name.split(".").pop()?.toLowerCase() ?? "mp3";
  const inputName = `input.${extension}`;
  const outputName = `output.${extension}`;

  await instance.writeFile(
    inputName,
    await fetchFile(file),
  );

  await instance.exec([
    "-ss",
    start,
    "-i",
    inputName,
    "-t",
    duration,
    "-vn",
    "-c:a",
    "copy",
    outputName,
  ]);

  const data = await instance.readFile(outputName);

  if (typeof data === "string") {
    throw new Error("Unexpected FFmpeg output.");
  }

  const buffer = new ArrayBuffer(data.byteLength);
  new Uint8Array(buffer).set(data);

  return new Blob([buffer], {
    type: file.type || "application/octet-stream",
  });
}
