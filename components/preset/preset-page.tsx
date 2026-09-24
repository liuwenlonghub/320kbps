"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";
import { CommandPreview } from "@/components/command-preview";
import { PresetForm } from "@/components/preset/preset-form";
import type { Preset } from "@/lib/ffmpeg/types/preset";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { buildCommand } from "@/lib/ffmpeg/command-builder/build-command";
import { usePresetValues } from "./use-preset-values";

const ResizeVideoBrowser = dynamic(
  () =>
    import("./resize-video-browser").then(
      (module) => module.ResizeVideoBrowser,
    ),
  {
    ssr: false,
  },
);

const CompressVideoBrowser = dynamic(
  () =>
    import("./compress-video-browser").then(
      (module) => module.CompressVideoBrowser,
    ),
  {
    ssr: false,
  },
);

const WebmToMp4Browser = dynamic(
  () =>
    import("./webm-to-mp4-browser").then(
      (module) => module.WebmToMp4Browser,
    ),
  {
    ssr: false,
  },
);

const ImageToWebpBrowser = dynamic(
  () =>
    import("./image-to-webp-browser").then(
      (module) => module.ImageToWebpBrowser,
    ),
  {
    ssr: false,
  },
);

const VideoToMp3Browser = dynamic(
  () =>
    import("./video-to-mp3-browser").then(
      (module) => module.VideoToMp3Browser,
    ),
  {
    ssr: false,
  },
);

const WavToMp3Browser = dynamic(
  () =>
    import("./wav-to-mp3-browser").then(
      (mod) => mod.WavToMp3Browser,
    ),
  { ssr: false },
);

const FlacToMp3Browser = dynamic(
  () =>
    import("./flac-to-mp3-browser").then(
      (mod) => mod.FlacToMp3Browser,
    ),
  { ssr: false },
);

const Mp4ToWebmBrowser = dynamic(
  () =>
    import("./mp4-to-webm-browser").then(
      (mod) => mod.Mp4ToWebmBrowser,
    ),
  { ssr: false },
);

const TrimVideoBrowser = dynamic(
  () =>
    import("./trim-video-browser").then(
      (mod) => mod.TrimVideoBrowser,
    ),
  { ssr: false },
);

const VideoToImageBrowser = dynamic(
  () =>
    import("./video-to-image-browser").then(
      (mod) => mod.VideoToImageBrowser,
    ),
  { ssr: false },
);

const VideoToGifBrowser = dynamic(
  () =>
    import("./video-to-gif-browser").then(
      (mod) => mod.VideoToGifBrowser,
    ),
  { ssr: false },
);

const MkvToMp4Browser = dynamic(
  () =>
    import("./mkv-to-mp4-browser").then(
      (mod) => mod.MkvToMp4Browser,
    ),
  { ssr: false },
);

const MovToMp4Browser = dynamic(
  () =>
    import("./mov-to-mp4-browser").then(
      (mod) => mod.MovToMp4Browser,
    ),
  { ssr: false },
);

const VideoToMp4Browser = dynamic(
  () =>
    import("./video-to-mp4-browser").then(
      (mod) => mod.VideoToMp4Browser,
    ),
  { ssr: false },
);

type PresetPageProps<
  TOptions extends Record<string, string | number>,
> = {
  preset: Preset<TOptions>;
  locale?: Locale;
};

export function PresetPage<
  TOptions extends Record<string, string | number>,
