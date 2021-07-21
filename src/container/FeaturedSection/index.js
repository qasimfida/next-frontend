import React from "react";
import Heading from "../../component/Heading";
import P from "../../component/Para";
import { Col, Container, Row } from "react-bootstrap";
import FeaturedCard from "../../component/feature-card";
import styles from "../../styles/container/FeatureSection.module.css";
import { useRouter } from "next/router";

function FeaturedSection({ data }) {
  const router = useRouter();
  const onClick = (id) => {
    router.push(`/imovel/${id}`);
  };
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
              <div className="cursor-pointer" onClick={() => onClick(item.id)}>
                <FeaturedCard
                  mediaLeft={false}
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

export default FeaturedSection;
