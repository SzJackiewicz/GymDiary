import Dashboard from "./components/Dashboard/Dashboard";
import DayTemplate from "./components/CreateTraining/DayTemplate/DayTemplate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { homeURL } from "./AppRoutes";
import AppContext from "./context";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";


function App() {
  const [dayWorkout, setDayWorkout] = useState([]);
  const [excerciseName, setExcerciseName] = useState("");
  const [excercises, setExcercises] = useState([]);
  const [oneLineInputs, setOneLineInputs] = useState([{
    weight:'',
    reps:''
  }])
  

  const addExcercise = (e) => {
    e.preventDefault();
    if (excerciseName !== "") {
      const newExcercise = {
        id: uuidv4(),
        text: excerciseName,
        series: [
          {
            id: uuidv4(),
            name: '',
            reps: '',
            weight: '',
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

  
  const addSeries = (id) => {
    const excerciseToUpdate = excercises.find((el) => el.id === id);
    const updatedExcercises = {
      ...excerciseToUpdate,
      series: [
        ...excerciseToUpdate.series,
        {
          id: uuidv4(),
          name: "",
          reps: oneLineInputs.reps,
          weight: oneLineInputs.weight,
          line:"1"
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
      const notEmptyExcercises = excercises.filter((el) => el.series.length > 0)
        if(seriesArray.length > 0){
          return [...excercises]
        } else {
          return [...notEmptyExcercises]
        }
    })
  }

const oneLineChange = (e) =>{
  setOneLineInputs({
    ...oneLineInputs,
    [e.target.name]:e.target.value
  })
}

const handleChange = (e) => {
  setExcerciseName(e.target.value);
};

  const saveDay = (e) => {
    e.preventDefault();
    console.log("dupa")
    setDayWorkout([
      ...dayWorkout,
      {
        id: uuidv4(),
        name: dayWorkout.length,
      },
    ]);
  };

  useEffect(()=>{
    getLocalWorkout()
    getInputsValues()
  },[]);

  useEffect(()=>{
    saveLocalWorkout()
    saveInputsValues()

  },[excercises])


  //Local Storage Functions
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

const saveInputsValues = () =>{
  localStorage.setItem('oneLineInputs', JSON.stringify(oneLineInputs));
}

const getInputsValues = () =>{
  if (localStorage.getItem('oneLineInputs') === null){
    localStorage.setItem('oneLineInputs', JSON.stringify([]));
  } else {
    let inputsLocal = JSON.parse(localStorage.getItem('oneLineInputs'));
    setOneLineInputs(inputsLocal);
  } 
}




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
    oneLineChange,
    oneLineInputs,
  };

  return (
    <BrowserRouter>
      <AppContext.Provider value={contextElements}>
        <Switch>
          <Route exact path={homeURL}>
            <Dashboard />
          </Route>
          <DayTemplate />
        </Switch>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

// oneLineInputs={oneLineInputs} saveDay={saveDay} excercises={excercises} addExcercise={addExcercise} removeSeries={removeSeries} 
export default App;
