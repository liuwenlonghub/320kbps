# 320kbps

[English](README.md) · [中文](README.zh-CN.md)

320kbps is a lightweight media toolkit built around FFmpeg. It helps users convert common audio, video, and image files without memorizing FFmpeg flags. Each preset exposes a small set of options, generates the matching FFmpeg command, and can run locally in the browser through FFmpeg.wasm.

Demo: [https://www.320kbps.com](https://www.320kbps.com)

## What this project does

This app is a static Next.js site for common media conversions. Users can:

- choose a preset from the homepage,
- customize a few parameters,
- process files directly in the browser, or
- copy the generated FFmpeg command and run it locally.

The project is designed for simple, repeatable tasks: converting between containers, extracting audio, resizing media, compressing video, and generating stills or animated assets.

## Supported presets

### Audio

- **Video → MP3**: Extract audio from a video file and choose a bitrate of 128, 192, 256, or 320 kbps.
- **WAV → MP3**: Convert uncompressed WAV files to MP3.
- **FLAC → MP3**: Convert lossless FLAC files to MP3.

### Video

- **Video → MP4**: Convert compatible video files to MP4.
- **MKV → MP4**: Convert MKV to MP4.
- **MOV → MP4**: Convert MOV to MP4.
- **MP4 → WebM**: Convert MP4 files to WebM with adjustable quality.
- **WebM → MP4**: Convert WebM files back to MP4.
- **Resize video**: Scale a video to a target width while preserving aspect ratio.
- **Compress video**: Reduce file size with different quality settings.
- **Trim video**: Cut a segment by start time and duration.
- **Video → GIF**: Export a short segment as a GIF.
- **Video → Image**: Extract a single frame at a chosen timestamp.

### Image

- **Image → WebP**: Convert JPG, PNG, GIF, BMP, or TIFF files to WebP.

Each preset page shows the exact FFmpeg command for the current configuration and explains the main flags used. Presets that support browser execution also show progress and allow direct downloads from the browser.

## Privacy and runtime behavior

Browser conversions use [FFmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm). Files are processed in the current browser and are not uploaded to an application server.

Important notes:

- The FFmpeg WebAssembly core is loaded from jsDelivr on first use, so the initial conversion may take longer and requires an internet connection.
- Browser processing uses local CPU and memory.
- Large or more complex tasks may take longer to finish.
- If a task is not practical in the browser, copy the generated command and run it locally after installing FFmpeg.

## Getting started

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Common commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the static production output |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run the Vitest suite |
| `npm run test:watch` | Run tests in watch mode |

## Production build and deployment

The app is configured for a static export:

```ts
const nextConfig: NextConfig = {
  output: "export",
};
```

Run:

```bash
npm run build
```

The generated output is written to `out/` and can be deployed to any static-hosting provider, including GitHub Pages, Netlify, Vercel static hosting, or object-storage static sites.

If the site is deployed under a subdirectory, set `basePath` in `next.config.ts` before building.

## Localization and app structure

The site supports multiple locales, currently:

- `en`
- `zh-cn`
- `ja`

The routing structure includes localized home pages and preset pages under `app/[locale]/`, while the root `app/` route redirects to the user’s detected locale.

## Project structure

```text
app/                         App Router routes, localized pages, and layouts
app/[locale]/               Localized home and preset interfaces
components/                 UI components and browser conversion widgets
lib/
  ffmpeg/
    command-builder/         FFmpeg command generation per preset
    output/                  Default output filename generation
    presets/                 Preset metadata, browser logic, and registry
    types/                   Shared preset type definitions
  i18n/                     Locale settings and copy for English, Simplified Chinese, and Japanese
```

When adding a new media tool, the workflow is typically:

1. Add a preset definition in `lib/ffmpeg/presets/`.
2. Add a command builder in `lib/ffmpeg/command-builder/` and register it in the relevant registry.
3. Add output-filename generation in `lib/ffmpeg/output/`.
4. Add or update the browser conversion UI in `components/` and the preset page integration.
5. Add localized copy if needed in `lib/i18n/`.
6. Add Vitest tests for the command builder and output naming logic.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- FFmpeg.wasm
- Vitest

## License

The 320kbps source code is licensed under the MIT License. See [LICENSE](LICENSE).

320kbps includes third-party software such as FFmpeg and FFmpeg.wasm, each subject to its own license and terms.
