# 320kbps

[English](README.md) · [中文](README.zh-CN.md)

320kbps 是一个围绕 FFmpeg 构建的轻量媒体工具集。它通过预设化的参数配置，让用户不必记住复杂的 FFmpeg 命令即可完成常见的音视频和图片转换。每个预设都支持生成对应命令，并可在浏览器中使用 FFmpeg.wasm 直接处理文件。

演示: [https://www.320kbps.com](https://www.320kbps.com)

## 项目定位

这个项目本质上是一个静态的 Next.js 网站，用于处理常见媒体转换任务。用户可以：

- 从首页选择一个预设；
- 调整少量参数；
- 直接在浏览器中转换文件；
- 或复制生成的 FFmpeg 命令，在本地运行。

它的设计目标是让简单、重复的媒体任务可以快速完成，而不是专门做复杂的影音后期处理。

## 支持的预设

### 音频

- **视频转 MP3**：从视频中提取音频，并可选择 128、192、256 或 320 kbps 码率。
- **WAV 转 MP3**：将无压缩 WAV 文件转换为 MP3。
- **FLAC 转 MP3**：将无损 FLAC 文件转换为 MP3。

### 视频

- **视频转 MP4**：将兼容的视频文件转换为 MP4。
- **MKV 转 MP4**：将 MKV 转换为 MP4。
- **MOV 转 MP4**：将 MOV 转换为 MP4。
- **MP4 转 WebM**：将 MP4 转为 WebM，并可调整质量。
- **WebM 转 MP4**：将 WebM 转回 MP4。
- **调整视频尺寸**：按目标宽度缩放视频，同时保留纵横比。
- **压缩视频**：通过不同的质量设置来降低文件体积。
- **裁剪视频**：按起始时间和持续时长截取视频片段。
- **视频转 GIF**：将短片段导出为 GIF 动画。
- **视频转图片**：在指定时间点提取单帧图片。

### 图片

- **图片转 WebP**：将 JPG、PNG、GIF、BMP 或 TIFF 图片转换为 WebP。

每个预设页面都会显示当前配置对应的 FFmpeg 命令，并说明其核心参数。支持浏览器处理的预设还会显示进度，并允许直接下载转换结果。

## 隐私与运行方式

浏览器端转换基于 [FFmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)，文件会在当前浏览器中处理，不会上传到应用服务器。

注意事项：

- 首次运行时，FFmpeg WebAssembly 核心会从 jsDelivr 加载，因此第一次转换可能更慢，并且需要网络连接。
- 浏览器端处理会消耗本机 CPU 和内存。
- 大文件或较复杂的编码任务可能需要更长时间。
- 如果某种任务不适合在浏览器中执行，可复制页面中的命令，并在本地安装 FFmpeg 后运行。

## 快速开始

需要 Node.js 和 npm。

```bash
npm install
npm run dev
```

随后打开 <http://localhost:3000>。

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 启动 Next.js 开发服务器 |
| `npm run build` | 构建静态生产版本 |
| `npm run start` | 启动生产服务器 |
| `npm run lint` | 执行 ESLint 检查 |
| `npm test` | 运行 Vitest 测试套件 |
| `npm run test:watch` | 以监听模式运行测试 |

## 生产构建与部署

该项目配置为静态导出：

```ts
const nextConfig: NextConfig = {
  output: "export",
};
```

运行：

```bash
npm run build
```

生成的产物位于 `out/`，可部署到任意静态托管服务，例如 GitHub Pages、Netlify、Vercel 静态托管，或者对象存储上的静态网站。

如果站点部署在子目录中，需要在构建前在 `next.config.ts` 中设置 `basePath`。

## 多语言与应用结构

当前网站支持多语言，包括：

- `en`
- `zh-cn`
- `ja`

路由中有 `app/[locale]/` 目录，用于展示本地化首页和预设页；根目录的 `app/` 页面会根据用户语言重定向到对应 locale。

## 项目结构

```text
app/                         App Router 路由、布局和页面入口
app/[locale]/               本地化首页与预设页面
components/                 UI 组件和浏览器端转换控件
lib/
  ffmpeg/
    command-builder/         为每个预设生成 FFmpeg 命令
    output/                  生成默认输出文件名
    presets/                 预设元数据、浏览器逻辑和注册表
    types/                   共享的预设类型定义
  i18n/                     英文、简体中文和日文的文案与 locale 配置
```

新增一个媒体工具时，通常按如下步骤处理：

1. 在 `lib/ffmpeg/presets/` 中新增预设定义。
2. 在 `lib/ffmpeg/command-builder/` 中增加命令生成逻辑，并注册到对应的 registry。
3. 在 `lib/ffmpeg/output/` 中增加输出文件名生成逻辑。
4. 在 `components/` 中补充或更新浏览器模式的转换 UI，并接入对应页面。
5. 如有必要，在 `lib/i18n/` 中补充文案。
6. 为命令构建和输出命名逻辑增加 Vitest 测试。

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- FFmpeg.wasm
- Vitest

## 许可证

320kbps 源代码采用 MIT 许可证，详见 [LICENSE](LICENSE)。

320kbps 包含 FFmpeg 和 FFmpeg.wasm 等第三方软件，这些组件各自遵循其许可证和条款。
