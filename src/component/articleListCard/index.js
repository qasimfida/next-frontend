import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../../styles/container/ArticlesList.module.css";
import Image from "next/image";
import moment from "moment";

const ArticleListCard = ({
  name,
  date,
  detail,
  img,
  likes,
  comments,
  single,
}) => {
  let time = moment(date).format("MMM Do YY");
  return (
    <>
      <Card className={`${styles.wrapper} wow fadeInUp`}>
        <Row className="d-flex">
          <Col lg={5}>
            <div className={` h-100 ${styles.propertyImg}`}>
              <img src={img} alt="blog post"  />
            </div>
          </Col>
          <Col lg={7}>
            <div className={styles.post_meta}>
              <h3>
                <a href="#">{name}</a>
              </h3>{" "}
              <span>{time}</span>
              <span>1234 Comments</span> <span>{likes} Likes</span>
              <p className={`${single ? "" : styles.short} ${styles.details}`}>
                {detail}
              </p>
              <div className={styles.readmore}>
                <a href="#">Get Started</a>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ArticleListCard;
