import React, { useState } from "react";
import OneLine from "./OneLine";
import { SiAddthis } from "react-icons/si";
import styles from "./SingleExcercise.module.scss";
import AppContext from "../../../../context";
import { v4 as uuidv4 } from 'uuid';



const SingleExcercise = ({text}) => {
  const [newLine, setNewLine] = useState([])

  const addLine = () =>{
    let random = uuidv4()
    setNewLine( [...newLine,{
      id: random,
    }])
  }
 
  const removeLine = (e) =>{
    setNewLine(newLine.filter(el=> el.id !== el.id))
  }

  return (
    <AppContext.Consumer>
      {(context) => (
        <div className={styles.wrapper}>
          <p>{text}</p>
          {/* {context.namesArray.map((item) => <p>{context.namesArray[context.counter]}</p>)} */}
          {newLine.map(item=> <OneLine removeLine={removeLine} key={newLine.id}/>)}
          <button onClick={addLine} className={styles.oneMore}>
            <SiAddthis className={styles.icon} />
          </button>
                </div>
      )}
    </AppContext.Consumer>
  );
};

export default SingleExcercise;
