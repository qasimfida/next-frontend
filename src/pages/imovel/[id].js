import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import WithLayout from "../../component/layout";
import PropertySection from "../../container/PropertySection";
import propertyData from "../api/data_realestate.json";

function Property({ data }) {
  const [state, setState] = useState({});
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (data) {
      const detail = data.filter((i) => i.id === id) || [];
      if (detail.length) {
        setState(detail[0]);
      }
    }
  }, [data]);
  return (
    <WithLayout>
      <PropertySection data={state} />
    </WithLayout>
  );
}
export async function getServerSideProps({ params }) {
  // const image = await getImages(); //pass the prop from the url
  const articles = [...propertyData];

  return { props: { data: articles } };
}
export default Property;
