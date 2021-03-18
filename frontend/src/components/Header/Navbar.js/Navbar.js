import React, { useState, useEffect } from "react";
import logo from "../../../img/logo.png";
import { NavbarContainer } from "./Navbar.style";

const Navbar = ({ menu, toggleMenu }) => {
  const [navTop, setNavTop] = useState(window.scrollY);
  const [winWidth, setWinWidth] = useState(window.innerWidth);

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
          <a href=''>STRONA GŁÓWNA</a>
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
          <a href=''>GALERIA</a>
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
