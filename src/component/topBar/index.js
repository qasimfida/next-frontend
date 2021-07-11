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
    <div className={styles.topbar_wrap}>
      <Container>
        <Row>
          <Col lg={6} md={4} className="align-self-center">
            <ul className={styles.social_media}>
              <li className="mr-1" >
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className="mr-1" >
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="mr-1" >
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li className="mr-1" >
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </Col>
          <Col class="col-lg-6 col-md-8">
            <div className={styles.top_right}>
              <div className={styles.topbar_phone}>
                <a href="#">
                  <FontAwesomeIcon icon={faPhoneAlt} /> (770) 123 4657{" "}
                </a>
              </div>
              <div className={styles.topbar_login}>
                <a href="submit_property"> Submit Property</a>
              </div>
            </div>
          </Col>

          {/* <Col lg={6} md={4} className="align-self-center">
            <ul className={styles.social_media}>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-youtube" aria-hidden="true"></i>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={6} md={8}>
            <div class="top_right">
              <div class="topbar_phone">
                <a href="#">
                  <FontAwesomeIcon icon={faPhoneAlt} /> (770) 123 4657{" "}
                </a>
              </div>
              <div class="topbar_login">
                <a href="submit_property.html"> Submit Property</a>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>

      {/* <div className="container">
        <div className="row md-column justify-content-center ">
          <div className="col align-self-center ">
            <div className="socialIcons">
              <ul className="socialMedia">
                <i>
                  <Icon.Facebook className="socialMedia1" />
                </i>
                <i>
                  <Icon.Twitter className="socialMedia1" />
                </i>
                <i>
                  <Icon.Linkedin className="socialMedia1" />
                </i>
                <i>
                  <Icon.Youtube className="socialMedia1" />
                </i>
              </ul>
            </div>
          </div>

          <button className="button">Submit property </button>
        </div>
      </div> */}
    </div>
  );
};

export default TopBar;
