import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/index";
import Header from "./components/header/index";
import About from "./components/about";
import Resume from "./components/resume/index";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/project" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
