import React from "react";
import { Card, Button } from "react-bootstrap";
import {
  Wrapper,
  Title,
  Address,
  Price,
  PropertyInfo,
  RentInfo,
} from "./styles.js";
import * as Icon from "react-feather";
import i from "./../../assets/airplay.svg";

function FeaturedCard({ title, address, img, rooms, price }) {
  return (
    <Wrapper>
      <Card>
        <Card.Body>
          <Card.Img variant="top" src={`${img.src}`} />
          <Title>{title}</Title>
          <Address>{address}</Address>
          <Price>
            <div>
              <button className="mr-2 border-0">
                <Icon.Activity className="icons" />
              </button>
              <button className="border-0">
                <Icon.Heart className="icons" />
              </button>
            </div>
            <div className="price"> {price}</div>
          </Price>
          <PropertyInfo>
            <ul className="row">
              <li className="col-4 pro">
                <div className="property-icon">
                  <img src={`${i.src}`} />
                </div>
                <h5>Bedrooms {rooms}</h5>
              </li>
              <li className="col-4 pro">
                <div className="property-icon">
                  <img src={`${i.src}`} />
                </div>
                <h5>Bathrooms {rooms}</h5>
              </li>
              <li className="col-4 pro">
                <div className="property-icon">
                  <img src={`${i.src}`} />
                </div>
                <h5>Garage {rooms}</h5>
              </li>
            </ul>
          </PropertyInfo>
          <RentInfo>
            <div className="apart">Apartment</div>
            <div className="sale">Sale</div>
          </RentInfo>
        </Card.Body>
      </Card>
    </Wrapper>
  );
}

export default FeaturedCard;
