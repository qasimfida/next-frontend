import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import WithLayout from "../component/layout";
import PropertyDetailSection from "../container/PropertyDetailSection";
import realStateData from "./api/data_realestate.json";

export async function getServerSideProps({ params }) {
  const realState = [...realStateData];

  return { props: { realState } };
}
export default function Imovels({ realState }) {
  const [filters, setFilters] = useState([]);
  const router = useRouter();

  const { query } = router;

  useEffect(() => {
    if (query) {
      const data = realState.filter(
        (i) =>
          i["propType"] === query["propType"] ||
          i["address"].includes(query["location"]) ||
          i[query["forDeal"]]
      );

      setFilters([...data]);
    }
  }, [router]);

  return (
    <WithLayout>
      <PropertyDetailSection data={filters} />
    </WithLayout>
  );
}
