import Dashboard from "./components/Dashboard/Dashboard";
import DayTemplate from "./components/CreateTraining/DayTemplate/DayTemplate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { homeURL } from "./AppRoutes";
import AppContext from "./context";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

function App() {
  const [weightState, setWeight] = useState('')
  const [repsState, setReps] = useState('')
  const [dayWorkout, setDayWorkout] = useState([]);
  //tu ma być zapisywany cały dzień(?)
  const [excerciseName, setExcerciseName] = useState("");
  const [excercises, setExcercises] = useState([]);

  const addExcercise = (e) => {
    e.preventDefault();
    if (excerciseName !== "") {
      const newExcercise = {
        id: uuidv4(),
        text: excerciseName,

        series: [
          {
            id: uuidv4(),
            name: "",
            reps: "",
            weight: "",
            line:"1"
          },
        ],
      };
      setExcercises((prev) => [...prev, newExcercise] );
      setExcerciseName('')

    } else {
      alert("podaj nazwę ćwiczenia!");
    }
  };
 
  // const dupa = _.findIndex(excercises, (el, series) => el.series === el.series.length > 0)
  // console.log(dupa);

  const addSeries = (id) => {
    const excerciseToUpdate = excercises.find((el) => el.id === id);
    const updatedExcercises = {
      ...excerciseToUpdate,
         series: [
        ...excerciseToUpdate.series,
        {
          id: uuidv4(),
          name: "",
          reps: "",
          weight: "",
        }]
    }
    const serchedIndex = _.findIndex(excercises,(el) => el.id === id)

    setExcercises((prev)=>{
       prev.splice(serchedIndex,1,updatedExcercises)
       return [...prev]
    })
  }
  
  const removeSeries = (id, seriesID, excercises) => {
    const excerciseToChange = excercises.find((el) => el.id === id);
    const seriesArray = excerciseToChange.series;
    const seriesToRemoveIndex = _.findIndex(seriesArray,(el) => el.id === seriesID)
   

    setExcercises(()=>{
      seriesArray.splice(seriesToRemoveIndex,1)
      const notEmptyExcercises = excercises.filter((el) => el.series === el.series.length > 0)
      if(seriesArray.length > 0){
        return [...excercises]
      } else {
        return [...notEmptyExcercises]
      }
    }
    )
  }

const repsChange = (e) =>{
  setReps(e.target.value)
}

  const weightChange = (e) =>{
    setWeight(e.target.value)
  }

  const handleChange = (e) => {
    setExcerciseName(e.target.value);
  };

  const saveDay = (e) => {
    e.preventDefault();
    let random = uuidv4();
    setDayWorkout([
      ...dayWorkout,
      {
        id: random,
        name: dayWorkout.length,
      },
    ]);
  };

  useEffect(()=>{
    getLocalWorkout()
  },[]);

  useEffect(()=>{
    saveLocalWorkout()
  },[excercises])

  const saveLocalWorkout = () =>{
    localStorage.setItem('excercises', JSON.stringify(excercises));
  };

  const getLocalWorkout = () => {
    if (localStorage.getItem('excercises') === null){
      localStorage.setItem('excercises', JSON.stringify([]));
    } else {
      let workoutLocal = JSON.parse(localStorage.getItem('excercises'));
      setExcercises(workoutLocal);
    } 
  };

  const contextElements = {
    excercises,
    setExcercises,
    excerciseName,
    setExcerciseName,
    handleChange,
    addExcercise,
    dayWorkout,
    setDayWorkout,
    saveDay,
    addSeries,
    removeSeries,
    repsChange,
    weightChange,
    repsState,
    weightState

  };

  return (
    <BrowserRouter>
      <AppContext.Provider value={contextElements}>
        <Switch>
          <Route exact path={homeURL}>
            <Dashboard />
          </Route>
          <DayTemplate saveDay={saveDay} excercises={excercises} addExcercise={addExcercise} removeSeries={removeSeries} />
        </Switch>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
