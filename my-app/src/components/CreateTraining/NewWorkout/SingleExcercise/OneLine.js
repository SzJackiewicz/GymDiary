import React from "react";
import styles from "./OneLine.module.scss";
import { CgTrash } from "react-icons/cg";


const OneLine = ({reps, weight, id, removeSeries}) => {
  return (
        <div className={styles.wrapper}>
          <input
            id={id}
            className={styles.input}
            type="number"
            placeholder="reps"
            // onChange={context.repsValue}
            value={reps}
          />
          <input
            id={id}
            className={styles.input}
            type="number"
            placeholder="weight"
            // onChange={context.weightValue}
            value={weight}
          />
          <button onClick={()=>removeSeries(id)} className={styles.trash}>
            <CgTrash className={styles.icon} />
          </button>
        </div>
      );
};

export default OneLine;
