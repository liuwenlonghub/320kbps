import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import {
  getAudioFormatEncoder,
  type AudioOutputFormat,
} from "./audio-to-audio-format";

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
    progressCallback?.(Math.min(100, Math.round(progress * 100)));
  });

  ffmpeg = instance;
  return instance;
}

const audioMimeTypes: Record<AudioOutputFormat, string> = {
  mp3: "audio/mpeg",
  wav: "audio/wav",
  flac: "audio/flac",
  m4a: "audio/mp4",
  aac: "audio/aac",
  ogg: "audio/ogg",
  opus: "audio/opus",
};

export async function audioToAudioFormatInBrowser(
  file: File,
  format: AudioOutputFormat,
  bitrate: number,
  onProgress?: (progress: number) => void,
): Promise<Blob> {
  const instance = await getFFmpeg();
  progressCallback = onProgress;
  const inputName = `input-${Date.now()}`;
  const outputName = `output.${format}`;
  let inputWritten = false;
  let outputWritten = false;

  try {
    await instance.writeFile(inputName, await fetchFile(file));
    inputWritten = true;

    const command = [
      "-y",
      "-i",
      inputName,
      "-vn",
      "-c:a",
      getAudioFormatEncoder(format),
    ];

    if (format !== "wav" && format !== "flac") {
      command.push("-b:a", `${bitrate}k`);
    }

    command.push(outputName);
    await instance.exec(command);
    outputWritten = true;

    const data = await instance.readFile(outputName);

    if (typeof data === "string") {
      throw new Error("Unexpected FFmpeg output.");
    }

    const buffer = new ArrayBuffer(data.byteLength);
    new Uint8Array(buffer).set(data);

    return new Blob([buffer], { type: audioMimeTypes[format] });
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
