import React from "react";
import styles from "../../styles/components/heading.module.css";

function Heading(props) {
  return <div className={styles.heading}>{props.children}</div>;
}

export default Heading;
