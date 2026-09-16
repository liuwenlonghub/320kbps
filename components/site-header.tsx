import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="flex h-20 w-full items-center justify-between border-b border-[#e5e5e5] px-[6vw] max-[700px]:h-16">
      <Link
        href="/"
        className="text-[14px] font-semibold tracking-[0.08em] text-[#111111]"
      >
        320kbps
      </Link>

      <nav className="flex items-center gap-7 text-[14px] text-[#111111] max-[700px]:hidden">
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