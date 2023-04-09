import React from "react";
import Header from "./components/Header";
import PortfolioInfo from "./components/PortfolioInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="entire-page">
      <div id="page-wrapper">
        <Header />
        <PortfolioInfo />
      </div>
      <Footer />
    </div>
  );
}

export default App;
