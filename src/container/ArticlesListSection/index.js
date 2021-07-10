import React from "react";
import { Card, Button, Col, Row, Container, Pagination } from "react-bootstrap";
import styles from "../../styles/container/ArticlesList.module.css";
import logo from "./../../assets/blog01.jpg";
import ArticleListCard from "../../component/articleListCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    name: "Apartment for sale quality",
    date: "June 21, 2020",
    img: logo,
    comments: 15,
    likes: 25,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus, erat nec sagittis imperdiet, erat libero suscipit.",
  },
  {
    name: "Apartment for sale quality",
    date: "June 21, 2020",
    img: logo,
    comments: 15,
    likes: 25,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus, erat nec sagittis imperdiet, erat libero suscipit.",
  },
  {
    name: "Apartment for sale quality",
    date: "June 21, 2020",
    img: logo,
    comments: 15,
    likes: 25,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus, erat nec sagittis imperdiet, erat libero suscipit.",
  },
  {
    name: "Apartment for sale quality",
    date: "June 21, 2020",
    img: logo,
    comments: 15,
    likes: 25,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus, erat nec sagittis imperdiet, erat libero suscipit.",
  },
  {
    name: "Apartment for sale quality",
    date: "June 21, 2020",
    img: logo,
    comments: 15,
    likes: 25,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus, erat nec sagittis imperdiet, erat libero suscipit.",
  },
  {
    name: "Apartment for sale quality",
    date: "June 21, 2020",
    img: logo,
    comments: 15,
    likes: 25,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus, erat nec sagittis imperdiet, erat libero suscipit.",
  },
  {
    name: "Apartment for sale quality",
    date: "June 21, 2020",
    img: logo,
    comments: 15,
    likes: 25,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus, erat nec sagittis imperdiet, erat libero suscipit.",
  },
  {
    name: "Apartment for sale quality",
    date: "June 21, 2020",
    img: logo,
    comments: 15,
    likes: 25,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus, erat nec sagittis imperdiet, erat libero suscipit.",
  },
  {
    name: "Apartment for sale quality",
    date: "June 21, 2020",
    img: logo,
    comments: 15,
    likes: 25,
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus, erat nec sagittis imperdiet, erat libero suscipit.",
  },
];

export const ArticleListSection = () => {
  return (
    <>
      <div className={styles.innerHeading}>
        <Container>
          <h1>Articles List</h1>
        </Container>
      </div>

      <div className={styles.innerContent}>
        <Container>
          <Row>
            {data.map((item, ind) => (
              <Col lg={8}>
                <ArticleListCard
                  key={ind}
                  name={item.name}
                  detail={item.detail}
                  img={item.img}
                  date={item.date}
                  comments={item.comments}
                  likes={item.likes}
                />
              </Col>
            ))}
          </Row>
          <div
            className={`${styles.blog_pagination} blog-pagination text-center`}
          >
            <a href="#0">
              <i>
                <FontAwesomeIcon icon={faAngleLeft} />
              </i>
            </a>{" "}
            <a href="#0">01</a>
            <a href="#0" className="active">
              02
            </a>
            <a href="#0">03</a>
            <a href="#0">
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
            </a>{" "}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ArticleListSection;
