import React from "react";
import { Accordion, Button, Card, Col, Container, Form } from "react-bootstrap";
import styles from "../../styles/container/PropertiesDetail.module.css";
import CategoryCard from "../../component/category-card";
import FeaturedSection from "../SearcResultsSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowCircleDown,
  faArrowDown,
  faMapMarkerAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export const PropertyDetailSection = () => {
  return (
    <>
      <div className={styles.innerHeading}>
        <Container>
          <h1>Property Details</h1>
        </Container>
      </div>
      <div className={styles.innerContent}>
        <Container>
          <div class="row listing_wrap">
            <div class="col-lg-4">
              <Form>
                <div class="sidebar_form card card-body  wow fadeInUp">
                  <div className={styles.input_group}>
                    <input
                      type="text"
                      name=""
                      className={`${styles.form_control} form-control`}
                      placeholder="Keyword"
                    />
                    <div className={styles.hover_icon}>
                      <a href="#">
                        <i>
                          <FontAwesomeIcon icon={faSearch} />
                        </i>
                      </a>
                    </div>
                  </div>
                  <div className={styles.input_group}>
                    <input
                      type="text"
                      name=""
                      className={`${styles.form_control} form-control`}
                      placeholder="Location"
                    />
                    <div className={styles.hover_icon}>
                      <a href="#">
                        <i>
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </i>
                      </a>
                    </div>
                  </div>
                  <Form.Group
                    className={styles.form_group}
                    controlId="exampleForm.ControlSelect1"
                  >
                    <Form.Control as="select">
                      <option>Property Status</option>
                      <option>For Sale</option>
                      <option>For Rent</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group
                    className={styles.form_group}
                    controlId="exampleForm.ControlSelect1"
                  >
                    <Form.Control as="select">
                      <option>Property Type</option>
                      <option>Residential</option>
                      <option>Comercial</option>
                      <option>Luxury</option>
                      <option>Land</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group
                    className={styles.form_group}
                    controlId="exampleForm.ControlSelect1"
                  >
                    <Form.Control as="select">
                      <option>Bedrooms</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group
                    className={styles.form_group}
                    controlId="exampleForm.ControlSelect1"
                  >
                    <Form.Control as="select">
                      <option>Bathrooms</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group
                    className={styles.form_group}
                    controlId="exampleForm.ControlSelect1"
                  >
                    <Form.Control as="select">
                      <option>Price</option>
                      <option>$1000</option>
                      <option>$2000</option>
                      <option>$3000</option>
                      <option>$4000</option>
                      <option>$5000</option>
                      <option>$6000</option>
                    </Form.Control>
                  </Form.Group>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="input-group">
                        <input
                          type="text"
                          className={`${styles.form_control} form-control`}
                          placeholder="Min Area"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-group">
                        <input
                          type="text"
                          className={`${styles.form_control} form-control`}
                          placeholder="Max Area"
                        />
                      </div>
                    </div>
                  </div>
                  <Accordion defaultActiveKey="0">
                    <div>
                      <Accordion.Toggle
                        className={styles.toggle_button}
                        as="div"
                        variant="link"
                        eventKey="0"
                      >
                        <span className={styles.toggle_icon}>
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color="white"
                            size="xs"
                          />
                        </span>

                        <h4>Advanced Feature</h4>
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0">
                        <div className={styles.checkbox}>
                          <div className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`check-api-checkbox`}
                            >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label />
                              <div className="ml-2">Custom api checkbox</div>
                            </Form.Check>
                          </div>
                          <div className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`check-api-checkbox`}
                            >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label />
                              <div className="ml-2">Wifi</div>
                            </Form.Check>
                          </div>
                          <div className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`check-api-checkbox`}
                            >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label />
                              <div className="ml-2">Outdoor Shower</div>
                            </Form.Check>
                          </div>
                          <div className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`check-api-checkbox`}
                            >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label />
                              <div className="ml-2">Refrigerator</div>
                            </Form.Check>
                          </div>
                          <div className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`check-api-checkbox`}
                            >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label />
                              <div className="ml-2">Dryer</div>
                            </Form.Check>
                          </div>
                          <div className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`check-api-checkbox`}
                            >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label />
                              <div className="ml-2">Gym</div>
                            </Form.Check>
                          </div>
                          <div className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`check-api-checkbox`}
                            >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label />
                              <div className="ml-2">Tv Cable </div>
                            </Form.Check>
                          </div>
                          <div className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`check-api-checkbox`}
                            >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label />
                              <div className="ml-2">Swiming</div>
                            </Form.Check>
                          </div>
                        </div>
                      </Accordion.Collapse>
                    </div>
                  </Accordion>{" "}
                  <div class="input-group">
                    <input
                      type="submit"
                      className={styles.submit}
                      value="Search"
                    />
                  </div>
                </div>
              </Form>
              <CategoryCard />
            </div>
            <Col lg={8}>
              <FeaturedSection />
            </Col>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PropertyDetailSection;
