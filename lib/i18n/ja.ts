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