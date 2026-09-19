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

export async function convertMkvToMp4InBrowser(
  file: File,
  onProgress?: (progress: number) => void,
): Promise<Blob> {
  const instance = await getFFmpeg();

  instance.on("progress", ({ progress }) => {
    onProgress?.(
      Math.min(99, Math.round(progress * 100)),
    );
  });

  const inputName = "input.mkv";
  const outputName = "output.mp4";

  await instance.writeFile(
    inputName,
    await fetchFile(file),
  );

  await instance.exec([
    "-i",
    inputName,
    "-c",
    "copy",
    "-movflags",
    "+faststart",
    outputName,
  ]);

  const data = await instance.readFile(outputName);

  if (typeof data === "string") {
    throw new Error(
      "Unexpected FFmpeg output.",
    );
  }

  const buffer = new ArrayBuffer(
    data.byteLength,
  );

  new Uint8Array(buffer).set(data);

  return new Blob([buffer], {
    type: "video/mp4",
  });
}