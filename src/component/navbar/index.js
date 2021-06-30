import React from "react";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavigationBar = () => {
  return (
    <WrapperNavigationBar>
      <Navbar bg="light" expand="lg" className="headNavbar">
        <div className="socialIcons">
          <div>icon 1 </div>
          <div>icon 2 </div>
          <div>icon 3 </div>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
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
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </WrapperNavigationBar>
  );
};
export const WrapperNavigationBar = styled.div`
  .headNavbar {
    justify-content: space-between;
    padding: 0 70px;
  }
  .socialIcons {
    display: flex;
  }
`;

export default NavigationBar;
