import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import styles from "../../styles/components/teamCard.module.css";

function TeamCard({ name, img }) {
  return (
    <div className={`${styles.team_wrp} wow fadeInUp`}>
      <div className={styles.team_member}>
        <div className={styles.team_img}>
          {/* <img alt="" src={`${img.src}`} /> */}
          <Image src={img} alt="" />
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
  );
}

export default TeamCard;
