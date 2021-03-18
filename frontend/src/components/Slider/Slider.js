import React, { useState, useEffect } from "react";
import { SliderContainer } from "./Slider.style";

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const [cooldown, setCooldown] = useState(false);
  const [last, isLast] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const p = document.querySelectorAll(".nav-dots p");
      setSlide(0);

      for (let i = 0; i < p.length; i++) {
        p[i].classList.remove("active");
        p[0].classList.add("active");
      }
    });
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
          <div className='photo'></div>
          <div className='photo'></div>
          <div className='photo'></div>
          <div className='photo'></div>
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
          <a href=''>Przejdź do galerii</a>
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
