export function SiteFooter() {
  return (
    <footer className="flex h-[80px] items-center justify-between border-t border-zinc-200 px-[6vw] text-[12px] text-zinc-500">
      <span>
        © 2026{" "}
        <a
          href="https://i.limeai.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-50"
        >
          Evan Liu
        </a>
      </span>

      <span>Powered by FFmpeg</span>
    </footer>
  );
}