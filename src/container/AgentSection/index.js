import React from "react";
import { Card, Button, Col, Row, Container, Pagination } from "react-bootstrap";
import styles from "../../styles/container/Agents.module.css";

import logo from "./../../assets/agent01.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import AgentCard from "../../component/agent-card";

const data = [
  {
    agnecyName: "James Adult",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "James Adult",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "James Adult",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "James Adult",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "James Adult",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "James Adult",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "James Adult",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "James Adult",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "James Adult",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
];

export const AgentSection = () => {
  return (
    <>
      <div className={styles.innerHeading}>
        <Container>
          <h1>Agents</h1>
        </Container>
      </div>
      <div className={styles.innerContent}>
        <Container>
          <div className="listing_wrap">
            <Row>
              {data.map((item, ind) => (
                <AgentCard
                  key={ind}
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

export default AgentSection;
