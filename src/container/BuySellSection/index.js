import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../../styles/container/BuySell.module.css";

function BuySellSection() {
  return (
    <div className={`${styles.buy_wrap} wow fadeInUp`}>
      <Container className="container">
        <Row className="justify-content-center">
          <Col sm={12} md={8}>
            <h1>Buy or sell your house</h1>
            <p>
              Donec placerat dolor id neque pretium placerat. Donec in facilisis
              risus. In sollicitudin magna luctus sem ultrices convallis. Sed
              quis ex vel tellus ullamcorper malesuada. Aenean facilisis ex
              dolor, id vehicula nisl consectetur dapibus. Phasellus mollis
              mauris semper placerat convallis. Morbi varius facilisis
              dignissim. Donec eu sollicitudin nunc. Aliquam in nisi id arcu
              gravida vehicula quis nec sapien. Fusce at dolor ex.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className={`${styles.my_button} ${styles.mar_right}`}>
              Start Search Now
            </Button>
            <Button className={styles.my_button}>Browse Properties</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BuySellSection;
