import WithLayout from "../component/layout";
import TopBar from "../component/topBar";
import AboutSection from "../container/About";
import BuySellSection from "../container/BuySellSection";
import TeamSection from "../container/TeamSection";

const Home= ()=> {
  return (
    <WithLayout>
      <AboutSection />
      <BuySellSection />
      <TeamSection />
    </WithLayout>
  );
}

export default Home
