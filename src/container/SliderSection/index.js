import React, { useEffect, useRef } from "react";
import { Button, Carousel, Container, Tab, Tabs } from "react-bootstrap";
import SearchForm from "../../component/search-form";
import styles from "../../styles/container/Slider.module.css";
import bg from "../../assets/banner-bg.jpg";
import img from "../../assets/slide1.jpg";
import img2 from "../../assets/slide2.jpg";
import Image from "next/image";
import GoogleMaps from "../../component/map";

function ImageSection() {
  return (
    <div className={`position-relative ${styles.image_wrap} wow fadeInUp`}>
      <Image
        className={`pd-block img-fluid ${styles.slider_background} `}
        layout="fill"
        src={bg}
        alt="img"
      />
      <Container className="position-relative">
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
export function VideoSection() {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 5000);
  }, []);

  return (
    <div
      className={`position-relative d-flex justify-content-center align-items-center wow fadeInUp ${styles.video_wrap}`}
    >
      <div
        className={`pd-block  position-absolute w-100 img-fluid ${styles.slider_background} `}
      >
        <video
          ref={videoRef}
          autoplay=""
          muted=""
          poster=""
          id="bgvid"
          loop=""
          className="h-100 w-100"
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div>
      <Container className="position-relative">
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
export function MapSection() {
  return (
    <div className={`position-relative  ${styles.map_wrap} wow fadeInUp`}>
      <div className={`pd-block w-100 img-fluid ${styles.video_background} `}>
        <GoogleMaps />
      </div>
      <Container className="position-relative">
        <div className={styles.map_form}>
          <Container>
            <SearchForm type="City" />
          </Container>
        </div>
      </Container>
    </div>
  );
}
export function SliderSection() {
  return (
    <div
      className={`position-relative wow fadeInUp header-slider  ${styles.map_wrap}`}
    >
      <div className={`pd-block w-100 img-fluid ${styles.video_background} `}>
        <Carousel>
          <Carousel.Item interval={1000}>
            <Image className="d-block w-100" src={img} alt="First slide" />
            <Carousel.Caption className={styles.slide_caption}>
              <h3 className={`wow fadeInDown ${styles.slide_title}`}>
                find your dreams
              </h3>
              <p className={` wow fadeInUp ${styles.slide_description}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec{" "}
                <br />
                convallis fringilla nibh ac laoreet.
              </p>
              <Button className={` wow fadeInUp ${styles.slide_btn}`}>
                Contact us
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <Image className="d-block w-100" src={img2} alt="Second slide" />
            <Carousel.Caption className={styles.slide_caption}>
              <h3 className={`wow fadeInDown ${styles.slide_title}`}>
                find your dreams
              </h3>
              <p className={` wow fadeInUp ${styles.slide_description}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec{" "}
                <br />
                convallis fringilla nibh ac laoreet.
              </p>
              <Button className={` wow fadeInUp ${styles.slide_btn}`}>
                Contact us
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="d-block w-100" src={img2} alt="Third slide" />
            <Carousel.Caption className={styles.slide_caption}>
              <h3 className={`wow fadeInDown ${styles.slide_title}`}>
                find your dreams
              </h3>
              <p className={` wow fadeInUp ${styles.slide_description}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec{" "}
                <br />
                convallis fringilla nibh ac laoreet.
              </p>
              <Button className={` wow fadeInUp ${styles.slide_btn}`}>
                Contact us
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Container className="position-relative">
        <div className={styles.map_form}>
          <Container>
            <SearchForm type="City" />
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default ImageSection;
