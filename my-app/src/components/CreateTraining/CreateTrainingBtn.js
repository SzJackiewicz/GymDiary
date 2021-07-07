import React from "react";
import { CgMenuBoxed } from "react-icons/cg";
import styles from '../CreateTraining/CreateTraining.module.scss'
import { Link } from "react-router-dom";
import {testURL} from "../../AppRoutes";



const CreateTraining = () => {

  return (

      <Link to={testURL} className={styles.newTraining}><CgMenuBoxed/>new training</Link>
    
  )
};

export default CreateTraining;
