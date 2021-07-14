import React from "react";
import styles from "./OneLine.module.scss";
import { CgTrash } from "react-icons/cg";

const OneLine = ({oneLineChange, oneLineInputs, id, seriesID, removeSeries, excercises}) => {
  
  return (
  <div className={styles.wrapper}>
    <input
       id={id}
       className={styles.input}
       type="number"
       placeholder="reps"
       onChange={oneLineChange}
       value={oneLineInputs.reps}
       name="reps"
       min="1"
     />
     <input
       id={id}
       className={styles.input}
       type="number"
       placeholder="weight"
       onChange={oneLineChange}
       value={oneLineInputs.weight}
       name="weight"
       min="1"
     />
     <button onClick={()=>removeSeries(id, seriesID, excercises, )} className={styles.trash}>
       <CgTrash className={styles.icon} />
     </button>
    </div>
  );
};

export default OneLine;
