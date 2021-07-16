import { faFacebookF, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowCircleRight,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Col, Row, Form, Card } from "react-bootstrap";
import styles from "../../styles/container/Submit.module.css";

function SubmitPropertySection() {
  return (
    <>
      <div className={`${styles.innerHeading} wow fadeInUp`}>
        <Container>
          <h1>Submit Property</h1>
        </Container>
      </div>
      <div className={`${styles.innerContent} wow fadeInUp`}>
        <Container>
          <h3>Basic Information</h3>
          <div className="formcol">
            <Form>
              <Row className={styles.inputs}>
                <Col lg={6}>
                  <Form.Group controlId="">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select">
                      <option>Property Status</option>
                      <option>For Sale</option>
                      <option>For Rent</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col lg={3}>
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
                <Col lg={3}>
                  <Form.Group controlId="">
                    <Form.Control type="email" placeholder="Price" />
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Group controlId="">
                    <Form.Control type="email" placeholder="Area" />
                  </Form.Group>
                </Col>
                <Col lg={3}>
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
                <Col lg={12}>
                  <Form.Group controlId="">
                    <div className={styles.uploadphotobx}>
                      <Form.File id="formcheck-api-regular">
                        <i className="fa fa-upload" aria-hidden="true">
                          {" "}
                          <FontAwesomeIcon icon={faUpload} />
                        </i>
                        <h4>Upload your photo</h4>
                        <p>It must be a head-shot photo</p>
                        <Form.File.Label>
                          Regular file input
                          <Form.File.Input />
                        </Form.File.Label>
                      </Form.File>
                    </div>
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group controlId="">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group controlId="">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group controlId="">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group controlId="">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                </Col>
              </Row>
              <h3 className="mt-3">Contact Details</h3>
              <Row className={styles.inputs}>
                <Col lg={3}>
                  <Form.Group controlId="">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Group controlId="">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Group controlId="">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                </Col>
                <Col lg={12}>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Col>
                <Col lg={12}>
                  <div className="contact-btn">
                    <button type="submit" className={styles.sub}>
                      Submit Now{" "}
                      <i aria-hidden="true">
                        <FontAwesomeIcon icon={faArrowCircleRight} />
                      </i>
                    </button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SubmitPropertySection;
