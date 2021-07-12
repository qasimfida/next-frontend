import React, { useState } from "react";
import * as Icon from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
import styles from "./../../styles/components/navbar.module.css";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = () => {
    setIsOpen((pre) => !pre);
    console.log("click");
  };
  const toggleDropdown = (idx) => {
    if (showDropdown === idx) {
      setShowDropdown(false);
    } else {
      setShowDropdown(idx);
    }
  };
  const menuItems = [
    {
      id: 0,
      name: "home",
      link: "#/",
      items: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Search Results",
          link: "/search-results",
        },
      ],
    },
    {
      id: 1,
      name: "Agencies",
      link: "#",
      items: [
        { name: "Agencies", link: "/agencies" },
        { name: "Agents", link: "/agents" },
        { name: "Agency Details", link: "/agencydetails" },
      ],
    },
    {
      id: 2,
      name: "Property",
      link: "#",
      items: [
        { name: "Propperty Details", link: "/propertydetail " },
        { name: "Submit Propperty", link: "/submit-property" },
      ],
    },
    {
      id: 3,
      name: "Pages",
      items: [
        { name: "Faqs", link: "/faqs" },
        { name: "About Us", link: "/about" },
        { name: "Login", link: "/login" },
        { name: "Register", link: "/register" },
        { name: "Plans", link: "/plans" },
      ],
    },
    {
      id: 4,
      name: "Blog",
      link: "#",
      items: [
        { name: "Article", link: "/article" },
        { name: "Article List", link: "/articlelist" },
      ],
    },
  ];
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="header_logo" href="#home">
            <img src={logo.src} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="none" onClick={handleClick} />
          <Navbar className="d-none d-sm-none d-md-none d-lg-block">
            <Nav className="ml-auto">
              {menuItems.map((item, ind) => {
                if (!!item.items)
                  return (
                    <NavDropdown
                      onMouseEnter={() => toggleDropdown(item.id)}
                      onMouseLeave={() => setShowDropdown(false)}
                      show={showDropdown === ind}
                      className={styles.dropdown}
                      title={item.name}
                      key={ind}
                      id="basic-nav-dropdown"
                    >
                      <div className="outer">
                        {item.items.map((option, i) => {
                          return (
                            <NavDropdown.Item key={i + i + i}>
                              <Link href={option.link}>{option.name}</Link>
                            </NavDropdown.Item>
                          );
                        })}
                      </div>
                    </NavDropdown>
                  );
                return (
                  <div className="navbar_dropdown__1JObr nav-item dropdown contact-link">
                    <Link className="hi" href={item.link}>
                      {item.name}
                    </Link>
                  </div>
                );
              })}
              <div className="navbar_dropdown__1JObr nav-item dropdown contact-link">
                <Link className="hi" href="/contact">
                  Contact Us
                </Link>
              </div>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
      {isOpen && (
        <div className={`${styles.mob_menu} mob_menu`}>
          <div className="close_div">
            <span onClick={() => setIsOpen(false)}>&times;</span>
          </div>
          {menuItems.map((item, ind) => {
            if (!!item.items) {
              return (
                <NavDropdown
                  onClick={() => toggleDropdown(item.id)}
                  show={showDropdown === ind}
                  className={styles.dropdown}
                  title={item.name}
                  key={ind}
                  id="basic-nav-dropdown"
                >
                  <div className="outer">
                    {item.items.map((option, i) => (
                      <NavDropdown.Item key={i + i + i} href="#action/3.1">
                        <Link href={option.link}>{option.name}</Link>
                      </NavDropdown.Item>
                    ))}
                  </div>
                </NavDropdown>
              );
            }
            return (
              <div className="navbar_dropdown__1JObr nav-item dropdown contact-link">
                <Link className="hi" href={item.link}>
                  {item.name}
                </Link>
              </div>
            );
          })}
          <div
            className="navbar_dropdown__1JObr nav-item dropdown contact-link"
            className={styles.contact}
          >
            <Link className="hi" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default NavigationBar;
