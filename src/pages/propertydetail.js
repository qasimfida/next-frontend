import WithLayout from "../component/layout";
import PropertyDetailSection from "../container/PropertyDetailSection";
import realStateData from "../pages/api/data_realestate.json";

export default function PropertyDetails({ realState }) {
  let list = realState && realState.filter((i, index) => index < 3);
  console.log(list);
  return (
    <WithLayout>
      <PropertyDetailSection data={list} />
    </WithLayout>
  );
}
export async function getServerSideProps({ params }) {
  // const image = await getImages(); //pass the prop from the url
  const realState = [...realStateData];

  return { props: { realState } };
}
