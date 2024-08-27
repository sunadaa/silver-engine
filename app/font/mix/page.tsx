import localFont from "next/font/local";
import { Grey_Qo } from "next/font/google";
import styles from "@/app/styles/mixed.module.css";

const greyQo = Grey_Qo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-greyQo",
});

const komorebi = localFont({
  src: "../../komorebi-gothic-P.ttf",
  weight: "400",
  variable: "--font-komorebi",
});

export default function Page() {
  return (
    <>
      <div className={`${greyQo.variable} ${komorebi.variable}`}>
        <div className={styles["mix-font"]}>
          レイアウトファイルでNoto Sans
          JPが指定されていますが、この&lt;div&gt;タグ内では英語はgrey
          Qo、日本語は木漏れ日ゴシックが表示されています。
        </div>
      </div>
      <div className={styles["mix-font"]}>
        ここはフォントのCSS変数の範囲外のため、スタイルシートを設定していても、レイアウトファイルで指定されているNoto
        Sans JPが表示されます。
        CSS変数が定義されていないというエラーが表示されます。
      </div>
    </>
  );
}
