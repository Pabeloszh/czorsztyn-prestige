import React from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Apartments from "./components/Apartments/Apartments";

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Apartments />
    </div>
  );
};

export default App;
