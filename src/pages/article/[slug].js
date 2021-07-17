import WithLayout from "../../component/layout";
import TopBar from "../../component/topBar";
import ArticleSection from "../../container/ArticleSection";

function Article() {
  return (
    <WithLayout>
      <ArticleSection />
    </WithLayout>
  );
}
export async function getStaticProps(context) {
  return {
    props: {
      data: [],
    }, // will be passed to the page component as props
  };
}
export default Article;
