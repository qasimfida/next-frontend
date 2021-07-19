import React from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import styles from "../../styles/container/PropertiesDetail.module.css";
import CategoryCard from "../../component/category-card";
import FeaturedSection from "../SearcResultsSection";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "./../../assets/aboutImg.jpg";
import {
  faAngleDown,
  faArrowCircleDown,
  faArrowDown,
  faMapMarkerAlt,
  faSearch,
  faHeart,
  faExchangeAlt,
  faCheck,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
const detailsLeft = [
  { key: "Property ID", value: "B182" },
  { key: "Price", value: "$99,000" },
  { key: "Property Size", value: "981 Sq Ft" },
  { key: "Bathrooms", value: "2" },
  { key: "Bedrooms", value: "5" },
];
const detailsRight = [
  { key: "Year Built", value: "30-06-2020" },
  { key: "Garage", value: "1" },
  { key: "Garage Size", value: "150 SqFt" },
  { key: "Property Type", value: "Apartment" },
  { key: "Property Status", value: "For Sale" },
];
export const PropertySection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const multiSlideSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 1,
  };
  return (
    <>
      <div className={`${styles.innerHeading} wow fadeInUp`}>
        <Container>
          <h1>Property Single</h1>
        </Container>
      </div>
      <div className={styles.innerContent}>
        <Container>
          <div className="row listing_wrap">
            <div className="col-lg-4">
              <Form>
                <div className="sidebar_form card card-body  wow fadeInUp">
                  <div className={styles.input_group}>
                    <input
                      type="text"
                      name=""
                      className={`${styles.form_control} form-control`}
                      placeholder="Keyword"
                    />
                    <div className={styles.hover_icon}>
                      <a href="#">
                        <i>
                          <FontAwesomeIcon icon={faSearch} />
                        </i>
                      </a>
                    </div>
                  </div>
                  <div className={styles.input_group}>
                    <input
                      type="text"
                      name=""
                      className={`${styles.form_control} form-control`}
                      placeholder="Location"
                    />
                    <div className={styles.hover_icon}>
                      <a href="#">
                        <i>
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </i>
                      </a>
                    </div>
                  </div>
                  <Form.Group
                    className={styles.form_group}
                    controlId="property_from_select_status"
                  >
                    <Form.Control as="select">
                      <option>Property Status</option>
                      <option>For Sale</option>
                      <option>For Rent</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group
                    className={styles.form_group}
                    controlId="property_from_select_type"
                  >
                    <Form.Control as="select">
                      <option>Property Type</option>
                      <option>Residential</option>
                      <option>Comercial</option>
                      <option>Luxury</option>
                      <option>Land</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group
                    className={styles.form_group}
                    controlId="property_from_select_rooms"
                  >
                    <Form.Control as="select">
                      <option>Bedrooms</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group
                    className={styles.form_group}
                    controlId="property_from_select_bathrooms"
                  >
                    <Form.Control as="select">
                      <option>Bathrooms</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group
                    className={styles.form_group}
                    controlId="property_from_select_price"
                  >
                    <Form.Control as="select">
                      <option>Price</option>
                      <option>$1000</option>
                      <option>$2000</option>
                      <option>$3000</option>
                      <option>$4000</option>
                      <option>$5000</option>
                      <option>$6000</option>
                    </Form.Control>
                  </Form.Group>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-group">
                        <input
                          type="text"
                          className={`${styles.form_control} form-control`}
                          placeholder="Min Area"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                        <input
                          type="text"
                          className={`${styles.form_control} form-control`}
                          placeholder="Max Area"
                        />
                      </div>
                    </div>
                  </div>
                  <Accordion defaultActiveKey="1">
                    <div>
                      <Accordion.Toggle
                        className={styles.toggle_button}
                        as="div"
                        variant="link"
                        eventKey="0"
                      >
                        <span className={styles.toggle_icon}>
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color="white"
                            size="xs"
                          />
                        </span>

                        <h4>Advanced Feature</h4>
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0">
                        <div className={styles.checkbox}>
                          <div className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`check-api-checkbox-1`}
                            >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label />
                              <div className="ml-2">Custom api checkbox</div>
                            </Form.Check>
                          </div>
                          <div className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`check-api-checkbox-2`}
                            >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label />
                              <div className="ml-2">Wifi</div>
                            </Form.Check>
                          </div>
                          <div className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`check-api-checkbox-3`}
                            >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label />
                              <div className="ml-2">Outdoor Shower</div>
                            </Form.Check>
                          </div>
                          <div className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`check-api-checkbox-4`}
                            >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label />
                              <div className="ml-2">Refrigerator</div>
                            </Form.Check>
                          </div>
                          <div className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`check-api-checkbox-5`}
                            >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label />
                              <div className="ml-2">Dryer</div>
                            </Form.Check>
                          </div>
                          <div className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`check-api-checkbox-6`}
                            >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label />
                              <div className="ml-2">Gym</div>
                            </Form.Check>
                          </div>
                          <div className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`check-api-checkbox-7`}
                            >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label />
                              <div className="ml-2">Tv Cable </div>
                            </Form.Check>
                          </div>
                          <div className="mb-3">
                            <Form.Check
                              type="checkbox"
                              id={`check-api-checkbox-8`}
                            >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label />
                              <div className="ml-2">Swiming</div>
                            </Form.Check>
                          </div>
                        </div>
                      </Accordion.Collapse>
                    </div>
                  </Accordion>
                  <div className="input-group">
                    <input
                      type="submit"
                      className={styles.submit}
                      value="Search"
                    />
                  </div>
                </div>
              </Form>
              <CategoryCard />
            </div>
            <Col sm={12} lg={8}>
              {/* <FeaturedSection /> */}
              <Slider
                {...settings}
                dots={false}
                className="property_slick_slider_main"
              >
                {[1, 2, 3, 4, 5].map((ind) => (
                  <div key={ind}>
                    <Image width={1000} height={500} src={img} alt="" />
                  </div>
                ))}
              </Slider>
              <Slider
                {...multiSlideSettings}
                dots={false}
                className="property_slick_slider_main"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((ind) => (
                  <div key={ind}>
                    <Image width="300" height="110" src={img} alt="" />
                  </div>
                ))}
              </Slider>
              <div className="property_details_header_wrapper my-4">
                <div className="property_details_header_inner d-flex justify-content-between align-items-start flex-wrap">
                  <div className="property_details_header_left">
                    <h3 className={styles.property_title}>
                      Luxury Family Home
                    </h3>
                    <p className={styles.property_address}>
                      123 Lorem Ipsum, 45 sit Atlanta
                    </p>
                  </div>
                  <div className="property_details_header_right d-flex align-items-center">
                    <i className={`${styles.btn_custom} mr-1`}>
                      <FontAwesomeIcon className={styles.icon} icon={faHeart} />
                    </i>
                    <i className={styles.btn_custom}>
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faExchangeAlt}
                      />
                    </i>
                    <h3 className={styles.property_price}>$ 488.00</h3>
                  </div>
                </div>
              </div>
              <div className="property_details_content_wrapper">
                <h4 className={styles.property_content_title}>Description</h4>
                <div className="property_content_description">
                  <p className={styles.property_content_desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum tempus ullamcorper libero tincidunt fermentum.
                    Phasellus lobortis felis ac molestie dictum. Morbi at
                    efficitur mauris. Aliquam lobortis massa non metus vehicula,
                    at lacinia orci suscipit. Nulla porta urna id turpis aliquet
                    elementum. Praesent condimentum turpis at neque faucibus
                    feugiat. Aenean in dapibus diam. Fusce sit amet neque
                    ornare, maximus sapien eget, feugiat turpis. Praesent quis
                    urna a metus maximus condimentum quis in purus. Nullam
                    molestie aliquet urna. Nunc a elit congue, gravida turpis
                    sed, laoreet orci.
                  </p>
                  <p className={styles.property_content_desc}>
                    Ut pretium, nunc in bibendum iaculis, neque tellus efficitur
                    lectus, sit amet tincidunt justo nisi at risus. Vestibulum
                    ante est, fermentum in laoreet nec, viverra eu mauris. In
                    condimentum ac mauris a efficitur. Ut fringilla sed mauris
                    eget convallis. Phasellus volutpat mattis tincidunt.
                    Pellentesque non lacus felis. Donec ac sem eu libero
                    consequat congue in vehicula justo. Nulla blandit id tortor
                    non luctus. Donec in odio condimentum, condimentum nisi non,
                    porta nisl. Donec sed consectetur erat, eu imperdiet urna.
                    Praesent eu sapien orci.
                  </p>
                </div>
                <div className="property_content_details">
                  <h4 className={styles.property_content_title}>
                    Property Details
                  </h4>
                  <Row>
                    <Col sm="12" md="6">
                      {detailsLeft.map((detail) => (
                        <div className="mr-5 mb-3" key={detail.value}>
                          <div
                            className="d-flex flex-fill justify-content-between"
                            key={detail.key}
                          >
                            <div className="property_content_details_keys">
                              <span className={styles.key}>{detail.key}:</span>
                            </div>
                            <div className="property_content_details_values">
                              <span className={styles.value}>
                                {detail.value}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Col>
                    <Col sm="12" md="6" className="mb-3">
                      {detailsRight.map((detail) => (
                        <div className="mr-5 mb-3" key={detail.value}>
                          <div
                            className="d-flex flex-fill justify-content-between"
                            key={detail.key}
                          >
                            <div className="property_content_details_keys">
                              <span className={styles.key}>{detail.key}:</span>
                            </div>
                            <div className="property_content_details_values">
                              <span className={styles.value}>
                                {detail.value}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="property_details_features_wrapper">
                <h4 className={styles.property_content_title}>Features</h4>
                <Row>
                  <Col sm={12} md={4}>
                    <div className={styles.property_details_features_item}>
                      <span className={`${styles.icon_outer} mr-2`}>
                        <FontAwesomeIcon
                          className={styles.check_icon}
                          icon={faCheck}
                        />
                      </span>
                      air conditioning
                    </div>
                    <div className={styles.property_details_features_item}>
                      <span className={`${styles.icon_outer} mr-2`}>
                        <FontAwesomeIcon
                          className={styles.check_icon}
                          icon={faCheck}
                        />
                      </span>
                      Laundry Room
                    </div>
                    <div className={styles.property_details_features_item}>
                      <span className={`${styles.icon_outer} mr-2`}>
                        <FontAwesomeIcon
                          className={styles.check_icon}
                          icon={faCheck}
                        />
                      </span>
                      swiming pool
                    </div>
                    <div className={styles.property_details_features_item}>
                      <span className={`${styles.icon_outer} mr-2`}>
                        <FontAwesomeIcon
                          className={styles.check_icon}
                          icon={faCheck}
                        />
                      </span>
                      air conditioning
                    </div>
                    <div className={styles.property_details_features_item}>
                      <span className={`${styles.icon_outer} mr-2`}>
                        <FontAwesomeIcon
                          className={styles.check_icon}
                          icon={faCheck}
                        />
                      </span>
                      Central Heating
                    </div>
                  </Col>
                  <Col sm={12} md={4}>
                    <div className={styles.property_details_features_item}>
                      <span className={`${styles.icon_outer} mr-2`}>
                        <FontAwesomeIcon
                          className={styles.check_icon}
                          icon={faCheck}
                        />
                      </span>
                      gym
                    </div>
                    <div className={styles.property_details_features_item}>
                      <span className={`${styles.icon_outer} mr-2`}>
                        <FontAwesomeIcon
                          className={styles.check_icon}
                          icon={faCheck}
                        />
                      </span>
                      alarm
                    </div>
                    <div className={styles.property_details_features_item}>
                      <span className={`${styles.icon_outer} mr-2`}>
                        <FontAwesomeIcon
                          className={styles.check_icon}
                          icon={faCheck}
                        />
                      </span>
                      Central Heating
                    </div>
                    <div className={styles.property_details_features_item}>
                      <span className={`${styles.icon_outer} mr-2`}>
                        <FontAwesomeIcon
                          className={styles.check_icon}
                          icon={faCheck}
                        />
                      </span>
                      spa & massage
                    </div>
                  </Col>
                  <Col sm={12} md={4}>
                    <div className={styles.property_details_features_item}>
                      <span className={`${styles.icon_outer} mr-2`}>
                        <FontAwesomeIcon
                          className={styles.check_icon}
                          icon={faCheck}
                        />
                      </span>
                      pets allow
                    </div>
                    <div className={styles.property_details_features_item}>
                      <span className={`${styles.icon_outer} mr-2`}>
                        <FontAwesomeIcon
                          className={styles.check_icon}
                          icon={faCheck}
                        />
                      </span>
                      window Covering
                    </div>
                    <div className={styles.property_details_features_item}>
                      <span className={`${styles.icon_outer} mr-2`}>
                        <FontAwesomeIcon
                          className={styles.check_icon}
                          icon={faCheck}
                        />
                      </span>
                      Internet
                    </div>
                    <div className={styles.property_details_features_item}>
                      <span className={`${styles.icon_outer} mr-2`}>
                        <FontAwesomeIcon
                          className={styles.check_icon}
                          icon={faCheck}
                        />
                      </span>
                      car parking
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="property_details_floor_wrapper mt-3">
                <h4 className={styles.property_content_title}>Floor PLans</h4>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className={styles.accordion_header}
                    >
                      <div className="accordion_header d-flex justify-content-between">
                        <div className={styles.accordion_title}>
                          Ground Floor 497 sq ft
                        </div>
                        <span className={`${styles.accordion_icon_outer} mr-2`}>
                          <FontAwesomeIcon
                            className={styles.accordion_check_icon}
                            icon={faAngleDown}
                          />
                        </span>
                      </div>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <div className="text-center">
                          <Image width={500} height={300} src={img} alt="" />
                        </div>
                        <p
                          className={`${styles.property_content_desc} mb-0 mt-3`}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum tempus ullamcorper libero tincidunt
                          fermentum. Phasellus lobortis felis ac molestie
                          dictum. Morbi at efficitur mauris. Aliquam lobortis
                          massa non metus vehicula, at lacinia orci suscipit.
                          Nulla porta urna id turpis aliquet elementum.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="1"
                      className={styles.accordion_header}
                    >
                      <div className="accordion_header d-flex justify-content-between">
                        <div className={styles.accordion_title}>
                          Ground Floor 497 sq ft
                        </div>
                        <span className={`${styles.accordion_icon_outer} mr-2`}>
                          <FontAwesomeIcon
                            className={styles.accordion_check_icon}
                            icon={faAngleDown}
                          />
                        </span>
                      </div>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="text-center">
                          <Image width={500} height={300} src={img} alt="" />
                        </div>
                        <p
                          className={`${styles.property_content_desc} mb-0 mt-3`}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum tempus ullamcorper libero tincidunt
                          fermentum. Phasellus lobortis felis ac molestie
                          dictum. Morbi at efficitur mauris. Aliquam lobortis
                          massa non metus vehicula, at lacinia orci suscipit.
                          Nulla porta urna id turpis aliquet elementum.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="2"
                      className={styles.accordion_header}
                    >
                      <div className="accordion_header d-flex justify-content-between">
                        <div className={styles.accordion_title}>
                          Ground Floor 497 sq ft
                        </div>
                        <span className={`${styles.accordion_icon_outer} mr-2`}>
                          <FontAwesomeIcon
                            className={styles.accordion_check_icon}
                            icon={faAngleDown}
                          />
                        </span>
                      </div>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <div className="text-center">
                          <Image width={500} height={300} src={img} alt="" />
                        </div>
                        <p
                          className={`${styles.property_content_desc} mb-0 mt-3`}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum tempus ullamcorper libero tincidunt
                          fermentum. Phasellus lobortis felis ac molestie
                          dictum. Morbi at efficitur mauris. Aliquam lobortis
                          massa non metus vehicula, at lacinia orci suscipit.
                          Nulla porta urna id turpis aliquet elementum.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </Col>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PropertySection;
