import WithLayout from "../../component/layout";
import { AgenciesSection } from "../../container/AgenciesSection";
import agencyData from "../api/data_agencies.json";

export async function getServerSideProps({ params }) {
  // const image = await getImages(); //pass the prop from the url
  const agencies = [...agencyData];

  return { props: { agencies } };
}

export default function Agencies({ agencies }) {
  return (
    <WithLayout>
      <AgenciesSection data={agencies} />
    </WithLayout>
  );
}
