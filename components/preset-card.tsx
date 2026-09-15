import Link from "next/link";

import type { Preset } from "@/lib/ffmpeg/types/preset";

type PresetCardProps = Pick<
  Preset,
  "id" | "title" | "description"
>;

export function PresetCard({
  id,
  title,
  description,
}: PresetCardProps) {
  return (
    <Link
      href={`/presets/${id}`}
      className="group rounded-2xl border border-zinc-200 p-6 transition-all hover:border-zinc-300 hover:shadow-sm"
    >
      <h3 className="text-lg font-medium tracking-tight">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-zinc-500">
        {description}
      </p>

      <div className="mt-6 text-sm font-medium text-zinc-400 transition-colors group-hover:text-zinc-950">
        Configure →
      </div>
    </Link>
  );
}