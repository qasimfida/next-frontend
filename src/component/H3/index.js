import React from "react";
// import { Wrapper } from "./styles";
import styles from "../../styles/components/h3.module.css";

function H3(props) {
  return <div className={styles.heading}>{props.children}</div>;
}

export default H3;
