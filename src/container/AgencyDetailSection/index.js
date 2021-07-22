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
export const AgencyDetailSection = ({ data, properties }) => {
  return (
    <>
      <div className={`${styles.innerHeading} wow fadeInUp`}>
        <Container>
          <h1>Agency Details</h1>
        </Container>
      </div>
      <div className={styles.innerContent}>
        <Container>
          <Row className="wow fadeInUp">
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
              <AgenciesCard
                mediaLeft={true}
                hasSocialIcons={true}
                img={listImg}
                {...data}
              />
              <h3 className={styles.desc_head}>Description</h3>
              <p>{data.description}</p>
              <Tabs defaultActiveKey="second" className="agent-tabs">
                <Tab
                  eventKey="first"
                  title="Buy Property"
                  className="agent-content"
                >
                  {properties.map((item, ind) => (
                    <FeaturedCard
                      type="Location"
                      key={`agency-list-2-${ind}`}
                      mediaLeft={true}
                      title={item.title}
                      address={item.address}
                      img={item.images[0].url}
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
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AgencyDetailSection;
