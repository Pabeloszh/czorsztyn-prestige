import styled from "styled-components";
import { device } from "../../../utils/breakpoints";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }

  .sticky + .content {
    padding-top: 60px;
  }
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ba9e6e;
    background-color: #262525;
    p {
      // margin: 22.5px 0 20.5px 0;
      color: #ba9e6e;
      font-size: 36px;
    }
    div {
      height: 65px;
      padding: 21.5px 0;
      a {
        color: white;
        text-decoration: none;
        font-size: 16px;
        margin: 0 15px;
        font-family: "Open Sans", sans-serif;
      }
    }
  }
  .navbar-mobile {
    display: none;
  }

  @media ${device.laptop} {
    height: 55px;
    .nav {
      p {
        // margin: 20.5px 0 22.5px 0;
      }
      div {
        height: 55px;
        padding: 18px 0;
        a {
          font-size: 14px;
        }
      }
    }
  }

  @media ${device.tablet} {
    .nav {
      transition: all 200ms ease-out;
      visibility: ${(props) => (props.menu ? "visible" : "hidden")};
      opacity: ${(props) => (props.menu ? "1" : "0")};
      display: block;
      border-top: none;
      text-align: center;
      p {
        display: none;
      }
    }
    .navbar-mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 25px;
      // background-color: #262525;
      // border-bottom: 2px solid #ba9e6e;
      .logo-mobile {
        img {
          height: 45px;
        }
      }
      #menu-icon {
        height: 55px;
        i {
          margin: 10px 0;
          font-size: 35px;
          color: #ba9e6e;
        }
      }
    }
  }
  // @media ${device.mobileL} {
  //   .navbar-mobile {
  //     height: 55px;
  //     .logo-mobile {
  //       img {
  //         height: 45px;
  //       }
  //     }
  //     #menu-icon {
  //       height: 75px;
  //       i {
  //         margin: 18.5px 0;
  //         font-size: 32px;
  //       }
  //     }
  //   }
  // }
  @media ${device.mobileM} {
    .navbar-mobile {
      justify-content: flex-end;
      .logo-mobile {
        display: none;
      }
    }
  }
`;
