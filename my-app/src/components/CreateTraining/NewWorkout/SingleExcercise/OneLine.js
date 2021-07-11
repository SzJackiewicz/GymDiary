import React from "react";
import styles from "./OneLine.module.scss";
import { CgTrash } from "react-icons/cg";
import AppContext from '../../../../context';


const OneLine = ({removeLine, repsValue, reps, name}) => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className={styles.wrapper}>
          <input
            id="id"
            className={styles.input}
            type="number"
            placeholder="reps"
            onChange={repsValue}
            value={reps.name}
            name={name}
          />
          <input
            id="weight"
            className={styles.input}
            type="number"
            placeholder="weight"
            onChange={context.weightValue}
            value={context.weight}
          />
          <button onClick={removeLine} className={styles.trash}>
            <CgTrash className={styles.icon} />
          </button>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default OneLine;
