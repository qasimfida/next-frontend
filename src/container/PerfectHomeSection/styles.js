import styled from "styled-components";

export const Wrapper = styled.div`
  background: url("./assets/perfect_bg.jpg");

  background-size: cover;
  padding: 52px 0px;
  h1 {
    font-size: 36px;
    font-family: bold;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 15px;
    font-family: "Poppins", sans-serif;
  }
  span {
    font-size: 16px;
    line-height: 26px;
    color: #fff;
    font-style: italic;
    font-family: "Poppins", sans-serif;
  }
  .readmore {
    margin-bottom: 0;
    text-align: right;
  }
  .readmore a {
    text-decoration: none;
    color: #000;
    background: #fff;
    font-size: 16px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    padding: 15px 40px;
  }
  .readmore a:hover {
    background: #000;
    color: #fff;
  }
`;
