import WithLayout from "../component/layout";
import TopBar from "../component/topBar";
import RegisterSection from "../container/RegisterSection";

export default function Home() {
  return (
    <>
      <WithLayout>
        <RegisterSection />
      </WithLayout>
    </>
  );
}
