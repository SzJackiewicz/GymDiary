import React from "react";
import styles from "..//Dashboard/Dashboard.module.scss";
import CreateTrainingBtn from "../CreateTraining/CreateTrainingBtn";
import StartTraining from "../StartTraining/StartTraining";
import Header from "../Header/Header";
import DayTemplate from "../CreateTraining/DayTemplate/DayTemplate";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Dashboard = () => {
  return (
    <Router>
        <section className={styles.wrapper}>
          <Header />
          <CreateTrainingBtn/>
          <StartTraining />
        </section>
    </Router>
  );
};

export default Dashboard;
