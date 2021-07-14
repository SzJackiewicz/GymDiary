import React from "react";
import OneLine from "./OneLine";
import ExcerciseName from '../SingleExcercise/ExcerciseName';
import { SiAddthis } from "react-icons/si";
import styles from "./SingleExcercise.module.scss";

const SingleExcercise = ({oneLineChange, excercises, text, series, id, addSeries, removeSeries, oneLineInputs}) => {
     return (
    <div className={styles.wrapper}>
    <ExcerciseName id={id} text={text}/>
     {series.map(el => 
     <OneLine removeSeries={removeSeries} 
     key={el.id} 
     id={id} 
     weight={el.weight} 
     reps={el.reps} 
     seriesID={el.id} 
     excercises={excercises}
     oneLineInputs={oneLineInputs}
     oneLineChange={oneLineChange}
     /> )}
     <button onClick={()=>addSeries(id)} className={styles.oneMore}>
     <SiAddthis className={styles.icon} />
     </button>
    </div>
  );
};

export default SingleExcercise;
