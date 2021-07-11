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
  const [namesArray, setNamesArray]= useState([])
  //tablica z nazwami zaciągniętymi z inputa, po kliknięciu add
  const [counter, setCounter] = useState(0)  ;


  //wartość inputa
  const handleChange = (e) => {
    setExcerciseName(e.target.value)
  }
    
  const addExcercise = (e) => {
    e.preventDefault();
    let random = uuidv4()
    setNamesArray([...namesArray, excerciseName])
    setExcercise([...excercise,{
      id:random,
      text:excerciseName
    }]);
    console.log(excercise);
    setCounter(counter+1);
    setExcerciseName("");
  };
  


  const contextElements = {
    excercise,
    setExcercise,
    excerciseName,
    setExcerciseName,
    namesArray,
    setNamesArray,
    handleChange,
    addExcercise,
    counter

  }
  return (
    <BrowserRouter>
      <AppContext.Provider 
      value={contextElements}>
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

export default App;
