import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="flex h-[80px] w-full items-center justify-between border-b border-zinc-200 px-[6vw]">
      <Link
        href="/"
        className="text-[14px] font-semibold tracking-[0.08em] text-zinc-950 "
      >
        320kbps
      </Link>

      <nav className="flex items-center gap-[28px] text-[14px] text-zinc-500">
        <Link
          href="/#about"
          className="transition-opacity hover:opacity-50"
        >
          About
        </Link>

        <a
          href="https://x.com/liuwenlong"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-50"
        >
          Twitter/X
        </a>

        <a
          href="https://github.com/liuwenlonghub/320kbps"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-50"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}