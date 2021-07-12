import WithLayout from "../component/layout";
import TopBar from "../component/topBar";
import AgencyDetailSection from "../container/AgencyDetailSection";
export default function Home() {
  return (
    <>
      <WithLayout>
        <AgencyDetailSection />
      </WithLayout>
    </>
  );
}
