import React from "react";
import Logo from "./../../assets/47.jpg";
import Heading from "../../component/Heading";
import P from "../../component/Para";
import { Col, Container, Row } from "react-bootstrap";
import FeaturedCard from "../../component/feature-card";
import styles from "../../styles/container/FeatureSection.module.css";

const data = [
  {
    title: "Upper portion Apartment for sale",
    address: "Staten Island / Queens",
    img: Logo,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    price: "$488.000",
  },
  {
    title: "Upper portion Apartment for sale",
    address: "Staten Island / Queens",
    img: Logo,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    price: "$488.000",
  },
  {
    title: "Upper portion Apartment for sale",
    address: "Staten Island / Queens",
    img: Logo,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    price: "$488.000",
  },
];

function FeaturedSection() {
  return (
    <div className={`${styles.feature_wrapper}  wow fadeInUp`}>
      <Container>
        <Heading>
          Featured Properties
          <P>Lorem ipsum dolor sit amet, consectetur aadipiscing elit.</P>
        </Heading>

        <Row>
          {data.map((item, ind) => (
            <Col md={4} key={`${ind}`}>
              <FeaturedCard
                mediaLeft={false}
                title={item.title}
                address={item.address}
                img={item.img}
                price={item.price}
                bedrooms={item.bedrooms}
                bathrooms={item.bathrooms}
                garage={item.garage}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default FeaturedSection;
