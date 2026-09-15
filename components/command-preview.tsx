import { CopyButton } from "./copy-button";

type CommandPreviewProps = {
  command: string;
};

export function CommandPreview({
  command,
}: CommandPreviewProps) {
  return (
    <section className="mt-12">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-medium">
          FFmpeg command
        </h2>

        <CopyButton value={command} />
      </div>

      <div className="overflow-x-auto rounded-2xl bg-zinc-950 p-6">
        <code className="whitespace-pre font-mono text-sm leading-7 text-zinc-100">
          {command}
        </code>
      </div>
    </section>
  );
}