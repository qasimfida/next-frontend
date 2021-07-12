import React, { useState } from "react";
import Logo from "./../../assets/47.jpg";
import Heading from "../../component/Heading";
import P from "../../component/Para";
import { Col, Container, Form, Row } from "react-bootstrap";
import FeaturedCard from "../../component/feature-card";
import styles from "../../styles/container/SearchResults.module.css";
import Pagination from "../../component/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faSearch } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    title: "Upper portion Apartment for sale",
    address: "Staten Island / Queens",
    img: Logo,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    price: "$488.000",
  },
  {
    title: "Upper portion Apartment for sale",
    address: "Staten Island / Queens",
    img: Logo,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    price: "$488.000",
  },
  {
    title: "Upper portion Apartment for sale",
    address: "Staten Island / Queens",
    img: Logo,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    price: "$488.000",
  },
];

function FeaturedSection() {
  const [gridLayout, setGridLayout] = useState(false);
  return (
    <div className={styles.results_wrapper}>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <div
              className={`${styles.sortbar} d-flex justify-content-between items-center`}
            >
              <div className="d-flex align-items-center ">
                <span className={`${styles.label} `} >Sort by</span>
                <Form.Group
                  controlId="exampleForm.ControlSelect1"
                  className={`mb-0 ${styles.form_group}`}
                >
                  <Form.Control as="select" className={styles.select}>
                    <option>Based Property</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="d-flex">
                <div
                  className={`${gridLayout ? styles.active: ''} ${styles.grid_icon}`}
                  onClick={() => setGridLayout(true)}
                >
                  <FontAwesomeIcon className={`${styles.icon} ${gridLayout ?styles.active_icon: ''}`} icon={faThLarge} size={"lg"} />
                </div>
                <div
                  className={`${!gridLayout ? styles.active: ''} ${styles.grid_icon}`}
                  onClick={() => setGridLayout(false)}
                >
                  <FontAwesomeIcon className={`${styles.icon} ${!gridLayout ?styles.active_icon: ''}`} icon={faThLarge}  size={"lg"} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          {data.map((item, ind) => (
            <Col xs={12} lg={gridLayout? 12 : 6}  key={ind}>
              <FeaturedCard
                mediaLeft={gridLayout}
                title={item.title}
                address={item.address}
                img={item.img}
                price={item.price}
                bedrooms={item.bedrooms}
                bathrooms={item.bathrooms}
                garage={item.garage}
              />
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center">
          <Pagination />
        </Row>
      </Container>
    </div>
  );
}

export default FeaturedSection;
