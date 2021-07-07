import React, {useState} from "react";
import OneLine from "./OneLine";
import { SiAddthis } from "react-icons/si";
import styles from "./SingleExcercise.module.scss"

const SingleExcercise = () => {

    const [series, setSeries] = useState([])
  //funkcja dodająca kolejną linijkę teg samego cwiczenia czyli tworząca OneLine

  const addSeries = () => {
    setSeries([...series, <OneLine/>])
  }


  return (
    <div className={styles.wrapper}>
      <p>NazwaĆwiczenia</p> 
      <OneLine />
      {series.map(item =><OneLine/>)}
      <button onClick={addSeries} className={styles.oneMore}><SiAddthis className={styles.icon}/></button>
    </div>
  );
};

export default SingleExcercise;
