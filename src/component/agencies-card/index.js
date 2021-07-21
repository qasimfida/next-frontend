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

const AgenciesCard = (props) => {
  const {
    id,
    name,
    img,
    mediaLeft = false,
    hasSocialIcons,
    instagram,
    youtube,
    twitter,
    facebook,
    subtitle,
  } = props || {};
  return (
    <div className={`${styles.property_box} wow fadeInUp`}>
      <Row>
        <Col xs={12} md={mediaLeft ? 5 : 12}>
          <div
            className={`${mediaLeft ? "md:mr-5" : ""} w-100 ${styles.media}`}
          >
            <Image src={img.src} alt="" className="img-fluid" layout="fill" />
          </div>
        </Col>
        <Col xs={12} md={mediaLeft ? 7 : 12}>
          <Row>
            <Col xs={12}>
              <h3>
                <a href={`corretor-imoveis/${id}`}>{name}</a> <span>{subtitle}</span>
              </h3>
              <Row className="m-0">
                <Col xs={4} className={styles.property_info}>
                  <div className={styles.agent_box}>
                    <a href="#">
                      <div className="proprty_icon">
                        <i>
                          <FontAwesomeIcon icon={faPhoneAlt} />
                        </i>
                      </div>
                      <h5>Phone</h5>
                    </a>
                  </div>
                </Col>
                <Col xs={4} className={styles.property_info}>
                  <div className={styles.agent_box}>
                    <a href="#">
                      <div className="proprty_icon">
                        <i className="far fa-envelope">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </i>
                      </div>
                      <h5>Email</h5>
                    </a>
                  </div>
                </Col>
                <Col xs={4} className={styles.property_info}>
                  <div className={styles.agent_box}>
                    <a href="#">
                      <div className="proprty_icon">
                        <i className="fas fa-map-marker-alt">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </i>
                      </div>
                      <h5>Address</h5>
                    </a>
                  </div>
                </Col>
              </Row>
              {hasSocialIcons && (
                <div className={`${styles.social_icons} mt-4`}>
                  <ul>
                    <li className="ml-1">
                      <a href={facebook} target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li className="ml-1">
                      <a href={twitter} target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li className="ml-1">
                      <a href={instagram} target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li className="ml-1">
                      <a href={youtube} target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AgenciesCard;
