import React from "react";
import styles from "../../styles/container/Pricing.module.css";

function PricingCard({
  mediaLeft = false,
  title,
  value,
  period,
  plan1,
  plan2,
  plan3,
  plan4,
  plan5,
  active,
}) {
  return (
    <div className={styles.plan}>
      <div
        className={`${styles.plan_price} ${
          active ? `${styles.plan_price_active}` : "none"
        }`}
      >
        <h3>{title}</h3>
        <span className={styles.value}>{value}</span>{" "}
        <span className={styles.period}>{period}</span>{" "}
      </div>
      <div className={styles.plan_features}>
        <ul>
          <li>{plan1}</li>
          <li>{plan2}</li>
          <li>{plan3}</li>
          <li>{plan4}</li>
          <li>{plan5}</li>
        </ul>
        <div className={styles.readmore}>
          <a href="#">Get Started</a>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
