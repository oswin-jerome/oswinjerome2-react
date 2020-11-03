import React, { useEffect } from "react";
import "./App.scss";
import NavBar from "./Layouts/NavBar/NavBar";
import HomePage from "./Pages/Home/HomePage";
import Footer from "./Layouts/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./Pages/Projects/Project";
import Clicks from "./Pages/Clicks/Clicks";
import Achievements from "./Pages/Acchivements/Achievements";
function App() {

  

  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <div className="vh100">
          <Switch>
            <Route path="/clicks">
              <Clicks></Clicks>
            </Route>
            <Route path="/achievements">
              <Achievements></Achievements>
            </Route>
            <Route path="/projects">
              <Projects></Projects>
            </Route>
            <Route path="/">
              <HomePage></HomePage>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
