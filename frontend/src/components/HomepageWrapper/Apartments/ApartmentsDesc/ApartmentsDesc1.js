import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { MainDataContext } from "../../../../context/MainDataContext";
import { ApartmentsModalContext } from "../../../../context/ApartmentsModalContext";
import { BookingModalContext } from "../../../../context/BookingModalContext";
import { ApartmentsDescContainer } from "./ApartmentsDesc.style";

const ApartmentsDesc1 = () => {
  const [data, setData] = useContext(MainDataContext);
  const [modal, toggleModal] = useContext(ApartmentsModalContext);
  const [bModal, toggleBModal] = useContext(BookingModalContext);
  const [actualPhoto, setActualPhoto] = useState(0);
  const [photosNumber, setPhotosNumber] = useState();
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [prevWinWidth, setPrevWinWidth] = useState(window.innerWidth);

  const location = useLocation();

  useEffect(() => {
    if (winWidth !== prevWinWidth) {
      document.querySelector(".img-slide").style.transition =
        "transform 0.4s ease-in-out";
      document.querySelector(".img-slide").style.transform = `translateX(0px)`;
      setActualPhoto(0);
      setPrevWinWidth(winWidth);
    }
  }, [winWidth]);

  useEffect(() => {
    setPhotosNumber(document.querySelectorAll(".img-cont").length);
    setActualPhoto(0);
    if (document.querySelector(".img-slide") && location.pathname !== "/")
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

  useEffect(() => {
    document.querySelector(".img-slide").style.transition =
      "transform 0.4s ease-in-out";
    document.querySelector(".img-slide").style.transform = `translateX(${
      -document.querySelector(".img-slide").clientWidth * actualPhoto
    }px)`;
  }, [actualPhoto]);

  function toggleLeft() {
    if (actualPhoto > 0) {
      setActualPhoto(actualPhoto - 1);
    }
  }

  function toggleRight() {
    if (actualPhoto < photosNumber - 1) {
      setActualPhoto(actualPhoto + 1);
    }
  }

  function toggleApart() {
    setActualPhoto(0);
    document.querySelector(".container-slide").style.transition =
      "transform 0.4s ease-in-out";
    document.querySelector(
      ".container-slide"
    ).style.transform = `translateX(0px)`;
  }

  return (
    <ApartmentsDescContainer>
      <div className='gallery-cont'>
        <div className='img-slide'>
          {data
            .filter((obj) => {
              if (obj.placement === "ap1gal") return obj;
            })
            .map((o, index) => {
              return (
                <div
                  className='img-cont'
                  onClick={() =>
                    toggleModal({
                      isToggle: true,
                      gal: "ap1gal",
                      photo: actualPhoto,
                    })
                  }
                  style={{
                    backgroundImage: "url(" + o.pic + ")",
                  }}
                  key={index}
                ></div>
              );
            })}
        </div>
        <div
          className='go-back'
          onClick={() => {
            toggleApart();
          }}
        >
          <i className='fas fa-arrow-left'></i>
        </div>
        <i
          className='fas fa-chevron-left'
          onClick={() => {
            toggleLeft();
          }}
        ></i>
        <i
          className='fas fa-chevron-right'
          onClick={() => {
            toggleRight();
          }}
        ></i>
        <div className='img-number'>
          <p>
            {actualPhoto + 1}/{photosNumber}
          </p>
        </div>
      </div>
      <div className='desc-cont'>
        <div>
          <div className='title'>
            <hr />
            <div>
              <h4>Stychlyn 112/1</h4>
              <p>120m2</p>
            </div>
            <hr />
          </div>
          <div className='desc'>
            <div>
              <p>{"•"}</p>
              <p>
                Dwie sypialnie (łóżko 2-os i dwa 1-os. + 2 miejsca sofa salon)
              </p>
            </div>
            <div>
              <p>{"•"}</p>
              <p>
                Salon z wyjściem na taras, rozkładaną dużą sofą, i przepięknym
                widokiem na zalew Czorsztyński{" "}
              </p>
            </div>
            <div>
              <p>{"•"}</p>
              <p>Aneks kuchenny z kompletnym wyposażeniem + ekspres do kawy</p>
            </div>
            <div>
              <p>{"•"}</p>
              <p>Jadalnia z dużym stołem + 6 krzeseł</p>
            </div>
            <div>
              <p>{"•"}</p>
              <p>Łazienka z sauną, wanną, prysznicem i toaletą </p>
            </div>
            <div>
              <p>{"•"}</p>
              <p>Druga, osobna toaleta </p>
            </div>
            <div>
              <p>{"•"}</p>
              <p>Garaż </p>
            </div>
            <div>
              <p>{"•"}</p>
              <p>
                Ponadto łóżeczko dla dziecka, szybkie Wi-Fi, sprzęt do
                prasowania, pralka oraz sprzęt wypoczynkowy na tarasie
              </p>
            </div>
            <div>
              <p>{"•"}</p>
              <p>Do apartamentu przynależą 2 miejsca parkingowe zewnętrzne</p>
            </div>
          </div>
          <div className='book'>
            <hr />
            <button onClick={() => toggleBModal(true)}>Rezerwuj</button>
            <hr />
          </div>
        </div>
      </div>
    </ApartmentsDescContainer>
  );
};

export default ApartmentsDesc1;
