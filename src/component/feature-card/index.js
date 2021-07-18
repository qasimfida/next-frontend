import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../../styles/components/featureCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faExchangeAlt,
  faHeart,
  faMapMarkerAlt,
  faShower,
} from "@fortawesome/free-solid-svg-icons";
import { faHourglass } from "@fortawesome/free-regular-svg-icons";

function FeaturedCard({
  mediaLeft = false,
  title,
  address,
  img,
  bedrooms,
  bathrooms,
  garage,
  price,
}) {
  return (
    <Card className={`${styles.feature} wow fadeInUp`}>
      <div className={`${mediaLeft ? "d-flex" : ""} ${styles.property_box}`}>
        <div className={`${mediaLeft ? "mr-4" : ""}  ${styles.propertyImg}`}>
          <Card.Img
            className={styles.propertyImgInner}
            variant="top"
            src={`${img.src}`}
          />
        </div>
        <div>
          <h3>{title}</h3>
          <div className={styles.property_location}>
            <i aria-hidden="true">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </i>{" "}
            {address}
          </div>
          <div className={styles.heart_info}>
            <div className={styles.heart_icon}>
              <a href="#">
                <i className="fas fa-heart" aria-hidden="true">
                  <FontAwesomeIcon icon={faHeart} />
                </i>
              </a>
            </div>
            <div className={styles.heart_icon}>
              <a href="#">
                <i className="fas fa-exchange-alt">
                  <FontAwesomeIcon icon={faExchangeAlt} />
                </i>
              </a>
            </div>
            <div className={styles.property_price}>{price}</div>
          </div>
          <div className={styles.propert_info}>
            <Row className={styles.outer}>
              <Col xs={4}  className={styles.inner}>
                <div className={styles.proprty_icon}>
                  <FontAwesomeIcon icon={faBed} />
                </div>
                <h5>Bedrooms {bedrooms}</h5>
              </Col>
              <Col xs={4}  className={styles.inner}>
                <div className={styles.proprty_icon}>
                  <FontAwesomeIcon icon={faShower} />
                </div>
                <h5>Bathrooms {bathrooms}</h5>
              </Col>
              <Col xs={4}  className={styles.inner}>
                <div className={styles.proprty_icon}>
                  <FontAwesomeIcon icon={faHourglass} />
                </div>
                <h5>Garage {garage}</h5>
              </Col>
            </Row>
          </div>
          <div className={styles.rent_info}>
            <div className={styles.apart}>Apartment</div>
            <div className={styles.sale}>For Sale</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default FeaturedCard;
