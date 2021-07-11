import React from "react";
import Footer from "../Footer";
import NavigationBar from "../navbar";
import TopBar from "../topBar";

const WithLayout = (props) => {
  return (
    <>
      <TopBar />
      <NavigationBar />
      {props.children}
      <Footer />
    </>
  );
};

export default WithLayout;
