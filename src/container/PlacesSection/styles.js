import styled from "styled-components";
// import i from "./../../assets/47";

export const Wrapper = styled.div`
  padding: 60px 0px 70px 0px;
  margin-top: 18.5px;
  img {
    max-width: 100%;
  }
  .popular_img {
    overflow: hidden;
  }
  .popular_img:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: -270px;
    content: "";
    background-color: rgba(0, 0, 0, 0.6);
    width: 0;
    height: 130%;
    -webkit-transform: skewX(-36.01deg);
    -ms-transform: skewX(-36.01deg);
    transform: skewX(-36.01deg);
    -webkit-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;
    z-index: 0;
  }
  .popular_img .popular_img_text {
    font-size: 18px;
    color: #ffffff;
    position: absolute;
    bottom: 0;
    right: 0px;
    top: inherit;
    left: 0px;
    z-index: 1;
    background-color: transparent;
    background-image: linear-gradient(transparent, #000);
    padding: 8px 20px;
  }
  .mt {
    margin-top: 18.5px;
  }
  .popular_img .popular_img_text a {
    font-size: 24px;
    color: #fff;
    text-decoration: none;
  }
  .popular_img .popular_img_text a:hover {
    color: #ffb900;
  }

  .popular_img:hover:before {
    width: 230%;
  }
`;
