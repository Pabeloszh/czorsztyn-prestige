import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import API from "../../../../API/API";
import { MainDataContext } from "../../../../context/MainDataContext";
import { ApartmentsContext } from "../../../../context/ApartmentsContext";
import { ApartmentsMainContainer } from "./ApartmentsMain.style";

const Apartments = () => {
  const [data, setData] = useContext(MainDataContext);
  const [apartment, toggleApartment] = useContext(ApartmentsContext);
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [prevWinWidth, setPrevWinWidth] = useState(window.innerWidth);

  useEffect(() => {
    (async () => {
      const res = await API.getAll();
      setData(res.data);
    })();
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (winWidth !== prevWinWidth) {
      document.querySelector(".container-slide").style.transition =
        "transform 0.4s ease-in-out";
      document.querySelector(
        ".container-slide"
      ).style.transform = `translateX(0px)`;
      setPrevWinWidth(winWidth);
    }
  }, [winWidth]);

  useEffect(() => {
    if (document.querySelector(".container-slide") && location.pathname !== "/")
      window.removeEventListener("resize", () =>
        setWinWidth(window.innerWidth)
      );
    else
      window.addEventListener(
        "resize",
        () => setWinWidth(window.innerWidth),
        false
      );
  }, []);

  function toggleDesc(cond) {
    toggleApartment(cond);
    document.querySelector(".container-slide").style.transition =
      "transform 0.4s ease-in-out";
    document.querySelector(
      ".container-slide"
    ).style.transform = `translateX(${-document.querySelector(
      ".container-slide"
    ).clientWidth}px)`;
  }

  return (
    <ApartmentsMainContainer
      ap1main={
        data.find((obj) => {
          if (obj.placement === "ap1main") return obj;
        }).pic
      }
      ap2main={
        data.find((obj) => {
          if (obj.placement === "ap2main") return obj;
        }).pic
      }
      ap1hover={
        data.find((obj) => {
          if (obj.placement === "ap1hover") return obj;
        }).pic
      }
      ap2hover={
        data.find((obj) => {
          if (obj.placement === "ap2hover") return obj;
        }).pic
      }
    >
      <div className='title'>
        <hr />
        <h3>NASZE APARTAMENTY</h3>
        <hr />
      </div>
      <hr className='mid-hr' />
      <div className='container'>
        <div className='apartm-container'>
          <div className='data-box'>
            <div className='ap-title'>
              <hr />
              <h4>Stychlyn 112/1</h4>
            </div>
            <div className='icons'>
              <p>
                6<i className='fas fa-user'></i>
              </p>
              <p>
                2<i className='fas fa-toilet'></i>
              </p>
            </div>
          </div>
          <div className='info-box'>
            <div className='ap-title'>
              <hr />
              <h4>Stychlyn 112/1</h4>
            </div>
            <p>
              Apartament z dwoma oddzielnymi sypialniami, salonem, sauną,
              tarasem i ogrodem. Posiada aneks kuchenny oraz dwie łazienki.
              Oprócz standardowego wyposażenia do dyspozycji gości są 2 rowery
              oraz darmowe miejsce parkingowe. Istnieje możliwość przyjazdu z
              małym pupilem, jednak po wcześniejszym uzgodnieniu.
            </p>
            <div className='ap-buttons'>
              <a href='http://www.bankfoto.pl/cz2a/'>SpacerVR</a>
              <button onClick={() => toggleDesc(false)}>Info</button>
            </div>
          </div>
        </div>
        <div className='apartm-container'>
          <div className='data-box'>
            <div className='ap-title'>
              <hr />
              <h4>Stychlyn 112/2</h4>
            </div>
            <div className='icons'>
              <p>
                8<i className='fas fa-user'></i>
              </p>
              <p>
                2<i className='fas fa-toilet'></i>
              </p>
            </div>
          </div>
          <div className='info-box'>
            <div className='ap-title'>
              <hr />
              <h4>Stychlyn 112/2</h4>
            </div>
            <p>
              Apartament z trzema oddzielnymi sypialniami, przestronnym salonem,
              sauną i balkonem. Posiada aneks kuchenny oraz dwie łazienki.
              Oprócz standardowego wyposażenia do dyspozycji gości są 4 rowery
              oraz darmowe miejsce parkingowe. Istnieje możliwość przyjazdu z
              małym pupilem, jednak po wcześniejszym uzgodnieniu
            </p>
            <div className='ap-buttons'>
              <a href='https://www.bankfoto.pl/cz2b/'>SpacerVR</a>
              <button onClick={() => toggleDesc(true)}>Info</button>
            </div>
          </div>
        </div>
      </div>
    </ApartmentsMainContainer>
  );
};

export default Apartments;
