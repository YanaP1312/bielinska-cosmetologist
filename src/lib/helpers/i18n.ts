import i18nConfig from "@/../next-i18next.config";
import { dir } from "i18next";

export function getLocalePartsFrom({ locale }: { locale: string }) {
  const [language, region] = locale.toLowerCase().split("-");
  return [language, region];
}

export function getDirection(locale: string) {
  return dir(locale);
}

export const locales = i18nConfig.i18n.locales;
export const defaultLocale = i18nConfig.i18n.defaultLocale;
