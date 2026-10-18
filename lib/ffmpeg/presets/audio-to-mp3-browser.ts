import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

let ffmpeg: FFmpeg | null = null;
let progressCallback: ((progress: number) => void) | undefined;

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

  instance.on("progress", ({ progress }) => {
    progressCallback?.(
      Math.min(100, Math.round(progress * 100)),
    );
  });

  ffmpeg = instance;

  return instance;
}

export async function audioToMp3InBrowser(
  file: File,
  bitrate: number,
  onProgress?: (progress: number) => void,
): Promise<Blob> {
  const instance = await getFFmpeg();
  progressCallback = onProgress;
  const inputName = "input";
  const outputName = "output.mp3";
  let inputWritten = false;
  let outputWritten = false;

  try {
    await instance.writeFile(
      inputName,
      await fetchFile(file),
    );
    inputWritten = true;

    await instance.exec([
      "-y",
      "-i",
      inputName,
      "-vn",
      "-codec:a",
      "libmp3lame",
      "-b:a",
      `${bitrate}k`,
      outputName,
    ]);
    outputWritten = true;

    const data =
      await instance.readFile(outputName);

    if (typeof data === "string") {
      throw new Error("Unexpected FFmpeg output.");
    }

    const buffer = new ArrayBuffer(data.byteLength);
    new Uint8Array(buffer).set(data);

    return new Blob([buffer], {
      type: "audio/mpeg",
    });
  } finally {
    progressCallback = undefined;
    const cleanup = [];

    if (inputWritten) {
      cleanup.push(instance.deleteFile(inputName));
    }

    if (outputWritten) {
      cleanup.push(instance.deleteFile(outputName));
    }

    await Promise.all(cleanup);
  }
}