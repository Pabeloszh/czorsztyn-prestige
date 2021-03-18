import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const ApartmentsContainer = styled.div`
  width: 100%;
  overflow: hidden;
  .container-slide {
    display: flex;
    width: 100%;
    height: 700px;
  }
  @media only screen and (max-width: 1250px) {
    .container-slide {
      height: 700px;
    }
  }
  @media ${device.laptop} {
    .container-slide {
      height: 900px;
    }
  }
  @media ${device.tablet} {
    .container-slide {
      height: 775px;
    }
  }
  @media ${device.mobileL} {
    .container-slide {
      height: 625px;
    }
  }
`;
