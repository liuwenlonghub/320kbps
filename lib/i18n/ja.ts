export const ja = {
  site: {
    name: "320kbps",
    tagline: "人のための FFmpeg プリセットとツール。",
    description: "FFmpeg を使ったシンプルなメディアツール。",
    supporting:
      "FFmpeg のコマンドを覚えなくても、コマンドを作成できます。",
  },

  navigation: {
    presets: "プリセット",
    about: "このサイトについて",
  },

  home: {
    title: "FFmpeg を使ったシンプルなメディアツール。",
    description:
      "よく使うメディア処理を選び、いくつかのオプションを設定するだけで、ブラウザ上でファイルを変換したり、ローカルで実行できる FFmpeg コマンドを取得できます。",
    explorePresets: "プリセットを見る",
    browseAll: "すべてのプリセットを見る",
    presetsDescription:
      "音声、動画、画像の一般的な処理に使えるシンプルなツール。",
    backToPresets: "プリセットに戻る",
  },

  presets: {
    videoToMp4: {
      title: "動画 → MP4",
      description:
        "再エンコードせずに、対応する動画ファイルを MP4 に変換します。",
      inputLabel: "入力ファイル",
      outputLabel: "出力ファイル名",
      outputPlaceholder: "output.mp4",
      explanation: {
        title: "仕組み",
        description:
          "このプリセットは動画や音声を再エンコードせず、入力動画を MP4 コンテナに再多重化します。",
        parameters: [
          {
            flag: "-c copy",
            description:
              "既存の動画と音声ストリームを再エンコードせず、そのままコピーします。",
          },
          {
            flag: "-movflags +faststart",
            description:
              "MP4 のメタデータをファイルの先頭に移動し、Web 上での再生開始を速くします。",
          },
        ],
      },
    },
    mkvToMp4: {
      title: "MKV → MP4",
      description:
        "再エンコードせずに、MKV ファイルを MP4 に変換します。",
      inputLabel: "入力ファイル",
      outputLabel: "出力ファイル名",
      outputPlaceholder: "output.mp4",
      explanation: {
        title: "仕組み",
        description:
          "このプリセットは MKV ファイルを再エンコードせず、MP4 コンテナに再多重化します。",
        parameters: [
          {
            flag: "-c copy",
            description:
              "既存の動画と音声ストリームを再エンコードせず、そのままコピーします。",
          },
          {
            flag: "-movflags +faststart",
            description:
              "MP4 のメタデータをファイルの先頭に移動し、Web 上での再生開始を速くします。",
          },
        ],
      },
    },
    videoToMp3: {
      title: "動画 → MP3",
      description:
        "動画ファイルから音声を抽出し、MP3 ファイルとして保存します。",
      inputLabel: "入力ファイル",
      outputLabel: "出力ファイル名",
      outputPlaceholder: "output.mp3",
      bitrateLabel: "ビットレート",
      explanation: {
        title: "仕組み",
        description:
          "このプリセットは入力動画から音声ストリームを抽出し、MP3 にエンコードします。",
        parameters: [
          {
            flag: "-vn",
            description:
              "動画処理を無効にし、音声ストリームだけを処理します。",
          },
          {
            flag: "-c:a libmp3lame",
            description:
              "LAME MP3 エンコーダーを使用して音声をエンコードします。",
          },
        ],
      },
    },
    wavToMp3: {
      title: "WAV → MP3",
      description:
        "WAV 音声ファイルを MP3 に変換します。",
      inputLabel: "入力ファイル",
      outputLabel: "出力ファイル名",
      outputPlaceholder: "output.mp3",
      bitrateLabel: "ビットレート",
      explanation: {
        title: "仕組み",
        description:
          "このプリセットは、選択したビットレートで WAV 音声を MP3 に変換します。",
        parameters: [
          {
            flag: "-c:a libmp3lame",
            description:
              "LAME MP3 エンコーダーを使用して音声をエンコードします。",
          },
        ],
      },
    },
    flacToMp3: {
      title: "FLAC → MP3",
      description:
        "FLAC 音声ファイルを MP3 に変換します。",
      inputLabel: "入力ファイル",
      outputLabel: "出力ファイル名",
      outputPlaceholder: "output.mp3",
      bitrateLabel: "ビットレート",
      explanation: {
        title: "仕組み",
        description:
          "このプリセットは、選択したビットレートで FLAC 音声を MP3 に変換します。",
        parameters: [
          {
            flag: "-c:a libmp3lame",
            description:
              "LAME MP3 エンコーダーを使用して音声をエンコードします。",
          },
        ],
      },
    },
    resizeVideo: {
      title: "動画のサイズ変更",
      description:
        "アスペクト比を維持したまま、動画を指定した幅に変更します。",
      inputLabel: "入力ファイル",
      outputLabel: "出力ファイル名",
      outputPlaceholder: "output.mp4",
      widthLabel: "幅",
      explanation: {
        title: "仕組み",
        description:
          "このプリセットは、元のアスペクト比を維持しながら、動画を選択した幅に変更します。",
        parameters: [
          {
            flag: "-vf scale",
            description:
              "動画を選択した幅に変更し、高さを自動的に計算します。",
          },
        ],
      },
    },
    compressVideo: {
      title: "動画を圧縮",
      description:
        "画質とのバランスを保ちながら、動画ファイルのサイズを小さくします。",
      inputLabel: "入力ファイル",
      outputLabel: "出力ファイル名",
      outputPlaceholder: "output.mp4",
      modeLabel: "圧縮モード",
      modeHigh: "高画質",
      modeBalanced: "バランス",
      modeSmall: "小さいファイル",
      explanation: {
        title: "仕組み",
        description:
          "このプリセットは、選択した CRF 値で動画を再エンコードし、ファイルサイズを小さくします。",
        dynamic: {
          field: "quality",
          title: "圧縮レベル",
          values: {
            high: {
              label: "高画質 · CRF 20",
              description:
                "画質は高くなりますが、出力ファイルのサイズは大きくなります。",
            },
            balanced: {
              label: "バランス · CRF 23",
              description:
                "画質とファイルサイズのバランスを取ります。",
            },
            small: {
              label: "小さいファイル · CRF 28",
              description:
                "ファイルサイズを小さくできますが、画質は多少低下します。",
            },
          },
        },
        parameters: [
          {
            flag: "-c:v libx264",
            description:
              "H.264 コーデックを使用して動画をエンコードします。",
          },
          {
            flag: "-crf",
            description:
              "動画の画質とファイルサイズのバランスを調整します。",
          },
          {
            flag: "-preset",
            description:
              "エンコード速度と圧縮効率を調整します。",
          },
        ],
      },
    },
    webmToMp4: {
      title: "WebM → MP4",
      description: "WebM 動画を MP4 に変換します。",
      inputLabel: "入力ファイル",
      outputLabel: "出力ファイル",
      outputPlaceholder: "output.mp4",
      explanation: {
        title: "このコマンドについて",
        description:
          "このコマンドは H.264 動画と AAC 音声を使用して WebM 動画を MP4 に変換し、幅広い互換性を実現します。",
        parameters: [
          {
            flag: "-i",
            description: "入力する WebM 動画ファイルを指定します。",
          },
          {
            flag: "-c:v libx264",
            description:
              "多くのデバイスやメディアプレーヤーで広くサポートされている H.264 で動画をエンコードします。",
          },
          {
            flag: "-c:a aac",
            description: "AAC を使用して音声をエンコードします。",
          },
          {
            flag: "-movflags +faststart",
            description:
              "MP4 のメタデータをファイルの先頭に移動し、ストリーミング再生をより早く開始できるようにします。",
          },
        ],
      },
    },
    imageToWebp: {
      title: "画像 → WebP",
      description: "画像を WebP に変換します。",
      inputLabel: "入力ファイル",
      qualityLabel: "品質",
      outputLabel: "出力ファイル",
      outputPlaceholder: "output.webp",
      explanation: {
        title: "このコマンドについて",
        description:
          "このコマンドは入力画像を WebP に変換します。品質値によって、画像品質とファイルサイズのバランスを調整できます。",
        parameters: [
          {
            flag: "-i",
            description: "入力画像ファイルを指定します。",
          },
          {
            flag: "-c:v libwebp",
            description:
              "WebP 画像コーデックを使用して画像をエンコードします。",
          },
          {
            flag: "-q:v",
            description:
              "WebP の画像品質を指定します。値が高いほど、通常は画質が向上しますが、ファイルサイズも大きくなります。",
          },
        ],
      },
    },
    mp4ToWebm: {
      title: "MP4 → WebM",
      description:
        "MP4 動画を Web 再生に適した WebM 形式に変換します。",
      inputLabel: "入力ファイル",
      outputLabel: "出力ファイル名",
      outputPlaceholder: "output.webm",
      explanation: {
        title: "MP4 → WebM",
        description:
          "VP8 ビデオコーデックと Vorbis オーディオコーデックを使用して、MP4 動画を WebM に変換します。",
        parameters: [
          {
            flag: "-i",
            description: "入力 MP4 動画を指定します。",
          },
          {
            flag: "-c:v libvpx",
            description:
              "VP8 コーデックを使用して動画をエンコードします。",
          },
          {
            flag: "-c:a libvorbis",
            description:
              "Vorbis コーデックを使用して音声をエンコードします。",
          },
        ],
      },
    },
    trimVideo: {
      title: "動画をトリミング",
      description:
        "開始時間と長さを指定して動画をトリミングします。",
      inputLabel: "入力ファイル",
      startLabel: "開始時間",
      startPlaceholder: "HH:MM:SS",
      durationLabel: "長さ",
      durationPlaceholder: "HH:MM:SS",
      outputLabel: "出力ファイル名",
      outputPlaceholder: "output.mp4",
      explanation: {
        title: "動画をトリミング",
        description:
          "指定した時間から、選択した長さの動画セグメントを抽出します。",
        parameters: [
          {
            flag: "-ss",
            description:
              "トリミングする動画の開始位置を指定します。",
          },
          {
            flag: "-i",
            description: "入力動画ファイルを指定します。",
          },
          {
            flag: "-t",
            description:
              "出力する動画セグメントの長さを指定します。",
          },
        ],
      },
    },
  },

  about: {
    title: "このサイトについて",
    description:
      "320kbps は FFmpeg を使ったシンプルなメディアツールのコレクションです。いくつかのオプションを設定してブラウザ上でファイルを変換したり、ローカルで実行できる FFmpeg コマンドを取得できます。ブラウザ上の変換はローカルで実行されるため、ファイルをアップロードする必要はありません。",
  },

  privacy: {
    title: "プライバシー",
    description:
      "ファイルのアップロードは不要です。すべての処理はブラウザ上でローカルに行われます。",
  },
} as const;