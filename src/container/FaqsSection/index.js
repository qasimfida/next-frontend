import { faFacebookF, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { Container, Card, Form, Accordion } from "react-bootstrap";
import styles from "../../styles/container/Faqs.module.css";

function FaqsSection() {
  const [state, setState] = useState(0);
  const onChange = (key) => {
    if (key === state) {
      setState(null);
    } else setState(key);
  };
  return (
    <>
      <div className={`${styles.innerHeading} wow fadeInUp`}>
        <Container>
          <h1>404</h1>
        </Container>
      </div>
      <div className={styles.innerContent}>
        <Container>
          <div className={styles.faqs}>
            <div
              className={`${styles.panel_group} panel-group wow fadeInUp`}
              id="accordion"
            >
              <h3>Work Process</h3>
              <Accordion defaultActiveKey="0">
                <div
                  className={` ${state === 0 ? styles.active : ""} ${
                    styles.panel
                  }`}
                  onClick={() => onChange(0)}
                >
                  <Accordion.Toggle
                    className={styles.panel_head}
                    as="div"
                    variant="link"
                    eventKey="0"
                  >
                    <h4 className={styles.panel_heading}>
                      Nunc ut erat at massa elementum tempus.?
                    </h4>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                    <div className={styles.panel_body}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla nisl lorem, dapibus at orci vitae, posuere mollis
                      augue. Suspendisse hendrerit diam sit amet lorem rutrum
                      auctor. Mauris lacinia ligula sit amet justo scelerisque
                      vulputate. Interdum et malesuada fames ac ante ipsum
                      primis in faucibus.
                    </div>
                  </Accordion.Collapse>
                </div>
                <div
                  className={` ${state === 1 ? styles.active : ""} ${
                    styles.panel
                  }`}
                  onClick={() => onChange(1)}
                >
                  <Accordion.Toggle
                    className={styles.panel_head}
                    as="div"
                    variant="link"
                    eventKey="1"
                  >
                    <h4 className={styles.panel_heading}>
                      Donec lacus sem, pretium a eros ut?
                    </h4>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="1">
                    <div className={styles.panel_body}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla nisl lorem, dapibus at orci vitae, posuere mollis
                      augue. Suspendisse hendrerit diam sit amet lorem rutrum
                      auctor. Mauris lacinia ligula sit amet justo scelerisque
                      vulputate. Interdum et malesuada fames ac ante ipsum
                      primis in faucibus.
                    </div>
                  </Accordion.Collapse>
                </div>
                <div
                  className={` ${state === 2 ? styles.active : ""} ${
                    styles.panel
                  }`}
                  onClick={() => onChange(2)}
                >
                  <Accordion.Toggle
                    className={styles.panel_head}
                    as="div"
                    variant="link"
                    eventKey="2"
                  >
                    <h4 className={styles.panel_heading}>
                      Nunc ut erat at massa elementum tempus.?
                    </h4>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="2">
                    <div className={styles.panel_body}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla nisl lorem, dapibus at orci vitae, posuere mollis
                      augue. Suspendisse hendrerit diam sit amet lorem rutrum
                      auctor. Mauris lacinia ligula sit amet justo scelerisque
                      vulputate. Interdum et malesuada fames ac ante ipsum
                      primis in faucibus.
                    </div>
                  </Accordion.Collapse>
                </div>
                <div
                  className={` ${state === 3 ? styles.active : ""} ${
                    styles.panel
                  }`}
                  onClick={() => onChange(3)}
                >
                  <Accordion.Toggle
                    className={styles.panel_head}
                    as="div"
                    variant="link"
                    eventKey="3"
                  >
                    <h4 className={styles.panel_heading}>
                      Donec lacus sem, pretium a eros ut?
                    </h4>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="3">
                    <div className={styles.panel_body}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla nisl lorem, dapibus at orci vitae, posuere mollis
                      augue. Suspendisse hendrerit diam sit amet lorem rutrum
                      auctor. Mauris lacinia ligula sit amet justo scelerisque
                      vulputate. Interdum et malesuada fames ac ante ipsum
                      primis in faucibus.
                    </div>
                  </Accordion.Collapse>
                </div>
                <div
                  className={` ${state === 4 ? styles.active : ""} ${
                    styles.panel
                  }`}
                  onClick={() => onChange(4)}
                >
                  <Accordion.Toggle
                    className={styles.panel_head}
                    as="div"
                    variant="link"
                    eventKey="4"
                  >
                    <h4 className={styles.panel_heading}>
                      Nunc ut erat at massa elementum tempus.?
                    </h4>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="4">
                    <div className={styles.panel_body}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla nisl lorem, dapibus at orci vitae, posuere mollis
                      augue. Suspendisse hendrerit diam sit amet lorem rutrum
                      auctor. Mauris lacinia ligula sit amet justo scelerisque
                      vulputate. Interdum et malesuada fames ac ante ipsum
                      primis in faucibus.
                    </div>
                  </Accordion.Collapse>
                </div>
                <div
                  className={` ${state === 6 ? styles.active : ""} ${
                    styles.panel
                  }`}
                  onClick={() => onChange(6)}
                >
                  <Accordion.Toggle
                    className={styles.panel_head}
                    as="div"
                    variant="link"
                    eventKey="6"
                  >
                    <h4 className={styles.panel_heading}>
                      Donec lacus sem, pretium a eros ut?
                    </h4>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="6">
                    <div className={styles.panel_body}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla nisl lorem, dapibus at orci vitae, posuere mollis
                      augue. Suspendisse hendrerit diam sit amet lorem rutrum
                      auctor. Mauris lacinia ligula sit amet justo scelerisque
                      vulputate. Interdum et malesuada fames ac ante ipsum
                      primis in faucibus.
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default FaqsSection;
