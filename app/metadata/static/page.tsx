import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "静的メタデータ",
  description: "静的メタデータページ",
};

export default function Page() {
  return (
    <div>
      こちらは静的メタデータページです。
    </div>
  );
}
