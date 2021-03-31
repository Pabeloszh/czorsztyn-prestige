import React, { useState, useEffect, useContext } from "react";
import { MainDataContext } from "../../../context/MainDataContext";
import { ApartmentsContext } from "../../../context/ApartmentsContext";
import { ApartmentsMainContainer } from "./ApartmentsMain.style";
import { useLocation } from "react-router-dom";

const Apartments = () => {
  const [data, setData] = useContext(MainDataContext);
  const [apartment, toggleApartment] = useContext(ApartmentsContext);
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [prevWinWidth, setPrevWinWidth] = useState(window.innerWidth);

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
              <h4>Stychlyn 47/1</h4>
            </div>
            <div className='icons'>
              <p>
                8<i class='fas fa-user'></i>
              </p>
              <p>
                2<i class='fas fa-toilet'></i>
              </p>
            </div>
          </div>
          <div className='info-box'>
            <div className='ap-title'>
              <hr />
              <h4>Stychlyn 47/1</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
              <h4>Stychlyn 47/2</h4>
            </div>
            <div className='icons'>
              <p>
                6<i class='fas fa-user'></i>
              </p>
              <p>
                2<i class='fas fa-toilet'></i>
              </p>
            </div>
          </div>
          <div className='info-box'>
            <div className='ap-title'>
              <hr />
              <h4>Stychlyn 47/2</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
