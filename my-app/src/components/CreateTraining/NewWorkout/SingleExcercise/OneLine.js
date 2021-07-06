import React from "react";
import styles from "./OneLine.module.scss"

const OneLine = () => {
  return (
    <div className={styles.wrapper}>
        <p>1</p>
        <input className={styles.input} type="number" placeholder="reps"/>
        <input className={styles.input} type="number" placeholder="weight"/>
    </div>
  );
};

export default OneLine;
