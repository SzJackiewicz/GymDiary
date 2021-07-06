import React, { Component } from "react";
import styles from "..//Dashboard/Dashboard.module.scss";
import CreateTraining from "../CreateTraining/CreateTraining";
import StartTraining from "../StartTraining/StartTraining";
import Header from "../Header/Header";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <CreateTraining />
      <StartTraining />
    </div>
  );
};

export default Dashboard;
