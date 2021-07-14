import React from "react";
import styles from "..//Dashboard/Dashboard.module.scss";
import CreateTrainingBtn from "../CreateTraining/CreateTrainingBtn";
import StartTraining from "../StartTraining/StartTraining";
import Header from "../Header/Header";
import AppContext from "../../context";

const Dashboard = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <section className={styles.wrapper}>
          <Header />
          <div className={styles.tiles}>
            <CreateTrainingBtn />
            {context.dayWorkout.map((item) => (
              <StartTraining key={item.id} name={item.name} />
            ))}
          </div>
        </section>
      )}
    </AppContext.Consumer>
  );
};

export default Dashboard;
