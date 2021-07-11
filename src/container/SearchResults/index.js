import React from "react";
import { Container } from "react-bootstrap";
import GoogleMaps from "../../component/map";
import SearchForm from "../../component/search-form";

import styles from "../../styles/container/SearchResults.module.css";
import FeaturedSection from "../SearcResultsSection";

const SearchResults = () => {
  return (
    <div>
      <GoogleMaps />
      <div className={styles.searchWrapper}>
        <Container>
          <SearchForm />
        </Container>
      </div>
      <FeaturedSection />
    </div>
  );
};

export default SearchResults;
