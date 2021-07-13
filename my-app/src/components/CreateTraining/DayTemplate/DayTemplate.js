import React from "react";
import styles from "../DayTemplate/DayTemplate.module.scss";
import WorkoutInput from "../NewWorkout/WorkoutInput/WorkoutInput";
import SingleExcercise from "../NewWorkout/SingleExcercise/SingleExcercise";
import HomeBtn from "../HomeBtn/HomeBtn";
import SaveBtn from "../SaveBtn/SaveBtn";
import AppContext from '../../../context';

const DayTemplate = () => {

    return (
    <AppContext.Consumer>
      {(context) => (
      <div className={styles.wrapper}>
        <div className={styles.btnWrapper}>
        <HomeBtn />
        <SaveBtn />
        </div>
        <WorkoutInput />
        {context.excercises.map(ex => <SingleExcercise removeSeries={context.removeSeries} addSeries={context.addSeries} series={ex.series} key={ex.id} id={ex.id} text={ex.text} reps={ex.reps} repsChange={context.repsChange} weightChange={context.weightChange}/>)}
      </div>
      )}
    </AppContext.Consumer>
  );
};

export default DayTemplate;
