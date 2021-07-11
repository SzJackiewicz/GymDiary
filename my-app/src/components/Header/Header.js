import React from "react";
import styles from '../Header/Header.module.scss';



const Header = () => {

  return (
      <div className={styles.wrapper}>
          <h1 className={styles.header}>Hi! Ready to sweat?</h1>
      </div>
  )
};

export default Header;