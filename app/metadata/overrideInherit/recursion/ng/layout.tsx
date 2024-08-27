import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: false,
    nocache: true,
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="text-black bg-white">
        このapp/metadata/overrideInherit/recursion/layout.tsxでrobotsというプロパティを追加しています。
        <br />
      </div>
      {children}
    </div>
  );
}
