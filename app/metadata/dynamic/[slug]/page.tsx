import { Metadata, ResolvedMetadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { desc: string | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const description = searchParams.desc || "省略";
  let parentTitle;
  let parentDescription;

  await parent.then((res: ResolvedMetadata) => {
    parentTitle = res.title?.absolute;
    parentDescription = res.description;
  });

  const result: Metadata = {
    title: slug + " / " + parentTitle,
    description: description + " / " + parentDescription,
  };
  return result;
}

export default function Page({ params, searchParams }: Props) {
  return (
    <div>
      こちらは動的メタデータ（パラメーター）のページです。generateMetadataはコンポーネントと同じパラメータを受け取ることができ、さらに親のメタデータも取得することができます。
      <br />
      このページでは、例として動的ルーティングを行い、slugというパラメーターと、descというクエリ文字列を受け取るコンポーネントを定義しています。{" "}
      <br />
      さらに親(app/layout.tsx)のメタデータを取得しています。
      そしてslugと親のメタデータのtitleをこのページのメタデータのtitle、descと親のメタデータのdescriptionをこのページのメタデータのdescriptionに設定しています。
    </div>
  );
}
