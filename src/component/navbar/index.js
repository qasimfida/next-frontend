import React, { useState } from "react";
import * as Icon from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import logo from "../../assets/logo.png";
import styles from "../../styles/components/navbar.module.css";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((pre) => !pre);
    console.log("click");
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="none" onClick={handleClick} />
          <Navbar className="d-none d-sm-none d-md-none d-lg-block">
            <Nav className="ml-auto">
              <NavDropdown
                className={styles.dropdown}
                title="Dropdown"
                id="basic-nav-dropdown"
              >
                <ul class="submenu">
                  <li>
                    <a href="index.html">Home Image</a>
                  </li>
                  <li>
                    <a href="index_slider.html">Home Slider</a>
                  </li>
                  <li>
                    <a href="index_video.html">Home Video</a>
                  </li>
                  <li>
                    <a href="index_map.html">Home Map</a>
                  </li>
                </ul>
              </NavDropdown>
              <NavDropdown
                className={styles.dropdown}
                title="Dropdown"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                className={styles.dropdown}
                title="Dropdown"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
      {isOpen && (
        <div className={styles.menu}>
          <div onClick={() => setIsOpen(false)}>close</div>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      )}
    </>
  );
};
export default NavigationBar;
