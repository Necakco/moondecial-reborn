import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import fat from './fat.png';
import free from './freefire.png';


export default function HomepageFeatures() {
  return (
  <section className={styles.features}>
  <div className="container">
    <div className="row">
      <div className={clsx("col col--4 ", "gutter--sm")}>
        <div className="text--center"></div>
        <div className="text--center padding-horiz--md">
          <img src={fat} alt="Logo" className="fat1" />
          <h3>FAST</h3>
          <p>GAS GAS GAS I AM THE FASTEST</p>
        </div>
      </div>
      <div className={clsx("col col--4", "gutter--sm")}>
        <div className="text--center"></div>
        <div className="text--center padding-horiz--md">
          <img src={free} alt="Logo" className="fat1" />
          <h3>FREE</h3>
          <p>ZERO COST</p>
        </div>
      </div>
      <div className={clsx("col col--4", "gutter--sm")}>
        <div className="text--center"></div>
        <div className="text--center padding-horiz--md">
          <img src={fat} alt="Logo" className="fat1" />
          <h3>QUAILY</h3>
          <p>😋</p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
