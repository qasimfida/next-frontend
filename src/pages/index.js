import FeaturedSection from "../container/FeaturedSection";
import BuySellSection from "../container/BuySellSection";
import PlacesSection from "../container/PlacesSection";
import PropertyRentSection from "../container/PropertyRentSection";
import PerfectHomeSection from "../container/PerfectHomeSection";
import TeamSection from "../container/TeamSection";
import SliderSection from "../container/SliderSection";
import WithLayout from "../component/layout";

export default function Home() {
  return (
    <WithLayout>
      <SliderSection />
      <FeaturedSection />
      <BuySellSection />
      <PlacesSection />
      <PropertyRentSection />
      <PerfectHomeSection />
      <TeamSection />
    </WithLayout>
  );
}
