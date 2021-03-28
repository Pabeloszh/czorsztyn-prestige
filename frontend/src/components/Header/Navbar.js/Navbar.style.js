import styled, { keyframes } from "styled-components";
import { device } from "../../../utils/breakpoints";

const lineAnim = keyframes`
  0% {
    content: "";
    transform: scaleX(0);
  }
  100%{
    transform: scaleX(1);
  }
`;

const textAnim = keyframes`
  0% {
    opacity:0;
  }
  50%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

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
    animation: ${lineAnim} 500ms linear;
    p {
      color: #ba9e6e;
      font-size: 36px;
      animation: ${textAnim} 1500ms linear;
    }
    div {
      height: 65px;
      padding: 21.5px 0;
      cursor: pointer;
      position: relative;
      animation: ${textAnim} 1500ms linear;
      a {
        color: white;
        text-decoration: none;
        font-size: 16px;
        margin: 0 15px;
        font-family: "Open Sans", sans-serif;
      }
    }
    .active {
      border-bottom: 1px solid #ba9e6e;
    }
    div:not(.active)::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;
      background-color: #ba9e6e;
      transition: transform 200ms ease-in-out;
      transform: scaleX(0);
    }
    div:not(.active):hover::before,
    div:not(.active):focus::before {
      transform: scaleX(1);
    }
  }
  .navbar-mobile {
    display: none;
  }

  @media ${device.laptop} {
    height: 55px;
    .nav {
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
      .active {
        border-bottom: none;
        a {
          color: #ba9e6e;
        }
      }
    }
    .navbar-mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 25px;
      .logo-mobile {
        img {
          animation: ${textAnim} 1500ms linear;
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

      #nav-icon3 {
        animation: ${textAnim} 1500ms linear;
        width: 40px;
        height: 35px;
        margin-top: 10px;
        position: relative;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.5s ease-in-out;
        -moz-transition: 0.5s ease-in-out;
        -o-transition: 0.5s ease-in-out;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        span {
          display: block;
          position: absolute;
          height: 5px;
          width: 100%;
          background: #ba9e6e;
          border-radius: 5px;
          opacity: 1;
          left: 0;
          -webkit-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
          -webkit-transition: 0.25s ease-in-out;
          -moz-transition: 0.25s ease-in-out;
          -o-transition: 0.25s ease-in-out;
          transition: 0.25s ease-in-out;
        }
        span:nth-child(1) {
          top: 0px;
        }
        span:nth-child(2),
        span:nth-child(3) {
          top: 14px;
        }
        span:nth-child(4) {
          top: 28px;
        }
      }

      #nav-icon3.open span:nth-child(1) {
        top: 18px;
        width: 0%;
        left: 50%;
      }

      #nav-icon3.open span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      #nav-icon3.open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }

      #nav-icon3.open span:nth-child(4) {
        top: 18px;
        width: 0%;
        left: 50%;
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
