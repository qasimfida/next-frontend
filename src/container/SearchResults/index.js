import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GoogleMaps from "../../component/map";
import VerticalForm from "../../component/search-form/vertical-form";

import styles from "../../styles/container/SearchResults.module.css";
import FeaturedSection from "../SearcResultsSection";

const SearchResults = () => {
  const cateogry = [
    { label: "Apartement ", results: "9" },
    { label: "Villa ", results: "9" },
    { label: "Familty House ", results: "9" },
    { label: "Modren Villa ", results: "9" },
    { label: "Home Town ", results: "9" },
    { label: "Office ", results: "9" },
  ];
  return (
    <div>
      <GoogleMaps />
      <Container>
        <Row>
          <Col xs={12} lg={4}>
            <div className={styles.sidebar}>
              <VerticalForm />
            </div>
            <div className={styles.sidebar}>
              <h4 className={styles.sidebar_title}>Category</h4>
              {cateogry.map((item) => {
                return (
                  <div
                    className={` d-flex justify-content-between ${styles.list_item}`}
                  >
                    <span>{item.label}</span>
                    <span>{item.results}</span>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col xs={12} lg={8}>
            <FeaturedSection />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchResults;
