import React, { useState } from "react";
import NavigationTabs from "./NavigationTabs";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";

export default function PortfolioInfo() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  // Displays the page that corresponds to the value of the currentPage.
  const displayPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "ContactMe") {
      return <ContactMe />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const changePage = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavigationTabs currentPage={currentPage} changePage={changePage} />
      {/* Displays the corresponding page  */}
      {displayPage()}
    </div>
  );
}
