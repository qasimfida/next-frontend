import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import styles from "../../styles/container/Slider.module.css";

function SliderSection() {
  return (
    <div className={styles.slider_wrap}>
      <Container>
        <div className={styles.sliderTxt}>
          <h1>Find Your Dream Home</h1>
          <p>From as low as $10 per day with limited time offer discounts.</p>
          <Container>
            <Tabs defaultActiveKey="second">
              <Tab eventKey="first" title="Buy Property" className="junaid">
                <div className={styles.form_wrap}>
                  <Form>
                    <Row className={styles.inputs}>
                      <Col lg={5} className="pr-2 mb-0">
                        <Form.Group controlId="">
                          <Form.Control
                            type="email"
                            placeholder="Enter Property, Location, Landmark ..."
                          />
                        </Form.Group>{" "}
                      </Col>
                      <Col lg={4} className="pr-2 pl-0 mb-0">
                        <Form.Group controlId="">
                          <Form.Control type="email" placeholder="Loctaion" />
                        </Form.Group>{" "}
                      </Col>
                      <Col lg={3} className="pr-2 pl-0 mb-0">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Control as="select">
                            <option>Property Type</option>
                            <option>Residential</option>
                            <option>Comercial</option>
                            <option>Luxury</option>
                            <option>Land</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col lg={3} className="pr-2 mb-0">
                        {" "}
                        <Form.Group controlId="exampleForm.ControlSelect1">
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
                      </Col>
                      <Col lg={3} className="pr-2 pl-0 mb-0">
                        <Form.Group controlId="exampleForm.ControlSelect1">
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
                      </Col>
                      <Col lg={4} className="pr-2 pl-0 mb-0">
                        <Form.Group controlId="exampleForm.ControlSelect1">
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
                      </Col>
                      <Col lg={2} className="pr-2 pl-0 mb-0">
                        <div class="input-btn">
                          <button>
                            <FontAwesomeIcon icon={faSearch} className="mr-2" />
                            Search{" "}
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Tab>
              <Tab eventKey="second" title="Rent Property">
                <div className={styles.form_wrap}>
                  <Form>
                    <Row className={styles.inputs}>
                      <Col lg={5} className="pr-2 mb-0">
                        <Form.Group controlId="">
                          <Form.Control
                            type="email"
                            placeholder="Enter Property, Location, Landmark ..."
                          />
                        </Form.Group>{" "}
                      </Col>
                      <Col lg={4} className="pr-2 pl-0 mb-0">
                        <Form.Group controlId="">
                          <Form.Control type="email" placeholder="City" />
                        </Form.Group>{" "}
                      </Col>
                      <Col lg={3} className="pr-2 pl-0 mb-0">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Control as="select">
                            <option>Property Type</option>
                            <option>Residential</option>
                            <option>Comercial</option>
                            <option>Luxury</option>
                            <option>Land</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col lg={3} className="pr-2 mb-0">
                        {" "}
                        <Form.Group controlId="exampleForm.ControlSelect1">
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
                      </Col>
                      <Col lg={3} className="pr-2 pl-0 mb-0">
                        <Form.Group controlId="exampleForm.ControlSelect1">
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
                      </Col>
                      <Col lg={4} className="pr-2 pl-0 mb-0">
                        <Form.Group controlId="exampleForm.ControlSelect1">
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
                      </Col>
                      <Col lg={2} className="pr-2 pl-0 mb-0">
                        <div class="input-btn">
                          <button>
                            <FontAwesomeIcon icon={faSearch} className="mr-2" />
                            Search
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Tab>
            </Tabs>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default SliderSection;
