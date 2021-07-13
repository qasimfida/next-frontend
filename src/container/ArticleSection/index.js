import React from "react";
import { Card, Button, Col, Row, Container, Pagination } from "react-bootstrap";
import styles from "../../styles/container/Agents.module.css";
import logo from "./../../assets/large_img.jpg";
import ArticleCard from "../../component/article-card";

const data = [
  {
    name: "Apartment for sale quality",
    date: "June 21, 2020",
    img: logo,
    comments: 15,
    likes: 25,
    detail:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur lorem eget nunc vestibulum consequat. Phasellus semper lacus tortor, eu sagittis tortor blandit in. Fusce urna erat,pretium nec nulla ac, viverra ultricies tellus. Morbi leo mi, sagittis in sapien ac, auctor posuere ante. Nunc lacinia rhoncus elit, ac consequat magna consectetur sed. Nam euismod sapien augue, at malesuada risus fermentum a. Ut nec scelerisque nulla, quis euismod nisl. Suspendisse potenti. Vestibulum mollis vitae velit sit amet posuere. Nulla non felis eu urna molestie mattis.",
    quotes:
      "Nam ut sodales enim. Sed augue massa, sagittis et ullamcorper ut, eleifend sit amet lorem. Ut a ante porta, auctor eros maximus, pulvinar sem.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi velit, vestibulum eu auctor eget, dictum at lacus. Praesent quis volutpat mauris. Nam suscipit vestibulum sem quis varius. Curabitur vulputate, ante a convallis congue, nisi tortor malesuada ex, sit amet semper nisi nunc porttitor augue. Nam eu mattis ligula. Integer congue sodales odio, tempor laoreet eros accumsan ac. Integer sagittis lacinia nibh, sed pulvinar est. Vivamus augue nunc, ultrices quis orci ac, vestibulum pellentesque ligula. Nam imperdiet est justo, eget sollicitudin augue elementum eget. Aenean nec diam eu sapien semper egestas. Suspendisse eu vehicula neque, eget vestibulum enim. Proin accumsan mi eget purus dictum, a aliquet felis pulvinar. Ut viverra elit mauris, sit amet congue nisi lacinia nec. Curabitur semper, mauris a pellentesque scelerisque, nulla sapien condimentum leo, nec imperdiet ipsum lorem eu nibh. Nulla accumsan, ipsum ut consequat auctor, lacus ipsum rhoncus sem, non maximus nunc purus ut lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus facilisis molestie tortor sit amet consectetur. Ut auctor massa venenatis, vestibulum ex eu, ornare tortor. Fusce vitae nunc accumsan, sodales nibh ac, feugiat ligula. In bibendum in urna eu porta. Aliquam consectetur, leo sed tempor gravida, felis urna elementum dolor, et dictum urna nibh eu orci. Donec risus purus, tincidunt porta dui at, dignissim porta ex. Curabitur sed ipsum quam. Nam sollicitudin sapien eros, vitae accumsan odio elementum sed. Vivamus iaculis urna non massa sollicitudin pharetra. Integer nec porta massa, placerat semper est. Nunc urna lectus, porta vitae sagittis consectetur, fringilla ut urna. Praesent dictum arcu sem, et bibendum nunc maximus ac.",
  },
];

export const ArticleSection = () => {
  return (
    <>
      <div className={styles.innerHeading}>
        <Container>
          <h1>Article</h1>
        </Container>
      </div>

      <div className={styles.innerContent}>
        <Container>
          <div className="listing_wrap">
            <Row>
              {data.map((item, ind) => (
                <Col xs={12} lg={8} key={`${ind}`}>
                  <ArticleCard
                    name={item.name}
                    detail={item.detail}
                    img={item.img}
                    date={item.date}
                    comments={item.comments}
                    likes={item.likes}
                    quotes={item.quotes}
                    description={item.description}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ArticleSection;
