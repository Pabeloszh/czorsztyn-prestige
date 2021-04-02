import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomepageWrapper from "./components/HomepageWrapper/HomepageWrapper";
import GalleryWrapper from "./components/GalleryWrapper/GalleryWraper";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <HomepageWrapper />
          </Route>
          <Route path='/gallery'>
            <GalleryWrapper />
          </Route>
        </Switch>
        <Contact />
      </Router>
    </>
  );
};

export default App;
