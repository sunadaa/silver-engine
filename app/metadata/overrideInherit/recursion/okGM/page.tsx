import type { Metadata, ResolvedMetadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  props: {},
  parent: ResolvingMetadata
): Promise<Metadata> {
  let robotsString = "";
  await parent.then((res: ResolvedMetadata) => {
    robotsString = res.robots?.basic || "";
    console.log(robotsString); // "index, nofollow, nocache"という文字列
  });

  const result: Metadata = {
    robots: robotsString.replace("index", "noindex"),
  };
  return result;
}

export default function Page() {
  return (
    <div>
      このページはメタデータの再帰的な変更ページ（generateMetadata関数使用）です。
      親メタデータのrobots構文を取得できますが、文字列で取得されるため、設定の仕方が変わってしまうことに注意してください。
    </div>
  );
}
