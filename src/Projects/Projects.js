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
            <a href="http://159.89.50.175:3005/#/" target="_blank">
              <h2 style={{ fontSize: "2em", textDecoration: "underline" }}>
                Readium
              </h2>
            </a>
            <p>(Team Developed App)</p>
            <p>
              REACT | REDUX | NODE | EXPRESS | AUTH 0 | PostgreSQL | MOMENT |
              GIT
            </p>
            <h3 style={{ letterSpacing: "6px" }}>
              An online publishing platform heavily inspired by the social
              journalism site, Medium
            </h3>
            <ul>
              <li>
                Lead the creation of back-end (server) and structure of schema
                for the databases.
              </li>
              <li>
                React and Redux used on the front end for application state
                management
              </li>
              <li>
                Integrated Medium editor to allow users to format their articles
                in numerous ways and stored text formatted
              </li>
              <li>
                Used Firebase to allow users to upload images from their local
                computer to use as article thumbnail images
              </li>
            </ul>
          </div>
          <div className="right">
            <p>Apr. 2018</p>
            <a href="http://159.89.50.175:3005/#/" target="_blank">
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
            <p>(Personally Developed App)</p>
            <p>
              REACT | REDUX | NODE | EXPRESS | AUTH 0 | STRIPE | TWILIO |
              MATERIAL-UI
            </p>
            <h3 style={{ letterSpacing: "6px" }}>
              E-commerce website designed to sell sneakers
            </h3>
            <ul>
              <li>
                Full stack E-commerce website that allows a user to log into,
                shop, and checkout Air Jordan sneakers
              </li>
              <li>
                Integrated Auth0, with Node, to allow users to log in through
                their Google accounts
              </li>
              <li>
                Utilized REST API to communicate between my front-end and
                back-end
              </li>
              <li>
                Used React and Redux for front end components and application
                state management
              </li>
              <li>
                Used PostgreSQL to build, store, and manipulate data in a
                relational database
              </li>
              <li>
                Used Session to store user information and cart information
              </li>
              <li>
                Integrated Stripe and Twilio for checkout and messaging to make
                checkout process smooth for user
              </li>
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
