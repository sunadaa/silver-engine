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
  const articles: Articles = await readJson();
  const article: Article | undefined = articles.data.find(
    (article: Article) => article.id == params.slug,
  );

  return (
    <>
      <div>
        slugは{params.slug}
        です。URLのセグメントとslugの値が一致していることに注目してください。
      </div>
      {!article && <div>該当の記事は存在しません。</div>}
      <div>
        {article && (
          <>
            <div>{article.id}</div>
            <div>{article.title}</div>
            <div>{article.content}</div>
          </>
        )}
      </div>
    </>
  );
}

async function readJson() {
  "server";
  const filePath = process.cwd() + "/app/routing/dynamic/[slug]/articles.json";
  const data = await fsPromises.readFile(filePath, { encoding: "utf8" });
  const objectData = JSON.parse(data);

  return objectData;
}
