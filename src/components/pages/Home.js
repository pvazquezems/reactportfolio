import React from "react";
import Footer from "./Footer"

function Home() {
  return (
    <div>

      <div className="hero-full-screen">
        <div className="top-content-section">
          <div className="top-bar">
            <div className="top-bar-left">
            </div>
          </div>
        </div>
        <div className="middle-content-section">
          <h1>Pablo Vazquez</h1>
          <a href="https://www.linkedin.com/in/pablo-vazquez-17100b147/"><button className="button large">Linkedin</button></a>
          <br></br>
          <a href="https://www.facebook.com/pablo.vazquez.5811"><button className="button large">Facebook</button></a>
        </div>
        <div className="bottom-content-section" data-magellan data-threshold="0">
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
