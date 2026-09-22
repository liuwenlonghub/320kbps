export const zhCN = {
  site: {
    name: "320kbps",
    tagline: "为人类设计的 FFmpeg 预设和工具。",
    description: "由 FFmpeg 驱动的简单媒体工具。",
    supporting:
      "无需记忆 FFmpeg 命令，即可构建自己的 FFmpeg 命令。",
  },

  navigation: {
    presets: "预设",
    about: "关于",
  },

  home: {
    title: "由 FFmpeg 驱动的简单媒体工具。",
    description:
      "选择常用的媒体任务，配置几个选项，即可直接在浏览器中转换文件，或获取 FFmpeg 命令在本地运行。",
    explorePresets: "探索预设",
    browseAll: "浏览全部预设",
    presetsDescription:
      "用于处理常见音频、视频和图像任务的简单工具。",
    backToPresets: "返回预设",
  },

  presets: {
    videoToMp4: {
      title: "视频 → MP4",
      description:
        "无需重新编码，将兼容的视频文件转换为 MP4。",
      inputLabel: "输入文件",
      outputLabel: "输出文件名",
      outputPlaceholder: "output.mp4",
      explanation: {
        title: "工作原理",
        description:
          "此预设会将输入视频重新封装为 MP4 容器，不重新编码视频或音频流。",
        parameters: [
          {
            flag: "-c copy",
            description:
              "直接复制现有的视频和音频流，不进行重新编码。",
          },
          {
            flag: "-movflags +faststart",
            description:
              "将 MP4 元数据移动到文件开头，使文件通过网络播放时可以更快开始。",
          },
        ],
      },
    },
    mkvToMp4: {
      title: "MKV → MP4",
      description:
        "无需重新编码，将 MKV 文件转换为 MP4。",
      inputLabel: "输入文件",
      outputLabel: "输出文件名",
      outputPlaceholder: "output.mp4",
      explanation: {
        title: "工作原理",
        description:
          "此预设会将 MKV 文件重新封装为 MP4 容器，不重新编码视频或音频流。",
        parameters: [
          {
            flag: "-c copy",
            description:
              "直接复制现有的视频和音频流，不进行重新编码。",
          },
          {
            flag: "-movflags +faststart",
            description:
              "将 MP4 元数据移动到文件开头，使文件通过网络播放时可以更快开始。",
          },
        ],
      },
    },
    videoToMp3: {
      title: "视频 → MP3",
      description:
        "从视频文件中提取音频，并保存为 MP3 文件。",
      inputLabel: "输入文件",
      outputLabel: "输出文件名",
      outputPlaceholder: "output.mp3",
      bitrateLabel: "比特率",
      explanation: {
        title: "工作原理",
        description:
          "此预设会从输入视频中提取音频流，并将其编码为 MP3。",
        parameters: [
          {
            flag: "-vn",
            description:
              "禁用视频处理，仅保留音频流。",
          },
          {
            flag: "-c:a libmp3lame",
            description:
              "使用 LAME MP3 编码器对音频进行编码。",
          },
        ],
      },
    },
  },

  about: {
    title: "关于",
    description:
      "320kbps 是一组由 FFmpeg 驱动的简单媒体工具。配置几个选项，可以直接在浏览器中转换文件，也可以获取 FFmpeg 命令在本地运行。基于浏览器的转换完全在本地进行，因此无需上传文件。",
  },

  privacy: {
    title: "隐私",
    description:
      "无需上传文件。所有处理均在浏览器本地完成。",
  },
} as const;