import React from "react";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/components/agencies.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function AgentCard({ mediaLeft = false, detail, img, agnecyName }) {
  return (
    <div
      className={`${mediaLeft ? "d-flex mt-4" : ""} ${
        styles.property_box
      } wow fadeInUp`}
    >
      <div>
        <div className={`${mediaLeft ? "mr-4" : ""}  ${styles.propertyImg}`}>
          <Image src={img} alt="" />
        </div>
      </div>
      <div>
        <h3>
          <a href="#">{agnecyName}</a> <span>{detail}</span>
        </h3>
        <Row className="m-0">
          <Col className={styles.property_info}>
            <div className={styles.agent_box}>
              <a href="#">
                <div className="proprty_icon">
                  <i>
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </i>
                </div>
                <h5>Phone</h5>
              </a>{" "}
            </div>
          </Col>
          <Col className={styles.property_info}>
            <div className={styles.agent_box}>
              <a href="#">
                <div className="proprty_icon">
                  <i className="far fa-envelope">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                </div>
                <h5>Email</h5>
              </a>{" "}
            </div>
          </Col>
          <Col className={styles.property_info}>
            <div className={styles.agent_box}>
              <a href="#">
                <div className="proprty_icon">
                  <i className="fas fa-map-marker-alt">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </i>
                </div>
                <h5>Address</h5>
              </a>{" "}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AgentCard;
