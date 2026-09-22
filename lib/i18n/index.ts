import { en } from "./en";
import { ja } from "./ja";
import { zhCN } from "./zh-cn";

export const languages = {
  en,
  "zh-cn": zhCN,
  ja,
} as const;

export type Locale = keyof typeof languages;

export function getDictionary(
  locale: Locale,
) {
  return languages[locale];
}