import type { Metadata } from "next";
import { robotsProperties } from "./storedMetadata";

export const metadata: Metadata = {
  robots: {
    ...robotsProperties,
    index: false,
  },
};

export default function Page() {
  return (
    <div>
      このページはメタデータの再帰的な変更ページ（正しいやり方）です。
      メタデータプロパティの継承は再帰的には実行されないため、robotsプロパティ内のindexプロパティだけを変更するには少々回りくどい方法が必要になります。
    </div>
  );
}
