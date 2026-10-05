import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { CopyButton } from "./copy-button";

type CommandPreviewProps = {
  command: string;
  locale: Locale;
};

export function CommandPreview({
  command,
  locale,
}: CommandPreviewProps) {
  const t = getDictionary(locale);

  return (
    <section className="mt-12">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-medium">
          {t.presetPage.ffmpegCommand}
        </h2>

        <CopyButton
          value={command}
          locale={locale}
        />
      </div>

      <div className="overflow-x-auto rounded-2xl bg-zinc-950 p-6">
        <code className="whitespace-pre font-mono text-sm leading-7 text-zinc-100">
          {command}
        </code>
      </div>
    </section>
  );
}