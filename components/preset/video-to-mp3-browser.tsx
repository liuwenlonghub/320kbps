"use client";

import { useEffect, useState } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import {
  fetchFile,
  toBlobURL,
} from "@ffmpeg/util";

const ffmpeg = new FFmpeg();
let loaded = false;

async function ensureFFmpegLoaded(
  onProgress: (progress: number) => void,
) {
  if (loaded) {
    return;
  }

  const baseURL =
    "https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd";

  ffmpeg.on("progress", ({ progress }) => {
    onProgress(Math.round(progress * 100));
  });

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

type VideoToMp3BrowserProps = {
  file: File | null;
  bitrate: number;
  outputFilename: string;
};

type Status =
  | "idle"
  | "loading"
  | "converting"
  | "done"
  | "error";

export function VideoToMp3Browser({
  file,
  bitrate,
  outputFilename,
}: VideoToMp3BrowserProps) {
  const [status, setStatus] =
    useState<Status>("idle");

  const [progress, setProgress] =
    useState(0);

  const [outputUrl, setOutputUrl] =
    useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (outputUrl) {
        URL.revokeObjectURL(outputUrl);
      }
    };
  }, [outputUrl]);

  async function handleConvert() {
    if (!file) {
      return;
    }

    setStatus("loading");
    setProgress(0);

    if (outputUrl) {
      URL.revokeObjectURL(outputUrl);
      setOutputUrl(null);
    }

    try {
      await ensureFFmpegLoaded(setProgress);

      setStatus("converting");

      const inputName = file.name;
      const outputName = outputFilename;

      await ffmpeg.writeFile(
        inputName,
        await fetchFile(file),
      );

      await ffmpeg.exec([
        "-i",
        inputName,
        "-codec:a",
        "libmp3lame",
        "-b:a",
        `${bitrate}k`,
        outputName,
      ]);

      const data = await ffmpeg.readFile(
        outputName,
      );

      if (typeof data === "string") {
        throw new Error(
          "Unexpected FFmpeg output.",
        );
      }

      const buffer = new ArrayBuffer(
        data.byteLength,
      );

      new Uint8Array(buffer).set(data);

      const blob = new Blob([buffer], {
        type: "audio/mpeg",
      });

      setOutputUrl(URL.createObjectURL(blob));
      setProgress(100);
      setStatus("done");

      await ffmpeg.deleteFile(inputName);
      await ffmpeg.deleteFile(outputName);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="mt-10 rounded-2xl bg-zinc-50 p-6">
      <div>
        <h2 className="text-sm font-medium">
          Convert in your browser
        </h2>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Runs locally in your browser. Your file
          is not uploaded.
        </p>
      </div>

      <div className="mt-6">
        {status === "idle" && (
          <button
            type="button"
            onClick={handleConvert}
            disabled={!file}
            className="inline-flex h-10 items-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-300"
          >
            Convert in browser
          </button>
        )}

        {status === "loading" && (
          <div>
            <p className="text-sm text-zinc-500">
              Loading FFmpeg…
            </p>

            <p className="mt-2 text-xs leading-5 text-zinc-400">
              Loading FFmpeg.wasm for the first time
              may take a moment.
            </p>
          </div>
        )}

        {status === "converting" && (
          <div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-500">
                Converting…
              </span>

              <span className="font-medium text-zinc-950">
                {progress}%
              </span>
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-200">
              <div
                className="h-full rounded-full bg-zinc-950 transition-all"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        )}

        {status === "done" && outputUrl && (
          <div>
            <p className="text-sm font-medium">
              Conversion complete
            </p>

            <a
              href={outputUrl}
              download={outputFilename}
              className="mt-4 inline-flex h-10 items-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              Download {outputFilename}
            </a>
          </div>
        )}

        {status === "error" && (
          <div>
            <p className="text-sm text-red-600">
              Conversion failed. Please try another
              video.
            </p>

            <button
              type="button"
              onClick={handleConvert}
              className="mt-4 text-sm font-medium text-zinc-950 underline underline-offset-4"
            >
              Try again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}