import React from "react";
import { Card, Button, Col, Row, Container, Pagination } from "react-bootstrap";
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

const data = [
  {
    agnecyName: "Real Estate Company",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "Real Estate Company",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "Real Estate Company",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "Real Estate Company",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "Real Estate Company",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "Real Estate Company",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
];
export const AgenciesSection = () => {
  return (
    <>
      <div className={styles.innerHeading}>
        <Container>
          <h1>Agencies</h1>
        </Container>
      </div>
      <div className={styles.innerContent}>
        <Container>
          <div className="listing_wrap">
            <Row>
              {data.map((item, ind) => (
                <AgenciesCard
                  key={`${ind}`}
                  agnecyName={item.agnecyName}
                  img={item.img}
                  detail={item.detail}
                />
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
