import React from "react";
import {
  Card,
  Button,
  Col,
  Row,
  Container,
  Pagination,
  Form,
  Tabs,
  Tab,
} from "react-bootstrap";
import styles from "../../styles/container/AgencyDetails.module.css";
import logo from "../../assets/company01.jpg";
import AgenciesCard from "../../component/agencies-card";
import CategoryCard from "../../component/category-card";
import P from "../../component/Para";
import FeaturedCard from "../../component/feature-card";
import listImg from "../../assets/list_img01.jpg";
import AgentCard from "../../component/agent-card";
import agent from "./../../assets/agent01.jpg";

const data1 = [
  {
    agnecyName: "Real Estate Company",
    img: logo,
    detail: "Lorem ipsum dolor",
  },
];
const data = [
  {
    title: "Upper portion Apartment for sale",
    address: "Staten Island / Queens",
    img: listImg,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    price: "$488.000",
  },
  {
    title: "Upper portion Apartment for sale",
    address: "Staten Island / Queens",
    img: listImg,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    price: "$488.000",
  },
  {
    title: "Upper portion Apartment for sale",
    address: "Staten Island / Queens",
    img: listImg,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    price: "$488.000",
  },
];
const data2 = [
  {
    agnecyName: "James Adult",
    img: agent,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "James Adult",
    img: agent,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "James Adult",
    img: agent,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "James Adult",
    img: agent,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "James Adult",
    img: agent,
    detail: "Lorem ipsum dolor",
  },
  {
    agnecyName: "James Adult",
    img: agent,
    detail: "Lorem ipsum dolor",
  },
];
export const AgencyDetailSection = () => {
  return (
    <>
      <div className={`${styles.innerHeading} wow fadeInUp`}>
        <Container>
          <h1>Agency Details</h1>
        </Container>
      </div>
      <div className={styles.innerContent}>
        <Container>
          <Row>
            <div className="wow fadeInUp">
              <Col lg={4}>
                <Form>
                  <Card className={styles.sidebar_form}>
                    <Card.Body>
                      <h4>Contact Us</h4>
                      <div className={`${styles.input_group} input-group`}>
                        <input
                          type="text"
                          N
                          name=""
                          className={`${styles.form_control} form-control`}
                          placeholder="Your Name"
                        />
                      </div>
                      <div className={`${styles.input_group} input-group`}>
                        <input
                          type="text"
                          name=""
                          className={`${styles.form_control} form-control`}
                          placeholder="Phone"
                        />
                      </div>
                      <div className={`${styles.input_group} input-group`}>
                        <input
                          type="text"
                          name=""
                          className={`${styles.form_control} form-control`}
                          placeholder="Email"
                        />
                      </div>
                      <div className={`${styles.input_group} input-group`}>
                        <textarea
                          className={`${styles.form_text} ${styles.text} form-control`}
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                      <div className={`${styles.input_group} input-group`}>
                        <input
                          type="submit"
                          className={`${styles.submit} submit`}
                          value="Send Message"
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Form>
                <CategoryCard />
              </Col>
              <Col lg={8}>
                {data1.map((item, ind) => (
                  <AgenciesCard
                    mediaLeft={true}
                    hasSocialIcons={true}
                    key={`agency-list-0-${ind}`}
                    agnecyName={item.agnecyName}
                    img={item.img}
                    detail={item.detail}
                  />
                ))}

                <h3 className={styles.desc_head}>Description</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum tempus ullamcorper libero tincidunt fermentum.
                  Phasellus lobortis felis ac molestie dictum. Morbi at
                  efficitur mauris. Aliquam lobortis massa non metus vehicula,
                  at lacinia orci suscipit. Nulla porta urna id turpis aliquet
                  elementum. Praesent condimentum turpis at neque faucibus
                  feugiat. Aenean in dapibus diam. Fusce sit amet neque ornare,
                  maximus sapien eget, feugiat turpis. Praesent quis urna a
                  metus maximus condimentum quis in purus. Nullam molestie
                  aliquet urna. Nunc a elit congue, gravida turpis sed, laoreet
                  orci.
                </p>
                <p>
                  Ut pretium, nunc in bibendum iaculis, neque tellus efficitur
                  lectus, sit amet tincidunt justo nisi at risus. Vestibulum
                  ante est, fermentum in laoreet nec, viverra eu mauris. In
                  condimentum ac mauris a efficitur. Ut fringilla sed mauris
                  eget convallis. Phasellus volutpat mattis tincidunt.
                  Pellentesque non lacus felis. Donec ac sem eu libero consequat
                  congue in vehicula justo. Nulla blandit id tortor non luctus.
                  Donec in odio condimentum, condimentum nisi non, porta nisl.
                  Donec sed consectetur erat, eu imperdiet urna. Praesent eu
                  sapien orci.
                </p>

                <Tabs defaultActiveKey="second" className="agent-tabs">
                  <Tab
                    eventKey="first"
                    title="Buy Property"
                    className="agent-content"
                  >
                    {data.map((item, ind) => (
                      <FeaturedCard
                        type="Location"
                        key={`agency-list-2-${ind}`}
                        mediaLeft={true}
                        title={item.title}
                        address={item.address}
                        img={item.img}
                        price={item.price}
                        bedrooms={item.bedrooms}
                        bathrooms={item.bathrooms}
                        garage={item.garage}
                      />
                    ))}
                  </Tab>
                  <Tab
                    eventKey="second"
                    title="Rent Property"
                    className="agent-content"
                  >
                    <Row>
                      {data2.map((item, ind) => (
                        <Col lg={6} key={`agency-list-3-${ind}`}>
                          <AgentCard
                            type="City"
                            mediaLeft={false}
                            agnecyName={item.agnecyName}
                            img={item.img}
                            detail={item.detail}
                          />
                        </Col>
                      ))}
                    </Row>
                  </Tab>
                </Tabs>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AgencyDetailSection;
