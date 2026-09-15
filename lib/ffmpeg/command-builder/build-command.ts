import { commandBuilders } from "./registry";

import type { Preset } from "../types/preset";

export function buildCommand(
  preset: Preset,
  values: Record<string, string | number>,
): string {
  const builder = commandBuilders[preset.id];

  if (!builder) {
    return "";
  }

  return builder(values);
}