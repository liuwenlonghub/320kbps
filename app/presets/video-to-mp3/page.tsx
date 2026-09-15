"use client";

import { useState } from "react";
import { videoToMp3Preset } from "@/lib/ffmpeg/presets/video-to-mp3";
import { buildVideoToMp3Command } from "@/lib/ffmpeg/command-builder";
import { CommandPreview } from "@/components/command-preview";
import Link from "next/link";

export default function VideoToMp3Page() {
  const [input, setInput] = useState("input.mp4");
  const [bitrate, setBitrate] = useState(320);
  const [output, setOutput] = useState("output.mp3");

  const bitrateField = videoToMp3Preset.fields.find(
    (field) => field.id === "bitrate",
  );

const command = buildVideoToMp3Command({
  input,
  bitrate,
  output,
});

  
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <header className="flex h-20 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            320kbps
          </Link>

          <Link
            href="/"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
          >
            Back
          </Link>
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
                className="text-sm font-medium"
              >
                Bitrate
              </label>

              <select
                id="bitrate"
                value={bitrate}
                onChange={(event) =>
                  setBitrate(Number(event.target.value))
                }
                className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-zinc-400"
              >
                {bitrateField?.type === "select" &&
                  bitrateField.options.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
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

          <CommandPreview command={command} />

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