import React from "react";
import styles from "../../styles/container/PopularPlaces.module.css";
import Heading from "../../component/Heading";
import P from "../../component/Para";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";

function PlacesSection({ data }) {
  const router = useRouter();
  const onClick = (id) => {
    router.push(`/imovel/${id}`);
  };
  return (
    <div className={`${styles.popular_wrapper} wow fadeInUp`}>
      <Container>
        <Heading>
          POPULAR PLACES
          <P>Lorem ipsum dolor sit amet consectetur</P>
        </Heading>
        <Row className="mt-4 wow fadeInUp">
          <Col md={8} >
            <div
              className={styles.popular_img}
              onClick={() => {
                onClick(data[0].id);
              }}
            >
              <img alt={data[0].title} src={`${data[0].imageThumb}`} />
              <div className={styles.popular_img_text}>
                <a href={`/artigo/${data[0].id}`}>{data[0].location}</a>
              </div>
            </div>
          </Col>
          <Col md={4} >
            <Row>
              <Col md={12}>
            <div
              className={styles.popular_img}
              onClick={() => {
                onClick(data[1].id);
              }}
            >
              <img alt={data[1].title} src={`${data[1].imageThumb}`} />
              <div className={styles.popular_img_text}>
                <a href={`/artigo/${data[1].id}`}>{data[1].location}</a>
              </div>
            </div>
                </Col> 
              <Col md={12}>
            <div
              className={styles.popular_img}
              onClick={() => {
                onClick(data[2].id);
              }}
            >
              <img alt={data[2].title} src={`${data[2].imageThumb}`} />
              <div className={styles.popular_img_text}>
                <a href={`/artigo/${data[2].id}`}>{data[2].location}</a>
              </div>
            </div>
                </Col> 
            </Row>
            
          </Col>
          <Col md={4} >
            <div
              className={styles.popular_img}
              onClick={() => {
                onClick(data[3].id);
              }}
            >
              <img alt={data[3].title} src={`${data[3].imageThumb}`} />
              <div className={styles.popular_img_text}>
                <a href={`/artigo/${data[3].id}`}>{data[3].location}</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PlacesSection;
