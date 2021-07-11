import React from "react";

import { Container } from "react-bootstrap";
import styles from "../../styles/container/BuySell.module.css";

function BuySellSection() {
  return (
    <div className={styles.buy_wrap}>
      <Container class="container">
        <h1>Buy or sell your house</h1>
        <p>
          Donec placerat dolor id neque pretium placerat. Donec in facilisis
          risus. In sollicitudin magna luctus sem ultrices convallis. Sed quis
          ex vel tellus ullamcorper malesuada. Aenean facilisis ex dolor, id
          vehicula nisl consectetur dapibus. Phasellus mollis mauris semper
          placerat convallis. Morbi varius facilisis dignissim. Donec eu
          sollicitudin nunc. Aliquam in nisi id arcu gravida vehicula quis nec
          sapien. Fusce at dolor ex.
        </p>
        <div className={styles.start_btn}>
          {" "}
          <a href="#">Start Search Now</a> <a href="#">Browse Properties</a>{" "}
        </div>
      </Container>
    </div>
  );
}

export default BuySellSection;
