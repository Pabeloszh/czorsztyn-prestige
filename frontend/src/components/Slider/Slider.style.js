import styled from "styled-components";
import slider from "../../img/slider.png";
import foto from "../../img/main-photo.png";
import { device } from "../../utils/breakpoints";

export const SliderContainer = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
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

        background-image: url(${slider});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
      .photo:nth-child(3) {
        background-image: url(${foto});
      }
    }
  }
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
      font-size: 48px;
      text-align: center;
      margin-bottom: 35px;
    }
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      hr {
        border: 2px solid #fff;
        width: 200px;
      }
      h4 {
        width: 830px;
        color: #ffffff;
        font-family: Open Sans;
        font-weight: 400;
        font-size: 24px;
        text-align: center;
      }
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      color: #ba9e6e;
      font-family: Open Sans;
      font-weight: 600;
      font-size: 24px;
      text-align: center;
      text-decoration-line: underline;
    }
  }
  .nav-dots {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    p {
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
        font-size: 48px;
        text-align: center;
        margin-bottom: 35px;
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
      h2 {
        font-size: 36px;
        margin-bottom: 35px;
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
          padding: 0 50px;
          font-size: 20px;
        }
      }
      a {
        margin-top: 30px;
        font-size: 20px;
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
        font-size: 32px;
        margin-bottom: 35px;
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
          padding: 0 35px;
          font-size: 18px;
        }
      }
      a {
        margin-top: 30px;
        font-size: 18px;
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
        margin-bottom: 15px;
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
          padding: 0 15px;
          font-size: 14px;
        }
      }
      a {
        margin-top: 20px;
        font-size: 14px;
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
