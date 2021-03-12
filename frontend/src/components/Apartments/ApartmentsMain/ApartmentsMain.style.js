import styled from "styled-components";
import { device } from "../../../utils/breakpoints";
import ap1Main from "../../../img/ap-1-main.png";
import ap2Main from "../../../img/ap-2-main.png";
import ap1Hover from "../../../img/ap-1-hover.png";
import ap2Hover from "../../../img/ap-2-hover.png";

export const ApartmentsMainContainer = styled.div`
  min-width: 100%;
  height: 700px;
  background-color: #262525;
  position: relative;
  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 35px;
    hr {
      width: 30%;
      border: 2px #ba9e6e solid;
    }
    h3 {
      text-align: center;
      color: #ba9e6e;
      font-weight: 400;
      font-family: "Noto Serif", serif;
      font-size: 36px;
    }
  }
  .mid-hr {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px #ba9e6e solid;
  }
  .container {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .apartm-container {
      position: relative;
      transition: all 200ms ease-out;
      width: 500px;
      height: 300px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

      .data-box {
        width: 100%;
        transition: all 200ms ease-out;
        visibility: visible;
        opacity: 1;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        padding: 0 25px 25px 25px;
        .ap-title {
          display: flex;
          align-items: center;
          hr {
            width: 25px;
            height: 0.5px;
            margin-right: 5px;
            border: 1px solid #fff;
            margin-top: 3px;
          }
          h4 {
            color: #fff;
            font-size: 24px;
            font-family: Open Sans;
            font-weight: 400;
          }
        }
        .icons {
          display: flex;
          align-items: center;
          p {
            color: #fff;
            font-size: 24px;
            font-family: Open Sans;
            i {
              font-size: 20px;
              margin-left: 5px;
            }
          }
          p:first-child {
            margin-right: 15px;
          }
        }
      }
      .info-box {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .ap-title {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
          hr {
            width: 25px;
            height: 0.5px;
            margin-right: 5px;
            margin-top: 3px;
            border: 0.5px solid #ba9e6e;
          }
          h4 {
            color: #ba9e6e;
            font-size: 24px;
            font-family: Open Sans;
            font-weight: 400;
          }
        }
        p {
          width: 425px;
          text-align: center;
          color: #fff;
          font-family: Open Sans;
          font-size: 16px;
          margin-bottom: 20px;
        }
        .ap-buttons {
          text-align: center;
          a {
            color: #fff;
            font-family: Open Sans;
            font-size: 16px;
            margin-right: 15px;
          }
          a:visited {
            color: #fff;
          }
          button {
            padding: 6px 24px;
            background-color: #ba9e6e;
            color: #fff;
            font-size: 16px;
            border: none;
            outline: none;
            margin-left: 15px;
            border-radius: 2px;
          }
        }
      }
    }
    .apartm-container:hover {
      transition: all 200ms ease-out;
      transform: scale(1.05);
      .data-box {
        transition: all 200ms ease-out;
        visibility: hidden;
        opacity: 0;
      }
      .info-box {
        visibility: visible;
        opacity: 1;
      }
    }
    .apartm-container:first-child {
      background-image: url(${ap1Main});
      margin-right: 30px;
    }
    .apartm-container:last-child {
      background-image: url(${ap2Main});
      margin-left: 30px;
    }
    .apartm-container:first-child:hover {
      background-image: url(${ap1Hover});
    }
    .apartm-container:last-child:hover {
      background-image: url(${ap2Hover});
    }
  }
  @media only screen and (max-width: 1250px) {
    .title {
      hr {
        width: 20%;
        border: 2px #ba9e6e solid;
      }
    }
    .container {
      .apartm-container {
        width: 450px;
        height: 270px;
        position: relative;
        .data-box {
          position: absolute;
        }
      }
    }
  }
  @media ${device.laptop} {
    height: 1000px;
    .mid-hr {
      display: none;
    }
    .container {
      flex-direction: column;
      .apartm-container {
        position: relative;
        .data-box {
          position: absolute;
        }
      }
      .apartm-container:first-child,
      .apartm-container:last-child {
        margin: 0;
      }
      .apartm-container:first-child {
        margin-bottom: 30px;
      }
      .apartm-container:last-child {
        margin-top: 30px;
      }
    }
  }
  @media ${device.tablet} {
    height: 800px;

    .title {
      hr {
        width: 12.5%;
      }
      h3 {
        font-size: 26px;
      }
    }
    .mid-hr {
      display: none;
    }
    .container {
      flex-direction: column;
      .apartm-container {
        width: 350px;
        height: 210px;
        .data-box {
          .ap-title {
            hr {
              width: 15px;
              margin-top: 2px;
            }
            h4 {
              font-size: 18px;
            }
          }
          .icons {
            p {
              font-size: 18px;
              i {
                font-size: 16px;
                margin-left: 3.5px;
              }
            }
          }
        }
        .info-box {
          .ap-title {
            hr {
              width: 15px;
              margin-top: 2px;
            }
            h4 {
              font-size: 16px;
            }
          }
          p {
            width: 297.5px;
            font-size: 12px;
          }
          .ap-buttons {
            a {
              font-size: 14px;
            }
            button {
              padding: 4px 18px;
              font-size: 14px;
            }
          }
        }
      }
      .apartm-container:first-child {
        margin-bottom: 20px;
      }
      .apartm-container:last-child {
        margin-top: 20px;
      }
    }
  }
  @media ${device.mobileL} {
    height: 800px;

    .title {
      justify-content: center;
      hr {
        display: none;
      }
      h3 {
        font-size: 24px;
      }
    }
    .mid-hr {
      display: none;
    }
    .container {
      flex-direction: column;
      .apartm-container {
        width: 300px;
        height: 180px;
        .data-box {
          .ap-title {
            hr {
              width: 15px;
              margin-top: 2px;
            }
            h4 {
              font-size: 18px;
            }
          }
          .icons {
            p {
              font-size: 18px;
              i {
                font-size: 16px;
                margin-left: 3.5px;
              }
            }
          }
        }
        .info-box {
          .ap-title {
            hr {
              width: 15px;
              margin-top: 2px;
            }
            h4 {
              font-size: 16px;
            }
          }
          p {
            width: 255px;
            font-size: 10px;
          }
          .ap-buttons {
            a {
              font-size: 12px;
            }
            button {
              padding: 4px 18px;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;
