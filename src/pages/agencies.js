import WithLayout from "../component/layout";
import TopBar from "../component/topBar";
import { AgenciesSection } from "../container/AgenciesSection";

export default function Home() {
  return (
    <WithLayout>
      <AgenciesSection />
    </WithLayout>
  );
}
