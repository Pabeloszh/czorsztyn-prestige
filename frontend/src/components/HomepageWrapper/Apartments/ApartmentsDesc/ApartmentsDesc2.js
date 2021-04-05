import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { MainDataContext } from "../../../../context/MainDataContext";
import { ApartmentsModalContext } from "../../../../context/ApartmentsModalContext";
import { BookingModalContext } from "../../../../context/BookingModalContext";
import { ApartmentsDescContainer } from "./ApartmentsDesc.style";

const ApartmentsInfo2 = () => {
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
              if (obj.placement === "ap2gal") return obj;
            })
            .map((o, index) => {
              return (
                <div
                  className='img-cont'
                  onClick={() =>
                    toggleModal({
                      isToggle: true,
                      gal: "ap2gal",
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
        <div className='go-back'>
          <i
            className='fas fa-arrow-left'
            onClick={() => {
              toggleApart();
            }}
          ></i>
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
        <div className='title'>
          <hr />
          <div>
            <h4>Stychlyn 112/2</h4>
            <p>165m2</p>
          </div>
          <hr />
        </div>
        <div className='contact'>
          <a href='tel:+48602257284'></a>
        </div>
        <div className='desc'>
          <div>
            <p>{"•"}</p>
            <p>Trzy sypialnie (dwa łóżka 2-os, dwa 1-os + 2 miejsca duża sofa salon)</p>
          </div>
          <div>
            <p>{"•"}</p>
            <p>Aneks kuchenny z kompletnym wyposażeniem + ekspres do kawy</p>
          </div>
          <div>
            <p>{"•"}</p>
            <p>Duży salon z rozkładaną sofą, fotelem telewizją satelitarną, wyjściem na duży 20m2 taras z przepięknym widokiem na zalew Czorsztyński</p>
          </div>
          <div>
            <p>{"•"}</p>
            <p>Jadalnia z dużym stołem + 8 krzeseł</p>
          </div>
          <div>
            <p>{"•"}</p>
            <p>Łazienka z sauną, prysznicem i toaletą</p>
          </div>
          <div>
            <p>{"•"}</p>
            <p>Druga łazienka z wanną i toaletą</p>
          </div>
          <div>
            <p>{"•"}</p>
            <p>Oddzielne WC</p>
          </div>
          <div>
            <p>{"•"}</p>
            <p>Garaż</p>
          </div>
          <div>
            <p>{"•"}</p>
            <p>Ponadto łóżeczko dla dziecka, szybkie Wi-Fi, sprzęt do prasowania, pralka i 4 rowery trekkingowe wysokiej klasy oraz sprzęt wypoczynkowy na tarasie</p>
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
    </ApartmentsDescContainer>
  );
};

export default ApartmentsInfo2;
