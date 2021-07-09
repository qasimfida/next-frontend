import styled from "styled-components";

export const Wrapper = styled.div`
  background: #121111;
  padding: 50px 0 20px 0;

  .widget-content .images {
    margin-top: 10px;
  }

  .footer-widget .footer_button:hover {
    background: #fff;
    color: #000;
  }
  .footer-widget .footer_button:hover a {
    color: #000;
  }
  .footer-widget img {
    max-width: 100%;
  }
  .footer-widget .footer_button a {
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    padding: 15px 30px;
    display: inline-block;
    color: #fff;
    text-decoration: none;
  }
  .readmore {
    margin-bottom: 30px;
    margin-top: 15px;
  }
  .readmore a {
    text-decoration: none;
    font-size: 14px;
    color: #fff;
    display: inline-block;
    font-weight: bold;
    text-transform: uppercase;
    background: #ffb900;
    padding: 14px 36px;
  }
  .readmore a:hover {
    background: #000;
  }
  .footer-widget .footer_button i {
    margin-left: 10px;
  }
  .footer-widget h3 {
    margin-bottom: 40px;
  }
  .footer-widget h3 {
  }
  .footer-widget h3:before {
    content: "";
    background: #fff;
    width: 40px;
    height: 1px;
    position: absolute;
    bottom: -15px;
    left: 0;
  }
  .footer-widget ul li a {
    font-size: 14px;
    line-height: 38px;
  }
  .footer-widget ul li a:hover {
    color: #d62929;
  }
  .footer-widget.contact-widget input,
  .footer-widget.contact-widget textarea {
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    padding: 0 20px;
  }
  .footer-widget.contact-widget textarea {
    height: 100px;
    padding-top: 15px;
    margin-bottom: 5px;
  }
  .property_sec {
    list-style: none;
    padding: 0;
  }
  .property_sec li {
    border-bottom: 1px solid #2f2f2f;
    padding: 18px 0;
  }
  .property_sec li:first-child {
    padding-top: 0;
  }
  .property_sec li:last-child {
    padding-bottom: 0;
    border: none;
  }
  .rec_proprty {
    display: flex;
  }
  .property_info {
    margin-left: 16px;
  }
  .property_info p {
    margin: 0;
    font-size: 14px;
    color: #fff;
    font-weight: 400;
    line-height: 27px;
  }
  .priceWrp {
    color: #fff;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    background: #ffb900;
    padding: 3px 14px;
    display: inline-block;
  }
  .property_info h4 {
    margin-bottom: 0px;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    line-height: 14px;
    cursor: pointer;
  }

  .property_info h4:hover {
    color: #ffb900;
  }
  .footer-widget.contact-widget .column {
    padding: 0 10px;
  }

  .footer-widget.contact-widget input,
  .footer-widget.contact-widget textarea {
    background: rgba(119, 119, 119, 0.35);
    color: #fff;
  }

  .footer-widget.contact-widget input {
    height: 50px;
    font-size: 14px;
    font-weight: 400;
    color: #adadad;
    margin-bottom: 10px;
    font-family: "Open Sans", sans-serif;
  }

  .footer-widget.contact-widget textarea {
    height: 90px;
    font-size: 14px;
    font-weight: 400;
    color: #adadad;
    margin: 5px 0px 20px;
    font-family: "Open Sans", sans-serif;
  }

  .footer-widget.contact-widget button {
    height: 50px;
    line-height: 45px;
  }
  .footer-widget.opening-hour {
    color: #adadad;
  }
  .footer-widget.opening-hour span {
    font-size: 14px;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    color: #adadad;
  }
  .footer-widget.opening-hour .day-time {
    margin-top: -12px;
  }
  .footer-widget.opening-hour .day-time li {
    font-size: 14px;
    line-height: 22px;
    padding: 13px 0px;
    border-bottom: 1px solid #3b3a4c;
  }
  .footer-widget.opening-hour .day-time span {
    float: right;
  }
  .footer-widget.opening-hour .day-time li:last-child {
    border-bottom: none;
  }
  .footer-widget.opening-hour .day-time li:nth-child(3) span {
    color: #fc7013;
  }
  .footer-widget.opening-hour .day-time li:nth-child(4) span {
    color: #fc7013;
  }

  .footer-widget .contact-info li {
    position: relative;
    color: #bdbcc0;
    padding-left: 30px;
    margin-bottom: 5px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
  }

  .footer-widget .contact-info li .icon {
    position: absolute;
    left: 0px;
    top: 0px;
    line-height: 24px;
    font-size: 14px;
  }

  .footer-widget .widget-content {
    margin-top: -3px;
  }
  .footer-widget .widget-content p {
    margin-bottom: 15px;
  }

  .footer-bottom .social-links a {
    display: inline-block;
    font-size: 13px;
    font-weight: normal;
    color: #d1d1d1;
    padding: 0px 15px;
    line-height: 26px;
  }

  .footer-bottom a:hover {
    color: #7aba1e;
  }
  .footer-bottom .copyright-text {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #333;
  }

  .footer-widget .social {
    list-style: none;
    margin-top: 20px;
  }
  .footer-widget .social li {
    display: inline-block;
  }
  .footer-widget ul li {
    padding-right: 4px;
  }
  .footer-widget .social li a {
    border: 1px solid #fff;
    font-size: 16px;
    color: #bdbcc0;
    display: block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 100%;
  }
  .social li a {
    color: #fff;
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
  }

  .footer-bottom {
    padding: 14px 0;
  }

  .footer_contact .footr {
    font-size: 16px;
    color: #fff;
    text-decoration: none;
    padding-left: 20px;
    margin-bottom: 10px;
    display: block;
  }
  .footer_contact a:hover,
  .footer_contact a:hover:before {
    color: #ffb900;
  }

  .footer-adress {
    list-style: none;
    padding: 0;
  }
  .footer-adress li {
    margin: 0;
    color: #fff;

    display: flex;
    align-items: center;
  }
  .footer-adress li > i {
    vertical-align: top;
    font-size: 16px;
    color: #fff;
    width: 30px;
    padding-top: 0px;
  }
  .footer-adress li span a,
  .footer-adress li span {
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    padding-left: 5px;
  }
  .footer-adress li span a:hover {
    color: #77dda7;
  }
  .footer_phone a {
    font-size: 24px !important;
    font-weight: bold;
  }
  .footer_address i,
  .footer_phone i {
    font-size: 24px !important;
  }

  .footer_icon {
    text-align: left;
  }
  .footerLinks li {
    position: relative;
    padding-left: 16px;
  }
  .footerLinks li a {
    font-size: 14px;
    color: #fff;
    line-height: 30px;
    text-decoration: none;
  }
  .footerLinks li:before {
    content: "\f105";
    font-family: "FontAwesome";
    position: absolute;
    top: 4px;
    left: 0;
    font-size: 14px;
    color: #fff;
  }
  .footerLinks li a:hover {
    color: #328bc3;
  }
  .social-icons ul li {
    display: inline-block;
    margin-right: 3px;
  }
  .social-icons ul {
    padding: 0;
  }
  .social-icons ul li a {
    border: 1px solid #fff;
    display: block;
    font-size: 18px;
    text-align: center;
    color: #fff;
    width: 38px;
    height: 38px;
    line-height: 38px;
    border-radius: 100%;
  }

  .social-icons ul li:nth-child(1) a {
    background: #3c599b;
    border-color: #3c599b;
  }
  .social-icons ul li:nth-child(2) a {
    background: #1ea1f3;
    border-color: #1ea1f3;
  }
  .social-icons ul li:nth-child(3) a {
    background: #cd2e80;
    border-color: #cd2e80;
  }
  .social-icons ul li:nth-child(4) a {
    background: #fb000f;
    border-color: #fb000f;
  }

  input:focus {
    outline: none !important;
  }
  .innerHeading {
    background: url(../images/innerHeading.jpg);
    padding: 40px 0;
    background-size: cover;
    text-align: center;
  }
  .innerHeading h1 {
    color: #fff;
    font-size: 36px;
    font-weight: 600;
  }
  .innercontent {
    padding: 60px 0;
  }
`;

