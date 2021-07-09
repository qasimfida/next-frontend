import React from "react";
import { Card, Button, Col, Row, Container, Pagination } from "react-bootstrap";
import styles from "../../styles/components/agencies.module.css";
import logo from "../../assets/company01.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleLeft,
  faAngleRight,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    agnecyName: "Real Estate Company",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
];
export const AgenciesCard = () => {
  return (
    <>
      {data.map((item, ind) => (
        <Col lg={4}>
          <div className={`${styles.property_box} wow fadeInUp`}>
            <div className={styles.propertyImg}>
              <img alt="" src={`${logo.src}`} />
            </div>
            <h3>
              <a href="#">{item.agnecyName}</a> <span>{item.detail}</span>
            </h3>
            <Row className="m-0">
              <Col lg={4} className={styles.property_info}>
                <div className={styles.agent_box}>
                  <a href="#">
                    <div class="proprty_icon">
                      <i>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                      </i>
                    </div>
                    <h5>Phone</h5>
                  </a>{" "}
                </div>
              </Col>
              <Col lg={4} className={styles.property_info}>
                <div className={styles.agent_box}>
                  <a href="#">
                    <div class="proprty_icon">
                      <i class="far fa-envelope">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </i>
                    </div>
                    <h5>Email</h5>
                  </a>{" "}
                </div>
              </Col>
              <Col lg={4} className={styles.property_info}>
                <div className={styles.agent_box}>
                  <a href="#">
                    <div class="proprty_icon">
                      <i class="fas fa-map-marker-alt">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </i>
                    </div>
                    <h5>Address</h5>
                  </a>{" "}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      ))}
    </>
  );
};

export default AgenciesCard;
