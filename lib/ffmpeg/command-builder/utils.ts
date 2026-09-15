export function quoteShellArgument(value: string): string {
  return `'${value.replace(/'/g, `'\\''`)}'`;
}

export function replaceExtension(
  filename: string,
  extension: string,
): string {
  const lastDot = filename.lastIndexOf(".");

  if (lastDot === -1) {
    return `${filename}.${extension}`;
  }

  return `${filename.slice(0, lastDot)}.${extension}`;
}

export function removeExtension(
  filename: string,
): string {
  const lastDot = filename.lastIndexOf(".");

  if (lastDot === -1) {
    return filename;
  }

  return filename.slice(0, lastDot);
}

export function getDefaultOutputFilename(
  input: string,
  extension: string,
  suffix?: string,
): string {
  const base = removeExtension(input);

  if (suffix) {
    return `${base}-${suffix}.${extension}`;
  }

  return `${base}.${extension}`;
}