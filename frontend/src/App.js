import React from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Apartments from "./components/Apartments/Apartments";
import Slider from "./components/Slider/Slider";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Apartments />
      <Slider />
      <Contact />
    </div>
  );
};

export default App;
