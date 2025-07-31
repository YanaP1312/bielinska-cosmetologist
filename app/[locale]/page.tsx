import { useLocale, useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <div>
      <h1>{t("home")}</h1>
      <p>Current locale: {locale}</p>
    </div>
  );
}
