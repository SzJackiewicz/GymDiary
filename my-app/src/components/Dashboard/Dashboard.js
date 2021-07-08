import React from "react";
import styles from "..//Dashboard/Dashboard.module.scss";
import CreateTrainingBtn from "../CreateTraining/CreateTrainingBtn";
import StartTraining from "../StartTraining/StartTraining";
import Header from "../Header/Header";


const Dashboard = () => {
  return (
    <section className={styles.wrapper}>
      <Header />
      <div className={styles.tiles}>
        <CreateTrainingBtn />
        <StartTraining />
      </div>
    </section>
  );
};

export default Dashboard;
