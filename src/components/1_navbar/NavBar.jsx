import React from "react";

export const NavBar = () => {
  return (
    <div className="col-xxl-12">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div className="container">
          <a href="/" className="navbar-brand ">
            <i className="bi bi-building"></i> Portfolio-Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#Subscribe" className="nav-link">
                    About me
                </a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link">
                  Questions
                </a>
              </li>
              <li className="nav-item">
                <a href="#instructors" className="nav-link">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
