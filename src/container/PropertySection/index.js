import React from "react";
import { Accordion, Card, Col, Container, Form, Row } from "react-bootstrap";
import styles from "../../styles/container/PropertiesDetail.module.css";
import CategoryCard from "../../component/category-card";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMapMarkerAlt,
  faSearch,
  faHeart,
  faExchangeAlt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

export const PropertySection = ({ data }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
  };
  const multiSlideSettings = {
    dots: false,
    className: "center",
    infinite: false,
    slidesToShow: 2,
    speed: 500,
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
          <Row className=" listing_wrap">
            <Col xs={12} lg={4}>
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
            </Col>
            <Col sm={12} lg={8}>
              {/* <FeaturedSection /> */}
              <Slider
                {...settings}
                dots={false}
                className="property_slick_slider_main"
              >
                {data &&
                  data.images &&
                  data.images.map((img, ind) => (
                    <div key={ind}>
                      <Image
                        width={1000}
                        height={500}
                        src={img.url}
                        alt={img.name}
                      />
                    </div>
                  ))}
              </Slider>
              <Slider
                {...multiSlideSettings}
                dots={false}
                className="property_slick_slider_main"
              >
                {data &&
                  data.images &&
                  data.images.map((img, ind) => {
                    return (
                    <div key={ind}>
                      <Image
                        width="300"
                        height="110"
                        src={img.url}
                        alt={img.name}
                      />
                    </div>
                  )})}
              </Slider>
              <div className="property_details_header_wrapper my-4">
                <div className="property_details_header_inner d-flex justify-content-between align-items-start flex-wrap">
                  <div className="property_details_header_left">
                    <h3 className={styles.property_title}>{data.title}</h3>
                    <p className={styles.property_address}>{data.address}</p>
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
                    <h3 className={styles.property_price}>{data.price}</h3>
                  </div>
                </div>
              </div>
              <div className="property_details_content_wrapper">
                <h4 className={styles.property_content_title}>Description</h4>
                <div className="property_content_description">
                  <p className={styles.property_content_desc}>
                    {data.description}
                  </p>
                </div>
                <div className="property_content_details">
                  <h4 className={styles.property_content_title}>
                    Property Details
                  </h4>
                  <Row>
                    <Col sm="12" md="6">
                      <div className="mr-5 mb-3">
                        <div className="d-flex flex-fill justify-content-between">
                          <div className="property_content_details_keys">
                            <span className={styles.key}>Property ID:</span>
                          </div>
                          <div className="property_content_details_values">
                            <span className={styles.value}>{data.propId}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mr-5 mb-3">
                        <div className="d-flex flex-fill justify-content-between">
                          <div className="property_content_details_keys">
                            <span className={styles.key}>Price:</span>
                          </div>
                          <div className="property_content_details_values">
                            <span className={styles.value}>{data.price}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mr-5 mb-3">
                        <div className="d-flex flex-fill justify-content-between">
                          <div className="property_content_details_keys">
                            <span className={styles.key}>Property Size:</span>
                          </div>
                          <div className="property_content_details_values">
                            <span className={styles.value}>{data.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mr-5 mb-3">
                        <div className="d-flex flex-fill justify-content-between">
                          <div className="property_content_details_keys">
                            <span className={styles.key}>Bathrooms :</span>
                          </div>
                          <div className="property_content_details_values">
                            <span className={styles.value}>
                              {data.bathrooms}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mr-5 mb-3">
                        <div className="d-flex flex-fill justify-content-between">
                          <div className="property_content_details_keys">
                            <span className={styles.key}>Bedrooms :</span>
                          </div>
                          <div className="property_content_details_values">
                            <span className={styles.value}>
                              {data.bedrooms}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm="12" md="6" className="mb-3">
                      <div className="mr-5 mb-3">
                        <div className="d-flex flex-fill justify-content-between">
                          <div className="property_content_details_keys">
                            <span className={styles.key}>Year Build:</span>
                          </div>
                          <div className="property_content_details_values">
                            <span className={styles.value}>
                              {data.builtDate}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mr-5 mb-3">
                        <div className="d-flex flex-fill justify-content-between">
                          <div className="property_content_details_keys">
                            <span className={styles.key}>Garage :</span>
                          </div>
                          <div className="property_content_details_values">
                            <span className={styles.value}>{data.garage}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mr-5 mb-3">
                        <div className="d-flex flex-fill justify-content-between">
                          <div className="property_content_details_keys">
                            <span className={styles.key}>Garage Size :</span>
                          </div>
                          <div className="property_content_details_values">
                            <span className={styles.value}>
                              {data.garageSize}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mr-5 mb-3">
                        <div className="d-flex flex-fill justify-content-between">
                          <div className="property_content_details_keys">
                            <span className={styles.key}>Property Type :</span>
                          </div>
                          <div className="property_content_details_values">
                            <span className={styles.value}>
                              {data.propType}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mr-5 mb-3">
                        <div className="d-flex flex-fill justify-content-between">
                          <div className="property_content_details_keys">
                            <span className={styles.key}>
                              Property Status :
                            </span>
                          </div>
                          <div className="property_content_details_values">
                            <span className={styles.value}>
                              {data.forRent ? "For Rent" : "For Sale"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="property_details_features_wrapper">
                <h4 className={styles.property_content_title}>Features</h4>
                <Row>
                  {data.features &&
                    data.features.map((feature) => {
                      <Col sm={12} md={4} key={feature}>
                        <div className={styles.property_details_features_item}>
                          <span className={`${styles.icon_outer} mr-2`}>
                            <FontAwesomeIcon
                              className={styles.check_icon}
                              icon={faCheck}
                            />
                          </span>
                          {feature}
                        </div>
                      </Col>;
                    })}
                </Row>
              </div>
              <div className="property_details_floor_wrapper mt-3">
                <h4 className={styles.property_content_title}>Floor PLans</h4>
                <Accordion>
                  {data.floors &&
                    data.floors.map((floor) => {
                      return (
                        <Card key={floor.title} >
                          <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className={styles.accordion_header}
                          >
                            <div className="accordion_header d-flex justify-content-between">
                              <div className={styles.accordion_title}>
                                {floor.title}
                              </div>
                              <span
                                className={`${styles.accordion_icon_outer} mr-2`}
                              >
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
                                <img src={floor.image} />
                              </div>
                              <p
                                className={`${styles.property_content_desc} mb-0 mt-3`}
                              >
                                {floor.description}
                              </p>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      );
                    })}
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PropertySection;
