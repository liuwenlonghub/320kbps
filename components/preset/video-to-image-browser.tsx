"use client";

import { useEffect, useState } from "react";
import { extractVideoFrameInBrowser } from "@/lib/ffmpeg/presets/video-to-image-browser";

type Status =
  | "idle"
  | "loading"
  | "converting"
  | "done"
  | "error";

type VideoToImageBrowserProps = {
  file: File | null;
  time: string;
  outputFilename: string;
};

export function VideoToImageBrowser({
  file,
  time,
  outputFilename,
}: VideoToImageBrowserProps) {
  const [status, setStatus] =
    useState<Status>("idle");

  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] =
    useState<string | null>(null);
  const [error, setError] = useState<
    string | null
  >(null);

  useEffect(() => {
    setStatus("idle");
    setProgress(0);
    setError(null);

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

    try {
      setStatus("loading");
      setProgress(0);
      setError(null);

      const blob =
        await extractVideoFrameInBrowser(
          file,
          time,
          setProgress,
        );

      const url =
        URL.createObjectURL(blob);

      setDownloadUrl(url);
      setStatus("done");
    } catch (error) {
      console.error(error);

      setStatus("error");
      setError(
        error instanceof Error
          ? error.message
          : "Conversion failed.",
      );
    }
  }

  return (
    <section className="mt-12">
      <div className="rounded-2xl border border-zinc-200 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-medium">
              Convert in browser
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Extract a single frame locally in your browser.
            </p>
          </div>

          <button
            type="button"
            onClick={handleConvert}
            disabled={
              !file ||
              status === "loading" ||
              status === "converting"
            }
            className="rounded-xl bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {status === "loading"
              ? "Loading FFmpeg..."
              : status === "converting"
                ? "Extracting..."
                : "Extract frame"}
          </button>
        </div>

        {(status === "loading" ||
          status === "converting") && (
          <div className="mt-6">
            <div className="mb-2 flex justify-between text-xs text-zinc-500">
              <span>
                {status === "loading"
                  ? "Loading FFmpeg..."
                  : "Extracting frame..."}
              </span>

              <span>{progress}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
              <div
                className="h-full rounded-full bg-zinc-900 transition-all"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        )}

        {status === "done" &&
          downloadUrl && (
            <div className="mt-6">
              <a
                href={downloadUrl}
                download={outputFilename}
                className="inline-flex rounded-xl border border-zinc-300 px-5 py-2.5 text-sm font-medium transition hover:bg-zinc-50"
              >
                Download image
              </a>
            </div>
          )}

        {status === "error" && error && (
          <p className="mt-6 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    </section>
  );
}