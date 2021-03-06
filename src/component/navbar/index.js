import React, { useState } from "react";
import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import logo from "../../assets/logo.png";
import styles from "./../../styles/components/navbar.module.css";

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = () => {
    setIsOpen((pre) => !pre);
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
          name: 'Home Image',
          link: '/',
        },
        {
          name: 'Home Slider',
          link: '/?header=slider',
        },
        {
          name: 'Home Video',
          link: '/?header=video',
        },
        {
          name: 'Home Map',
          link: '/?header=map',
        },
        {
          name: 'Search Results',
          link: '/search-results',
        },
      ],
    },
    {
      id: 1,
      name: "Agencies",
      link: "#",
      items: [
        { name: 'Agencies', link: '/corretor-imoveis' },
        { name: 'Agents', link: '/agents' },
      ],
    },
    {
      id: 2,
      name: "Property",
      link: "#",
      items: [
        { name: "Propperty Details", link: "/imovel " },
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
        { name: "Article List", link: "/artigo" },
      ],
    },
  ];
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="header_logo" href="#home">
            {/* <img src={logo.src} alt="" /> */}
            <Image src={logo} alt="" />
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
                      key={`${ind}`}
                      id="basic-nav-dropdown"
                    >
                      <div className="outer">
                        {item.items.map((option, i) => {
                          return (
                            <NavDropdown.Item key={`${i + i + i}`}>
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
              <Link className="hi" href="/contact">
                <div className="navbar_dropdown__1JObr nav-item dropdown contact-link">
                  Contact Us
                </div>
              </Link>
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
                  key={`${ind}`}
                  id="basic-nav-dropdown"
                >
                  <div className="outer">
                    {item.items.map((option, i) => (
                      <NavDropdown.Item key={`${i + i + i}`} href="#action/3.1">
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
          <Link className="hi" href="/contact">
            <div
              className="navbar_dropdown__1JObr nav-item dropdown contact-link"
              className={styles.contact}
            >
              Contact Us
            </div>
          </Link>
        </div>
      )}
    </>
  );
};
export default NavigationBar;
