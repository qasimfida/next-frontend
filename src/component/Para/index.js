import React from "react";
import styles from "../../styles/components/para.module.css";

function P(props) {
  return <div className={styles.para}>{props.children}</div>;
}

export default P;
