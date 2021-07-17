import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import SearchForm from "../../component/search-form";
import styles from "../../styles/container/Slider.module.css";
import vdio from "../../assets/construction-background.mp4";

function SliderVedioSection() {
  return (
    <div className={styles.slider_wrap}>
      <Container>
        <div class="embed-responsive embed-responsive-21by9">
          <iframe class="embed-responsive-item" src={`${vdio.src}`}></iframe>
        </div>
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

export default SliderVedioSection;
