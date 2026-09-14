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

export function buildVideoToMp3Command({
  input,
  bitrate,
  output,
}: {
  input: string;
  bitrate: number;
  output: string;
}) {
  return `ffmpeg -i ${input} -codec:a libmp3lame -b:a ${bitrate}k ${output}`;
}