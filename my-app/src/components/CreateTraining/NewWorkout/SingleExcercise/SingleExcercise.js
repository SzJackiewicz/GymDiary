import React from "react";
import OneLine from "./OneLine";
import styles from "./SingleExcercise.module.scss"

const SingleExcercise = () => {
  return (
    <div className={styles.wrapper}>
      <p>NazwaĆwiczenia</p> 
      <OneLine />
      <button className={styles.oneMore}>more</button>
    </div>
  );
};

export default SingleExcercise;
