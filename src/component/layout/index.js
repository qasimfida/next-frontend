import Head from "next/head";
import React, { useEffect } from "react";
import Footer from "../Footer";
import NavigationBar from "../navbar";
import TopBar from "../topBar";

const WithLayout = (props) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wow.js");
    }
    new window.WOW().init();
  }, []);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
      </Head>
      <TopBar />
      <NavigationBar />
      {props.children}
      <Footer />
    </>
  );
};

export default WithLayout;
