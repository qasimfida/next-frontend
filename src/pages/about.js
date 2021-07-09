import TopBar from "../component/topBar";
import AboutSection from "../container/About";
import BuySellSection from "../container/BuySellSection";
import TeamSection from "../container/TeamSection";

export default function Home() {
  return (
    <>
      <TopBar />
      <AboutSection />
      <BuySellSection />
      <TeamSection />
    </>
  );
}
