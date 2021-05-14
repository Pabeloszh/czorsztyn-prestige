import styled, { keyframes } from "styled-components";
import { device } from "../../utils/breakpoints";

const logoAnim = keyframes`
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

export const HeaderContainer = styled.div`
  width: 100%;
  height: 185px;
  background-color: #262525;
  position: relative;
  top: 0;
  z-index: 3;

  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }

  .sticky + .content {
    padding-top: 60px;
  }

  .logo {
    width: 100%;
    text-align: center;
    animation: ${logoAnim} 2750ms linear;
    img {
      height: 75px;
      margin: 20px 0;
    }
  }

  @media ${device.laptop} {
    height: 155px;
    .logo {
      img {
        height: 65px;
        margin: 15px 0;
      }
    }
  }

  @media ${device.tablet} {
    position: fixed;
    height: ${(props) => (props.menu ? "100vh" : "65px")};
    transition: height 200ms linear;
    border-bottom: 2px solid #ba9e6e;
    .logo {
      display: none;
    }
  }
  @media ${device.mobileL} {
    height: ${(props) => (props.menu ? "100vh" : "65px")};
  }
`;
