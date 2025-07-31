import { getMessages } from "next-intl/server";
import { createTranslator } from "next-intl";

export async function getTranslator(locale: string) {
  const messages = await getMessages({ locale });
  return createTranslator({ locale, messages });
}
