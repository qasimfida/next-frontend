import FeaturedSection from "../container/FeaturedSection";
import BuySellSection from "../container/BuySellSection";
import PlacesSection from "../container/PlacesSection";
import PropertyRentSection from "../container/PropertyRentSection";
import PerfectHomeSection from "../container/PerfectHomeSection";
import TeamSection from "../container/TeamSection";
import ImageSection, {
  MapSection,
  VideoSection,
  SliderSection,
} from "../container/SliderSection";
import WithLayout from "../component/layout";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const router = useRouter();
  const renderHeader = () => {
    const query = router.query && router.query.header;
    if (query === "video") {
      return <VideoSection />;
    }
    if (query === "slider") {
      return <SliderSection />;
    }
    if (query === "map") {
      return <MapSection />;
    } else {
      return <ImageSection />;
    }
  };
  return (
    <WithLayout>
      {renderHeader()}
      <FeaturedSection />
      <BuySellSection />
      <PlacesSection />
      <PropertyRentSection />
      <PerfectHomeSection />
      <TeamSection />
    </WithLayout>
  );
}
