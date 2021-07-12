import React from 'react';
import { Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/components/VerticalForm.module.css"
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const VerticalForm = (props) => {
    const {type="Location"} = props;
    return  <Form>
    <Row className={styles.inputs} noGutters >
      <Col xs={12} >
        <Form.Group controlId="">
          <Form.Control
            type="email"
            placeholder="Enter Property, Location, Landmark ..."
          />
        </Form.Group>
      </Col>
      <Col xs={12} >
        <Form.Group controlId="">
          <Form.Control type="text" placeholder={type} />
        </Form.Group>
      </Col>
      <Col xs={12} >
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control as="select">
            <option>Property Type</option>
            <option>Residential</option>
            <option>Comercial</option>
            <option>Luxury</option>
            <option>Land</option>
          </Form.Control>
        </Form.Group>
      </Col>
      <Col xs={12} >
        
        <Form.Group controlId="exampleForm.ControlSelect1">
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
      </Col>
      <Col xs={12} >
        <Form.Group controlId="exampleForm.ControlSelect1">
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
      </Col>
      <Col xs={12} >
        <Form.Group controlId="exampleForm.ControlSelect1">
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
      </Col>
      <Col xs={12} >
        <div className="input-btn">
          <button>
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            Search
          </button>
        </div>
      </Col>
    </Row>
  </Form>
}

export default VerticalForm;