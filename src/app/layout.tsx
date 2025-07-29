import type { Metadata } from "next";
import { defaultLocale, getDirection } from "@/lib/helpers/i18n";

import "./globals.css";

import { getTranslation } from "@/lib/utils/i18nServer";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const i18n = await getTranslation(params.locale);
  return {
    title: {
      default: i18n.t("meta.title"),
      template: `%s | ${i18n.t("meta.title")}`,
    },
    description: i18n.t("meta.description"),
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = defaultLocale;
  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir}>
      <body>{children}</body>
    </html>
  );
}
