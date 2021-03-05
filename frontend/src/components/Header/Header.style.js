import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: #262525;
  position: relative;
  top: 0;
  z-index: 2;

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
    img {
      width: 232.77px;
      height: 100px;
      margin: 30px 0;
    }
  }
  @media ${device.tablet} {
    position: fixed;
    height: ${(props) => (props.menu ? "100vh" : "105px")};
    transition: height 200ms linear;
    border-bottom: 2px solid #ba9e6e;
    .logo {
      display: none;
    }
  }
  @media ${device.mobileL} {
    height: ${(props) => (props.menu ? "100vh" : "75px")};
  }
`;
