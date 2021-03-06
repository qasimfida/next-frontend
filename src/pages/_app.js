import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles/globals.css";
import Router from "next/router";
import { useState } from "react";
import Loader from "../component/Loader";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <>
      {loading && <Loader />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
