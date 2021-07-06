import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Dashboard />
    </Router>
  );
}

export default App;
