import Dashboard from "./components/Dashboard/Dashboard";
import DayTemplate from "./components/CreateTraining/DayTemplate/DayTemplate";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import {homeURL, testURL } from "./AppRoutes";

function App() {
  return (
          <BrowserRouter>
          <Switch>
          <Route exact path={homeURL} >
          <Dashboard />
          </Route>
          <DayTemplate/>
          </Switch>
          </BrowserRouter>
  );
}

export default App;
