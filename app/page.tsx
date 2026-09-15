import { presets } from "@/lib/ffmpeg/presets";
import type { PresetCategory } from "@/lib/ffmpeg/types/preset";
import { PresetCategory as PresetCategoryLabel } from "@/components/preset-category";
import { PresetCard } from "@/components/preset-card";
import Link from "next/link";

export default function Home() {
  const categories: PresetCategory[] = [
    "audio",
    "video",
    "image",
  ];
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 sm:px-8">
        {/* Header */}
        <header className="flex h-20 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            320kbps
          </Link>

          <nav className="flex items-center gap-6 text-sm text-zinc-500">
            <Link
              href="#presets"
              className="transition-colors hover:text-zinc-950"
            >
              Presets
            </Link>
            <Link
              href="#about"
              className="transition-colors hover:text-zinc-950"
            >
              About
            </Link>
          </nav>
        </header>

        {/* Hero */}
        <section className="flex flex-1 flex-col justify-center py-24">
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
        <section id="presets" className="pb-32">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured presets
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              Start with a common FFmpeg task.
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category) => {
              const categoryPresets = presets.filter(
                (preset) =>
                  preset.category === category &&
                  preset.featured,
              );

              if (categoryPresets.length === 0) {
                return null;
              }

              return (
                <div key={category}>
                  <PresetCategoryLabel
                    category={category}
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    {categoryPresets.map((preset) => (
                      <PresetCard
                        key={preset.id}
                        id={preset.id}
                        title={preset.title}
                        description={preset.description}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
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

        {/* Footer */}
        <footer className="flex h-20 items-center justify-between border-t border-zinc-200 text-xs text-zinc-400">
          <span>© 2026 320kbps</span>
          <span>Powered by FFmpeg</span>
        </footer>
      </div>
    </main>
  );
}