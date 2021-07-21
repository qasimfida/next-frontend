import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/components/SerachForm.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = (props) => {
  const { type = "Location", onSubmit } = props;
  const [state, setState] = useState({
    property: "",
    location: "",
    propType: "",
    bedrooms: 0,
    bathrooms: 0,
    price: 0,
  });

  const handleChange = (key, e) => {
    const value = e.target.value;
    setState((state) => {
      return { ...state, [key]: value };
    });
  };

  return (
    <div className={styles.form_wrap}>
      {" "}
      <Form>
        <Row className={styles.form_outer_row}>
          <Col className={styles.form_inner_col} lg={5}>
            <Form.Group className={styles.form_group} controlId="">
              <Form.Control
                type="text"
                placeholder="Enter Property, Location, Landmark ..."
                onChange={(e) => handleChange("property", e)}
              />
            </Form.Group>
          </Col>
          <Col className={styles.form_inner_col} lg={4}>
            <Form.Group className={styles.form_group} controlId="">
              <Form.Control
                type="text"
                placeholder={type}
                onChange={(e) => handleChange("location", e)}
              />
            </Form.Group>
          </Col>
          <Col className={styles.form_inner_col} lg={3}>
            <Form.Group
              className={styles.form_group}
              controlId="exampleForm.ControlSelect1"
            >
              <Form.Control
                as="select"
                onChange={(e) => handleChange("propType", e)}
              >
                <option value="House">House</option>
                <option value="Store">Store</option>
                <option value="Apartment">Apartment</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col className={styles.form_inner_col} lg={3}>
            <Form.Group
              className={styles.form_group}
              controlId="exampleForm.ControlSelect1"
            >
              <Form.Control
                as="select"
                onChange={(e) => handleChange("bedrooms", e)}
              >
                <option disabled>Bedrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col className={styles.form_inner_col} lg={3}>
            <Form.Group
              className={styles.form_group}
              controlId="exampleForm.ControlSelect1"
              onChange={(e) => handleChange("bathrooms", e)}
            >
              <Form.Control as="select">
                <option disabled>Bathrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col className={styles.form_inner_col} lg={4}>
            <Form.Group
              className={styles.form_group}
              controlId="exampleForm.ControlSelect1"
              onChange={(e) => handleChange("price", e)}
            >
              <Form.Control as="select">
                <option disabled>Price</option>
                <option value="$1000">$1000</option>
                <option value="$2000">$2000</option>
                <option value="$3000">$3000</option>
                <option value="$4000">$4000</option>
                <option value="$5000">$5000</option>
                <option value="$10000">$10000</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col className={styles.form_inner_col} lg={2}>
            <div className="input-btn">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onSubmit(state);
                }}
              >
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                Search
              </button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
