import Head from "next/head";
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
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <PropertySection data={state} />
    </WithLayout>
  );
}
export async function getServerSideProps({ params }) {
  // const image = await getImages(); //pass the prop from the url
  const properties = [...propertyData];

  return { props: { data: properties } };
}
export default Property;
