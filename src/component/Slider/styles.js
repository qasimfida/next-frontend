import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 30px;
  .card {
    background: #fff;
    padding: 18px;
    box-shadow: 0 0 20px rgb(0 0 0 / 15%);
    border: none;
  }
  .card-body {
    padding: 0;
  }
`;

export const Title = styled.div`
  text-decoration: none;
  font-size: 1.5rem;

  color: #000;
  line-height: 24px;
  font-weight: normal;
  padding-top: 10px;
  padding-bottom: 5px;
`;

export const Address = styled.div`
  font-size: 14px;
  color: #b9b9b9;
`;
export const Price = styled.div`
  display: flex;
  margin-top: 15px;
  button {
    border: 1px solid #f0efef;
  }
  .icons {
    font-size: 14px;
    color: #a5a5a5;
    text-align: center;
    line-height: 30px;
    height: 27px;
    width: 20px;
  }
  .price {
    font-size: 20px;
    color: #ffb900;
    font-weight: bold;
    margin-left: 15px;
  }
`;
export const PropertyInfo = styled.div`
  text-align: center;
  margin-top: 15px;
  padding: 7px;
  .pro {
    border: 1px solid #efefef;
    padding: 7px;
  }
  ul,
  ol {
    padding: 7px;
    list-style: none;
    margin-bottom: 0;
  }
  h5 {
    font-size: 12px;
    margin-bottom: 0;
    font-family: "Open Sans", sans-serif;
    color: #000;
    margin-top: 5px;
  }
`;

export const RentInfo = styled.div`
  display: flex;
  margin-top: 15px;
  .apart {
    background: #ffb900;
    z-index: 1000;
    position: relative;
    padding: 10px 18px;
    width: 55%;
    color: #000;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
  }
  .apart:after {
    content: "";
    background: #ffb900;
    z-index: -1;
    width: 40px;
    height: 100%;
    transform: skew(-30deg);
    position: absolute;
    top: 0;
    right: -15px;
  }

  .sale {
    background: #2b2727;
    padding: 10px;
    text-align: center;
    color: #fff;
    width: 45%;
    font-size: 16px;
    font-weight: 300;
    font-family: "Poppins", sans-serif;
  }
`;
