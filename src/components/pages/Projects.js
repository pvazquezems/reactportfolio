// HERE WE IMPORT ALL OF OUR DEPENDENCIES INCLUDING OUR FILES. 
import React from "react";
import Footer from "./Footer"
import cleansafe from "./images/cleansafe.png";
import password from "./images/password.png";
import planner from "./images/planner.png";
import quiz from "./images/quiz.png";
import weather from "./images/weather.png";
import directory from "./images/directory.png";

function Projects() {
  return (
    <div>

      <div className="grid-container align-center-middle text-center">
        <div className="grid-x grid-margin-x small-up-1 medium-up-3">
          <div className="card" style={{ width: "300px", margin: "15px" }}>
            <div className="card-divider" id="one">
              <a href="http://www.cleansafemaintenance.com/index.html">www.cleansafemaintenance.com</a>
            </div>
            <img src={cleansafe} alt="people cleaning"></img>
            <div className="card-section">
              <h4>Custom Business Site</h4>
              <p>Technologies Used<ul>
                <li>HTML5</li>
                <li>FoundationCSS</li>
                <li>Javascript ES6</li>
                <li>AJAX/JSON</li>
                <li>Google maps API</li>
              </ul> GitHub Repository: <a href="https://github.com/MikelTafalla/CleanSafeMaintenance"> Click Here </a></p>
            </div>
          </div>
          <div className="card" style={{ width: "300px", margin: "15px" }}>
            <div className="card-divider" id="two">
              <a href="https://pvazquezems.github.io/weatherdashboard/"> github.io/weatherdashboard </a>
            </div>
            <img src={weather} alt="weather"></img>
            <div className="card-section">
              <h4>Weather Forecast API</h4>
              <p>Technologies Used<ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript ES6</li>
                <li>AJAX/JSON</li>
                <li>Express.js</li>
              </ul> GitHub Repository: <a href="https://github.com/pvazquezems/weatherdashboard"> Click Here</a></p>
            </div>
          </div>
          <div className="card" style={{ width: "300px", margin: "15px" }}>
            <div className="card-divider" id="one">
              <a href="https://pvazquezems.github.io/dayplanner/">github.io/dayplanner</a>
            </div>
            <img src={planner} alt="planner"></img>
            <div className="card-section">
              <h4>Personal Note Planner</h4>
              <p>Technologies Used <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript ES6</li>
                <li>JQuery</li>
                <li>Local Storage</li>
              </ul> GitHub Repository: <a href="https://github.com/pvazquezems/dayplanner"> Click Here</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-container align-center-middle text-center">
        <div className="grid-x grid-margin-x small-up-1 medium-up-3">
          <div className="card" style={{ width: "300px", margin: "15px" }}>
            <div className="card-divider" id="two" >
              <a href="https://pvazquezems.github.io/generate_password/"> github.io/generate_password</a>
            </div>
            <img src={password} alt="password"></img>
            <div className="card-section">
              <h4>Password Generator</h4>
              <p>Technologies Used <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript ES6</li>
              </ul> GitHub Repository: <a href="https://github.com/pvazquezems/generate_password"> Click Here</a></p>
            </div>
          </div>
          <div className="card" style={{ width: "300px", margin: "15px" }}>
            <div className="card-divider" id="one">
              <a href="https://pvazquezems.github.io/codequiz/">github.io/codequiz</a>
            </div>
            <img src={quiz} alt="quiz"></img>
            <div className="card-section">
              <h4>Quiz Application</h4>
              <p>Technologies Used <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript ES6</li>
              </ul> GitHub Repository: <a href="https://github.com/pvazquezems/codequiz"> Click Here</a></p>
            </div>
          </div>
          <div className="card" style={{ width: "300px", margin: "15px" }}>
            <div className="card-divider" id="two" >
              <a href="https://heuristic-wescoff-e18364.netlify.app/">heuristic-wescoff-e18364.netlify.app</a>
            </div>
            <img src={directory} alt="directory"></img>
            <div className="card-section">
              <h4>React Employee Directory</h4>
              <p>Technologies Used <ul>
                <li>REACT.js</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul> GitHub Repository: <a href="https://github.com/pvazquezems/reactDirectory"> Click Here</a></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
