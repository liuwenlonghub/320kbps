import type { Locale } from "./index";

const COOKIE_NAME = "320kbps-locale";

export function getLocaleCookie(): Locale | null {
  const cookies = document.cookie.split("; ");

  const cookie = cookies.find((item) =>
    item.startsWith(`${COOKIE_NAME}=`)
  );

  if (!cookie) {
    return null;
  }

  const value = cookie.split("=")[1];

  if (
    value === "en" ||
    value === "zh-cn" ||
    value === "ja"
  ) {
    return value;
  }

  return null;
}

export function setLocaleCookie(
  locale: Locale,
) {
  document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=31536000; samesite=lax`;
}