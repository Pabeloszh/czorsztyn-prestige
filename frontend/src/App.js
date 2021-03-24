import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import API from "./utils/API";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Apartments from "./components/Apartments/Apartments";
import Slider from "./components/Slider/Slider";
import Contact from "./components/Contact/Contact";
import ApartmentsModal from "./components/Apartments/ApartmentsModal/ApartmentsModal";
import Gallery from "./components/Gallery/Gallery";
import { ApartmentsModalContext } from "./context/ApartmentsModalContext";

const App = () => {
  const [modal, toggleModal] = useContext(ApartmentsModalContext);

  useEffect(() => {
    (async () => {
      const res = await API.getAll();
      console.log(res);
    })();
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainContent />
          <Apartments />
          <Slider />
          {modal && <ApartmentsModal />}
        </Route>
        <Route path='/gallery'>
          <Gallery />
        </Route>
      </Switch>
      <Contact />
    </Router>
  );
};

export default App;
