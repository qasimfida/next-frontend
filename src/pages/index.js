// import NavigationBar from "../component/navbar";
// import TopBar from "../component/topBar";
// import Footer from "../component/Footer";
import NavigationBar from "../component/navbar";
import TopBar from "../component/topBar";
import FeaturedSection from "../container/FeaturedSection";
import BuySellSection from "../container/BuySellSection";
import PlacesSection from "../container/PlacesSection";
import PropertyRentSection from "../container/PropertyRentSection";
import PerfectHomeSection from "../container/PerfectHomeSection";
import TeamSection from "../container/TeamSection";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <NavigationBar />
      <FeaturedSection />
      <BuySellSection />
      <PlacesSection />
      <PropertyRentSection />
      <PerfectHomeSection />
      <TeamSection />
      <Footer />
    </>
  );
}
