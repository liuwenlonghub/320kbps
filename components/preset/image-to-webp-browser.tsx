"use client";

import { useEffect, useState } from "react";
import { convertImageToWebpInBrowser } from "@/lib/ffmpeg/presets/image-to-webp-browser";

type ImageToWebpBrowserProps = {
  file: File | null;
  quality: number;
  outputFilename: string;
};

export function ImageToWebpBrowser({
  file,
  quality,
  outputFilename,
}: ImageToWebpBrowserProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "converting" | "done" | "error"
  >("idle");

  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] =
    useState<string | null>(null);

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

      const blob = await convertImageToWebpInBrowser(
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
    <section className="mt-8">
      <button
        type="button"
        onClick={handleConvert}
        disabled={!file || isWorking}
        className="rounded-xl bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
      >
        {status === "loading"
          ? "Loading FFmpeg…"
          : status === "converting"
            ? `Converting… ${progress}%`
            : "Convert in browser"}
      </button>

      {status === "loading" && (
        <p className="mt-3 text-sm text-zinc-500">
          Loading FFmpeg.wasm for the first time may take a moment.
        </p>
      )}

      {status === "converting" && (
        <div className="mt-4">
          <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
            <div
              className="h-full rounded-full bg-zinc-950 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-2 text-sm text-zinc-500">
            {progress}% complete
          </p>
        </div>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">
          Conversion failed. Please try another image.
        </p>
      )}

      {status === "done" && downloadUrl && (
        <div className="mt-4">
          <a
            href={downloadUrl}
            download={outputFilename}
            className="text-sm font-medium underline underline-offset-4"
          >
            Download {outputFilename}
          </a>
        </div>
      )}
    </section>
  );
}