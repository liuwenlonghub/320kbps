export function SiteFooter() {
  return (
    <footer className="flex h-20 items-center justify-between border-t border-zinc-200 text-xs text-zinc-400">
      <span>
        © 2026{" "}
        <a
          href="https://x.com/liuwenlong"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-zinc-600"
        >
          Evan Liu
        </a>
      </span>

      <span>Powered by FFmpeg</span>
    </footer>
  );
}