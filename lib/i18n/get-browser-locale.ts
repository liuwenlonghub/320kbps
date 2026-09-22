import type { Locale } from "./index";

const supportedLocales: Locale[] = [
  "en",
  "zh-cn",
  "ja",
];

export function getBrowserLocale(): Locale {
  const languages = navigator.languages;

  for (const language of languages) {
    const normalized = language.toLowerCase();

    if (normalized.startsWith("zh")) {
      return "zh-cn";
    }

    if (normalized.startsWith("ja")) {
      return "ja";
    }

    if (normalized.startsWith("en")) {
      return "en";
    }
  }

  return "en";
}