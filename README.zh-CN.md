# 320kbps

[English](README.md) · [中文](README.zh-CN.md)

320kbps 是一组基于 FFmpeg 的轻量媒体处理工具。选择一个预设、配置少量参数后，可以直接在浏览器中处理文件，也可以复制生成的 FFmpeg 命令在本地执行。

演示: [https://www.320kbps.com](https://www.320kbps.com)

## 功能

- **视频转 MP3**：从视频中提取音频，并选择 128、192、256 或 320 kbps 的码率。
- **视频转 GIF**：将短视频片段转换为动画 GIF，并可选择帧率和宽度。
- **MKV 转 MP4**：将 MKV 视频转换为 MP4，以获得更广泛的兼容性和更适合网页播放的文件。
- **MOV 转 MP4**：将 MOV 视频转换为 MP4，以获得更广泛的兼容性和更适合网页播放的文件。
- **视频 转 MP4**：将视频转换为 MP4，以获得更广泛的兼容性和更适合网页播放的文件。
- **WAV 转 MP3**：将无压缩 WAV 音频转换为 MP3，并选择输出码率。
- **FLAC 转 MP3**：将无损 FLAC 音频转换为 MP3，并选择输出码率。
- **调整视频尺寸**：按目标宽度缩放视频。
- **压缩视频**：在高质量、平衡和更小文件之间选择压缩级别。
- **裁剪视频**：通过指定起始时间和持续时长来截取视频片段。
- **视频转图片**：从视频中指定时间点抽取单帧，并保存为图片。
- **MP4 转 WebM**：将 MP4 视频转换为 WebM，并可调整质量。
- **WebM 转 MP4**：将 WebM 视频转换为 MP4。
- **图片转 WebP**：将 JPG、PNG、GIF、BMP 或 TIFF 转换为 WebP，并调整质量。

每个预设页面都会显示当前配置对应的 FFmpeg 命令，并解释主要参数。支持浏览器处理的预设会显示进度并提供结果下载。

## 隐私与运行方式

浏览器转换使用 [FFmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)，文件在当前浏览器中处理，不会上传到应用服务器。首次转换时需要从 jsDelivr 加载 FFmpeg WebAssembly 核心，因此首次启动可能需要更长时间，并且需要网络连接。

浏览器处理会占用本机 CPU 和内存，大文件或较复杂的编码任务可能需要较长时间。对于不支持或不适合浏览器处理的场景，可以复制页面中的命令，在本地安装 FFmpeg 后执行。

## 快速开始

需要 Node.js 和 npm。

```bash
npm install
npm run dev
```

打开 <http://localhost:3000> 查看应用。

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建静态生产版本 |
| `npm run start` | 启动 Next.js 生产服务器 |
| `npm run lint` | 执行 ESLint 检查 |
| `npm test` | 执行 Vitest 测试 |
| `npm run test:watch` | 以监听模式运行测试 |

## 生产构建与部署

项目使用 Next.js 的静态导出配置（`output: "export"`）。执行：

```bash
npm run build
```

构建结果位于 `out/`，可以部署到任意静态文件托管服务，例如 GitHub Pages、Netlify 或对象存储静态网站托管。

如果部署在子目录，需要在 `next.config.ts` 中配置 `basePath`，然后重新构建：

```ts
const nextConfig: NextConfig = {
	output: "export",
	basePath: "/your-subdirectory",
};
```

## 项目结构

```text
app/                         页面路由、布局和全局样式
components/                 页面组件和浏览器端转换组件
lib/ffmpeg/
	command-builder/           根据预设选项生成 FFmpeg 命令
	output/                    生成默认输出文件名
	presets/                   预设定义和浏览器转换逻辑
	types/                     预设数据结构
```

新增一个媒体工具时，通常需要：

1. 在 `lib/ffmpeg/presets/` 添加预设定义。
2. 在 `lib/ffmpeg/command-builder/` 添加命令构建器，并注册到 `registry.ts`。
3. 在 `lib/ffmpeg/output/` 添加输出文件名逻辑，并注册到对应的 `registry.ts`。
4. 按需添加浏览器端转换组件，并在 `components/preset/preset-page.tsx` 接入。
5. 在 `app/presets/` 添加路由页面和页面元数据。
6. 为命令构建和输出文件名逻辑补充 Vitest 测试。

## 技术栈

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- FFmpeg.wasm
- Vitest

## 许可证

320kbps 源代码采用 MIT 许可证，详见 [LICENSE](LICENSE)。

320kbps 使用了包括 FFmpeg 和 FFmpeg.wasm 在内的第三方软件，它们分别遵循各自的许可证。这些组件仍适用其对应的许可证和条款。
