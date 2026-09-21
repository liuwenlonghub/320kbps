"use client";

import { useEffect, useState } from "react";
import { convertVideoToMp4InBrowser } from "@/lib/ffmpeg/presets/video-to-mp4-browser";

type VideoToMp4BrowserProps = {
  file: File | null;
  quality: number;
  outputFilename: string;
};

export function VideoToMp4Browser({
  file,
  quality,
  outputFilename,
}: VideoToMp4BrowserProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "converting" | "done" | "error"
  >("idle");

  const [progress, setProgress] = useState(0);

  const [downloadUrl, setDownloadUrl] =
    useState<string | null>(null);

  useEffect(() => {
    setStatus("idle");
    setProgress(0);

    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
      setDownloadUrl(null);
    }
  }, [file]);

  useEffect(() => {
    return () => {
      if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
      }
    };
  }, [downloadUrl]);

  async function handleConvert() {
    if (!file) {
      return;
    }

    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
      setDownloadUrl(null);
    }

    try {
      setStatus("loading");
      setProgress(0);

      const blob =
        await convertVideoToMp4InBrowser(
          file,
          quality,
          (value) => {
            setStatus("converting");
            setProgress(value);
          },
        );

      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
      setProgress(100);
      setStatus("done");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  const isWorking =
    status === "loading" ||
    status === "converting";

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

        {status === "error" && (
          <div>
            <p className="text-sm text-red-600">
              Conversion failed. Please try another
              video.
            </p>

            <button
              type="button"
              onClick={handleConvert}
              disabled={isWorking || !file}
              className="mt-4 text-sm font-medium text-zinc-950 underline underline-offset-4 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Try again
            </button>
          </div>
        )}

        {status === "done" && downloadUrl && (
          <div>
            <p className="text-sm font-medium">
              Conversion complete
            </p>

            <a
              href={downloadUrl}
              download={outputFilename}
              className="mt-4 inline-flex h-10 items-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              Download {outputFilename}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}