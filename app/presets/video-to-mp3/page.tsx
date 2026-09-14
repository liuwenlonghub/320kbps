"use client";

import { useMemo, useState } from "react";
import {
  buildVideoToMp3Command,
  videoToMp3Preset,
} from "@/lib/ffmpeg/presets/video-to-mp3";

export default function VideoToMp3Page() {
  const [input, setInput] = useState("input.mp4");
  const [bitrate, setBitrate] = useState(320);
  const [output, setOutput] = useState("output.mp3");
  const [copied, setCopied] = useState(false);

  const command = useMemo(() => {
    return buildVideoToMp3Command({
      input,
      bitrate,
      output,
    });
  }, [input, bitrate, output]);

  async function copyCommand() {
    await navigator.clipboard.writeText(command);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <header className="flex h-20 items-center justify-between">
          <a href="/" className="text-lg font-semibold tracking-tight">
            320kbps
          </a>

          <a
            href="/"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
          >
            Back
          </a>
        </header>

        <section className="py-16">
          <p className="text-sm font-medium text-zinc-500">
            {videoToMp3Preset.category === "audio"
              ? "Audio preset"
              : "Media preset"}
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {videoToMp3Preset.title}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-500">
            {videoToMp3Preset.description}
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <label
                htmlFor="input"
                className="block text-sm font-medium"
              >
                Input file
              </label>

              <input
                id="input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="mt-2 h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm outline-none transition focus:border-zinc-400"
              />
            </div>

            <div>
              <label
                htmlFor="bitrate"
                className="block text-sm font-medium"
              >
                MP3 bitrate
              </label>

              <select
                id="bitrate"
                value={bitrate}
                onChange={(event) =>
                  setBitrate(Number(event.target.value))
                }
                className="mt-2 h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none transition focus:border-zinc-400"
              >
                {videoToMp3Preset.options.bitrate.map((value) => (
                  <option key={value} value={value}>
                    {value} kbps
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="output"
                className="block text-sm font-medium"
              >
                Output file
              </label>

              <input
                id="output"
                value={output}
                onChange={(event) => setOutput(event.target.value)}
                className="mt-2 h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm outline-none transition focus:border-zinc-400"
              />
            </div>
          </div>

          <section className="mt-12">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-medium">
                FFmpeg command
              </h2>

              <button
                onClick={copyCommand}
                className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
              >
                {copied ? "Copied!" : "Copy command"}
              </button>
            </div>

            <div className="overflow-x-auto rounded-2xl bg-zinc-950 p-6">
              <code className="whitespace-pre font-mono text-sm leading-7 text-zinc-100">
                {command}
              </code>
            </div>
          </section>

          <section className="mt-12 border-t border-zinc-200 pt-10">
            <h2 className="text-lg font-semibold tracking-tight">
              What does this command do?
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-500">
              <p>
                <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-zinc-900">
                  -i
                </code>{" "}
                specifies the input media file.
              </p>

              <p>
                <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-zinc-900">
                  -codec:a libmp3lame
                </code>{" "}
                tells FFmpeg to encode the audio using the MP3 encoder.
              </p>

              <p>
                <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-zinc-900">
                  -b:a 320k
                </code>{" "}
                sets the audio bitrate to 320 kbps.
              </p>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}