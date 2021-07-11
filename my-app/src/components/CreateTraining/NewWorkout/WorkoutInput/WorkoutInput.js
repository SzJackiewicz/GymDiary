import React from "react";
import AppContext from '../../../../context'
import styles from '../WorkoutInput/WorkoutInput.module.scss'


const WorkoutInput = () => {


  return (
    <AppContext.Consumer>
      {(context) => (
        <form>
          <input
            type="text"
            placeholder="excercise"
            value={context.excerciseName}
            onChange={context.handleChange}
          />
          <button onClick={context.addExcercise}>ADD</button>
        </form>
      )}
    </AppContext.Consumer>
  );
};

export default WorkoutInput;
