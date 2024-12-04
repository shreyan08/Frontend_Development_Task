
import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to apply the class to the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <div className="header-section">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
           
            <li style={{'listStyleType':'none'}}><NavLink to="/" className="nav-link">
              Shreyan
            </NavLink></li>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/blog" className="nav-link">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/project" className="nav-link">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/newsletter" className="nav-link">
                    Newsletter
                  </NavLink>
                </li>
                <li>
                <button className="btn btn-theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
            
                </li>
              </ul>
            </div>
          
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;


