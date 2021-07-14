import React from "react";
import { CgMenuBoxed } from "react-icons/cg";
import styles from '../CreateTraining/CreateTraining.module.scss'
import { Link } from "react-router-dom";
import {testURL} from "../../AppRoutes";

const CreateTraining = () => {

  return (
      <div className={styles.btn}>
      <Link to={testURL} className={styles.newTraining}>NEW TRAINING</Link>
      <div className={styles.ico_wrapper}>
      <CgMenuBoxed className={styles.ico}/>
      </div>
      </div>
  )
};

export default CreateTraining;
