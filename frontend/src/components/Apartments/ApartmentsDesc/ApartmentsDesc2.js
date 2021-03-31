import React, { useState, useEffect, useContext } from "react";
import { MainDataContext } from "../../../context/MainDataContext";
import { ApartmentsDescContainer } from "./ApartmentsDesc.style";
import { ApartmentsModalContext } from "../../../context/ApartmentsModalContext";
import { useLocation } from "react-router-dom";

const ApartmentsInfo2 = () => {
  const [data, setData] = useContext(MainDataContext);
  const [modal, toggleModal] = useContext(ApartmentsModalContext);
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
            .map((o) => {
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
                ></div>
              );
            })}
        </div>
        <div className='go-back'>
          <i
            class='fas fa-arrow-left'
            onClick={() => {
              toggleApart();
            }}
          ></i>
        </div>
        <div className='direction'>
          <i
            class='fas fa-chevron-left'
            onClick={() => {
              toggleLeft();
            }}
          ></i>
          <i
            class='fas fa-chevron-right'
            onClick={() => {
              toggleRight();
            }}
          ></i>
        </div>
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
            <h4>Stychlyn 47/2</h4>
            <p>142m2</p>
          </div>
          <hr />
        </div>
        <div className='contact'>
          <a href='tel:+48213742069'>+48 213 742 069</a>
        </div>
        <div className='desc'>
          <div className='item'>
            <p>{"•"}</p>
            <p>Pełne wyposażenie</p>
          </div>
          <div>
            <p>{"•"}</p>
            <p>Apartament dla 6-8 osób</p>
          </div>
          <div>
            <p>{"•"}</p>
            <p>1 sypialnia 1+1os</p>
          </div>
          <div>
            <p>{"•"}</p>
            <p>2 sypialnie 2os</p>
          </div>
          <div>
            <p>{"•"}</p>
            <p>2 łazienki</p>
          </div>
          <div>
            <p>{"•"}</p>
            <p>kuchnia</p>
          </div>
          <div>
            <p>{"•"}</p>
            <p>salon</p>
          </div>
          <div>
            <p>{"•"}</p>
            <p>garaż</p>
          </div>
          <div>
            <p>{"•"}</p>
            <p>sauna</p>
          </div>
        </div>
        <div className='book'>
          <hr />
          <a href='https://czorsztynprestige.pl/rezerwacje/'>
            <button>Rezerwuj</button>
          </a>
          <hr />
        </div>
      </div>
    </ApartmentsDescContainer>
  );
};

export default ApartmentsInfo2;
