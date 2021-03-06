import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryCard from "../../component/category-card";
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
            <CategoryCard />
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
