"use client";

import { useState } from "react";
import { videoToMp3Preset } from "@/lib/ffmpeg/presets/video-to-mp3";
import { buildVideoToMp3Command } from "@/lib/ffmpeg/command-builder";
import { CommandPreview } from "@/components/command-preview";
import { PresetForm } from "@/components/preset/preset-form";
import Link from "next/link";

export default function VideoToMp3Page() {
const [values, setValues] = useState({
  input: videoToMp3Preset.options.input,
  bitrate: videoToMp3Preset.options.bitrate,
  output: videoToMp3Preset.options.output,
});

function handleOptionChange(
  id: string,
  value: string | number,
) {
  setValues((current) => ({
    ...current,
    [id]: value,
  }));
}

const command = buildVideoToMp3Command({
  input: String(values.input),
  bitrate: Number(values.bitrate),
  output: String(values.output),
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

            </div>

            <div>
              <PresetForm
                fields={videoToMp3Preset.fields}
                values={values}
                onChange={handleOptionChange}
              />
            </div>

            <div>
              <label
                htmlFor="output"
                className="block text-sm font-medium"
              >
                Output file
              </label>
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