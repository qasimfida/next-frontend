import React from "react";
import { Card, Button, Col, Row, Container, Pagination } from "react-bootstrap";
import styles from "../../styles/container/Agents.module.css";
import logo from "./../../assets/large_img.jpg";
import ArticleCard from "../../component/article-card";
import Link from "next/link";

const detail =
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur lorem eget nunc vestibulum consequat. Phasellus semper lacus tortor, eu sagittis tortor blandit in. Fusce urna erat,pretium nec nulla ac, viverra ultricies tellus. Morbi leo mi, sagittis in sapien ac, auctor posuere ante. Nunc lacinia rhoncus elit, ac consequat magna consectetur sed. Nam euismod sapien augue, at malesuada risus fermentum a. Ut nec scelerisque nulla, quis euismod nisl. Suspendisse potenti. Vestibulum mollis vitae velit sit amet posuere. Nulla non felis eu urna molestie mattis.";
const quotes =
  "Nam ut sodales enim. Sed augue massa, sagittis et ullamcorper ut, eleifend sit amet lorem. Ut a ante porta, auctor eros maximus, pulvinar sem.";

export const ArticleSection = ({ article }) => {
  return (
    <>
      <div className={`${styles.innerHeading} wow fadeInUp`}>
        <Container>
          <h1>Article</h1>
        </Container>
      </div>

      <div className={styles.innerContent}>
        <Container>
          <div className="listing_wrap">
            <Row>
              <Col xs={12} lg={8}>
                <ArticleCard
                  name={article.name}
                  detail={detail}
                  img={article.image}
                  date={article.date}
                  comments={article.comments}
                  likes={article.likes}
                  quotes={quotes}
                  description={article.content}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ArticleSection;
