import React from "react";
import styles from "./OneLine.module.scss";
import { CgTrash } from "react-icons/cg";


const OneLine = ({reps, weight, id, seriesID, removeSeries, excercises, repsChange, weightChange }) => {
  return (
        <div className={styles.wrapper}>
          <input
            id={id}
            className={styles.input}
            type="number"
            placeholder="reps"
            // onChange={repsChange}
            // value={reps}
          />
          <input
            id={id}
            className={styles.input}
            type="number"
            placeholder="weight"
            // onChange={weightChange}
            // value={weight}
          />
          <button onClick={()=>removeSeries(id, seriesID, excercises, )} className={styles.trash}>
            <CgTrash className={styles.icon} />
          </button>
        </div>
      );
};

export default OneLine;
