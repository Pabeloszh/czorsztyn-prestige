import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const GalleryContainer = styled.div`
  width: 100%;
  padding: 60px 10% 60px calc(10% - 60px);
  background-color: #ba9e6e;
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  gap: 30px;
  div {
    width: 100%;
    height: 250px;
  }
  @media ${device.laptop} {
    padding: 60px 10% 60px calc(10% - 30px);
    grid-template-columns: repeat(2, 50%);
  }
  @media ${device.tablet} {
    padding: 60px 10%;
    grid-template-columns: 100%;
  }
`;
