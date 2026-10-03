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
    wavToMp3: {
      title: "WAV → MP3",
      description:
        "将 WAV 音频文件转换为 MP3。",
      inputLabel: "输入文件",
      outputLabel: "输出文件名",
      outputPlaceholder: "output.mp3",
      bitrateLabel: "比特率",
      explanation: {
        title: "工作原理",
        description:
          "此预设会根据所选比特率将 WAV 音频转换为 MP3。",
        parameters: [
          {
            flag: "-c:a libmp3lame",
            description:
              "使用 LAME MP3 编码器对音频进行编码。",
          },
        ],
      },
    },
    flacToMp3: {
      title: "FLAC → MP3",
      description:
        "将 FLAC 音频文件转换为 MP3。",
      inputLabel: "输入文件",
      outputLabel: "输出文件名",
      outputPlaceholder: "output.mp3",
      bitrateLabel: "比特率",
      explanation: {
        title: "工作原理",
        description:
          "此预设会根据所选比特率将 FLAC 音频转换为 MP3。",
        parameters: [
          {
            flag: "-c:a libmp3lame",
            description:
              "使用 LAME MP3 编码器对音频进行编码。",
          },
        ],
      },
    },
    resizeVideo: {
      title: "调整视频尺寸",
      description:
        "将视频调整为指定宽度，同时保持原始宽高比。",
      inputLabel: "输入文件",
      outputLabel: "输出文件名",
      outputPlaceholder: "output.mp4",
      widthLabel: "宽度",
      explanation: {
        title: "工作原理",
        description:
          "此预设会将视频调整为所选宽度，并自动计算高度以保持原始宽高比。",
        parameters: [
          {
            flag: "-vf scale",
            description:
              "将视频调整为所选宽度，并自动计算高度。",
          },
        ],
      },
    },
    compressVideo: {
      title: "压缩视频",
      description:
        "在保持画质的同时减小视频文件大小。",
      inputLabel: "输入文件",
      outputLabel: "输出文件名",
      outputPlaceholder: "output.mp4",
      modeLabel: "压缩模式",
      modeHigh: "高画质",
      modeBalanced: "平衡",
      modeSmall: "小文件",
      explanation: {
        title: "工作原理",
        description:
          "此预设会使用所选的 CRF 值重新编码视频，从而减小文件大小。",
        dynamic: {
          field: "quality",
          title: "压缩级别",
          values: {
            high: {
              label: "高画质 · CRF 20",
              description:
                "画质更高，但输出文件也会更大。",
            },
            balanced: {
              label: "平衡 · CRF 23",
              description:
                "在画质和文件大小之间取得良好平衡。",
            },
            small: {
              label: "小文件 · CRF 28",
              description:
                "生成更小的文件，但会牺牲一部分画质。",
            },
          },
        },
        parameters: [
          {
            flag: "-c:v libx264",
            description:
              "使用 H.264 编码器对视频进行编码。",
          },
          {
            flag: "-crf",
            description:
              "控制视频画质与文件大小之间的平衡。",
          },
          {
            flag: "-preset",
            description:
              "控制编码速度和压缩效率。",
          },
        ],
      },
    },
    webmToMp4: {
      title: "WebM → MP4",
      description: "将 WebM 视频转换为 MP4。",
      inputLabel: "输入文件",
      outputLabel: "输出文件",
      outputPlaceholder: "output.mp4",
      explanation: {
        title: "关于此命令",
        description:
          "此命令使用 H.264 视频编码和 AAC 音频编码，将 WebM 视频转换为 MP4，以获得更广泛的兼容性。",
        parameters: [
          {
            flag: "-i",
            description: "指定输入的 WebM 视频文件。",
          },
          {
            flag: "-c:v libx264",
            description:
              "使用 H.264 编码视频，兼容大多数设备和媒体播放器。",
          },
          {
            flag: "-c:a aac",
            description: "使用 AAC 编码音频。",
          },
          {
            flag: "-movflags +faststart",
            description:
              "将 MP4 元数据移动到文件开头，使流式播放能够更快开始。",
          },
        ],
      },
    },
    imageToWebp: {
      title: "图片 → WebP",
      description: "将图片转换为 WebP。",
      inputLabel: "输入文件",
      qualityLabel: "质量",
      outputLabel: "输出文件",
      outputPlaceholder: "output.webp",
      explanation: {
        title: "关于此命令",
        description:
          "此命令将输入图片转换为 WebP。质量值用于控制图片质量与文件大小之间的平衡。",
        parameters: [
          {
            flag: "-i",
            description: "指定输入图片文件。",
          },
          {
            flag: "-c:v libwebp",
            description: "使用 WebP 图片编码器编码图片。",
          },
          {
            flag: "-q:v",
            description:
              "控制 WebP 图片质量。数值越高，通常画质越好，同时文件也越大。",
          },
        ],
      },
    },
    mp4ToWebm: {
      title: "MP4 → WebM",
      description: "将 MP4 视频转换为适合网页播放的 WebM 格式。",
      inputLabel: "输入文件",
      outputLabel: "输出文件名",
      outputPlaceholder: "output.webm",
      explanation: {
        title: "MP4 → WebM",
        description:
          "使用 VP8 视频编码器和 Vorbis 音频编码器，将 MP4 视频转换为 WebM。",
        parameters: [
          {
            flag: "-i",
            description: "输入 MP4 视频。",
          },
          {
            flag: "-c:v libvpx",
            description: "使用 VP8 编码器编码视频。",
          },
          {
            flag: "-c:a libvorbis",
            description: "使用 Vorbis 编码器编码音频。",
          },
        ],
      },
    },
    trimVideo: {
      title: "裁剪视频",
      description: "通过指定开始时间和时长裁剪视频。",
      inputLabel: "输入文件",
      startLabel: "开始时间",
      startPlaceholder: "HH:MM:SS",
      durationLabel: "时长",
      durationPlaceholder: "HH:MM:SS",
      outputLabel: "输出文件名",
      outputPlaceholder: "output.mp4",
      explanation: {
        title: "裁剪视频",
        description:
          "从指定时间开始提取视频片段，并持续指定的时长。",
        parameters: [
          {
            flag: "-ss",
            description: "设置裁剪视频的开始位置。",
          },
          {
            flag: "-i",
            description: "输入视频文件。",
          },
          {
            flag: "-t",
            description: "设置输出视频片段的时长。",
          },
        ],
      },
    },
    videoToImage: {
      title: "视频 → 图片",
      description: "在指定时间从视频中提取单帧图片。",
      inputLabel: "输入文件",
      timeLabel: "时间",
      timePlaceholder: "HH:MM:SS",
      outputLabel: "输出文件名",
      outputPlaceholder: "frame.jpg",
      explanation: {
        title: "视频 → 图片",
        description:
          "从指定时间戳的视频中提取一帧，并将其保存为 JPEG 图片。",
        parameters: [
          {
            flag: "-i",
            description: "输入视频文件。",
          },
          {
            flag: "-ss",
            description: "跳转到视频中的指定位置。",
          },
          {
            flag: "-frames:v 1",
            description: "准确提取一帧视频画面。",
          },
        ],
      },
    },
    videoToGif: {
      title: "视频 → GIF",
      description: "将短视频片段转换为动态 GIF。",
      inputLabel: "输入文件",
      startLabel: "开始时间",
      startPlaceholder: "HH:MM:SS",
      durationLabel: "时长",
      durationPlaceholder: "HH:MM:SS",
      fpsLabel: "帧率",
      widthLabel: "宽度",
      outputLabel: "输出文件名",
      outputPlaceholder: "output.gif",
      explanation: {
        title: "视频 → GIF",
        description:
          "将视频中的短片段转换为动态 GIF，并可选择帧率和宽度。",
        parameters: [
          {
            flag: "-ss",
            description: "设置 GIF 的开始位置。",
          },
          {
            flag: "-t",
            description: "设置 GIF 的持续时间。",
          },
          {
            flag: "-vf",
            description: "设置帧率和输出宽度。",
          },
          {
            flag: "-f gif",
            description: "将输出写入为动态 GIF。",
          },
        ],
      },
    },
    movToMp4: {
      title: "MOV → MP4",
      description: "将 MOV 视频转换为兼容性更广的 MP4 格式。",
      inputLabel: "输入文件",
      outputLabel: "输出文件名",
      outputPlaceholder: "output.mp4",
      explanation: {
        title: "MOV → MP4",
        description:
          "将 MOV 容器转换为 MP4，无需重新编码媒体流。",
        parameters: [
          {
            flag: "-i",
            description: "输入 MOV 视频。",
          },
          {
            flag: "-c copy",
            description:
              "直接复制现有的视频和音频流，无需重新编码。",
          },
          {
            flag: "-movflags +faststart",
            description:
              "将 MP4 元数据移动到文件开头，以加快网页播放速度。",
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