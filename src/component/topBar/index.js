import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo.svg";
import styled from "styled-components";

export const TopBar = () => {
  return (
    <WrapperTopBar>
      <Navbar variant="dark" className="topNavbar">
        <div>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Logo Icon
          </Navbar.Brand>
        </div>
        {/* <div>hello knjr</div> */}
        {/* <Button className="btn" size="lg">
          Submit property
        </Button> */}
        <button className="button">Submit property</button>
      </Navbar>
    </WrapperTopBar>
  );
};
export const WrapperTopBar = styled.div`
  background: #41444c;
  padding: 0 70px;

  .button {
    border: none;
    text-decoration: none;
    font-size: 16px;
    margin: 0;
    cursor: pointer;
    text-decoration: none;
    background: #ffb900;
    color: #000;
    font-weight: bold;
    padding: 13px 26px;
  }
  .topNavbar {
    justify-content: space-between;
    padding: 0;
  }
`;
export default TopBar;
