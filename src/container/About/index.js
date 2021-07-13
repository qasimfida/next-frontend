import React from "react";
import aboutImg from "../../assets/aboutImg.jpg";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/container/About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

function AboutSection() {
  return (
    <>
      <div className={styles.innerHeading}>
        <Container className="container">
          <h1>About Us</h1>
        </Container>
      </div>
      <div className={styles.innerContent}>
        <Container className="container">
          <Row>
            <Col className="col-lg-6">
              <div className={styles.about_box}>
                <h3>About Real Estate</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus nibh dolor, gravida faucibus dolor consectetur,
                  pulvinar rhoncus risus. Fusce vel rutrum mi. Suspendisse
                  pretium tellus eu ipsum pellentesque convallis. Ut mollis
                  libero eu massa imperdiet faucibus vitae non diam. Sed egestas
                  felis libero, ut suscipit nisl varius non. Proin eget suscipit
                  nulla. Nulla facilisi. In hac habitasse platea dictumst.{" "}
                </p>
                <ul className="tick">
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className={styles.icon}
                    />
                    Fusce pretium ipsum quis enim suscipit
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className={styles.icon}
                    />
                    Morbi euismod at nisl quis tincidunt
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className={styles.icon}
                    />
                    Donec at dolor nec enim varius elementum
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className={styles.icon}
                    />
                    Praesent augue ipsum rutrum at massa
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className={styles.icon}
                    />
                    Suspendisse feugiat metus eget leo tincidunt
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className={styles.icon}
                    />
                    Nunc tincidunt faucibus porttitor
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowCircleRight}
                      className={styles.icon}
                    />
                    Nullam molestie tempor quam quis tincidunt
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="col-lg-6">
              <div className="aboutImg">
                <img alt="" src={`${aboutImg.src}`} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutSection;
