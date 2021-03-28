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
import GalleryModal from "./components/Gallery/GalleryModal/GalleryModal";
import { ApartmentsModalContext } from "./context/ApartmentsModalContext";
import { GalleryModalContext } from "./context/GalleryModalContext";
import { MainDataContext } from "./context/MainDataContext";

const App = () => {
  const [modal, toggleModal] = useContext(ApartmentsModalContext);
  const [galModal, toggleGalModal] = useContext(GalleryModalContext);
  const [data, setData] = useContext(MainDataContext);

  useEffect(() => {
    (async () => {
      const res = await API.getAll();
      setData(res.data);
    })();
  }, []);

  return (
    <>
      {data ? (
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <MainContent />
              <Apartments />
              <Slider />
              {modal.isToggle && <ApartmentsModal />}
            </Route>
            <Route path='/gallery'>
              <Gallery />
              {galModal.isToggle && <GalleryModal />}
            </Route>
          </Switch>
          <Contact />
        </Router>
      ) : (
        <div>CHUJ</div>
      )}
    </>
  );
};

export default App;
