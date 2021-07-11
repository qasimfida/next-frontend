import styled from 'styled-components';

export const WrapperNavigationBar = styled.div`
  .navbar {
    padding: 0;
  }
  .navbar-brand {
    /* display: none; */
  }
  .navbar li {
    line-height: inherit;
    padding: 22px 0;
  }
  .navbar-light .navbar-nav .nav-link {
    font-size: 14px;
    padding: 12px 16px;
    color: #727280;
    text-transform: uppercase;
    z-index: 1 !important;
    font-weight: bold;
  }
  .caret {
    display: inline-block !important;
    font-size: 16px !important;
    color: #adadad !important;
    padding-left: 7px;
  }
  .navbar-light .navbar-nav .active > .nav-link {
    color: #727280 !important;
  }
  .header_logo img {
    width: 270px;
  }
  .navbar li span {
    display: block;
    text-align: center;
    font-size: 24px;
  }
  .header-wrap .dropdown a {
    border-radius: 6px;
    position: relative;
    z-index: 1000;
  }
  .header-wrap .dropdown-menu:before {
    content: '';
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
    position: absolute;
    left: 50%;
    margin-left: -5px;
    z-index: 1000;
    top: -10px;
  }
  .navbar li a {
    position: relative;
  }
  .navbar li:last-child a:after {
    border-radius: 30px;
  }
  .navbar-light .navbar-nav .nav-item:hover .nav-link,
  .navbar-light .navbar-nav .nav-link:hover {
    color: #fff !important;
    background: #ffb900;
  }
  .tp-bannertimer {
    display: none;
  }
  .navbar {
    float: right;
  }
  .navbar-light .navbar-nav .nav-item:hover .nav-link .caret,
  .navbar-light .navbar-nav .nav-link:hover .caret {
    color: #fff !important;
  }
  .close-toggler {
    display: none;
  }
  .submenu li:last-child {
    border: none;
  }
  .navbar-nav > li:hover > ul {
    top: 100%;
    opacity: 1;
    visibility: visible;
  }

  .navbar-nav > li > ul > li {
    position: relative;
    float: none;
    width: 100%;
    border-bottom: 1px solid #e8e8e8;
    padding: 0;
  }

  .dropdown-item > li:hover > a {
    background: #ffb900;
    color: #fff !important;
  }

  .navbar-nav > li > ul > li > a {
    text-decoration: none;
    position: relative;
    display: block;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 14px;
    color: #000 !important;
    word-wrap: break-word;
    transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
  }
  .navbar-nav li > .submenu > li a + i {
    display: none;
    position: absolute;
    right: 15px;
    top: 7px;
    font-size: 24px;
    cursor: pointer;
    color: #0b3c5d;
    background: #fff;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }

  .navbar-nav > li > a + i {
    display: none;
    position: absolute;
    right: 15px;
    top: 7px;
    font-size: 24px;
    cursor: pointer;
    color: #0b3c5d;
    background: #fff;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    z-index: 1000;
  }
  .navbar-nav li {
    position: relative;
  }
  .navbar-nav > li > ul {
    list-style: none;
    position: absolute;
    left: 0;
    top: 200%;
    width: 240px;
    padding: 0px;
    z-index: 100;
    background: #fff !important;
    visibility: hidden;
    opacity: 0;
    border-radius: 0px 2px 2px 2px;
    -ms-border-radius: 0px 2px 2px 2px;
    -webkit-border-radius: 0px 2px 2px 2px;
    -moz-border-radius: 0px 2px 2px 2px;
    -o-border-radius: 0px 2px 2px 2px;
    transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    box-shadow: 0 0 18px rgba(0, 0, 0, 0.38);
  }

  .dropdown-item li .submenu_right {
    display: none;
  }
  .submenu_right {
    background: #fff;
    position: absolute;
    top: 0;
    left: 100%;
    width: 200px;
  }
  .submenu_right li {
    padding-bottom: 0;
    padding: 0px;
    border-bottom: 1px solid #e8e8e8;
  }
  .submenu_right li a {
    display: block;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 20px;
    color: #000;
    text-decoration: none;
  }
  .submenu_right li a:hover {
    background: #ffb900;
    color: #fff !important;
  }
  .dropdown-item li:hover .submenu_right {
    display: block;
  }
  .right_angle {
    position: absolute;
    top: 8px;
    right: 10px;
    font-size: 18px !important;
  }
  @media screen and (max-width: 1200px) {
    .single-widgets h4 {
      line-height: 15px;
    }
    .property_details .property_price {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 990px) {
    .hero-image {
      height: 400px;
      width: 100%;
    }
    .hero-wrapper:before {
      top: 0;
    }
    .videohover {
      position: static;
    }
    .videoWrp {
      height: auto;
      padding-bottom: 100px;
    }
    .sbutn {
      padding: 15px 0px 15px 0;
      font-size: 11px;
    }
    .ulockd-team .offset-3 {
      margin-left: 0;
    }
    .header-wrap {
      padding: 20px 0;
    }
    .navbar-nav {
      clear: both;
    }
    .perfect_home_wrap .readmore,
    .perfect_home_wrap {
      text-align: center;
    }
    .popular_img .popular_img_text a {
      font-size: 16px;
    }
    .hotelLinks li {
      width: 25%;
    }
    .economy,
    .form-wrap .col-lg-4 {
      padding: 0 15px !important;
    }
    .end_date,
    .form-wrap .col-lg-5 {
      padding-right: 15px;
    }
    .form-wrap .col-lg-2,
    .form-wrap .col-lg-3 {
      padding-left: 15px;
    }
    .form-wrap .input-group {
      margin-bottom: 6px;
    }
    .sliderTxt h1 {
      font-size: 48px;
    }
    .story_box h3,
    .story_box p,
    .story_box {
      text-align: center;
    }
    .story_box p {
      margin-bottom: 30px;
    }
    .story-wrap {
      padding: 90px 0 40px 0;
    }
    .navbar {
      float: none;
    }
    .navbar-toggler {
      position: absolute;
      top: 10px;
      right: 0;
      border: 1px solid #eee;
    }

    .navbar-collapse {
      position: fixed;
      top: 0px;
      bottom: 0;
      left: 100%;
      width: 60%;
      padding-right: 1rem;
      padding-left: 1rem;
      overflow-y: auto;
      visibility: hidden;
      background-color: rgba(0, 0, 0, 0.8);
      transition: visibility 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
      transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
      transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out,
        -webkit-transform 0.3s ease-in-out;
      z-index: 10000;
    }
    .navbar-nav > li > ul {
      width: 100%;
      position: static;
      display: none;
      margin-left: 0;
      opacity: 1;
      visibility: visible;
    }
    .navbar-collapse.show {
      visibility: visible;
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    .close-toggler {
      background: none;
      color: #fff;
      padding: 5px;
      border: none;
      margin-top: 10px;
      font-size: 24px;
      float: right;
      display: block;
    }
    .perfect_home_wrap .readmore {
      margin-top: 30px;
      display: inline-block;
    }
    .navbar-nav li a + i {
      display: block;
    }
    .team_wrp {
      max-width: 375px;
      margin: 0 auto;
    }
    .insta_pics img {
      width: 80px;
    }
    .about-widget,
    .footer_button {
      text-align: center;
    }
    .navbar-light .navbar-nav .nav-link {
      color: #fff;
    }
    .navbar li {
      padding: 0;
    }
    .navbar-light .navbar-nav .active > .nav-link,
    .navbar-light .navbar-nav .nav-link.active,
    .navbar-light .navbar-nav .nav-link.show,
    .navbar-light .navbar-nav .show > .nav-link {
      color: #fff !important;
    }
    .navbar li span {
      display: inline-block;
      width: 30px;
      padding-right: 10px;
    }
    .navbar-nav > li > ul > li > a:hover {
      background: #ffb900;
    }
    .buy-wrap p {
      padding: 0px;
    }
    section.our_team_wrap .team_member {
      margin-bottom: 70px;
      margin-left: auto;
      margin-right: auto;
    }
    .caret {
      display: none !important;
    }
    .plan.featured {
      transform: none;
      margin: 30px 0;
    }
    .four-zero-page p {
      padding: 0;
    }
    .blog-pagination {
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 767px) {
    .hero-image {
      height: 300px;
      width: 100%;
    }
    .popular_wrap .mt_md {
      margin-top: 20px;
    }
    .col-sm-4.pr-0 {
      padding-right: 15px !important;
    }
    .popular_wrap .row .col-md-4:nth-child(1) .popular_img {
      margin-bottom: 15px;
    }
    .property_details .heart_info {
      float: none;
    }
    .icon-checkbox {
      columns: 2;
    }
    .slidertext3 {
      line-height: 18px !important;
    }
    section.our_team_wrap h1 {
      font-size: 30px;
    }
    .innerTeamWrp .team_wrp {
      margin: 0 auto !important;
    }
    .four-zero-page h2 {
      font-size: 150px;
    }
    .four-zero-page h3 {
      font-size: 24px;
      letter-spacing: 5px;
    }
    .four-zero-page {
      padding-bottom: 0;
    }
  }
  @media screen and (max-width: 480px) {
    .four-zero-page p {
      letter-spacing: 0;
    }
    .four-zero-page h3 {
      font-size: 18px;
      letter-spacing: 2px;
    }
    .four-zero-page h2 {
      font-size: 70px;
    }
    .slidertext3 {
      line-height: 12px !important;
    }
    .topbar-wrap {
      text-align: center;
    }
    .icon-checkbox {
      columns: 1;
    }
    .topbar_phone {
      display: block;
      margin-bottom: 6px;
    }
    .top_right {
      text-align: center;
    }
    .navbar {
      padding: 0 15px;
    }
    .navbar-toggler {
      right: 15px;
    }
    .header_logo {
      margin-top: 10px;
    }
    .nav > li > a {
      padding: 10px 8px;
      font-size: 14px;
    }
    .hotelLinks li {
      width: 50%;
    }
    .header_logo {
      width: 200px;
    }
    .popular_wrap h1,
    .buy-wrap h1,
    .title h1,
    .perfect_home_wrap h1,
    .sliderTxt h1 {
      font-size: 28px;
    }
    .sliderTxt p {
      font-size: 14px;
      letter-spacing: 1px;
    }
    .property_box h3 a {
      font-size: 18px;
    }
    .property_location i {
      font-size: 14px;
    }
    .title h1 span {
      font-size: 14px;
      line-height: 24px;
      margin-top: 6px;
      font-weight: normal;
    }
    .start_btn a {
      display: block;
      margin-top: 20px;
      width: 220px;
      margin-left: auto;
      margin-right: auto;
    }
    section.our_team_wrap .team_member:hover .team_img img {
      right: -15px;
    }
  }
`;
