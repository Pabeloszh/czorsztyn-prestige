import React from "react";
import logo from "../../../img/logo.png";
import { NavbarContainer } from "./Navbar.style";

const Navbar = ({ menu, toggleMenu }) => {
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
          <i class='fas fa-bars'></i>
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
