import React from "react";
import { CgMenuBoxed } from "react-icons/cg";
import styles from '../CreateTraining/CreateTraining.module.scss'
import { Link } from "react-router-dom";
import {testURL} from "../../AppRoutes";



const CreateTraining = () => {

  return (
      <div className={styles.btn}>
      <Link to={testURL} className={styles.newTraining}><CgMenuBoxed/>new training</Link>
      </div>
  )
};

export default CreateTraining;
