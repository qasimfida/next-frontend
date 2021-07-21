import WithLayout from "../../component/layout";
import PropertyDetailSection from "../../container/PropertyDetailSection";
import realStateData from "./../api/data_realestate.json"

export async function getServerSideProps({ params }) {
  // const image = await getImages(); //pass the prop from the url
  const realState = [...realStateData];

  return { props: { realState } };
}
export default function Imovels({ realState }) {

  return (
    <WithLayout>
      <PropertyDetailSection data={realState} />
    </WithLayout>
  );
}
