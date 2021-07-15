import React from "react";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/components/agencies.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const AgenciesCard = ({
  detail,
  agnecyName,
  img,
  mediaLeft = false,
  hasSocialIcons,
}) => {
  return (
    <>
      <Col lg={4} className={`${mediaLeft ? "col-lg-12 p-0" : ""}`}>
        <div className={`${mediaLeft ? "d-flex" : ""} ${styles.property_box}`}>
          <div>
            <div className={`${mediaLeft ? "mr-5" : ""} `}>
              {/* <img alt="" src={`${img.src}`} /> */}
              <Image
                src={img}
                alt=""
                className="img-fluid"
                width="1000"
                height="700"
              />
            </div>
          </div>
          <div>
            <h3>
              <a href="#">{agnecyName}</a> <span>{detail}</span>
            </h3>
            <Row className="m-0">
              <Col lg={4} sm={4} xs={4} className={styles.property_info}>
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
              <Col lg={4} sm={4} xs={4} className={styles.property_info}>
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
              <Col lg={4} sm={4} xs={4} className={styles.property_info}>
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
            {hasSocialIcons && (
              <div className={`${styles.social_icons} mt-4`}>
                <ul>
                  <li className="ml-1">
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li className="ml-1">
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className="ml-1">
                    <a href="#">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li className="ml-1">
                    <a href="#">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </Col>
    </>
  );
};

export default AgenciesCard;
