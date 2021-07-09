import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 60px 0px 80px 0;
  .card {
    border: none;
  }
  .team_icons {
    text-align: right;
    margin-right: 50px;
    padding-top: 16px;
  }

  .team_icons ul li {
    display: inline-block;
  }
  .team_icons ul li a {
    display: block;
    width: 35px;
    height: 35px;
    line-height: 35px;
    background: #f1f1f1;
    border-radius: 100%;
    text-align: center;
  }
  .team_icons ul li a:hover {
    background: #ffb900;
  }
  .team_icons ul li a {
    color: #000;
  }
  .team_icons ul li:nth-child(1) a {
    background: #3c5c8d;
    color: #fff;
  }
  .team_icons ul li:nth-child(2) a {
    background: #55acef;
    color: #fff;
  }
  .team_icons ul li:nth-child(3) a {
    background: #c23287;
    color: #fff;
  }

  .team_img {
    text-align: right;
    margin-left: 38px;
  }
  .team_member {
    position: relative;
  }
  .team_wrp {
    position: relative;
  }
  .team_wrp:before {
    content: "";
    border: 2px solid #ffb900;
    top: 50px;
    position: absolute;
    left: 0;
    width: 90%;
    height: 94%;
  }

  @media screen and (max-width: 990px) {
    .team_member {
      margin-bottom: 70px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media screen and (max-width: 480px) {
    .team_member:hover .team_img img {
      right: -15px;
    }
  }
`;

export const Name = styled.div`
  h3 {
    background: #ffb900;
    color: #000;
    font-size: 16px;
    padding: 14px 40px;
    position: absolute;
    bottom: 70px;
    left: 15px;
    font-weight: 400;
  }
  @media screen and (max-width: 767px) {
    h1 {
      font-size: 30px;
    }
  }
`;
