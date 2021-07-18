import WithLayout from "../component/layout";
import AboutSection from "../container/About";
import BuySellSection from "../container/BuySellSection";
import TeamSection from "../container/TeamSection";

const About = () => {
  return (
    <WithLayout>
      <AboutSection />
      <BuySellSection />
      <TeamSection />
    </WithLayout>
  );
};

export default About;
