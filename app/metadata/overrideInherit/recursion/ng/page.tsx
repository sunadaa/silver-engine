import type { Metadata } from "next";

export const metadata: Metadata = {
  // robotsのindexだけをfalseに変更しようとして、以下のようにしても正しくは動きません。
  robots: {
    index: false,
  },
};

export default function Page() {
  return (
    <div>
      このページはメタデータの再帰的な変更ページ（正しく動かないやりかた）です。
      メタデータプロパティの継承は再帰的には実行されないため、robotsプロパティ内のindexプロパティだけを変更するには少々回りくどい方法が必要になります。
    </div>
  );
}
