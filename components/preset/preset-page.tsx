"use client";

import Link from "next/link";
import { useState } from "react";

import { CommandPreview } from "@/components/command-preview";
import { PresetForm } from "@/components/preset/preset-form";
import { buildVideoToMp3Command } from "@/lib/ffmpeg/command-builder";
import type { Preset } from "@/lib/ffmpeg/types/preset";

type PresetPageProps<
  TOptions extends Record<string, string | number>,
> = {
  preset: Preset<TOptions>;
};

export function PresetPage<
  TOptions extends Record<string, string | number>,
>({
  preset,
}: PresetPageProps<TOptions>) {
  const [values, setValues] = useState(preset.options);

  function handleOptionChange(
    id: string,
    value: string | number,
  ) {
    setValues((current) => ({
      ...current,
      [id]: value,
    }));
  }

  const command =
    preset.id === "video-to-mp3"
      ? buildVideoToMp3Command({
          input: String(values.input),
          bitrate: Number(values.bitrate),
          output: String(values.output),
        })
      : "";

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div>
        <Link
          href="/"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
        >
          ← Back to presets
        </Link>

        <h1 className="mt-8 text-3xl font-semibold tracking-tight">
          {preset.title}
        </h1>

        <p className="mt-3 text-zinc-500">
          {preset.description}
        </p>
      </div>

      <section className="mt-10">
        <PresetForm
          fields={preset.fields}
          values={values}
          onChange={handleOptionChange}
        />
      </section>

      <CommandPreview command={command} />
<section className="mt-12 border-t border-zinc-200 pt-8">
  <h2 className="text-sm font-medium">
    {preset.explanation.title}
  </h2>

  <p className="mt-3 text-sm leading-6 text-zinc-500">
    {preset.explanation.description}
  </p>

  <div className="mt-6 space-y-4">
    {preset.explanation.parameters.map(
      (parameter) => (
        <div
          key={parameter.flag}
          className="flex gap-4"
        >
          <code className="shrink-0 rounded-md bg-zinc-100 px-2 py-1 font-mono text-xs text-zinc-700">
            {parameter.flag}
          </code>

          <p className="text-sm leading-6 text-zinc-500">
            {parameter.description}
          </p>
        </div>
      ),
    )}
  </div>
</section>
    </main>
  );
}