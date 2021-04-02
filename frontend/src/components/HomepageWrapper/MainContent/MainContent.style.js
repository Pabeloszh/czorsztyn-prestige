import styled, { keyframes } from "styled-components";
import { device } from "../../../utils/breakpoints";

const socialMedia = keyframes`
  0%{
    content:"";
    opacity:0;
  }
  50%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 185px);
  position: relative;
  z-index: 1;
  background-image: url(${(props) => props.data});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .scl-media-mobile {
    display: none;
  }
  .scl-media {
    animation: ${socialMedia} 1500ms linear;
    position: absolute;
    top: calc(50% + 35px);
    left: -40px;
    transform: rotate(90deg);
    width: 315px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h4 {
      text-align: center;
      color: #ffffff;
      font-family: Open Sans;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 2px;
    }
    .line {
      position: relative;
      hr {
        bottom: 0;
        width: 80px;
      }
    }
    a{
      cursor:pointer;
      i {
        transform: rotate(-90deg);
        font-size: 25px;
        color: #ffffff;
      }
    }
  }
  .title-container {
    animation: ${socialMedia} 1500ms linear;
    position: absolute;
    top: calc(50%);
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      text-align: center;
      color: #ba9e6e;
      font-weight: 400;
      font-family: "Noto Serif", serif;
      font-size: 64px;
    }
    h2 {
      width: 885px;
      text-align: center;
      color: #ffffff;
      font-family: Open Sans;
      font-weight: 100;
      font-size: 24px;
    }
  }

  @media only screen and (max-width: 1250px) {
    .scl-media {
      display: none;
    }
    .scl-media-mobile {
      animation: ${socialMedia} 1500ms linear;
      display: flex;
      position: absolute;
      bottom: 25px;
      right: 35px;
      i {
        font-size: 35px;
        color: #ffffff;
      }
      i:first-child {
        margin-right: 15px;
      }
    }
  }

  @media ${device.laptop} {
    height: calc(100vh - 155px);
    .title-container {
      h1 {
        font-weight: 400;
        font-size: 54px;
      }
      h2 {
        width: 685px;
        text-align: center;
        color: #ffffff;
        font-family: Open Sans;
        font-weight: 100;
        font-size: 20px;
      }
    }
  }

  @media ${device.tablet} {
    height:100vh;
    .title-container {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h1 {
        width: 425px;
        font-weight: 400;
        font-size: 36px;
      }
      h2 {
        width: 385px;
        align-items: center;
        text-align: center;
        color: #ffffff;
        font-family: Open Sans;
        font-weight: 100;
        font-size: 16px;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
    .scl-media-mobile {
      bottom: 15px;
      right: 25px;
      i {
        font-size: 25px;
        color: #ffffff;
      }
      i:first-child {
        margin-right: 15px;
      }
    }
  }
  @media ${device.mobileL} {
    height: 100vh;
    .title-container {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h1 {
        width: 320px;
        font-weight: 400;
        font-size: 28px;
      }
      h2 {
        width: 320px;
        align-items: center;
        text-align: center;
        color: #ffffff;
        font-family: Open Sans;
        font-weight: 100;
        font-size: 16px;
        margin: 0;
      }
    }
  }
  @media ${device.mobileM} {
    .title-container {
      h1 {
        width: 300px;
        font-size: 24px;
      }
      h2 {
        width: 300px;
        font-size: 14px;
      }
    }
`;
