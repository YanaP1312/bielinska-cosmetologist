import { getTranslation } from "@/lib/utils/i18nServer";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const i18n = await getTranslation(params.locale);
  const pageKey = "qualification";

  return {
    title: `${i18n.t(`pages.${pageKey}`)} | ${i18n.t("meta.title")}`,
  };
}

export default function Page() {
  return <div>Qualification page</div>;
}
