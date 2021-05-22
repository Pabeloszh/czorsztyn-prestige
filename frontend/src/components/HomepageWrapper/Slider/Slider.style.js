import styled from "styled-components";
import { device } from "../../../utils/breakpoints";

export const SliderContainer = styled.div`
  width: 100%;
  min-height: 375px;
  height: 90vh;
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #00000080;
    z-index: 1;
  }
  .slider {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .photo-slider {
      width: 100%;
      height: 100%;
      display: flex;
      .photo {
        min-width: 100%;
        width: 100%;
        height: 100%;
        background-image: url(${(props) => props.data});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
  }
  .slider-info {
    width: 100%;
    position: absolute;
    z-index: 2;
    top: calc(50% - 15px);
    left: 50%;
    transform: translate(-50%, -50%);
    h2 {
      color: #fff;
      font-family: Open Sans;
      font-weight: 600;
      font-size: 50px;
      text-align: center;
      margin-bottom: 15px;
    }
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 35px;
      hr {
        border: 2px solid #fff;
        width: 200px;
      }
      h4 {
        width: 830px;
        color: #ffffff;
        font-family: Open Sans;
        font-weight: 400;
        font-size: 20px;
        text-align: center;
      }
    }
    .link {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      margin-bottom: 0;
      a {
        color: #ba9e6e;
        font-family: Open Sans;
        font-weight: 600;
        font-size: 20px;
        text-align: center;
        text-decoration-line: underline;
      }
    }
  }
  .nav-dots {
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    p {
      cursor: pointer;
      height: 60px;
      font-size: 80px;
      color: #ba9e6e;
      opacity: 0.2;
      margin: 0 8px;
    }
    .active {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 1250px) {
    .slider-info {
      width: 100%;
      position: absolute;
      top: calc(50% - 5px);
      left: 50%;
      transform: translate(-50%, -50%);
      h2 {
        color: #fff;
        font-family: Open Sans;
        font-weight: 600;
        font-size: 36px;
        text-align: center;
      }
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        hr {
          border: 2px solid #fff;
          width: 100px;
        }
      }
    }
  }
  @media ${device.laptop} {
    .slider-info {
      width: 100%;
      position: absolute;
      top: calc(50% - 5px);
      left: 50%;
      transform: translate(-50%, -50%);
      div {
        width: 100%;
        display: flex;
        justify-content: center;
        hr {
          display: none;
        }
        h4 {
          width: 100%;
          padding: 0 150px;
          font-size: 18px;
        }
      }
      .link {
        a {
          font-size: 18px;
        }
      }
    }
    .nav-dots {
      p {
        height: 60px;
        font-size: 80px;
        margin: 0 8px;
      }
    }
  }
  @media ${device.tablet} {
    .slider-info {
      width: 100%;
      position: absolute;
      top: calc(50% - 5px);
      left: 50%;
      transform: translate(-50%, -50%);
      h2 {
        font-size: 28px;
      }
      div {
        width: 100%;
        display: flex;
        justify-content: center;
        hr {
          display: none;
        }
        h4 {
          width: 100%;
          padding: 0 45px;
          font-size: 16px;
        }
      }
      .link {
        a {
          font-size: 16px;
        }
      }
    }
    .nav-dots {
      p {
        height: 50px;
        font-size: 70px;
        margin: 0 8px;
      }
    }
  }
  @media ${device.mobileL} {
    .slider-info {
      width: 100%;
      position: absolute;
      top: calc(50% - 15px);
      left: 50%;
      transform: translate(-50%, -50%);
      h2 {
        font-size: 24px;
      }
      div {
        width: 100%;
        display: flex;
        justify-content: center;
        hr {
          display: none;
        }
        h4 {
          width: 100%;
          padding: 0 25px;
          font-size: 12px;
        }
      }
      .link {
        margin-top: 20px;
        a {
          font-size: 12px;
        }
      }
    }
    .nav-dots {
      p {
        height: 40px;
        font-size: 60px;
        margin: 0 8px;
      }
    }
  }
`;
