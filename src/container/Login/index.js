import { faFacebookF, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Container, Card, Form } from "react-bootstrap";
import styles from "../../styles/container/Login.module.css";

function Login() {
  return (
    <>
      <div className={styles.innerHeading}>
        <Container>
          <h1>Login</h1>
        </Container>
      </div>
      <div className={styles.innerContent}>
        <Container>
          <Card className={`${styles.loginWrp} mx-auto wow fadeInUp`}>
            <Card.Body className="card-body">
              <h4 className="card-title mb-4">Register</h4>
              <Form action="#">
                <a
                  href="#"
                  className={`${styles.fbBtn} btn btn-facebook btn-block mb-2 text-white`}
                >
                  <i>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </i>
                  &nbsp; Sign in with Facebook
                </a>
                <a
                  href="#"
                  className={`${styles.gBtn} btn btn-block google_plus text-white mb-4`}
                >
                  <i>
                    <FontAwesomeIcon icon={faGooglePlusG} />
                  </i>
                  &nbsp; Sign in with Google
                </a>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Username"
                    type="text"
                  />
                </div>

                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Password"
                    type="password"
                  />
                </div>

                <div className="form-group">
                  {" "}
                  <a href="#" className="float-right forgot_text">
                    Forgot password?
                  </a>
                  <label className="float-left custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-label">
                      {" "}
                      Remember{" "}
                    </span>{" "}
                  </label>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className={` btn ${styles.login_btn} btn-primary btn-block`}
                  >
                    Login
                  </button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          <p className="text-center mt-4">
            Already have Account? <a href="#">Login Now</a>
          </p>
        </Container>
      </div>
    </>
  );
}

export default Login;
