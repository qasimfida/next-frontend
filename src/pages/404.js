import WithLayout from "../component/layout";
import TopBar from "../component/topBar";
import ErrorSection from "../container/404Section";

export default function Home() {
  return (
    <>
      <WithLayout>
        <ErrorSection />
      </WithLayout>
    </>
  );
}
