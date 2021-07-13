import React from "react";
import OneLine from "./OneLine";
import ExcerciseName from '../SingleExcercise/ExcerciseName';
import { SiAddthis } from "react-icons/si";
import styles from "./SingleExcercise.module.scss";

const SingleExcercise = ({excercises, text, series, id, addSeries, removeSeries,  repsChange, weightChange}) => {
   return (
        <div className={styles.wrapper}>
          <ExcerciseName id={id} text={text}/>
          {series.map(el => <OneLine removeSeries={removeSeries} key={el.id} id={id} weight={el.weight} reps={el.reps} reps={el.reps} repsChange={repsChange} weightChange={weightChange} seriesID={el.id} excercises={excercises}/> )}
            <button onClick={()=>addSeries(id)} className={styles.oneMore}>
            <SiAddthis className={styles.icon} />
          </button>
        </div>
  );
};

export default SingleExcercise;
