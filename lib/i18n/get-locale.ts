import type { Locale } from "./index";
import { getBrowserLocale } from "./get-browser-locale";
import { getLocaleCookie } from "./locale-cookie";

export function getInitialLocale(): Locale {
  const savedLocale = getLocaleCookie();

  if (savedLocale) {
    return savedLocale;
  }

  return getBrowserLocale();
}