import { presets } from "@/lib/ffmpeg/presets";
import type { PresetCategory } from "@/lib/ffmpeg/types/preset";
import Link from "next/link";
import { PresetGrid } from "@/components/preset-grid";

export default function Home() {
  const categories: PresetCategory[] = [
    "audio",
    "video",
    "image",
  ];

  return (
    <div className="mx-auto max-w-[1100px] bg-white px-[6vw] text-zinc-950">
      {/* Hero */}
      <section className="flex min-h-[680px] flex-col justify-center py-24">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium tracking-wide text-zinc-500">
            FFmpeg presets and tools for humans.
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Simple media tools,
            <br />
            powered by FFmpeg.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500 sm:text-xl">
            Choose a common media task, configure a few options, and convert
            files directly in your browser or get the FFmpeg command to run
            locally.
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
            <span aria-hidden="true">✓</span>
            <span>No uploads. Process your files locally in your browser.</span>
          </div>

          <div className="mt-10">
            <Link
              href="#presets"
              className="inline-flex h-11 items-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              Explore presets
            </Link>
          </div>
        </div>
      </section>

      {/* Presets */}
      <section id="presets" className="pb-32">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Browse all presets
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Simple tools for common audio, video, and image tasks.
          </p>
        </div>

        <PresetGrid
          presets={presets}
          categories={categories}
        />
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-zinc-200 py-16"
      >
        <h2 className="text-2xl font-semibold tracking-tight">
            About
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-500">
          320kbps is a collection of simple media tools powered by FFmpeg.
          Configure a few options, convert files directly in your browser, or
          get the FFmpeg command to run locally. Browser-based conversions run
          locally, so your files don&apos;t need to be uploaded.
        </p>
      </section>
    </div>
  );
}