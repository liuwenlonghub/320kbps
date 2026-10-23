import type { Preset } from "@/lib/ffmpeg/types/preset";

export type AudioOutputFormat =
  | "mp3"
  | "wav"
  | "flac"
  | "m4a"
  | "aac"
  | "ogg"
  | "opus";

export type AudioToAudioFormatOptions = {
  input: string;
  format: AudioOutputFormat;
  bitrate: number;
  output: string;
};

export function parseAudioOutputFormat(
  value: unknown,
): AudioOutputFormat {
  if (
    value === "mp3" ||
    value === "wav" ||
    value === "flac" ||
    value === "m4a" ||
    value === "aac" ||
    value === "ogg" ||
    value === "opus"
  ) {
    return value;
  }

  throw new Error(`Unsupported audio output format: ${String(value)}`);
}

export function getAudioFormatEncoder(
  format: AudioOutputFormat,
): string {
  switch (format) {
    case "mp3":
      return "libmp3lame";
    case "wav":
      return "pcm_s16le";
    case "flac":
      return "flac";
    case "m4a":
    case "aac":
      return "aac";
    case "ogg":
      return "libvorbis";
    case "opus":
      return "libopus";
  }
}

export const audioToAudioFormatPreset: Preset<AudioToAudioFormatOptions> = {
  id: "audio-to-audio-format",
  title: "Audio format converter",
  description: "Convert audio to MP3, WAV, FLAC, M4A, AAC, OGG, or Opus.",
  category: "audio",
  featured: false,

  input: {
    type: "media",
    extensions: [
      "mp3",
      "wav",
      "flac",
      "m4a",
      "aac",
      "ogg",
      "opus",
      "aiff",
      "aif",
      "wma",
    ],
  },

  options: {
    input: "input.wav",
    format: "mp3",
    bitrate: 192,
    output: "output.mp3",
  },

  fields: [
    {
      type: "file",
      id: "input",
      label: "Input audio file",
      accept:
        ".mp3,.wav,.flac,.m4a,.aac,.ogg,.opus,.aiff,.aif,.wma,audio/*",
    },
    {
      type: "select",
      id: "format",
      label: "Output format",
      options: [
        { label: "MP3", value: "mp3" },
        { label: "WAV", value: "wav" },
        { label: "FLAC", value: "flac" },
        { label: "M4A", value: "m4a" },
        { label: "AAC", value: "aac" },
        { label: "OGG (Vorbis)", value: "ogg" },
        { label: "Opus", value: "opus" },
      ],
      defaultValue: "mp3",
    },
    {
      type: "select",
      id: "bitrate",
      label: "Bitrate (ignored for WAV and FLAC)",
      options: [
        { label: "96 kbps", value: 96 },
        { label: "128 kbps", value: 128 },
        { label: "192 kbps", value: 192 },
        { label: "256 kbps", value: 256 },
        { label: "320 kbps", value: 320 },
      ],
      defaultValue: 192,
    },
    {
      type: "text",
      id: "output",
      label: "Output filename",
      placeholder: "output.mp3",
      defaultValue: "output.mp3",
    },
  ],

  explanation: {
    title: "About this command",
    description:
      "Convert an audio file to the selected format. WAV and FLAC use lossless encoders; other formats use the selected bitrate.",
    parameters: [
      {
        flag: "-vn",
        description: "Excludes embedded video or cover-art streams.",
      },
      {
        flag: "-c:a",
        description:
          "Selects an audio encoder appropriate for the output format.",
      },
      {
        flag: "-b:a",
        description:
          "Sets the target bitrate for MP3, M4A, AAC, OGG, or Opus output.",
      },
    ],
  },
};
