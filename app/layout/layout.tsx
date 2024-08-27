export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-blue-300 p-5 text-orange-950">
        この部分はapp/layout/layout.tsxです。
        {children}
      </div>
    </>
  );
}
