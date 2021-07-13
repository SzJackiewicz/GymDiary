import React from "react";
import styles from "../HomeBtn/HomeBtn.module.scss";
import { Link } from "react-router-dom";
import {homeURL} from "../../../AppRoutes"

const HomeBtn = () => {
  return (
  <Link to={homeURL}>
   <button className={styles.homeBtn}>HOME</button>
   </Link>
  )
};

export default HomeBtn;
