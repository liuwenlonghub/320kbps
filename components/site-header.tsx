import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="flex h-20 items-center justify-between">
      <Link
        href="/"
        className="text-lg font-semibold tracking-tight"
      >
        320kbps
      </Link>

      <nav className="flex items-center gap-6 text-sm text-zinc-500">
        <Link
          href="/#about"
          className="transition-colors hover:text-zinc-950"
        >
          About
        </Link>

        <a
          href="https://x.com/liuwenlong"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-zinc-950"
        >
          Twitter/X
        </a>

        <a
          href="https://github.com/liuwenlonghub/320kbps"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-zinc-950"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}