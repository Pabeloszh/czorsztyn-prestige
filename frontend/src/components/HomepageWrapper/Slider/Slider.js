import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MainDataContext } from "../../../context/MainDataContext";
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
    const interval = setInterval(
      () => {
        slide <
        data.filter((obj) => {
          if (obj.placement === "slider") return obj;
        }).length
          ? setSlide((prev) => prev + 1)
          : setSlide(0);
      },
      slide ===
        data.filter((obj) => {
          if (obj.placement === "slider") return obj;
        }).length
        ? 500
        : 8000
    );
    if (cooldown) {
      clearInterval(interval);
      setTimeout(() => setCooldown(false), 2000);
    }
    return () => clearInterval(interval);
  }, [cooldown]);

  useEffect(() => {
    if (slide === 0 && last)
      document.querySelector(".photo-slider").style.transition = "";
    else
      document.querySelector(".photo-slider").style.transition =
        "transform 0.4s ease-in-out";

    document.querySelector(".photo-slider").style.transform = `translateX(${
      -document.querySelector(".photo-slider").clientWidth * slide
    }px)`;

    if (
      slide ===
      data.filter((obj) => {
        if (obj.placement === "slider") return obj;
      }).length
    ) {
      isLast(true);
      setTimeout(() => {
        setSlide(0);
      }, 800);
    } else {
      isLast(false);
    }
  }, [slide]);

  return (
    <SliderContainer>
      <div className='overlay'></div>
      <div className='slider'>
        <div className='photo-slider'>
          {data
            .filter((obj) => {
              if (obj.placement === "slider") return obj;
            })
            .map((o, index) => {
              return (
                <div
                  className='photo'
                  style={{
                    backgroundImage: "url(" + o.pic + ")",
                  }}
                  key={index}
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
              Zrobiliśmy wszystko, aby nasze apartamenty pozwalały cieszyć się
              przepięknymi widokami oraz klimatem okolicy. Poznaj nasz bliżej-
              zapraszamy do galerii zdjęć!
            </h4>
            <hr />
          </div>
          <div className='link'>
            <Link to='/gallery' onClick={() => window.scrollTo(0, 0)}>
              Przejdź do galerii
            </Link>
          </div>
        </div>
      </div>
      <div className='nav-dots'>
        {data
          .filter((obj) => {
            if (obj.placement === "slider") return obj;
          })
          .map((o, index) => {
            return (
              <p
                className={
                  index === slide ||
                  (index === 0 &&
                    slide ===
                      data.filter((obj) => {
                        if (obj.placement === "slider") return obj;
                      }).length)
                    ? "active"
                    : ""
                }
                onClick={() => {
                  setSlide(index);
                  setCooldown(true);
                }}
                key={index}
              >
                {"•"}
              </p>
            );
          })}
      </div>
    </SliderContainer>
  );
};

export default Slider;
