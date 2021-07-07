import React from "react";
import styles from "..//Dashboard/Dashboard.module.scss";
import CreateTrainingBtn from "../CreateTraining/CreateTrainingBtn";
import StartTraining from "../StartTraining/StartTraining";
import Header from "../Header/Header";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import {homeURL, testURL } from "../../AppRoutes";


const Dashboard = () => {
  return (
   
        <section className={styles.wrapper}>
          <Header />
          <CreateTrainingBtn/>
          <StartTraining/>
        </section>
  );
};

export default Dashboard;
