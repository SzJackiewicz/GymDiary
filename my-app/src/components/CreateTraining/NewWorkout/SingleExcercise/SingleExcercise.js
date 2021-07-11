import React, { useState } from "react";
import OneLine from "./OneLine";
import ExcerciseName from '../SingleExcercise/ExcerciseName';
import { SiAddthis } from "react-icons/si";
import styles from "./SingleExcercise.module.scss";
import AppContext from "../../../../context";
import { v4 as uuidv4 } from "uuid";

const SingleExcercise = ({text, deleteName}) => {
  const [newLine, setNewLine] = useState([]);
  const [reps, setReps] = useState('');

  let randomId =  uuidv4();

  const repsValue = (e) => {
    setReps(e.target.value)
  };

  const addLine = () => {
    let random = uuidv4();
    setNewLine([
      ...newLine,
      {
        id: random,
      },
    ]);
  };

  const removeLine = () => {
    setNewLine(newLine.filter((el) => el.id !== el.id));
    deleteName()
    };

  return (
    <AppContext.Consumer>
      {(context) => (
        <div className={styles.wrapper}>
          <ExcerciseName id={randomId} text={text}/>
          {newLine.map((item) => (
            <OneLine
              reps={reps}
              repsValue={repsValue}
              removeLine={removeLine}
              key={randomId}
            />
          ))}
          <button onClick={addLine} className={styles.oneMore}>
            <SiAddthis className={styles.icon} />
          </button>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default SingleExcercise;
