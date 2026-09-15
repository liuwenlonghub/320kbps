import { outputBuilders } from "./registry";
import type { Preset } from "../types/preset";

export function buildOutputFilename(
  preset: Preset,
  values: Record<string, string | number>,
): string {
  const builder = outputBuilders[preset.id];

  if (!builder) {
    return "";
  }

  return builder(values);
}