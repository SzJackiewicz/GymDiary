import React from "react";
import { CgGym } from "react-icons/cg";
import styles from '../StartTraining/StartTraining.module.scss'



const StartTraining = () => {

  return (

      <button className={styles.startTraining}>
          <CgGym/>Go day day-1</button>
    
  )
};

export default StartTraining;
