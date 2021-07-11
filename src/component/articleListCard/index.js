import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../../styles/container/ArticlesList.module.css";

const ArticleListCard = ({ name, date, detail, img, likes, comments }) => {
  return (
    <>
      <Card className={styles.wrapper}>
        <Row className="d-flex">
          <Col lg={5}>
            <div className={styles.propertyImg}>
              <img alt="" src={`${img.src}`} />
            </div>
          </Col>
          <Col lg={7}>
            <div className={styles.post_meta}>
              <h3>
                <a href="#">{name}</a>
              </h3>{" "}
              <span>{date}</span>
              <span>{comments} Comments</span> <span>{likes} Likes</span>
              <p>{detail}</p>
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
