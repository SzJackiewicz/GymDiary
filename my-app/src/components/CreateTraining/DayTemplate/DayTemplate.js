import React from "react";
import styles from "../DayTemplate/DayTemplate.module.scss";
import WorkoutInput from "../NewWorkout/WorkoutInput/WorkoutInput";
import SingleExcercise from "../NewWorkout/SingleExcercise/SingleExcercise";
import HomeBtn from "../HomeBtn/HomeBtn";
import SaveBtn from "../SaveBtn/SaveBtn";
import AppContext from '../../../context';

const DayTemplate = ({deleteName}) => {

    return (
    <AppContext.Consumer>
      {(context) => (
      <div className={styles.wrapper}>
        <div className={styles.btnWrapper}>
        <HomeBtn />
        <SaveBtn />
        </div>
        <WorkoutInput />
        {context.excercises.map(ex => <SingleExcercise deleteName={deleteName} key={ex.id} id={ex.id} text={ex.name} reps={ex.reps} addLine={context.addLine}/>)}
      </div>
      )}
    </AppContext.Consumer>
  );
};

export default DayTemplate;
