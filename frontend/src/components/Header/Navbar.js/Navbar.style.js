import styled from "styled-components";
import { device } from "../../../utils/breakpoints";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 85px;
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin: 22.5px 0 20.5px 0;
      color: #ba9e6e;
      font-size: 36px;
    }
    div {
      height: 85px;
      padding: 32.5px 0;
      a {
        color: white;
        text-decoration: none;
        font-size: 18px;
        margin: 0 15px;
        font-family: "Open Sans", sans-serif;
      }
    }
  }
  .navbar-mobile {
    display: none;
  }

  @media ${device.laptop} {
    .nav {
      p {
        margin: 20.5px 0 22.5px 0;
      }
      div {
        a {
          font-size: 16px;
        }
      }
    }
  }

  @media ${device.tablet} {
    .nav {
      display: ${(props) => (props.menu ? "block" : "none")};
      text-align: center;
      p {
        display: none;
      }
    }
    .navbar-mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 25px;
      .logo-mobile {
        img {
          height: 65px;
        }
      }
      #menu-icon {
        height: 85px;
        i {
          margin: 18.5px 0;
          font-size: 42px;
          color: #ba9e6e;
        }
      }
    }
  }
  @media ${device.mobileL} {
    .navbar-mobile {
      height: 75px;
      .logo-mobile {
        img {
          height: 45px;
        }
      }
      #menu-icon {
        height: 75px;
        i {
          margin: 18.5px 0;
          font-size: 32px;
        }
      }
    }
  }
  @media ${device.mobileM} {
    .navbar-mobile {
      justify-content: flex-end;
      .logo-mobile {
        display: none;
      }
    }
  }
`;
