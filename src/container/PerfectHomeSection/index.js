import React from "react";
import FeaturedCard from "../../component/feature-card";
// import { Wrapper } from "./styles";
import styles from "../../styles/container/perfectHome.module.css";
import Logo from "./../../assets/47.jpg";
import Heading from "../../component/Heading";
import P from "../../component/Para";
import { Col, Container, Row } from "react-bootstrap";

function PerfectHomeSection() {
  return (
    <div className={`${styles.home_wrapper} wow fadeInUp`}>
      <Container>
        <Row className=" align-items-center">
          <Col lg={8}>
            <div className={styles.perfect_text}>
              <h1>Want to find your perfect home?</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ultricies, ex eu cursus viverra, lorem turpis
                feugiat augue, non viverra ipsum nunc in magna.
              </span>{" "}
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.readmore}>
              <a href="#">Browse Properties</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PerfectHomeSection;
