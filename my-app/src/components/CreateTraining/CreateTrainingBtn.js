import React from "react";
import { CgMenuBoxed } from "react-icons/cg";
import styles from '../CreateTraining/CreateTraining.module.scss'



const CreateTraining = () => {

  return (

      <button className={styles.newTraining}><CgMenuBoxed/>new training</button>
    
  )
};

export default CreateTraining;
