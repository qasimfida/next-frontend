import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Container, Col, Row, Form } from "react-bootstrap";
import styles from "../../styles/container/Contact.module.css";

function ContactSection() {
  return (
    <>
      <div className={`${styles.innerHeading} wow fadeInUp`}>
        <Container>
          <h1>Contact Us</h1>
        </Container>
      </div>
      <div className={styles.innerContent}>
        <Container>
          <div className={styles.getTouch}>Get In Touch</div>
          <Row className="wow fadeInUp">
            <Col xs={12}>
              <Form>
                <div className={styles.messages}></div>
                <div className={styles.controls}>
                  <Row>
                    <Col xs={12} lg={6}>
                      <div className="form-group has-error has-danger">
                        <input
                          id="form_name"
                          className={`${styles.form_control} form-control`}
                          type="text"
                          name="name"
                          placeholder="Name"
                          required=""
                          s
                        />
                      </div>
                    </Col>
                    <Col xs={12} lg={6}>
                      <div className="form-group">
                        <input
                          id="form_email"
                          className={`${styles.form_control} form-control`}
                          type="email"
                          name="email"
                          placeholder="Email"
                          required=""
                        />
                      </div>
                    </Col>
                    <Col xs={12} lg={6}>
                      <div className="form-group">
                        <input
                          id="form_phone"
                          className={`${styles.form_control} form-control`}
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          required=""
                        />
                      </div>
                    </Col>
                    <Col xs={12} lg={6}>
                      <div className="form-group">
                        <input
                          id="form_subject"
                          className={`${styles.form_control} form-control`}
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          className={`${styles.form_control} ${styles.text} form-control`}
                          name="message"
                          placeholder="Message"
                          rows="4"
                          required=""
                        ></textarea>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="contact-wrap">
                        <div className={styles.contact_btn}>
                          <button type="submit" className={styles.sub}>
                            Submit Now{" "}
                            <i
                              className="fa fa-arrow-circle-right"
                              aria-hidden="true"
                            >
                              <FontAwesomeIcon icon={faArrowCircleRight} />
                            </i>
                          </button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactSection;
