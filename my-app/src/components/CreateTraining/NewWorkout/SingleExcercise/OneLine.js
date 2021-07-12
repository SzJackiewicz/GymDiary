import React from "react";
import styles from "./OneLine.module.scss";
import { CgTrash } from "react-icons/cg";
import AppContext from '../../../../context';


const OneLine = ({name, reps, weight}) => {

  
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className={styles.wrapper}>
          <input
            id="id"
            className={styles.input}
            type="number"
            placeholder="reps"
            onChange={context.repsValue}
            value={reps}
            name={name}
          />
          <input
            id="weight"
            className={styles.input}
            type="number"
            placeholder="weight"
            onChange={context.weightValue}
            value={weight}
          />
          <button onClick={context.removeLine} className={styles.trash}>
            <CgTrash className={styles.icon} />
          </button>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default OneLine;
