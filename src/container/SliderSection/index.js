import React from "react";
import FeaturedCard from "../../component/FeatureCard";
import { Wrapper } from "./styles";

import Heading from "../../component/Heading";
import P from "../../component/Para";

function SliderSection() {
  return (
    <Wrapper>
      <div className="container">
        <Heading>
          Featured Properties
          <P>Lorem ipsum dolor sit amet, consectetur aadipiscing elit.</P>
        </Heading>

        <div className="row">
          {data.map((item, ind) => (
            <div className="col-md-4" key={ind}>
              <FeaturedCard
                title={item.title}
                address={item.address}
                img={item.img}
                rooms={item.rooms}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default SliderSection;
