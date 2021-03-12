import React, { useEffect, useContext } from "react";
import { ApartmentsContext } from "../../../context/ApartmentsContext";
import { ApartmentsMainContainer } from "./ApartmentsMain.style";

const Apartments = () => {
  const [apartment, toggleApartment] = useContext(ApartmentsContext);

  function handleResize() {
    document.querySelector(".container-slide").style.transition =
      "transform 0.4s ease-in-out";
    document.querySelector(
      ".container-slide"
    ).style.transform = `translateX(0px)`;
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
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

  // function toggleApart() {
  //   document.querySelector(".container-slide").style.transition =
  //     "transform 0.4s ease-in-out";
  //   document.querySelector(
  //     ".container-slide"
  //   ).style.transform = `translateX(0px)`;
  // }

  return (
    <ApartmentsMainContainer>
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
              <a href=''>Kontakt</a>
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
              <a href=''>Kontakt</a>
              <button onClick={() => toggleDesc(true)}>Info</button>
            </div>
          </div>
        </div>
      </div>
    </ApartmentsMainContainer>
  );
};

export default Apartments;
