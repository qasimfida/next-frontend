import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PricingCard from "../../component/pricing-card";
import styles from "../../styles/container/Pricing.module.css";

const data = [
  {
    title: "Basic",
    value: "Free",
    period: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    plan1: "One Listing",
    plan2: "30 Days Availability",
    plan3: "Standard Listing",
    plan4: "Limited Support",
  },

  {
    title: "Extended",
    value: "$9.99",
    period: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    plan1: "One Time Fee",
    plan2: "One Listing",
    plan3: "90 Days Availability",
    plan4: "Featured In Search Results",
    plan5: "24/7 Support",
    active: true,
  },

  {
    title: "Professional",
    value: "$19.99",
    period: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    plan1: "Unlimited Listings",
    plan2: "Unlimited Availability",
    plan3: "Featured In Search Results",
    plan4: "24/7 Support",
  },
];

function PrictingTableSection() {
  return (
    <>
      <div className={`${styles.innerHeading} wow fadeInUp`}>
        <Container>
          <h1>Pricing Table</h1>
        </Container>
      </div>
      <div className={styles.innerContent}>
        <Container>
          <Row>
            {data.map((item, ind) => (
              <Col md={4} key={`${ind}`}>
                <PricingCard
                  mediaLeft={false}
                  title={item.title}
                  value={item.value}
                  period={item.period}
                  plan1={item.plan1}
                  plan2={item.plan2}
                  plan3={item.plan3}
                  plan4={item.plan4}
                  plan5={item.plan5}
                  active={item.active}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PrictingTableSection;
