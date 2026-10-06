export function SiteFooter() {
  return (
    <footer className="flex items-center justify-between border-t border-[#e5e5e5] px-[6vw] py-10 text-[12px] text-[#888888] max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-2.5">
      <span>
        © 2026{" "}
        <a
          href="https://liuwenlonghub.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-50"
        >
          Evan Liu
        </a>
      </span>

      <span>Powered by <a href="https://ffmpeg.org" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-50">FFmpeg</a></span>
    </footer>
  );
}