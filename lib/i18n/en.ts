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