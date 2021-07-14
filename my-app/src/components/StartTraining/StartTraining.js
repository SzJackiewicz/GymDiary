import React from "react";
import { CgGym } from "react-icons/cg";
import styles from '../StartTraining/StartTraining.module.scss'
import { Link } from "react-router-dom";
import {testURL} from "../../AppRoutes";



const StartTraining = ({name}) => {

  return (
    <div className={styles.btn}>
    <Link to={testURL} className={styles.newTraining}>{`GO DAY ${name+1}`}</Link>
    <div className={styles.ico_wrapper}>
    <CgGym className={styles.ico}/>
    </div>
    </div>
  )

};

export default StartTraining;