export const QuickLinks = styled.div`
  .list-group-item {
    background: transparent;
    color: #ffff;
    padding: 0 0 10px 0;
    font-size: 16px;
    padding-left: 15px;
    cursor: pointer;
    position: relative;
  }
  .list-group-item:hover::before {
    color: #ffb900;
  }
  .list-group-item:hover {
    color: #ffb900;
  }
  .list-group-item:before {
    color: #ffffff;
    content: "\f0da";
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
    font-size: 12px;
    left: 0;
    line-height: 16px;
    position: absolute;
    top: 4px;
    :hover {
      color: #ffb900;
    }
  }

  .footer-widget h3 {
    position: relative;
    font-weight: 500;
    color: #fff;
  }
  .footer-widget.quick-links ul li {
    margin-bottom: 4px;
  }
  .footer-widget.quick-links ul {
    list-style: none;
    padding: 0;
  }
  .footer-widget.quick-links ul li a {
    text-decoration: none;
    font-size: 14px;
    color: #fff;
    line-height: 22px;
    padding-bottom: 7px;
    padding-left: 15px;
    position: relative;
    font-weight: 400;
  }
  .footer-widget.quick-links ul li a:before {
    color: #ffffff;
    content: "\f0da";
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
    font-size: 12px;
    left: 0;
    line-height: 16px;
    position: absolute;
    top: 2px;
  }
  .footer-widget.quick-links ul li a:hover {
    color: #ffb900;
  }
  .footer-widget .quick-links ul li a:hover:before {
    color: #ffb900;
  }
`;

export const Contact = styled.div`
  .list-group-item {
    background: transparent;
    color: #ffff;
    padding: 0 0 10px 0;
    font-size: 16px;
  }
  .addressIcon {
  }
`;
