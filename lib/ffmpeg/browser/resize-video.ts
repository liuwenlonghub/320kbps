"use client";

import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

export async function resizeVideoInBrowser(
  file: File,
  width: number,
): Promise<Blob> {
  const ffmpeg = new FFmpeg();

  await ffmpeg.load();

  await ffmpeg.writeFile(
    file.name,
    await fetchFile(file),
  );

  const outputFilename = "output.mp4";

  await ffmpeg.exec([
    "-i",
    file.name,
    "-vf",
    `scale=${width}:-2`,
    outputFilename,
  ]);

  const data = await ffmpeg.readFile(outputFilename);

  if (typeof data === "string") {
    throw new Error("FFmpeg returned text instead of binary data.");
  }

  const buffer = new ArrayBuffer(data.byteLength);
  new Uint8Array(buffer).set(data);

  return new Blob([buffer], {
    type: "video/mp4",
  });
}