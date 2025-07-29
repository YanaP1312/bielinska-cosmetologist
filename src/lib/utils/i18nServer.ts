import { createInstance } from "i18next";
import commonUk from "@/../public/locales/uk/common.json";
import commonRu from "@/../public/locales/ru/common.json";
import commonEn from "@/../public/locales/en/common.json";
import commonRo from "@/../public/locales/ro/common.json";

export async function getTranslation(locale: string) {
  const i18nInstance = createInstance();
  const resources = {
    uk: { common: commonUk },
    ru: { common: commonRu },
    ro: { common: commonRo },
    en: { common: commonEn },
  };

  await i18nInstance.init({
    lng: locale,
    fallbackLng: "uk",
    resources,
    ns: ["common"],
  });

  return i18nInstance;
}
