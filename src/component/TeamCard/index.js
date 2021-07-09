import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import { Wrapper, Name } from "./styles.js";
import styles from "../../styles/components/teamCard.module.css";

function TeamCard({ name, img }) {
  return (
    <div className={styles.team_wrp}>
      <div className={styles.team_member}>
        <div className={styles.team_img}>
          <img alt="" src={`${img.src}`} />
        </div>
        <div className={styles.team_icons}>
          <ul>
            <li>
              <a href="">
                <i aria-hidden="true">
                  <FontAwesomeIcon icon={faFacebookF} />
                </i>
              </a>
            </li>
            <li>
              <a href="">
                <i aria-hidden="true">
                  <FontAwesomeIcon icon={faTwitter} />
                </i>
              </a>
            </li>
            <li>
              <a href="">
                <i aria-hidden="true">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.team_name}>
          <h3>{name}</h3>
        </div>
      </div>
    </div>
    /* <Card>
        <div class="team_wrp">
          <div class="team_member ">
            <div class="team_img">
              <img alt="" src={`${img.src}`} />
            </div>
            <div class="team_icons">
              <ul>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
              </ul>
            </div>
            <Name class="team_name">
              <h3>{name}</h3>
            </Name>
          </div>
        </div>
      </Card> */
  );
}

export default TeamCard;
