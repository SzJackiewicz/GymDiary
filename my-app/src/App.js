import Dashboard from "./components/Dashboard/Dashboard";
import DayTemplate from "./components/CreateTraining/DayTemplate/DayTemplate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { homeURL } from "./AppRoutes";
import AppContext from "./context";
import React, {useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [excercises, setExcercises] = useState([{
    id: uuidv4(), 
    name:"nazwa",
    //todo zmienić na serie z reps
    //prio na dziś dodawanie całego obiektu

    reps:[{
      id:uuidv4(), 
      name:"10",
      reps:"11",
      weight:"12"
    }
      ]
  }]);


  const [excerciseName, setExcerciseName] = useState('');
  //nazwa z inputa
  const [dayWorkout, setDayWorkout] = useState([]);
  //tu ma być zapisywany cały dzień(?)
  const [lineInput, setLineInput] = useState([])
  const [newLine, setNewLine] = useState([]);
  const [reps, setReps] = useState('');

  let randomId =  uuidv4();

  const addLine = (excerciseId) => {
    // setNewLine([...newLine, newLine]);
    // setExcercises((prev) => {
    // const excerciseToUpdate = prev.filter(el => el.id === excerciseId)  
    // excerciseToUpdate.reps = [...excerciseToUpdate.reps, {
    //   id: uuidv4(),
    //   name: ''
    // }] 
    // return [...prev]
    // })
  };

  const removeLine = () => {
    setNewLine(newLine.filter((el) => el.id !== el.key));
    deleteName()
  };

    const handleChange = (e) => {
    setExcerciseName(e.target.value)
  }

  const deleteName = () =>{
    setExcercises(excercises.filter((el) => el.id !== el.id))
  }
    
  const addExcercise = (e) => {
    if (excerciseName === ""){
      e.preventDefault();
      alert("Set excercise name!");
    } else {
      e.preventDefault();
      let random = uuidv4()
         setExcercise([...excercise,{
        id:random,
        text:excerciseName,
        }]);
      setExcerciseName("");
    }
  };
 
  const saveDay = (e) =>{
    e.preventDefault();
    let random = uuidv4()
    setDayWorkout([...dayWorkout,{
      id:random,
      name: dayWorkout.length,
    }])
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
    lineInput,
    setLineInput,
    deleteName,
    removeLine,
    newLine,
    reps,
    setReps,
    addLine,
    randomId,
  }

  return (
    <BrowserRouter>
      <AppContext.Provider 
      value={contextElements}>
        <Switch>
          <Route exact path={homeURL}>
            <Dashboard />
          </Route>
          <DayTemplate/>
        </Switch>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
