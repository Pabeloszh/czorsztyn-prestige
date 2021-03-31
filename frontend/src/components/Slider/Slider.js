import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MainDataContext } from "../../context/MainDataContext";
import { SliderContainer } from "./Slider.style";
import { useLocation } from "react-router-dom";

const Slider = () => {
  const [data, setData] = useContext(MainDataContext);
  const [slide, setSlide] = useState(0);
  const [cooldown, setCooldown] = useState(false);
  const [last, isLast] = useState(false);
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [prevWinWidth, setPrevWinWidth] = useState(window.innerWidth);

  const location = useLocation();

  useEffect(() => {
    if (winWidth !== prevWinWidth) {
      const p = document.querySelectorAll(".nav-dots p");

      for (let i = 0; i < p.length; i++) {
        p[i].classList.remove("active");
        p[0].classList.add("active");
      }

      setSlide(0);
      setPrevWinWidth(winWidth);
    }
  }, [winWidth]);

  useEffect(() => {
    if (document.querySelector(".photo-slider") && location.pathname !== "/")
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
    if (slide === 0 && last)
      document.querySelector(".photo-slider").style.transition = "";
    else
      document.querySelector(".photo-slider").style.transition =
        "transform 0.4s ease-in-out";

    document.querySelector(".photo-slider").style.transform = `translateX(${
      -document.querySelector(".photo-slider").clientWidth * slide
    }px)`;

    if (slide === 3) {
      isLast(true);
      const p = document.querySelectorAll(".nav-dots p");
      setTimeout(() => setSlide(0), 500);
      for (let i = 0; i < p.length; i++) {
        p[i].classList.remove("active");
        p[0].classList.add("active");
      }
    } else {
      isLast(false);
    }
  }, [slide]);

  useEffect(() => {
    const p = document.querySelectorAll(".nav-dots p");
    if (!cooldown) setTimeout(() => setCooldown(true), 5000);
    if (cooldown) {
      setTimeout(() => setCooldown(false), 5000);
      if (slide < 3) {
        setSlide(slide + 1);
        for (let i = 0; i < p.length; i++) {
          if (slide < p.length - 1) {
            p[i].classList.remove("active");
            p[slide + 1].classList.add("active");
          }
        }
      }
    }
  }, [cooldown]);

  function toggleSlider(e, num) {
    setCooldown(false);
    setSlide(num);
    const p = document.querySelectorAll(".nav-dots p");
    for (let i = 0; i < p.length; i++) {
      p[i].classList.remove("active");
    }
    e.target.classList.add("active");
  }
  return (
    <SliderContainer>
      <div className='slider'>
        <div className='photo-slider'>
          {data
            .filter((obj) => {
              if (obj.placement === "slider") return obj;
            })
            .map((o) => {
              return (
                <div
                  className='photo'
                  style={{
                    backgroundImage: "url(" + o.pic + ")",
                  }}
                ></div>
              );
            })}
          <div
            className='photo'
            style={{
              backgroundImage:
                "url(" +
                data.filter((obj) => {
                  return obj.placement === "slider";
                })[0].pic +
                ")",
            }}
          ></div>
        </div>
        <div className='slider-info'>
          <h2>Zobacz Nasze Zdjęcia</h2>
          <div>
            <hr />
            <h4>
              Bacon ipsum dolor amet alcatra chicken leberkas, pancetta swine
              sausage beef ribs burgdoggen prosciutto meatloaf chislic boudin
              turducken. Beef leberkas landjaeger, chislic sausage frankfurter
              tongue pastrami. Meatball ribeye alcatra sausage chicken strip
              steak. Tail strip steak drumstick short ribs sirloin, shoulder
              bacon landjaeger doner brisket alcatra fatback ball tip beef ribs.
            </h4>
            <hr />
          </div>
          <Link to='/gallery' onClick={() => window.scrollTo(0, 0)}>
            Przejdź do galerii
          </Link>
        </div>
      </div>
      <div className='nav-dots'>
        <p
          className='active'
          onClick={(e) => {
            toggleSlider(e, 0);
          }}
        >
          {"•"}
        </p>
        <p
          onClick={(e) => {
            toggleSlider(e, 1);
          }}
        >
          {"•"}
        </p>
        <p
          onClick={(e) => {
            toggleSlider(e, 2);
          }}
        >
          {"•"}
        </p>
      </div>
    </SliderContainer>
  );
};

export default Slider;
