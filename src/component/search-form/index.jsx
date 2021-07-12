import React from 'react';
import { Col, Container, Form, Row, Tab, Tabs } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/components/SerachForm.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchForm = (props) => {
  const { type = 'Location' } = props;
  return (
    <div className={styles.form_wrap}>
      {' '}
      <Form>
        <Row className={styles.form_outer_row}>
          <Col className={styles.form_inner_col} lg={5}>
            <Form.Group className={styles.form_group} controlId="">
              <Form.Control type="email" placeholder="Enter Property, Location, Landmark ..." />
            </Form.Group>
          </Col>
          <Col className={styles.form_inner_col} lg={4}>
            <Form.Group className={styles.form_group} controlId="">
              <Form.Control type="text" placeholder={type} />
            </Form.Group>
          </Col>
          <Col className={styles.form_inner_col} lg={3}>
            <Form.Group className={styles.form_group} controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option>Property Type</option>
                <option>Residential</option>
                <option>Comercial</option>
                <option>Luxury</option>
                <option>Land</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col className={styles.form_inner_col} lg={3}>
            <Form.Group className={styles.form_group} controlId="exampleForm.ControlSelect1">
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
          <Col className={styles.form_inner_col} lg={3}>
            <Form.Group className={styles.form_group} controlId="exampleForm.ControlSelect1">
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
          <Col className={styles.form_inner_col} lg={4}>
            <Form.Group className={styles.form_group} controlId="exampleForm.ControlSelect1">
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
          <Col className={styles.form_inner_col} lg={2}>
            <div class="input-btn">
              <button>
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                Search
              </button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
