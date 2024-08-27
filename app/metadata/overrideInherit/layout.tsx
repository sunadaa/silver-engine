import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "app/metadata/overrideInherit/layout.tsxで上書きされたメタデータ（タイトル）",
  description:
    "app/metadata/overrideInherit/layout.tsxで上書きされたメタデータ（説明）",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
