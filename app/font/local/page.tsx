import localFont from "next/font/local";

const komorebi = localFont({
  src: "../../komorebi-gothic-P.ttf",
  weight: "400", // 400が通常の線の太さ（ウェイト）
});

export default function Page() {
  return (
    <div className={komorebi.className}>
      レイアウトファイルでNoto Sans
      JPが指定されていますが、この&lt;div&gt;タグ内では木漏れ日ゴシックが表示されています。
    </div>
  );
}
