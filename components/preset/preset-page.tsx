"use client";

import Link from "next/link";
import { CommandPreview } from "@/components/command-preview";
import { PresetForm } from "@/components/preset/preset-form";
import type { Preset } from "@/lib/ffmpeg/types/preset";
import { buildCommand } from "@/lib/ffmpeg/command-builder/build-command";
import { usePresetValues } from "./use-preset-values";

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

  const {
    values,
    handleOptionChange,
    handleFileChange,
  } = usePresetValues(preset);

  const command = buildCommand(
    preset,
    values,
  );

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
          onFileChange={handleFileChange}
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

        {preset.explanation.dynamic && (
          <div className="mt-6 rounded-2xl bg-zinc-50 p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              {preset.explanation.dynamic.title}
            </p>

            {(() => {
              const dynamic =
                preset.explanation.dynamic;

              const currentValue =
                String(values[dynamic.field]);

              const explanation =
                dynamic.values[currentValue];

              if (!explanation) {
                return null;
              }

              return (
                <div className="mt-3">
                  <p className="font-medium tracking-tight">
                    {explanation.label}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    {explanation.description}
                  </p>
                </div>
              );
            })()}
          </div>
        )}

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