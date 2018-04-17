import React from "react";
import "./Projects.css";
import ScrollableAnchor from "react-scrollable-anchor";

const Projects = () => {
  return (
    <div id="projectss">
      <ScrollableAnchor id={"proj"}>
        <h1>PROJECTS</h1>
      </ScrollableAnchor>
      <div id="myprojs">
        <div className="thisproj">
          <div className="left">
            <a href="http://www.weselljs.club" target="_blank">
              <h2 style={{ fontSize: "2em", textDecoration: "underline" }}>
                Readium
              </h2>
            </a>
            <p>(Group Project)</p>
            <h3 style={{ letterSpacing: "6px" }}>
              An online publishing platform heavily inspired by the social
              journalism site, Medium
            </h3>
            <ul>
              <li>
                Integrated Redux, along with React, to create a fluid user
                experience{" "}
              </li>
              <li>
                Used Git as a group to manage the versions of our project and
                increase workflow
              </li>
              <li>
                Users can upload and peruse articles in a seamless fashion
              </li>
              <li>
                Users have the ability to follow other users, create a reading
                list, among other features
              </li>
            </ul>
          </div>
          <div className="right">
            <p>Apr. 2018</p>
            <a href="http://www.weselljs.club" target="_blank">
              <img
                src={require("./Screen Shot 2018-04-12 at 10.00.38 PM.png")}
                alt="We Sell J'"
              />
            </a>
          </div>
        </div>
        <div className="thisproj">
          <div className="left">
            <a href="http://www.weselljs.club" target="_blank">
              <h2 style={{ fontSize: "2em", textDecoration: "underline" }}>
                WE SELL J's
              </h2>
            </a>
            <p>(Personal Project)</p>
            <h3 style={{ letterSpacing: "6px" }}>
              E-commerce website designed to sell sneakers
            </h3>
            <ul>
              <li>Built website from ground up (Front-end + Back-end)</li>
              <li>
                Taught myself and then implemented Stripe, Twilio, and Material
                UI
              </li>
              <li>Completed in three weeks</li>
            </ul>
          </div>
          <div className="right">
            <p>Feb. 2018</p>
            <a href="http://www.weselljs.club" target="_blank">
              <img
                src={require("./Screen Shot 2018-03-28 at 9.26.56 PM.png")}
                alt="We Sell J'"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
