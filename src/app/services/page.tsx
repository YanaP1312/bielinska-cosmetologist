import { getTranslation } from "@/lib/utils/i18nServer";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const i18n = await getTranslation(params.locale);
  const pageKey = "services";

  return {
    title: `${i18n.t(`pages.${pageKey}`)} | ${i18n.t("meta.title")}`,
  };
}

export default function Page() {
  return <div>Services page</div>;
}
