import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div id="navigation">
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
          href="mailto:rydaniels@comcast.net?Subject=Hi%20Ryan!%20I'm%20Here%20from%20your%20portfolio!"
          target="_top"
        >
          CONTACT
        </a>
        <a
          className="navlink"
          href="https://drive.google.com/file/d/1rCZF_aeLQTatkT98Kz9K9_0TyABht10L/view?ths=true"
          target="_blank"
        >
          RESUME
        </a>
      </div>
    </div>
  );
};

export default Nav;