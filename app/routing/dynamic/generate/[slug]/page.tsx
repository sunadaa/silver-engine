import fsPromises from "fs/promises";

type Article = {
  id: string;
  title: string;
  content: string;
};

type Articles = {
  data: Article[];
};

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <div>
        slugは{params.slug}
        です。URLのセグメントとslugの値が一致していることに注目してください。
      </div>
    </>
  );
}
