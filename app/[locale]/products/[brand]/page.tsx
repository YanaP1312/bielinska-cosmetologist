import { getTranslator } from "@/lib/utils/getTranslator";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslator(locale);

  return {
    title: `${t("pages.brand")} | ${t("meta.title")}`,
  };
}

export default function Page() {
  return <div>Brand page</div>;
}
