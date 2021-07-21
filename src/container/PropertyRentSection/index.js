import React from "react";
import FeaturedCard from "../../component/feature-card";
import styles from "../../styles/container/PropertyRent.module.css";
import Logo from "./../../assets/47.jpg";
import Heading from "../../component/Heading";
import P from "../../component/Para";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";

function PropertyRentSection({ data }) {
  const router = useRouter();
  const onClick = (id) => {
    router.push(`/imovel/${id}`);
  };
  return (
    <div className={`${styles.property_wrapper} wow fadeInUp`}>
      <Container>
        <Heading>
          Properties For Rent
          <P className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </P>
        </Heading>
        <Row className="wow fadeInUp">
          {data.map((item, ind) => (
            <Col lg={4} key={`${ind}`}>
              <div onClick={() => onClick(item.id)}>
                <FeaturedCard
                  title={item.title}
                  address={item.address}
                  img={item.images[0].url}
                  price={item.price}
                  bedrooms={item.bedrooms}
                  bathrooms={item.bathrooms}
                  garage={item.garage}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default PropertyRentSection;
