import { faFacebookF, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Container, Card, Form } from "react-bootstrap";
import styles from "../../styles/container/Faqs.module.css";

function FaqsSection() {
  return (
    <>
      <div className={styles.innerHeading}>
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
              <div className={`${styles.panel} panel panel-default`}>
                <div className={`${styles.panel_heading} panel-heading`}>
                  <h4 className="panel-title">
                    <a
                      aria-expanded="true"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      className={styles.collapsed}
                      href="#collapse1"
                    >
                      Nunc ut erat at massa elementum tempus.?
                    </a>
                  </h4>
                </div>
                <div id="collapse1" className="panel-collapse collapse">
                  <div className={styles.panel_body}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla nisl lorem, dapibus at orci vitae, posuere mollis
                    augue. Suspendisse hendrerit diam sit amet lorem rutrum
                    auctor. Mauris lacinia ligula sit amet justo scelerisque
                    vulputate. Interdum et malesuada fames ac ante ipsum primis
                    in faucibus.{" "}
                  </div>
                </div>
              </div>
              <div className={`${styles.panel} panel panel-default`}>
                <div className={`${styles.panel_heading} panel-heading`}>
                  <h4 className="panel-title">
                    {" "}
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      className={styles.collapsed}
                      href="#collapse2"
                    >
                      {" "}
                      Donec lacus sem, pretium a eros ut?
                    </a>{" "}
                  </h4>
                </div>
                <div id="collapse2" className="panel-collapse collapse">
                  <div className={`${styles.panel_body} panel-body`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla nisl lorem, dapibus at orci vitae, posuere mollis
                    augue. Suspendisse hendrerit diam sit amet lorem rutrum
                    auctor. Mauris lacinia ligula sit amet justo scelerisque
                    vulputate. Interdum et malesuada fames ac ante ipsum primis
                    in faucibus.{" "}
                  </div>
                </div>
              </div>
              <div className={`${styles.panel} panel panel-default`}>
                <div className={`${styles.panel_heading} panel-heading`}>
                  <h4 className="panel-title">
                    {" "}
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      className={styles.collapsed}
                      href="#collapse3"
                    >
                      {" "}
                      Donec lacus sem, pretium a eros ut?
                    </a>{" "}
                  </h4>
                </div>
                <div id="collapse3" className="panel-collapse collapse">
                  <div className={`${styles.panel_body} panel-body`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla nisl lorem, dapibus at orci vitae, posuere mollis
                    augue. Suspendisse hendrerit diam sit amet lorem rutrum
                    auctor. Mauris lacinia ligula sit amet justo scelerisque
                    vulputate. Interdum et malesuada fames ac ante ipsum primis
                    in faucibus.{" "}
                  </div>
                </div>
              </div>
              <div className={`${styles.panel} panel panel-default`}>
                <div className={`${styles.panel_heading} panel-heading`}>
                  <h4 className="panel-title">
                    {" "}
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      className={styles.collapsed}
                      href="#collapse4"
                    >
                      Nunc ut erat at massa elementum tempus.?
                    </a>{" "}
                  </h4>
                </div>
                <div id="collapse4" className="panel-collapse collapse">
                  <div className={`${styles.panel_body} panel-body`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla nisl lorem, dapibus at orci vitae, posuere mollis
                    augue. Suspendisse hendrerit diam sit amet lorem rutrum
                    auctor. Mauris lacinia ligula sit amet justo scelerisque
                    vulputate. Interdum et malesuada fames ac ante ipsum primis
                    in faucibus.
                  </div>
                </div>
              </div>
              <div className={`${styles.panel} panel panel-default`}>
                <div className={`${styles.panel_heading} panel-heading`}>
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      className={styles.collapsed}
                      href="#collapse5"
                    >
                      Donec lacus sem, pretium a eros ut?
                    </a>
                  </h4>
                </div>
                <div id="collapse5" className="panel-collapse collapse">
                  <div className={`${styles.panel_body} panel-body`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla nisl lorem, dapibus at orci vitae, posuere mollis
                    augue. Suspendisse hendrerit diam sit amet lorem rutrum
                    auctor. Mauris lacinia ligula sit amet justo scelerisque
                    vulputate. Interdum et malesuada fames ac ante ipsum primis
                    in faucibus.
                  </div>
                </div>
              </div>
              <div className={`${styles.panel} panel panel-default`}>
                <div className={`${styles.panel_heading} panel-heading`}>
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      className={styles.collapsed}
                      href="#collapse6"
                    >
                      Donec lacus sem, pretium a eros ut?
                    </a>
                  </h4>
                </div>
                <div id="collapse6" className="panel-collapse collapse">
                  <div className={`${styles.panel_body} panel-body`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla nisl lorem, dapibus at orci vitae, posuere mollis
                    augue. Suspendisse hendrerit diam sit amet lorem rutrum
                    auctor. Mauris lacinia ligula sit amet justo scelerisque
                    vulputate. Interdum et malesuada fames ac ante ipsum primis
                    in faucibus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default FaqsSection;
