import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import styles from "../../styles/container/ArticlesList.module.css";
import ArticleListCard from "../../component/articleListCard";
import Pagination from "../../component/pagination";
import { useRouter } from "next/router";

export const ArticleListSection = ({data}) => {
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
              {data.map((article, ind) => {
                if (article.type === "news")
                  return (
                    <Col xs={12} key={article.id}>
                      <div onClick={() => handleClick(article.id)}>
                        <ArticleListCard
                          name={article.title}
                          detail={article.content}
                          img={article.image}
                          date={article.timestamp}
                          comments={article.comments}
                          likes={article.likes}
                        />
                      </div>
                    </Col>
                  );
              })}
            </Row>
          </div>
          <Pagination />
        </Container>
      </div>
    </>
  );
};

export default ArticleListSection;
