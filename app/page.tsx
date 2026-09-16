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
    <div className="bg-white text-zinc-950">
      {/* Hero */}
      <section className="flex min-h-[calc(100vh-5rem)] flex-col justify-center py-24">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium tracking-wide text-zinc-500">
            FFmpeg presets for humans.
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Build FFmpeg commands
            <br />
            without memorizing FFmpeg.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500 sm:text-xl">
            Simple presets for common media tasks. Choose what you want to
            do, configure a few options, and get the FFmpeg command.
          </p>

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
      {/* <section id="presets" className="pb-32">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Featured presets
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Start with a common FFmpeg task.
          </p>
        </div>

        <PresetGrid
          presets={presets.filter((preset) => preset.featured)}
          categories={categories}
        />
      </section> */}

      {/* All presets */}
      <section className="pb-32">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Browse all presets
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Explore all available FFmpeg presets.
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
        <p className="max-w-xl text-sm leading-7 text-zinc-500">
          320kbps is a collection of human-friendly FFmpeg presets and tools.
          No complicated command lines. Just choose what you want to do and
          build the command.
        </p>
      </section>
    </div>
  );
}