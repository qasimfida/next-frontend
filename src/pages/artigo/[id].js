import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import WithLayout from "../../component/layout";
import TopBar from "../../component/topBar";
import ArticleSection from "../../container/ArticleSection";
import data from "../api/data_articles.json";

function Article() {
  const router = useRouter();
  const [article, setArticle] = useState({});

  useEffect(() => {
    let id = router.query.id;
    if (data) {
      let artic = data.filter((i) => i.id === id) || [];
      if(artic.length){
        setArticle((artic.length && artic[0]) || {});
      }
      else {
        router.push('/404')
      }
    }
  }, [data]);

  return (
    <WithLayout>
      <ArticleSection article={article} />
    </WithLayout>
  );
}
export async function getServerSideProps({ params }) {
  // const image = await getImages(); //pass the prop from the url
  const articles = data.map((article) => {
    return {
      ...article,
    };
  });

  return { props: { data: articles } };
}

export default Article;
