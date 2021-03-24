import React, { useState, useEffect } from "react";
import logo from "../../../img/logo.png";
import { NavbarContainer } from "./Navbar.style";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ menu, toggleMenu }) => {
  const [navTop, setNavTop] = useState(window.scrollY);
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const divs = document.querySelectorAll(".nav div");
    divs.forEach((d) => {
      d.classList.remove("active");
    });
    if (location.pathname === "/") {
      divs[0].classList.add("active");
    }
    if (location.pathname === "/gallery") {
      divs[4].classList.add("active");
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
          <img src={logo} alt='logo' />
        </div>
        <div
          id='menu-icon'
          onClick={() => {
            toggleMenu(!menu);
          }}
        >
          <i className='fas fa-bars'></i>
        </div>
      </div>
      <div className='nav'>
        <div>
          <Link to='/'>STRONA GŁÓWNA</Link>
        </div>
        <p>{"•"}</p>
        <div>
          <a href=''>REZERWACJE</a>
        </div>
        <p>{"•"}</p>
        <div>
          <a href=''>ATRAKCJE</a>
        </div>
        <p>{"•"}</p>
        <div>
          <a href=''>SPACER VR</a>
        </div>
        <p>{"•"}</p>
        <div>
          <Link to='/gallery'>GALERIA</Link>
        </div>
        <p>{"•"}</p>
        <div>
          <a href=''>KONTAKT</a>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
