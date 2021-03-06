import React from "react";

import { Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/container/404.module.css";

function ErrorSection() {
  return (
    <>
      <div className={`${styles.innerHeading} wow fadeInUp`}>
        <Container className="container">
          <h1>404 Page</h1>
        </Container>
      </div>
      <div className={styles.innerContent}>
        <Container className="container">
          <div className="404-wrap wow fadeInUp">
            <Row>
              <Col lg={12} md={12} sm={12} lxs={12}>
                <div className={styles.zero_page}>
                  <h2>404</h2>
                  <h3>Sorry Page Was Not Found</h3>
                  <p>
                    The page you are looking is not available or has been
                    removed. Try going to Home Page by using the button below.
                  </p>
                  <div className={styles.readmore}>
                    {" "}
                    <a href="index.html">Go To Homepages</a>{" "}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ErrorSection;
