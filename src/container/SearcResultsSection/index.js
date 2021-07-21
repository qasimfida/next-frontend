import React, { useEffect, useState } from "react";
import Logo from "./../../assets/47.jpg";
import Heading from "../../component/Heading";
import P from "../../component/Para";
import { Col, Container, Form, Row } from "react-bootstrap";
import FeaturedCard from "../../component/feature-card";
import styles from "../../styles/container/SearchResults.module.css";
import Pagination from "../../component/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function FeaturedSection({ data = [] }) {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setFilter(data || []);
  }, [data]);

  const router = useRouter();
  const handleClick = (i) => {
    router.push("/imovel/" + i);
  };
  const [gridLayout, setGridLayout] = useState(false);

  const onSelect = (e) => {
    const { value } = e.target;
    setFilter((prev) => {
      const newState = prev.filter((i) => i.propType === value);
      return [...newState];
    });
  };
  return (
    <div className={`${styles.results_wrapper} wow fadeInUp`}>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <div
              className={`${styles.sortbar} d-flex justify-content-between items-center`}
            >
              <div className="d-flex align-items-center ">
                <span className={`${styles.label} `}>Sort by</span>
                <Form.Group
                  controlId="exampleForm.ControlSelect1"
                  className={`mb-0 ${styles.form_group}`}
                >
                  <Form.Control
                    onChange={onSelect}
                    as="select"
                    className={styles.select}
                  >
                    <option disabled>Based Property</option>
                    <option value="House">House</option>
                    <option value="Store">Store</option>
                    <option value="Apartament">Apartament</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="d-none d-sm-flex ">
                <div
                  className={`${gridLayout ? styles.active : ""} ${
                    styles.grid_icon
                  }`}
                  onClick={() => setGridLayout(true)}
                >
                  <FontAwesomeIcon
                    className={`${styles.icon} ${
                      gridLayout ? styles.active_icon : ""
                    }`}
                    icon={faThLarge}
                    size={"lg"}
                  />
                </div>
                <div
                  className={`${!gridLayout ? styles.active : ""} ${
                    styles.grid_icon
                  }`}
                  onClick={() => setGridLayout(false)}
                >
                  <FontAwesomeIcon
                    className={`${styles.icon} ${
                      !gridLayout ? styles.active_icon : ""
                    }`}
                    icon={faThLarge}
                    size={"lg"}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="d-none d-sm-flex  ">
          {filter.length ? (
            filter.map((item, ind) => (
              <Col xs={12} lg={gridLayout ? 12 : 6} key={`${item.id}`}>
                <div onClick={() => handleClick(item.id)}>
                  <FeaturedCard
                    mediaLeft={gridLayout}
                    title={item.title}
                    address={item.address}
                    img={item.images[0].url}
                    price={item.price}
                    bedrooms={item.bedrooms}
                    bathrooms={item.bathrooms}
                    garage={item.garage}
                  />
                </div>
              </Col>
            ))
          ) : (
            <h3 className="text-center w-100 mt-5 "> No data found </h3>
          )}
        </Row>
        <Row className="d-flex d-sm-none d-md-none d-lg-none ">
          {filter.length ? (
            filter.map((item, ind) => (
              <Col xs={12} key={`${item.id}`}>
                <div onClick={() => handleClick(item.id)}>
                  <FeaturedCard
                    title={item.title}
                    address={item.address}
                    img={item.images[0].url}
                    price={item.price}
                    bedrooms={item.bedrooms}
                    bathrooms={item.bathrooms}
                    garage={item.garage}
                  />
                </div>
              </Col>
            ))
          ) : (
            <h3 className="text-center w-100 mt-5 "> No data found </h3>
          )}
        </Row>
        {filter.length > 0 && (
          <Row className="justify-content-center">
            <Pagination />
          </Row>
        )}
      </Container>
    </div>
  );
}

export default FeaturedSection;
