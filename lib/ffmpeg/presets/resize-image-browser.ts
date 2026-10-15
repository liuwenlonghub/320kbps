import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

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

export async function resizeImageInBrowser(
  file: File,
  width: number,
  onProgress?: (progress: number) => void,
): Promise<Blob> {
  await ensureFFmpegLoaded();

  const progressHandler = ({ progress }: { progress: number }) => {
    onProgress?.(Math.min(100, Math.round(progress * 100)));
  };

  const extension = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const inputFilename = `input-${Date.now()}.${extension}`;
  const outputFilename = `output.${extension}`;

  ffmpeg.on("progress", progressHandler);

  try {
    await ffmpeg.writeFile(inputFilename, await fetchFile(file));
    await ffmpeg.exec([
      "-i",
      inputFilename,
      "-vf",
      `scale=${width}:-1`,
      outputFilename,
    ]);

    const data = await ffmpeg.readFile(outputFilename);

    if (typeof data === "string") {
      throw new Error("FFmpeg returned text instead of binary data.");
    }

    const buffer = new ArrayBuffer(data.byteLength);
    new Uint8Array(buffer).set(data);

    return new Blob([buffer], {
      type: file.type || "application/octet-stream",
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
