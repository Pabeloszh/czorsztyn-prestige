import React, { useState } from "react";
import Navbar from "./Navbar.js/Navbar";
import { HeaderContainer } from "./Header.style";
import logo from "../../img/logo.png";
const Header = () => {
  const [menu, toggleMenu] = useState(false);

  return (
    <HeaderContainer menu={menu}>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <Navbar menu={menu} toggleMenu={toggleMenu} />
    </HeaderContainer>
  );
};

export default Header;
