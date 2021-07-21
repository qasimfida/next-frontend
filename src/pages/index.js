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
import realStateData from "../pages/api/data_realestate.json";
import placesData from "../pages/api/data_articles.json";
import agentsData from "../pages/api/data_agencies.json";

export default function Home({ places, realState, agentsData }) {
  const router = useRouter();

  const handleSubmit = (data) => {
    router.push(
      `/imoveis?propDeal=${data.propDeal}&propType=${data.propType}&location=${data.location}`
    );
  };
  const renderHeader = () => {
    const query = router.query && router.query.header;
    if (query === "video") {
      return <VideoSection handleSubmit={handleSubmit} />;
    }
    if (query === "slider") {
      return <SliderSection handleSubmit={handleSubmit} />;
    }
    if (query === "map") {
      return <MapSection handleSubmit={handleSubmit} />;
    } else {
      return <ImageSection handleSubmit={handleSubmit} />;
    }
  };

  const featuredProperties =
    (realState && realState.filter((i, index) => index < 3)) || [];
  const propertiesForRent =
    (realState && realState.filter((i, index) => i.forRent)) || [];
  const featuredPlaces =
    (places && places.filter((i) => i.type === "location")) || [];
  const agents =
    (agentsData && agentsData.filter((i, index) => index < 3)) || [];

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
  const handleBrowse = () => {
    router.push("/imovel");
  };

  return (
    <WithLayout>
      {renderHeader()}
      <FeaturedSection data={featuredProperties} />
      <BuySellSection onSearch={handleScrollTop} onBrowse={handleBrowse} />
      <PlacesSection data={featuredPlaces} />
      <PropertyRentSection data={propertiesForRent} />
      <PerfectHomeSection />
      <TeamSection data={agents} />
    </WithLayout>
  );
}

export async function getServerSideProps({ params }) {
  // const image = await getImages(); //pass the prop from the url
  const realState = [...realStateData];
  const places = [...placesData];
  const agents = [...agentsData];

  return { props: { realState, places } };
}
