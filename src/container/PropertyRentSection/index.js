import React from "react";
import FeaturedCard from "../../component/feature-card";
import styles from "../../styles/container/PropertyRent.module.css";
import Logo from "./../../assets/47.jpg";
import Heading from "../../component/Heading";
import P from "../../component/Para";
import { Col, Container, Row } from "react-bootstrap";

const data = [
  {
    title: "Upper portion Apartment for sale",
    address: "Staten Island / Queens",
    img: Logo,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    price: "$388.000",
  },
  {
    title: "Apartment for sale quality",
    address: "Staten Island / Queens",
    img: Logo,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    price: "$388.000",
  },
  {
    title: "Upper portion Apartment for sale",
    address: "Staten Island / Queens",
    img: Logo,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    price: "$388.000",
  },
];

function PropertyRentSection() {
  return (
    <div className={styles.property_wrapper}>
      <Container>
        <Heading>
          Properties For Rent
          <P className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </P>
        </Heading>
        <Row>
          {data.map((item, ind) => (
            <Col lg={4} key={ind}>
              <FeaturedCard
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

export default PropertyRentSection;
