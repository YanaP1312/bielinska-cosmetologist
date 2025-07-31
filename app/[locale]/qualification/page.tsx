import { getTranslator } from "@/lib/utils/getTranslator";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const t = await getTranslator(locale);

  return {
    title: `${t("pages.qualification")} | ${t("meta.title")}`,
  };
}

export default function Page() {
  return <div>Qualification page</div>;
}
