import WithLayout from "../component/layout";
import AgencyDetailSection from "../container/AgencyDetailSection";
import realStateData from "../pages/api/data_agencies.json";
export async function getServerSideProps({ params }) {
  // const image = await getImages(); //pass the prop from the url
  const data = [...realStateData]

  return { props: { data: data } };
}
export default function AgentDetails({ data }) {
  return (
    <WithLayout>
      <AgencyDetailSection data={data} />
    </WithLayout>
  );
}

