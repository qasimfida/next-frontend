import React from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import styles from "../../styles/container/ArticlesList.module.css";
import logo from "./../../assets/blog01.jpg";
import ArticleListCard from "../../component/articleListCard";
import Pagination from "../../component/pagination";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const handleClick = (i) => {
    router.push("/artigo/" + i);
  };
  return (
    <>
      <div className={`${styles.innerHeading} wow fadeInUp`}>
        <Container>
          <h1>Articles List</h1>
        </Container>
      </div>

      <div className={styles.innerContent}>
        <Container>
          <div className="wow fadeInUp">
          <Row>
            {data.map((item, ind) => (
              <Col xs={12} key={`${ind}`}>
                <div onClick={() => handleClick(ind)}>
                  <ArticleListCard
                    name={item.name}
                    detail={item.detail}
                    img={item.img}
                    date={item.date}
                    comments={item.comments}
                    likes={item.likes}
                    />
                </div>
              </Col>
            ))}
          </Row>
            </div>
          <Pagination />
        </Container>
      </div>
    </>
  );
};

export default ArticleListSection;
