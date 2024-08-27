import type { Metadata } from "next";
import { robotsProperties } from "./storedMetadata";

export const metadata: Metadata = {
  robots: {
    ...robotsProperties,
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="text-black bg-white">
        このapp/metadata/overrideInherit/recursion/page.tsxでrobotsというプロパティを追加しています。
        <br />
      </div>
      app/metadata/overrideInherit/recursion/layout.tsxでtitleとdescriptionが変更されています。
      このapp/metadata/overrideInherit/recursion/page.tsxでrobotsというプロパティを追加しています。
      {children}
    </div>
  );
}
