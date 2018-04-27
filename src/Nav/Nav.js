import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div id="navigation">
      <label for="toggle">Menu &#9776;</label>
      <input type="checkbox" id="toggle" />
      <div id="nav">
        <a href="#landingscroll">
          {" "}
          <img src={require("./ME Croped.jpg")} alt="HeadShot" />
        </a>
        <a className="navlink" href="#proj">
          PROJECTS
        </a>
        <a className="navlink" href="#eduscroll">
          EDUCATION
        </a>
        <a className="navlink" href="#tech">
          TECH AND INTERESTS
        </a>
        <a
          className="navlink"
          href="https://drive.google.com/file/d/1_yC8Dvr0wq7MckAIIHHyD2Y51_6-QNg9/view"
          target="_blank"
        >
          RESUME
        </a>
      </div>
    </div>
  );
};

export default Nav;