>({
  preset,
  locale = "en",
}: PresetPageProps<TOptions>) {
  const t = getDictionary(locale);
  const {
    values,
    handleOptionChange,
    handleFileChange,
  } = usePresetValues(preset);

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const command = buildCommand(
    preset,
    values,
  );

  function handleBrowserFileChange(
    id: string,
    file: File,
  ) {
    handleFileChange(id, file);

    if (id === "input") {
      setSelectedFile(file);
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div>
        <Link
          href={`/${locale}`}
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
        >
          ←{" "}
          {t.home.backToPresets}
        </Link>

        <h1 className="mt-8 text-3xl font-semibold tracking-tight">
          {preset.id === "video-to-mp4"
            ? t.presets.videoToMp4.title
            : preset.id === "mkv-to-mp4"
              ? t.presets.mkvToMp4.title
              : preset.id === "video-to-mp3"
                ? t.presets.videoToMp3.title
                : preset.id === "wav-to-mp3"
                  ? t.presets.wavToMp3.title
                  : preset.id === "flac-to-mp3"
                    ? t.presets.flacToMp3.title
                    : preset.title}
        </h1>

        <p className="mt-3 text-zinc-500">
          {preset.id === "video-to-mp4"
            ? t.presets.videoToMp4.description
            : preset.id === "mkv-to-mp4"
              ? t.presets.mkvToMp4.description
              : preset.id === "video-to-mp3"
                ? t.presets.videoToMp3.description
                : preset.id === "wav-to-mp3"
                  ? t.presets.wavToMp3.description
                  : preset.id === "flac-to-mp3"
                    ? t.presets.flacToMp3.description
                    : preset.description}
        </p>
      </div>

      <section className="mt-10">
        <PresetForm
          fields={
            preset.id === "video-to-mp4"
              ? preset.fields.map((field) => {
                  if (field.id === "input") {
                    return {
                      ...field,
                      label: t.presets.videoToMp4.inputLabel,
                    };
                  }

                  if (field.id === "output") {
                    return {
                      ...field,
                      label: t.presets.videoToMp4.outputLabel,
                      placeholder:
                        t.presets.videoToMp4.outputPlaceholder,
                    };
                  }

                  return field;
                })
              : preset.id === "mkv-to-mp4"
                ? preset.fields.map((field) => {
                    if (field.id === "input") {
                      return {
                        ...field,
                        label: t.presets.mkvToMp4.inputLabel,
                      };
                    }

                    if (field.id === "output") {
                      return {
                        ...field,
                        label: t.presets.mkvToMp4.outputLabel,
                        placeholder:
                          t.presets.mkvToMp4.outputPlaceholder,
                      };
                    }

                    return field;
                  })
                : preset.id === "video-to-mp3"
                  ? preset.fields.map((field) => {
                      if (field.id === "input") {
                        return {
                          ...field,
                          label: t.presets.videoToMp3.inputLabel,
                        };
                      }

                      if (field.id === "output") {
                        return {
                          ...field,
                          label: t.presets.videoToMp3.outputLabel,
                          placeholder:
                            t.presets.videoToMp3.outputPlaceholder,
                        };
                      }

                      if (field.id === "bitrate") {
                        return {
                          ...field,
                          label: t.presets.videoToMp3.bitrateLabel,
                        };
                      }

                      return field;
                    })

                : preset.id === "wav-to-mp3"
                  ? preset.fields.map((field) => {
                      if (field.id === "input") {
                        return {
                          ...field,
                          label: t.presets.wavToMp3.inputLabel,
                        };
                      }

                      if (field.id === "output") {
                        return {
                          ...field,
                          label: t.presets.wavToMp3.outputLabel,
                          placeholder:
                            t.presets.wavToMp3.outputPlaceholder,
                        };
                      }

                      if (field.id === "bitrate") {
                        return {
                          ...field,
                          label: t.presets.wavToMp3.bitrateLabel,
                        };
                      }

                      return field;
                    })
                : preset.id === "flac-to-mp3"
                  ? preset.fields.map((field) => {
                      if (field.id === "input") {
                        return {
                          ...field,
                          label: t.presets.flacToMp3.inputLabel,
                        };
                      }

                      if (field.id === "output") {
                        return {
                          ...field,
                          label: t.presets.flacToMp3.outputLabel,
                          placeholder:
                            t.presets.flacToMp3.outputPlaceholder,
                        };
                      }

                      if (field.id === "bitrate") {
                        return {
                          ...field,
                          label: t.presets.flacToMp3.bitrateLabel,
                        };
                      }

                      return field;
                    })
                : preset.fields
          }
          values={values}
          onChange={handleOptionChange}
          onFileChange={handleBrowserFileChange}
        />
      </section>

      {preset.id === "resize-video" && (
        <ResizeVideoBrowser
          file={selectedFile}
          width={Number(values.width)}
          outputFilename={String(values.output)}
        />
      )}

      {preset.id === "compress-video" && (
        <CompressVideoBrowser
          file={selectedFile}
          quality={
            values.quality as
              | "high"
              | "balanced"
              | "small"
          }
          outputFilename={String(values.output)}
        />
      )}

      {preset.id === "webm-to-mp4" && (
        <WebmToMp4Browser
          file={selectedFile}
          outputFilename={String(values.output)}
        />
      )}

      {preset.id === "image-to-webp" && (
        <ImageToWebpBrowser
          file={selectedFile}
          quality={Number(values.quality)}
          outputFilename={String(values.output)}
        />
      )}

      {preset.id === "video-to-mp3" && (
        <VideoToMp3Browser
          file={selectedFile}
          bitrate={Number(values.bitrate)}
          outputFilename={String(values.output)}
        />
      )}

      {preset.id === "wav-to-mp3" && (
        <WavToMp3Browser
          file={selectedFile}
          bitrate={Number(values.bitrate)}
          outputFilename={String(values.output)}
        />
      )}

      {preset.id === "flac-to-mp3" && (
        <FlacToMp3Browser
          file={selectedFile}
          bitrate={Number(values.bitrate)}
          outputFilename={String(values.output)}
        />
      )}

      {preset.id === "mp4-to-webm" && (
        <Mp4ToWebmBrowser
          file={selectedFile}
          outputFilename={String(values.output)}
        />
      )}

      {preset.id === "trim-video" && (
        <TrimVideoBrowser
          file={selectedFile}
          start={String(values.start)}
          duration={String(values.duration)}
          outputFilename={String(values.output)}
        />
      )}

      {preset.id === "video-to-image" && (
        <VideoToImageBrowser
          file={selectedFile}
          time={String(values.time)}
          outputFilename={String(values.output)}
        />
      )}

      {preset.id === "video-to-gif" && (
        <VideoToGifBrowser
          file={selectedFile}
          start={String(values.start)}
          duration={String(values.duration)}
          fps={Number(values.fps)}
          width={Number(values.width)}
          outputFilename={String(values.output)}
        />
      )}

      {preset.id === "mkv-to-mp4" && (
        <MkvToMp4Browser
          file={selectedFile}
          outputFilename={String(values.output)}
        />
      )}

      {preset.id === "mov-to-mp4" && (
        <MovToMp4Browser
          file={selectedFile}
          outputFilename={String(values.output)}
        />
      )}

      {preset.id === "video-to-mp4" && (
        <VideoToMp4Browser
          file={selectedFile}
          outputFilename={String(values.output)}
        />
      )}

      <CommandPreview command={command} />

      <section className="mt-12 border-t border-zinc-200 pt-8">
        <h2 className="text-sm font-medium">
          {preset.id === "video-to-mp3"
            ? t.presets.videoToMp3.title
            : preset.id === "wav-to-mp3"
              ? t.presets.wavToMp3.title
              : preset.id === "flac-to-mp3"
                ? t.presets.flacToMp3.title
                : preset.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          {preset.id === "video-to-mp3"
            ? t.presets.videoToMp3.description
            : preset.id === "wav-to-mp3"
              ? t.presets.wavToMp3.description
              : preset.id === "flac-to-mp3"
                ? t.presets.flacToMp3.description
                : preset.description}
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
          {(preset.id === "video-to-mp4"
            ? t.presets.videoToMp4.explanation.parameters
            : preset.id === "mkv-to-mp4"
              ? t.presets.mkvToMp4.explanation.parameters
              : preset.id === "video-to-mp3"
                ? t.presets.videoToMp3.explanation.parameters
                : preset.id === "wav-to-mp3"
                  ? t.presets.wavToMp3.explanation.parameters
                  : preset.id === "flac-to-mp3"
                    ? t.presets.flacToMp3.explanation.parameters
                    : preset.explanation.parameters
          ).map((parameter) => (
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
          ))}
        </div>
      </section>
    </main>
  );
}