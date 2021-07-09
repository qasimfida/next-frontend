import styled from "styled-components";

export const WrapperTopBar = styled.div`
  background: #41444c;
  .social_media {
    padding: 0;
    margin-bottom: 0;
  }
  .social_media li {
    display: inline-block;
    padding: 0 2px;
  }
  .social_media ul {
    margin: 0;
  }
  .social_media li a {
    font-size: 14px;
    color: #fff;
    border: 1px solid #fff;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 100%;
    display: block;
  }
  .topbar_phone {
    display: inline-block;
  }
  .topbar_phone a {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }
  .topbar_phone i {
    padding-right: 6px;
    font-size: 20px;
  }
  .topbar_login {
    display: inline-block;
    margin-left: 10px;
  }
  .topbar_login a {
    text-decoration: none;
    background: #ffb900;
    color: #000;
    font-weight: bold;
    padding: 13px 26px;
    display: block;
  }
  .topbar_login i {
    padding-right: 7px;
  }
  .top_right {
    text-align: right;
  }
`;
