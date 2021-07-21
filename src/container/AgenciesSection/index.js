import React from "react";
import { Card, Button, ColRow, Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/components/agencies.module.css";
import logo from "../../assets/company01.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleLeft,
  faAngleRight,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import AgenciesCard from "../../component/agencies-card";
import { useRouter } from "next/router";
export const AgenciesSection = ({ data }) => {
  const router = useRouter();
  const handleClick = (i) => {
    router.push("/corretor-imoveis/" + i);
  };
  return (
    <>
      <div className={`${styles.innerHeading} wow fadeInUp`}>
        <Container>
          <h1>Agencies</h1>
        </Container>
      </div>
      <div className={styles.innerContent}>
        <Container>
          <div className="listing_wrap wow fadeInUp">
            <Row>
              {data &&
                data.map((agency) => (
                  <Col lg={4} key={agency.id}>
                    <div onClick={() => handleClick(agency.id)}>
                      <AgenciesCard {...agency} img={logo} />
                    </div>
                  </Col>
                ))}
            </Row>
            <div
              className={`${styles.blog_pagination} blog-pagination text-center`}
            >
              <a href="#0">
                <i>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </i>
              </a>{" "}
              <a href="#0">01</a>
              <a href="#0" className="active">
                02
              </a>
              <a href="#0">03</a>
              <a href="#0">
                <i>
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
              </a>{" "}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AgenciesSection;
