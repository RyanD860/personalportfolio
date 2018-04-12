import React from "react";
import "./SkillsNIntrests.css";
import ScrollableAnchor from "react-scrollable-anchor";

const Skills = () => {
  return (
    <div id="skills">
      <ScrollableAnchor id={"tech"}>
        <h1>TECH AND INTERESTS</h1>
      </ScrollableAnchor>
      <div id="mytai">
        <div className="techflex">
          <h2>Tech</h2>
          <div className="listTI">
            <i
              className="ic"
              class="fab fa-react"
              style={{ fontSize: "4em", padding: "10px 10px 10px 10px" }}
            />
            <i
              className="ic"
              class="fab fa-js-square"
              style={{ fontSize: "4em", padding: "10px 10px 10px 10px" }}
            />
            <i
              className="ic"
              class="fab fa-html5"
              style={{ fontSize: "4em", padding: "10px 10px 10px 10px" }}
            />
            <i
              className="ic"
              class="fab fa-css3-alt"
              style={{ fontSize: "4em", padding: "10px 10px 10px 10px" }}
            />
            <i
              className="ic"
              class="fab fa-node"
              style={{ fontSize: "4em", padding: "10px 10px 10px 10px" }}
            />
            <i
              className="ic"
              class="fab fa-npm"
              style={{ fontSize: "4em", padding: "10px 10px 10px 10px" }}
            />
            <i
              className="ic"
              class="fas fa-database"
              style={{ fontSize: "4em", padding: "10px 10px 10px 10px" }}
            />
            <i
              className="ic"
              class="fab fa-github-square"
              style={{ fontSize: "4em", padding: "10px 10px 10px 10px" }}
            />
          </div>
        </div>
        <div className="techflex">
          <h2> Interests</h2>
          <div className="listTI">
            <i
              class="fas fa-gamepad"
              style={{ fontSize: "4em", padding: "10px 10px 10px 10px" }}
            />

            <i
              class="fas fa-golf-ball"
              style={{ fontSize: "4em", padding: "10px 10px 10px 10px" }}
            />
            <i
              class="fas fa-football-ball"
              style={{ fontSize: "4em", padding: "10px 10px 10px 10px" }}
            />
            <i
              class="fas fa-basketball-ball"
              style={{ fontSize: "4em", padding: "10px 10px 10px 10px" }}
            />
            <i
              class="fas fa-table-tennis"
              style={{ fontSize: "4em", padding: "10px 10px 10px 10px" }}
            />
            <i
              class="fas fa-tv"
              style={{ fontSize: "4em", padding: "10px 10px 10px 10px" }}
            />
            <i
              class="fas fa-headphones"
              style={{ fontSize: "4em", padding: "10px 10px 10px 10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
