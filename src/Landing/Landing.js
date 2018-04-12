import React from "react";
import "./Landing.css";
import ScrollableAnchor from "react-scrollable-anchor";

const Landing = () => {
  return (
    <div id="landingscroll">
      <div id="landing">
        <img
          src={require("/Users/administrator/sites/personalportfolio/src/Nav/ME Croped.jpg")}
          alt="HeadShot"
        />
        <h1>RYAN DANIELS</h1>
        <h2>
          Old Saybrook, CT 06475 <span style={{ color: "#45a29e" }}>|</span>{" "}
          (860)-575-8681
        </h2>
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
