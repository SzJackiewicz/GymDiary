import React from "react";
import OneLine from "./OneLine";
import ExcerciseName from '../SingleExcercise/ExcerciseName';
import { SiAddthis } from "react-icons/si";
import styles from "./SingleExcercise.module.scss";
import AppContext from "../../../../context";

const SingleExcercise = ({text, reps, id, addLine}) => {
 
   return (
        <div className={styles.wrapper}>
          <ExcerciseName id={id} text={text}/>
            {reps.map(rep => ( <OneLine
              // repsValue={repsValue}
              // removeLine={removeLine}
              key={id}
              id={id}
              weight={rep.weight}
              reps={rep.reps}
            />))}
            <button onClick={addLine}  lassName={styles.oneMore}>
            <SiAddthis className={styles.icon} />
          </button>
        </div>
  );
};

export default SingleExcercise;
