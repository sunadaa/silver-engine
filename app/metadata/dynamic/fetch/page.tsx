import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetch(
    `https://weather.tsukumijima.net/api/forecast/city/400040`
  ).then((res) => res.json());
  const result: Metadata = {
    title: data.title,
    description: data.description.text,
  };
  return result;
}

export default function Page() {
  return (
    <div>
      こちらは動的メタデータ（フェッチ）のページです。
      <br />
      例として天気予報API（livedoor天気互換）から天気情報を取得し、それをメタデータに設定しています。
      <br />
      天気予報API（livedoor天気互換） ：https://weather.tsukumijima.net/
      <br />
      APIから値を取得するため関数を非同期にしていますが、問題なく動きます。
    </div>
  );
}
