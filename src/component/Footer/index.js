import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import Paragraph from "../Pragraph/index.js";
// import { Wrapper, QuickLinks, Contact } from "./styles.js";
import small from "./../../assets/property_small01.jpg";
import brand from "./../../assets/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCaretRight,
  faEnvelope,
  faMapSigns,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import H3 from "../H3/index.js";
import styles from "../../styles/components/footer.module.css";
import logo from "../../assets/property_small01.jpg";
const data = [
  {
    name: "1324 Tennessee Road",
    img: logo,
    price: "$98.0",
    address: "Minneapolis, MN 55402",
  },
  {
    name: "1324 Tennessee Road",
    img: logo,
    price: "$98.0",
    address: "Minneapolis, MN 55402",
  },
];

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Row>
          <Col lg={3} md={12}>
            <div
              className={`${styles.footer_widget} footer-widget about-widget`}
            >
              <a href="#">
                <img alt="" src={`${brand.src}`} />
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                urna magna, mattis at ullamcorper in, pharetra in lorem. Etiam
                mollis.
              </p>
              <div className={styles.readmore}>
                <a href="#">Read More </a>
              </div>
            </div>
          </Col>
          <Col lg={2} md={3}>
            <div className={styles.quickLinks}>
              <H3>Quick links</H3>

              <ul>
                <li>
                  <a href="#.">
                    <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
                    Agents
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4} md={5}>
            <div className={styles.recent}>
              <H3>Recent Properties</H3>
              {data.map((item, ind) => (
                <div key={ind} className={styles.property_sec}>
                  <ul key={ind}>
                    <li>
                      <div className={styles.rec_proprty}>
                        <div className={styles.propertyImg}>
                          <img alt="" src={`${small.src}`} />
                        </div>
                        <div className={styles.property_info}>
                          <h5>{item.name}</h5>
                          <p>{item.address}</p>
                          <div className={styles.priceWrp}>{item.price}</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={3} md={4}>
            <div className={styles.contact}>
              <H3 class="title">Contact Info</H3>
              <ul class="footer-adress">
                <li class="footer_address">
                  <i>
                    <FontAwesomeIcon icon={faMapSigns} />
                  </i>
                  <span>123 Lorem Ipsum, 45 sit Atlanta</span>
                </li>
                <li class="footer_email">
                  <i>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <span>
                    <a href="mailto:info@realestate.com">info@realestate.com</a>
                  </span>
                </li>
                <li className={styles.footer_phone}>
                  <i>
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </i>
                  <span>
                    <a href="tel:7704282433"> 770-123-4567</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.social_icons}>
              <ul>
                <li className="ml-1">
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li className="ml-1">
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="ml-1">
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="ml-1">
                  <a href="#">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
