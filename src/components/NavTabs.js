import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/foundation.css";
import "../styles/app.css";

function NavTabs() {

  const location = useLocation();

  return (
    <div>
      <div>
        <div>
          <nav className="top-bar topbar-responsive">
            <div className="top-bar-title">
              <a className="topbar-responsive-logo" href="#"><strong>
                <h3>Portfolio</h3>
              </strong></a>
            </div>
            <div id="topbar-responsive" className="topbar-responsive-links">
              <div className="top-bar-right">
                <ul className="menu simple vertical medium-horizontal">
                  <li><Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}><button type="button" className="button hollow topbar-responsive-button">Home</button>
                  </Link>
                  </li>
                  <li><Link
                    to="/about"
                    className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                  ><button type="button" className="button hollow topbar-responsive-button">About Me</button>
                  </Link>
                  </li>
                  <li><Link
                    to="/resume"
                    className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}
                  ><button type="button" className="button hollow topbar-responsive-button">Resume</button>
                  </Link>
                  </li>
                  <li><Link
                    to="projects"
                    className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                  ><button type="button" className="button hollow topbar-responsive-button">Projects</button>
                  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;
