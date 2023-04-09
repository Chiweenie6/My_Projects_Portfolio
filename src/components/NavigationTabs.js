import React from "react";

// Variables from the props object
// We assign them to their own variable names
function NavigationTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#AboutMe"
          onClick={() => handlePageChange("AboutMe")}
          // Ternary operator that checks if the current page is "AboutMe", if it is, the current page will be 'nav-link-active', otherwise it will be 'nav-link'
          className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
        >
          AboutMe
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange("Portfolio")}
          // If the currentPage is `Portfolio`, the active link class from bootstrap is applied, if not, nav-link is applied.
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#ContactMe"
          onClick={() => handlePageChange("ContactMe")}
          // If the currentPage is `ContactMe`, the active link class from bootstrap is applied, if not, nav-link is applied.
          className={
            currentPage === "ContactMe" ? "nav-link active" : "nav-link"
          }
        >
          ContactMe
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange("Resume")}
          // If the currentPage is `Resume`, the active link class from bootstrap is applied, if not, nav-link is applied.
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavigationTabs;
