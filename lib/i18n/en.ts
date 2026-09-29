export const en = {
  site: {
    name: "320kbps",
    tagline: "FFmpeg presets and tools for humans.",
    description: "Simple media tools, powered by FFmpeg.",
    supporting:
      "Build FFmpeg commands without memorizing FFmpeg.",
  },

  navigation: {
    presets: "Presets",
    about: "About",
  },

  home: {
    title: "Simple media tools, powered by FFmpeg.",
    description:
      "Choose a common media task, configure a few options, and convert files directly in your browser or get the FFmpeg command to run locally.",
    explorePresets: "Explore presets",
    browseAll: "Browse all presets",
    presetsDescription:
      "Simple tools for common audio, video, and image tasks.",
    backToPresets: "Back to presets",
  },

  presets: {
    videoToMp4: {
      title: "Video → MP4",
      description:
        "Convert compatible video files to MP4 without re-encoding.",
      inputLabel: "Input file",
      outputLabel: "Output filename",
      outputPlaceholder: "output.mp4",
      explanation: {
        title: "How it works",
        description:
          "This preset remuxes the input video into an MP4 container without re-encoding the video or audio streams.",
        parameters: [
          {
            flag: "-c copy",
            description:
              "Copies the existing video and audio streams without re-encoding.",
          },
          {
            flag: "-movflags +faststart",
            description:
              "Moves MP4 metadata to the beginning of the file for faster playback over the web.",
          },
        ],
      },
    },
    mkvToMp4: {
      title: "MKV → MP4",
      description:
        "Convert MKV files to MP4 without re-encoding.",
      inputLabel: "Input file",
      outputLabel: "Output filename",
      outputPlaceholder: "output.mp4",
      explanation: {
        title: "How it works",
        description:
          "This preset remuxes the MKV file into an MP4 container without re-encoding the video or audio streams.",
        parameters: [
          {
            flag: "-c copy",
            description:
              "Copies the existing video and audio streams without re-encoding.",
          },
          {
            flag: "-movflags +faststart",
            description:
              "Moves MP4 metadata to the beginning of the file for faster playback over the web.",
          },
        ],
      },
    },
    videoToMp3: {
      title: "Video → MP3",
      description:
        "Extract audio from video files and save it as an MP3 file.",
      inputLabel: "Input file",
      outputLabel: "Output filename",
      outputPlaceholder: "output.mp3",
      bitrateLabel: "Bitrate",
      explanation: {
        title: "How it works",
        description:
          "This preset extracts the audio stream from the input video and encodes it as MP3.",
        parameters: [
          {
            flag: "-vn",
            description:
              "Disables video processing and keeps only the audio stream.",
          },
          {
            flag: "-c:a libmp3lame",
            description:
              "Encodes the audio using the LAME MP3 encoder.",
          },
        ],
      },
    },
    wavToMp3: {
      title: "WAV → MP3",
      description:
        "Convert WAV audio files to MP3.",
      inputLabel: "Input file",
      outputLabel: "Output filename",
      outputPlaceholder: "output.mp3",
      bitrateLabel: "Bitrate",
      explanation: {
        title: "How it works",
        description:
          "This preset converts WAV audio to MP3 using the selected bitrate.",
        parameters: [
          {
            flag: "-c:a libmp3lame",
            description:
              "Encodes the audio using the LAME MP3 encoder.",
          },
        ],
      },
    },
    flacToMp3: {
      title: "FLAC → MP3",
      description:
        "Convert FLAC audio files to MP3.",
      inputLabel: "Input file",
      outputLabel: "Output filename",
      outputPlaceholder: "output.mp3",
      bitrateLabel: "Bitrate",
      explanation: {
        title: "How it works",
        description:
          "This preset converts FLAC audio to MP3 using the selected bitrate.",
        parameters: [
          {
            flag: "-c:a libmp3lame",
            description:
              "Encodes the audio using the LAME MP3 encoder.",
          },
        ],
      },
    },
    resizeVideo: {
      title: "Resize Video",
      description:
        "Resize a video to a specific width without changing its aspect ratio.",
      inputLabel: "Input file",
      outputLabel: "Output filename",
      outputPlaceholder: "output.mp4",
      widthLabel: "Width",
      explanation: {
        title: "How it works",
        description:
          "This preset scales the video to the selected width while preserving its original aspect ratio.",
        parameters: [
          {
            flag: "-vf scale",
            description:
              "Scales the video to the selected width while calculating the height automatically.",
          },
        ],
      },
    },
    compressVideo: {
      title: "Compress Video",
      description:
        "Reduce video file size while balancing quality and compression.",
      inputLabel: "Input file",
      outputLabel: "Output filename",
      outputPlaceholder: "output.mp4",
      modeLabel: "Compression",
      modeHigh: "High quality",
      modeBalanced: "Balanced",
      modeSmall: "Small file",
      explanation: {
        title: "How it works",
        description:
          "This preset compresses the video by re-encoding it with a selected CRF value.",
        dynamic: {
          field: "quality",
          title: "Compression level",
          values: {
            high: {
              label: "High quality · CRF 20",
              description:
                "Higher visual quality with a larger output file.",
            },
            balanced: {
              label: "Balanced · CRF 23",
              description:
                "A good balance between visual quality and file size.",
            },
            small: {
              label: "Smaller file · CRF 28",
              description:
                "Produces a smaller file size at the cost of some visual quality.",
            },
          },
        },
        parameters: [
          {
            flag: "-c:v libx264",
            description:
              "Encodes the video using the H.264 codec.",
          },
          {
            flag: "-crf",
            description:
              "Controls the balance between video quality and file size.",
          },
          {
            flag: "-preset",
            description:
              "Controls the encoding speed and compression efficiency.",
          },
        ],
      },
    },
    webmToMp4: {
      title: "WebM → MP4",
      description: "Convert a WebM video to MP4.",
      inputLabel: "Input file",
      outputLabel: "Output file",
      outputPlaceholder: "output.mp4",
      explanation: {
        title: "About this command",
        description:
          "This command converts the WebM video to MP4 using H.264 video and AAC audio for broad compatibility.",
        parameters: [
          {
            flag: "-i",
            description:
              "Specifies the input WebM video file.",
          },
          {
            flag: "-c:v libx264",
            description:
              "Encodes the video using H.264, which is widely supported by devices and media players.",
          },
          {
            flag: "-c:a aac",
            description:
              "Encodes the audio using AAC.",
          },
          {
            flag: "-movflags +faststart",
            description:
              "Moves MP4 metadata to the beginning of the file so playback can start sooner when streaming.",
          },
        ],
      },
    },
    imageToWebp: {
      title: "Image → WebP",
      description: "Convert an image to WebP.",
      inputLabel: "Input file",
      qualityLabel: "Quality",
      outputLabel: "Output file",
      outputPlaceholder: "output.webp",
      explanation: {
        title: "About this command",
        description:
          "This command converts the input image to WebP. The quality value controls the balance between image quality and file size.",
        parameters: [
          {
            flag: "-i",
            description:
              "Specifies the input image file.",
          },
          {
            flag: "-c:v libwebp",
            description:
              "Encodes the image using the WebP image codec.",
          },
          {
            flag: "-q:v",
            description:
              "Controls WebP image quality. Higher values generally produce better quality and larger files.",
          },
        ],
      },
    },
    mp4ToWebm: {
      title: "MP4 → WebM",
      description:
        "Convert MP4 videos to WebM format for web-friendly playback.",
      inputLabel: "Input file",
      outputLabel: "Output filename",
      outputPlaceholder: "output.webm",
      explanation: {
        title: "MP4 → WebM",
        description:
          "Convert an MP4 video to WebM using the VP8 video codec and Vorbis audio codec.",
        parameters: [
          {
            flag: "-i",
            description: "Input MP4 video.",
          },
          {
            flag: "-c:v libvpx",
            description:
              "Encode the video using the VP8 codec.",
          },
          {
            flag: "-c:a libvorbis",
            description:
              "Encode the audio using the Vorbis codec.",
          },
        ],
      },
    },
  },

  about: {
    title: "About",
    description:
      "320kbps is a collection of simple media tools powered by FFmpeg. Configure a few options, convert files directly in your browser, or get the FFmpeg command to run locally. Browser-based conversions run locally, so your files don't need to be uploaded.",
  },

  privacy: {
    title: "Privacy",
    description:
      "No uploads. Process your files locally in your browser.",
  },
} as const;