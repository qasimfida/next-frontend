import React, { useState } from 'react';
import * as Icon from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
} from 'react-bootstrap';

import logo from '../../assets/logo.png';
import styles from './../../styles/components/navbar.module.css';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = () => {
    setIsOpen((pre) => !pre);
    console.log('click');
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
      name: 'home',
      link: '#',
      items: [
        {
          name: 'Home Image',
          link: '#',
        },
        {
          name: 'Home Slider',
          link: '#',
        },
        {
          name: 'Home Video',
          link: '#',
        },
        {
          name: 'Home Map',
          link: '#',
        },
      ],
    },
    {
      id: 1,
      name: 'listing',
      link: '#',
      items: [
        { name: 'Property Grid', link: '#' },
        { name: 'Property List', link: '#' },
        { name: 'Property Map', link: '#' },
        { name: 'Property Single', link: '#' },
      ],
    },
    {
      id: 2,
      name: 'Features',
      link: '#',
      items: [
        { name: 'Property Grid', link: '#' },
        { name: 'Property List', link: '#' },
        { name: 'Property Map', link: '#' },
        { name: 'Property Single', link: '#' },
      ],
    },
    {
      id: 3,
      name: 'Pages',
      link: '#',
      items: [
        { name: 'Property Grid', link: '#' },
        { name: 'Property List', link: '#' },
        { name: 'Property Map', link: '#' },
        { name: 'Property Single', link: '#' },
      ],
    },
    {
      id: 4,
      name: 'Blog',
      link: '#',
      items: [
        { name: 'Property Grid', link: '#' },
        { name: 'Property List', link: '#' },
        { name: 'Property Map', link: '#' },
        { name: 'Property Single', link: '#' },
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
              {menuItems.map((item, ind) => (
                <NavDropdown
                  onMouseEnter={() => toggleDropdown(item.id)}
                  onMouseLeave={() => setShowDropdown(false)}
                  show={showDropdown === ind}
                  className={styles.dropdown}
                  title={item.name}
                  key={ind}
                  id="basic-nav-dropdown">
                  <div className="outer">
                    {item.items.map((option, i) => (
                      <NavDropdown.Item key={i + i + i} href="#action/3.1">
                        {option.name}
                      </NavDropdown.Item>
                    ))}
                  </div>
                </NavDropdown>
              ))}
              <div className="navbar_dropdown__1JObr nav-item dropdown">
                <Nav.Link href="#link">Contact Us</Nav.Link>
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
          {menuItems.map((item, ind) => (
            <NavDropdown
              onClick={() => toggleDropdown(item.id)}
              show={showDropdown === ind}
              className={styles.dropdown}
              title={item.name}
              key={ind}
              id="basic-nav-dropdown">
              <div className="outer">
                {item.items.map((option, i) => (
                  <NavDropdown.Item key={i + i + i} href="#action/3.1">
                    {option.name}
                  </NavDropdown.Item>
                ))}
              </div>
            </NavDropdown>
          ))}
          <div className="navbar_dropdown__1JObr nav-item dropdown">
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </div>
        </div>
      )}
    </>
  );
};
export default NavigationBar;
