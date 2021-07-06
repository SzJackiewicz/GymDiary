import React from "react";
import OneLine from "./OneLine";
import { SiAddthis } from "react-icons/si";
import styles from "./SingleExcercise.module.scss"

const SingleExcercise = () => {

  //funkcja dodająca kolejną linijkę teg samego cwiczenia czyli tworząca OneLine


  return (
    <div className={styles.wrapper}>
      <p>NazwaĆwiczenia</p> 
      <OneLine />
      <button className={styles.oneMore}><SiAddthis className={styles.icon}/></button>
    </div>
  );
};

export default SingleExcercise;
