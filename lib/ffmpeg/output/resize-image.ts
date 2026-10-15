import { removeExtension } from "../command-builder/utils";
import type { ResizeImageOptions } from "../presets/resize-image";

export function buildResizeImageOutputFilename({
  input,
  width,
}: ResizeImageOptions): string {
  const extension = input.split(".").pop()?.toLowerCase();
  const outputExtension =
    extension && extension !== input ? extension : "jpg";

  return `${removeExtension(input)}-${width}.${outputExtension}`;
}
