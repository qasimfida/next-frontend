import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/components/articleCard.module.css";

const ArticleCard = ({
  name,
  date,
  detail,
  img,
  description,
  quotes,
  likes,
  comments,
}) => {
  return (
    <>
      <Card className={`${styles.property_box} wow fadeInUp`}>
        <div className={styles.propertyImg}>
          {/* <img alt="" src={`${img.src}`} /> */}
          <Image src={img} alt="" />
        </div>
        <h3>
          <a href="#">{name}</a>
        </h3>
        <div className="post-meta">
          {" "}
          <span>{date}</span> <span>{comments} Comments</span>{" "}
          <span>{likes} Likes</span>{" "}
        </div>
        <p>{detail}</p>
        <blockquote>{quotes}</blockquote>
        <p>{description}</p>
        <div className={styles.about_box}>
          <ul className="tick">
            <li>
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className={styles.icon}
              />
              Fusce pretium ipsum quis enim suscipit
            </li>
            <li>
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className={styles.icon}
              />
              Morbi euismod at nisl quis tincidunt
            </li>
            <li>
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className={styles.icon}
              />
              Donec at dolor nec enim varius elementum
            </li>
            <li>
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className={styles.icon}
              />
              Praesent augue ipsum rutrum at massa
            </li>
            <li>
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className={styles.icon}
              />
              Suspendisse feugiat metus eget leo tincidunt
            </li>
            <li>
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className={styles.icon}
              />
              Nunc tincidunt faucibus porttitor
            </li>
            <li>
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className={styles.icon}
              />
              Nullam molestie tempor quam quis tincidunt
            </li>
          </ul>
        </div>
      </Card>
    </>
  );
};

export default ArticleCard;
