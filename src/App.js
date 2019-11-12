import React from "react";
// import "./App.css";
import Login from "./Components/Login";
import "./App.css";
import Signup from "./Components/Signup";
import { Link } from "react-router-dom";
import Welcome from "./Components/Welcome";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Login} />
        <Route exact path="/welcome" component={Welcome} />
      </div>
    </Router>
  );
}

export default App;
