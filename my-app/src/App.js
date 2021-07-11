import Dashboard from "./components/Dashboard/Dashboard";
import DayTemplate from "./components/CreateTraining/DayTemplate/DayTemplate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { homeURL } from "./AppRoutes";
import AppContext from "./context";
import React, {useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [excercise, setExcercise] = useState([]);
  //kolejne ćwiczenie = paragraf + OneLine
  const [excerciseName, setExcerciseName] = useState('');
  //nazwa z inputa
  const [dayWorkout, setDayWorkout] = useState([]);
  const [lineInput, setLineInput] = useState([])

    const handleChange = (e) => {
    setExcerciseName(e.target.value)
  }

  const deleteName = () =>{
    setExcercise(excercise.filter((el) => el.id !== el.id))
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
    excercise,
    setExcercise,
    excerciseName,
    setExcerciseName,
    handleChange,
    addExcercise,
    dayWorkout,
    setDayWorkout,
    saveDay,
    lineInput,
    setLineInput,
    deleteName

  }
  return (
    <BrowserRouter>
      <AppContext.Provider 
      value={contextElements}>
        <Switch>
          <Route exact path={homeURL}>
            <Dashboard />
          </Route>
          <DayTemplate deleteName={deleteName}/>
        </Switch>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
