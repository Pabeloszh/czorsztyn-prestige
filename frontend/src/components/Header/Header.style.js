import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: #262525;
  .logo {
    width: 100%;
    border-bottom: 1px solid #ba9e6e;
    text-align: center;
    img {
      width: 232.77px;
      height: 100px;
      margin: 30px 0;
    }
  }
  @media ${device.tablet} {
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
