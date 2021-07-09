import React from "react";
// import { Wrapper } from "./styles";
import styles from "../../styles/components/paragraph.module.css";

function Paragraph(props) {
  return <div className={styles.paragraph}>{props.children}</div>;
}

export default Paragraph;
