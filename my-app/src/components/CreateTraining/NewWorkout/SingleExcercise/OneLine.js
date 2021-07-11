import React from "react";
import styles from "./OneLine.module.scss"
import { CgTrash } from "react-icons/cg";


const OneLine = ({removeLine}) => {
  return (
    < div className={styles.wrapper}>
        <p className={styles.counter}>1</p>
        <input className={styles.input} type="number" placeholder="reps"/>
        <input className={styles.input} type="number" placeholder="weight"/>
        <button onClick={removeLine} className={styles.trash}><CgTrash className={styles.icon}/></button>
    </div>
  );
};

export default OneLine;
