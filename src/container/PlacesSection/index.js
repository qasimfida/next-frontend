import React from "react";
import FeaturedCard from "../../component/feature-card";
import styles from "../../styles/container/PopularPlaces.module.css";
import Logo from "./../../assets/47.jpg";
import Heading from "../../component/Heading";
import P from "../../component/Para";
import photo from "./../../assets/miami.jpg";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

function PlacesSection() {
  return (
    <div className={styles.popular_wrapper}>
      <Container>
        <Heading>
          POPULAR PLACES
          <P>Lorem ipsum dolor sit amet consectetur</P>
        </Heading>
        <Row className="mt-4">
          <Col md={8}>
            <div className={styles.popular_img}>
              {" "}
              {/* <img alt="" src={`${photo.src}`} /> */}
              <Image src={photo} alt="" />
              <div className={styles.popular_img_text}>
                <a href="#">California</a>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className={styles.popular_img}>
              {" "}
              {/* <img alt="" src={`${photo.src}`} /> */}
              <Image src={photo} alt="" />
              <div className={styles.popular_img_text}>
                <a href="#">New York</a>
              </div>
            </div>
            <div className={styles.popular_img}>
              {" "}
              {/* <img alt="" src={`${photo.src}`} /> */}
              <Image src={photo} alt="" />
              <div className={styles.popular_img_text}>
                <a href="#">Miami</a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.popular_img}>
              {" "}
              {/* <img alt="" src={`${photo.src}`} /> */}
              <Image src={photo} alt="" />
              <div className={styles.popular_img_text}>
                <a href="#">San Francisco</a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.popular_img}>
              {" "}
              {/* <img alt="" src={`${photo.src}`} /> */}
              <Image src={photo} alt="" />
              <div className={styles.popular_img_text}>
                <a href="#">Dubai</a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.popular_img}>
              {" "}
              {/* <img alt="" src={`${photo.src}`} /> */}
              <Image src={photo} alt="" />
              <div className={styles.popular_img_text}>
                <a href="#">Australia</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PlacesSection;
