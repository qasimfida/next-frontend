import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import WithLayout from "../../component/layout";
import AgencyDetailSection from "../../container/AgencyDetailSection";
import agencyData from "../api/data_agencies.json";
import realStateData from "../api/data_realestate.json";

export async function getServerSideProps({ params }) {
  const agencies = [...agencyData];
  const realState = [...realStateData];

  return { props: { agencies, realState} };
}

export default function AgentDetails({ realState,agencies }) {
  const [state, setState] = useState({});
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (agencies) {
      const detail = agencies.filter((i) => i.id === id) || [];
      if (detail.length) {
        setState(detail[0]);
      }
    }
  }, [agencies]);

  return (
    <WithLayout>
      <AgencyDetailSection data={state} properties={realState}  />
    </WithLayout>
  );
}
