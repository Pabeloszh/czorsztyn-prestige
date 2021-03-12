import React, { useState, useEffect, useContext } from "react";
import { ApartmentsContext } from "../../../context/ApartmentsContext";
import { ApartmentDescContainer } from "./ApartmentsDesc.style";

const ApartmentsDesc = () => {
  const [actualPhoto, setActualPhoto] = useState(0);
  const [photosNumber, setPhotosNumber] = useState();
  const [apartment, toggleApartment] = useContext(ApartmentsContext);

  useEffect(() => {
    setPhotosNumber(document.querySelectorAll(".img-cont").length);
    window.addEventListener("resize", () => setActualPhoto(0));
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
    <>
      {!apartment ? (
        <ApartmentDescContainer>
          <div className='gallery-cont'>
            <div className='img-slide'>
              <div className='img-cont'></div>
              <div className='img-cont'></div>
              <div className='img-cont'></div>
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
                <h4>Stychlyn 47/1</h4>
                <p>152m2</p>
              </div>
              <hr />
            </div>
            <div className='contact'>
              <p>+48 213 742 069</p>
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
              <button>Rezerwuj</button>
              <hr />
            </div>
          </div>
        </ApartmentDescContainer>
      ) : (
        <ApartmentDescContainer>
          {/* AP-1 */}
          <div className='gallery-cont'>
            <div className='img-slide'>
              <div className='img-cont'></div>
              <div className='img-cont'></div>
              <div className='img-cont'></div>
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
              <p>+48 213 742 069</p>
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
              <button>Rezerwuj</button>
              <hr />
            </div>
          </div>
        </ApartmentDescContainer>
      )}
    </>
  );
};

export default ApartmentsDesc;
