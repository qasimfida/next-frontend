import React from "react";

// import { Wrapper } from "./styles";
import styles from "../../styles/container/Team.module.css";
import team from "../../assets/team_1.png";

import { Col, Container, Row } from "react-bootstrap";
import TeamCard from "../../component/TeamCard";
import Heading from "../../component/Heading";
import P from "../../component/Para";

const data = [
  {
    name: "David Strozier",

    img: team,
  },
  {
    name: "James Adult",

    img: team,
  },
  {
    name: "Jennie Wilson",

    img: team,
  },
];

function TeamSection() {
  return (
    <div className={styles.team_wrapper}>
      <Container>
        <Heading className="pb-5">
          Meet Our Agents
          <P>Lorem ipsum dolor sit amet consectetur.</P>
        </Heading>
        <Row>
          {data.map((item, ind) => (
            <Col md={4} key={ind} className={styles.team_card}>
              <TeamCard name={item.name} img={item.img} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default TeamSection;
