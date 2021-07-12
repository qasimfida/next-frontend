import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Col, Container, Form, Row, Tab, Tabs } from 'react-bootstrap';
import SearchForm from '../../component/search-form';
import styles from '../../styles/container/Slider.module.css';

function SliderSection() {
  return (
    <div className={styles.slider_wrap}>
      <Container>
        <div className={styles.sliderTxt}>
          <h1>Find Your Dream Home</h1>
          <p>From as low as $10 per day with limited time offer discounts.</p>
          <Container>
            <Tabs defaultActiveKey="second" className="my-tabs">
              <Tab eventKey="first" title="Buy Property">
                <SearchForm type="Location" />
              </Tab>
              <Tab eventKey="second" title="Rent Property">
                <SearchForm type="City" />
              </Tab>
            </Tabs>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default SliderSection;
