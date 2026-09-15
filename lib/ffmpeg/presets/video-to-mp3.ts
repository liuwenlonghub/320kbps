export const videoToMp3Preset = {
  id: "video-to-mp3",
  title: "Video → MP3",
  description: "Extract audio from a video file.",
  category: "audio",
  input: {
    type: "media",
    extensions: ["mp4", "mkv", "mov", "webm", "avi"],
  },
  options: {
    bitrate: [128, 192, 256, 320],
  },
} as const;