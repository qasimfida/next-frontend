import WithLayout from "../component/layout";
import TopBar from "../component/topBar";
import ArticleSection from "../container/ArticleSection";

export default function Home() {
  return (
    <WithLayout>
      <ArticleSection />
    </WithLayout>
  );
}
