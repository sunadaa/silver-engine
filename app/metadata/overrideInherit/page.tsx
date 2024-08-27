import type { Metadata } from "next";

// メタデータのtitleのみを変更
export const metadata: Metadata = {
  title: "app/metadata/overrideInherit/page.tsxのメタデータ（タイトル）",
};

export default function Page() {
  return (
    <div>
      この画面はメタデータ（評価順序による上書き）です。
      <br />
      app/metadata/overrideInherit/layout.tsxでapp/layout.tsxのメタデータ(title,
      description)を上書きしています。
      <br />
      さらにこのページ(app/metadata/overrideInherit/page.tsx)で、メタデータのtitleのみを上書きしています。
      <br />
      最終的なメタデータは、titleはapp/metadata/overrideInherit/page.tsxで設定したもの、
      <br />
      descriptionはapp/metadata/overrideInherit/layout.tsxで設定したものになります。
    </div>
  );
}
