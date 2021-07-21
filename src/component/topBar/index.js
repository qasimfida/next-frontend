import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/components/topBar.module.css";
export const TopBar = () => {
  return (
    <div className={` wow fadeInDown ${styles.topbar_wrap}`}>
      <Container>
        <Row>
          <Col sm={12} lg={6} md={4} className="align-self-center top-bar-left">
            <ul className={styles.social_media}>
              <li className="mr-1">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className="mr-1">
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="mr-1">
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li className="mr-1">
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={8} lg={6}>
            <div className={`${styles.top_right} top-bar-right`}>
              <div className={styles.topbar_phone}>
                <a href="#">
                  <FontAwesomeIcon icon={faPhoneAlt} /> (770) 123 4657{" "}
                </a>
              </div>
              <div className={styles.topbar_login}>
                <a href="submit-property"> Submit Property</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
