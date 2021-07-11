import React from "react";
import { CgGym } from "react-icons/cg";
import styles from '../StartTraining/StartTraining.module.scss'



const StartTraining = ({name}) => {

  return (

      <button className={styles.startTraining}>
          <CgGym/>{`GO DAY ${name+1}`}</button>
    
  )
};

export default StartTraining;
