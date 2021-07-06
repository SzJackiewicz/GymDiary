import React from "react"
import style from "./WorkoutInput.module.scss"

const WorkoutInput = () => {
  return (
    <form>
      <input type="text" placeholder="excercise"/>
      <button type="submit">ADD</button>
    </form>
  )
};

export default WorkoutInput;
