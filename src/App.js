import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Landing from "./Landing/Landing";
import Projects from "./Projects/Projects";
import Education from "./Education/Education";
import Skills from "./SkillsNIntrests/SkillsNIntrests";
import { configureAnchors } from "react-scrollable-anchor";

class App extends Component {
  render() {
    configureAnchors({ offset: -60, scrollDuration: 900 });
    return (
      <div className="App">
        <Nav />
        <Landing />
        <Projects />
        <Education />
        <Skills />
      </div>
    );
  }
}

export default App;
