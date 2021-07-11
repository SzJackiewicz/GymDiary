import React from "react";
import styles from "../HomeBtn/HomeBtn.module.scss";
import { Link } from "react-router-dom";
import { homeURL } from "../../../AppRoutes";
import AppContext from '../../../context';


const SaveBtn = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
          <button onClick={context.saveDay} className={styles.saveBtn}> SAVE </button>
      )}
    </AppContext.Consumer>
  );
};

export default SaveBtn;
