import React from "react";
import "./Landing.css";
import ScrollableAnchor from "react-scrollable-anchor";

const Landing = () => {
  return (
    <div id="landingscroll">
      <div id="landing">
        <img src={require("./ME Croped.jpg")} alt="HeadShot" />
        <h1>RYAN DANIELS</h1>
        <h2>(860)-575-8681 | rydaniels@comcast.net</h2>
        <div id="landinglinks">
          <a href="https://github.com/RyanD860" target="_blank">
            <i class="fab fa-github" style={{ fontSize: "4em" }} />
          </a>
          <a href="https://www.linkedin.com/in/ryan-daniels93/" target="_blank">
            <i class="fab fa-linkedin" style={{ fontSize: "4em" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
