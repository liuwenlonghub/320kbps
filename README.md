# 320kbps

[English](README.md) · [中文](README.zh-CN.md)

320kbps is a collection of lightweight media tools powered by FFmpeg. Choose a preset, configure a few options, and process files directly in your browser or copy the generated FFmpeg command to run locally.

Demo: [https://www.320kbps.com](https://www.320kbps.com)

## Features

- **Video to MP3**: Extract audio from a video and choose a bitrate of 128, 192, 256, or 320 kbps.
- **WAV to MP3**: Convert uncompressed WAV audio to MP3 with a selectable bitrate.
- **FLAC to MP3**: Convert lossless FLAC audio to MP3 with a selectable bitrate.
- **Resize video**: Scale a video to a chosen width.
- **Compress video**: Choose between high quality, balanced compression, and a smaller file.
- **WebM to MP4**: Convert WebM videos to MP4.
- **Image to WebP**: Convert JPG, PNG, GIF, BMP, or TIFF images to WebP and adjust the quality.

Each preset page shows the FFmpeg command for the current configuration and explains its main parameters. Browser-capable presets show conversion progress and provide a download for the result.

## Privacy and Runtime

Browser conversions use [FFmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm). Files are processed in the current browser and are not uploaded to the application server. The FFmpeg WebAssembly core is loaded from jsDelivr on the first conversion, so the initial run may take longer and requires a network connection.

Browser processing uses local CPU and memory. Large files or more complex encoding tasks may take longer. For cases that are not supported or practical in the browser, copy the command from the page and run it after installing FFmpeg locally.

## Getting Started

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Open <http://localhost:3000> to view the application.

## Common Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the static production output |
| `npm run start` | Start the Next.js production server |
| `npm run lint` | Run ESLint checks |
| `npm test` | Run Vitest tests |
| `npm run test:watch` | Run tests in watch mode |

## Production Build and Deployment

The project uses Next.js static export (`output: "export"`). Run:

```bash
npm run build
```

The build output is written to `out/` and can be deployed to any static hosting service, such as GitHub Pages, Netlify, or static website hosting on object storage.

When deploying under a subdirectory, configure `basePath` in `next.config.ts` and rebuild:

```ts
const nextConfig: NextConfig = {
	output: "export",
	basePath: "/your-subdirectory",
};
```

## Project Structure

```text
app/                         Routes, layout, and global styles
components/                 Page components and browser conversion components
lib/ffmpeg/
	command-builder/           Build FFmpeg commands from preset options
	output/                    Generate default output filenames
	presets/                   Preset definitions and browser conversion logic
	types/                     Preset data structures
```

When adding a new media tool, you will typically need to:

1. Add a preset definition in `lib/ffmpeg/presets/`.
2. Add a command builder in `lib/ffmpeg/command-builder/` and register it in `registry.ts`.
3. Add output filename logic in `lib/ffmpeg/output/` and register it in the corresponding `registry.ts`.
4. Add a browser conversion component as needed and connect it in `components/preset/preset-page.tsx`.
5. Add a route page and metadata in `app/presets/`.
6. Add Vitest tests for the command builder and output filename logic.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- FFmpeg.wasm
- Vitest

## License

The 320kbps source code is licensed under the MIT License. See [LICENSE](LICENSE).

320kbps uses third-party software including FFmpeg and FFmpeg.wasm, which are distributed under their respective licenses. Their licenses and terms remain applicable to those components.
