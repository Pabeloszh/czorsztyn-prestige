import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js/Navbar";
import { HeaderContainer } from "./Header.style";

const Header = () => {
  const [menu, toggleMenu] = useState(false);

  return (
    <HeaderContainer menu={menu} id='header'>
      <div className='logo'>
        <img
          src='https://czorsztyn-prestige-s3bucket.s3.eu-central-1.amazonaws.com/logo.png?fbclid=IwAR3Bg9NTDa7LmP39NDD9N47Eu4u1084XAGpfape8mUSeaVg8zBI6Y0QH3Ew'
          alt='logo'
        />
      </div>
      <Navbar menu={menu} toggleMenu={toggleMenu} />
    </HeaderContainer>
  );
};

export default Header;
