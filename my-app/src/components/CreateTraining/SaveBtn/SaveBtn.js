import React from "react";
import styles from "../HomeBtn/HomeBtn.module.scss"
import { Link } from "react-router-dom";
import {homeURL} from "../../../AppRoutes"

const SaveBtn = () => {

  return (
    <Link to={homeURL}>
   <button className={styles.saveBtn}>SAVE</button>
   </Link>
  )
};

export default SaveBtn;
