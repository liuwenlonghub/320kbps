import type { Locale } from "./index";

const COOKIE_NAME = "320kbps-locale";

function isValidLocale(value: string): value is Locale {
  return (
    value === "en" ||
    value === "zh-cn" ||
    value === "ja"
  );
}

export function getLocaleCookie(): Locale | null {
  // document only exists in the browser.
  // During Next.js SSR/SSG, return null.
  if (typeof document === "undefined") {
    return null;
  }

  const cookies = document.cookie.split("; ");

  const cookie = cookies.find((item) =>
    item.startsWith(`${COOKIE_NAME}=`)
  );

  if (!cookie) {
    return null;
  }

  const value = cookie.slice(`${COOKIE_NAME}=`.length);

  return isValidLocale(value) ? value : null;
}

export function setLocaleCookie(locale: Locale): void {
  // document only exists in the browser.
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=31536000; samesite=lax`;
}