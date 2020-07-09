import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import HallOfFame from "./components/halloffame.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" component={Home} />
        <Route path="/halloffame" component={HallOfFame} />
      </div>
    </Router>
  );
}

export default App;
