import React from "react";
import logo2 from "../logo2.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="logo" src={logo2} alt="logo..." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars navbarsmenu"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <h2 className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </h2>
            </li>
            <li className="nav-item">
              <h2 className="nav-link" href="#">
                Link
              </h2>
            </li>
            <li className="nav-item">
              <h2 className="nav-link" href="#">
                aboutme
              </h2>
            </li>
            <li className="nav-item">
              <h2 className="nav-link" href="#">
                services
              </h2>
            </li>
            <li className="nav-item">
              <h2 className="nav-link" href="#">
                how work
              </h2>
            </li>
            <li className="nav-item">
              <h2 className="nav-link" href="#">
                portfolio
              </h2>
            </li>
            <li className="nav-item">
              <h2 className="nav-link" href="#">
                contacts
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
