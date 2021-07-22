import WithLayout from "../../component/layout";
import ArticleListSection from "../../container/ArticlesListSection";
import data from "../api/data_articles.json";

export default function Articles({data}) {

  return (
    <WithLayout>
      <ArticleListSection data={data} />
    </WithLayout>
  );
}
export async function getServerSideProps({ params }) {
  // const image = await getImages(); //pass the prop from the url
  const articles = data.filter((article) => article.type==='news');


  return { props: { data: articles } };
}
