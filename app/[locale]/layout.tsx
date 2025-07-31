import "./globals.css";

import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { getTranslator } from "@/lib/utils/getTranslator";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const t = await getTranslator(locale);

  return {
    title: {
      default: t("meta.title"),
      template: `%s | ${t("meta.title")}`,
    },
    description: t("meta.description"),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  const messages = await getMessages({ locale });
  console.log("messages", messages);
  if (!messages) notFound();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
