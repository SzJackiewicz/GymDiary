import Dashboard from "./components/Dashboard/Dashboard";
import DayTemplate from "./components/CreateTraining/DayTemplate/DayTemplate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { homeURL } from "./AppRoutes";
import AppContext from "./context";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
// import OneLine from "./components/CreateTraining/NewWorkout/SingleExcercise/OneLine";

function App() {
  const [dayWorkout, setDayWorkout] = useState([]);
  //tu ma być zapisywany cały dzień(?)
  const [excerciseName, setExcerciseName] = useState("");
  //nazwa z inputa
  // const [lines, setLines] = useState([])
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
          },
        ],
      };
      setExcercises((prev) => [...prev, newExcercise] );

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
          reps: "",
          weight: "",
        }]
    }
    const serchedIndex = _.findIndex(excercises,(el) => el.id === id)

    setExcercises((prev)=>{
       prev.splice(serchedIndex,1,updatedExcercises)
       return [...prev]
    })
    //indeks szukanego elementu excerciseToUpdate
    //ile mam wymienić
    //dodać nową wartość: updatedExcercises
  }
  
  const removeSeries = (id) => {
    const excerciseToChange = excercises.find((el) => el.id === id);
    //kliknięte ćwiczenie
    const seriesArray = excerciseToChange.series;
    //tablica serii
    const seriesToRemoveID = seriesArray[0].id
    //id pierwszego elementu z tablicy
    
  const seriesToRemoveIndex = _.findIndex(seriesArray,(el) => el.id === id)

    console.log(excerciseToChange) // działa
    console.log(seriesArray); //działa
    console.log(seriesToRemoveID); //jak podam indeks "z ręki" znajduje
    console.log(seriesToRemoveIndex); //zawsze wyskakuje -1
    console.log(id)
  
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
    removeSeries
  };

  return (
    <BrowserRouter>
      <AppContext.Provider value={contextElements}>
        <Switch>
          <Route exact path={homeURL}>
            <Dashboard />
          </Route>
          <DayTemplate excercises={excercises} addExcercise={addExcercise} removeSeries={removeSeries} />
        </Switch>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
