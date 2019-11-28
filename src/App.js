import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ModalButton from "./Components/Common/ModalButton";
import Login from "./Components/Login";
import "./App.css";
import Signup from "./Components/Signup";
import Welcome from "./Components/Welcome";
import RecruiterPage from "./Components/Common/RecriterPage";
import ShowRecommendations from "./Components/Common/ShowRecommendations";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Login} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/recruiter" component={RecruiterPage} />
        <Route exact path="/recommendations" component={ShowRecommendations} />
      </Router>
    </div>
  );
}

export default App;
