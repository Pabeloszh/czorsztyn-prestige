import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { NavbarContainer } from "./Navbar.style";

const Navbar = ({ menu, toggleMenu }) => {
  const [navTop, setNavTop] = useState(window.scrollY);
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (menu) document.querySelector("#hamburger").classList.add("open");
    else document.querySelector("#hamburger").classList.remove("open");
  }, [menu]);

  useEffect(() => {
    const divs = document.querySelectorAll(".nav div");
    divs.forEach((d) => {
      d.classList.remove("active");
    });
    if (location.pathname === "/") {
      divs[0].classList.add("active");
    }
    if (location.pathname === "/gallery") {
      divs[3].classList.add("active");
    }
  }, [location.pathname]);

  window.onscroll = () => {
    setNavTop(window.scrollY);
  };

  window.onresize = () => {
    setWinWidth(window.innerWidth);
  };

  useEffect(() => {
    if (navTop > 119 && winWidth > 768) {
      document.querySelector(".nav").classList.add("sticky");
    } else {
      document.querySelector(".nav").classList.remove("sticky");
    }
  }, [navTop]);

  useEffect(() => {
    if (winWidth <= 768) {
      document.querySelector(".nav").classList.remove("sticky");
    }
  }, [winWidth]);

  return (
    <NavbarContainer menu={menu}>
      <div className='navbar-mobile'>
        <div className='logo-mobile'>
          <img
            src='https://czorsztyn-prestige-s3bucket.s3.eu-central-1.amazonaws.com/logo.png?fbclid=IwAR3Bg9NTDa7LmP39NDD9N47Eu4u1084XAGpfape8mUSeaVg8zBI6Y0QH3Ew'
            alt='logo'
          />
        </div>
        <div
          id='menu-icon'
          onClick={() => {
            toggleMenu(!menu);
          }}
        >
          <div id='hamburger'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className='nav'>
        <div
          onClick={() => {
            window.scrollTo(0, 0);
            history.push("/");
          }}
        >
          <a>STRONA GŁÓWNA</a>
        </div>
        <p>{"•"}</p>
        <a href='https://czorsztynprestige.pl/rezerwacje/'>
          <div>
            <a>REZERWACJE</a>
          </div>
        </a>
        <p>{"•"}</p>
        <a href='https://nadczorsztynem.pl/category/atrakcje/'>
          <div>
            <a>ATRAKCJE</a>
          </div>
        </a>
        <p>{"•"}</p>
        <div
          onClick={() => {
            window.scrollTo(0, 0);
            history.push("/gallery");
          }}
        >
          <a>GALERIA</a>
        </div>
        <p>{"•"}</p>
        <div onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
          <a>KONTAKT</a>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
