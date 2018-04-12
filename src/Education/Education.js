import React from "react";
import "./Education.css";
import ScrollableAnchor from "react-scrollable-anchor";

const Education = () => {
  return (
    <div id="education">
      <ScrollableAnchor id={"eduscroll"}>
        <h1>EDUCATION</h1>
      </ScrollableAnchor>
      <div id="myEdu">
        <a
          href="https://devmountain.com/web-bootcamp-immersive"
          target="_blank"
        >
          <h2>DevMountain</h2>
        </a>
        <img
          src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/820/s200/dev-mountain-logo.png"
          alt="DevMountain Logo"
        />
        <h3>Web Immersive Course</h3>
        <ul>
          <li>
            13 week full stack web development course completed in Dallas, Texas
          </li>
          <li>
            Built two personal projects from the front to back, plus
            participated in one large group project
          </li>
          <li>
            Course is designed to help students understand what full stack
            development is like using Javascript.
          </li>
        </ul>
        <a href="http://www2.ccsu.edu/" target="_blank">
          <h2>Central Connecticut State University</h2>
        </a>
        <img
          src="http://docs.ccsu.edu/logos/Logo-WordMark-Vertical.png"
          alt="CCSU Logo"
        />
        <h3>Bachelor's degree in Management Information Systems</h3>
        <ul>
          <li>Graduated in December 2016</li>
          <li>Made Dean's list for Winter 2016 semester</li>
          <li>
            Courses revolved around topics such as project management, project /
            project lifecycle, team projects, E-commerce, and more...
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
