import { getTranslation } from "@/lib/utils/i18nServer";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const i18n = await getTranslation(params.locale);
  const pageKey = "brand_products";

  return {
    title: `${i18n.t(`pages.${pageKey}`)} | ${i18n.t("meta.title")}`,
  };
}

export default function Page() {
  return <div>Brand page</div>;
}
