import styled from "styled-components";
import { device } from "../../../utils/breakpoints";

export const ApartmentsDescContainer = styled.div`
  min-width: 100%;
  height: 700px;
  background-color: #262525;
  display: grid;
  grid-template-columns: 50% 50%;
  .gallery-cont {
    width: 100%;
    position: relative;
    overflow: hidden;
    .img-slide {
      display: flex;
      width: 100%;
      height: 100%;
      .img-cont {
        min-width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
    .go-back {
      position: absolute;
      top: 20px;
      left: 20px;
      i {
        font-size: 30px;
        color: #fff;
      }
    }
    .direction {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      i {
        font-size: 50px;
        color: #fff;
      }
    }
    .img-number {
      position: absolute;
      bottom: 30px;
      right: 40px;
      p {
        color: #fff;
        font-size: 36px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
      }
    }
  }
  .desc-cont {
    border-left: 4px #ba9e6e solid;
    padding: 95px 0;
    .title {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      hr {
        height: 2px;
        border: 2px #ba9e6e solid;
      }
      hr:first-child {
        width: 45px;
      }
      hr:last-child {
        width: calc(100% - 224px - 45px - 60px);
      }
      div {
        width: 224px;
        display: flex;
        justif-content: start;
        align-items: flex-end;
        margin: 0 30px;
        h4 {
          color: #fff;
          font-weight: 400;
          font-family: Open Sans;
          font-size: 24px;
          margin-right: 10px;
        }
        p {
          color: #ba9e6e;
          font-weight: 600;
          font-family: Open Sans;
          font-size: 20px;
        }
      }
    }
    .contact,
    .desc {
      padding-left: 75px;
    }
    .contact {
      margin-bottom: 8px;
      a {
        text-decoration: none;
        font-family: Open Sans;
        font-weight: 300;
        font-size: 18px;
        color: #ffffffcc;
      }
      a:visited {
        color: #ffffffcc;
      }
    }
    .desc {
      margin-bottom: 35px;
      div {
        display: flex;
        align-items: center;
        p:first-child {
          color: #ba9e6e;
          font-size: 40px;
        }
        p:last-child {
          margin-left: 20px;
          color: #fff;
          font-family: Open Sans;
          font-size: 18px;
        }
      }
      div:not(:first-child) {
        margin-top: -5px;
      }
    }
    .book {
      display: flex;
      align-items: center;
      hr {
        height: 2px;
        border: 2px #ba9e6e solid;
      }
      hr:first-child {
        width: 45px;
      }
      hr:last-child {
        width: calc(100% - 115px - 45px - 60px);
      }
      a {
        color: #fff;
        text-decoration: none;
      }
      button {
        cursor: pointer;
        transition: background-color 500ms ease-in-out;
        width: 115px;
        padding: 8px 24px;
        margin: 0 30px;
        background-color: #ba9e6e;
        color: #fff;
        font-size: 16px;
        border: none;
        outline: none;
        border-radius: 2px;
      }
      button:hover {
        transition: background-color 500ms ease-in-out;
        background-color: #836f4d;
      }
    }
  }
  @media ${device.laptop} {
    height: 900px;
    grid-template-columns: 100%;
    grid-template-rows: 400px 600px;
    .gallery-cont {
      border-top: 4px #ba9e6e solid;
      .direction {
        i {
          font-size: 40px;
        }
      }
      .img-number {
        bottom: 20px;
        right: 35px;
        p {
          font-size: 28px;
        }
      }
    }
    .desc-cont {
      border-left: none;
      border-top: 4px #ba9e6e solid;
      padding: 55px 0;
      .title {
        div {
          h4 {
            font-size: 18px;
          }
          p {
            font-size: 14px;
          }
        }
      }
      .contact {
        a {
          font-size: 14px;
        }
      }
      .desc {
        div {
          margin-bottom: 10px;
          p:first-child {
            font-size: 25px;
          }
          p:last-child {
            margin-left: 10px;
            font-size: 14px;
          }
        }
      }
      .book {
        button {
          width: 115px;
          padding: 6px 18px;
          margin: 0 30px;
          font-size: 14px;
          border-radius: 2px;
        }
      }
    }
  }
  @media ${device.tablet} {
    height: 775px;
    grid-template-rows: 350px 450px;
    .gallery-cont {
      border-top: 2px #ba9e6e solid;
      .direction {
        padding: 0 3%;
        i {
          font-size: 30px;
        }
      }
      .img-number {
        bottom: 20px;
        right: 35px;
        p {
          font-size: 18px;
        }
      }
      .go-back {
        top: 15px;
        left: 15px;
        i {
          font-size: 26px;
        }
      }
    }
    .desc-cont {
      border-left: none;
      border-top: 2px #ba9e6e solid;
      padding: 40px 0;
      .title {
        hr {
          border: 1px #ba9e6e solid;
        }
        div {
          h4 {
            font-size: 16px;
          }
          p {
            font-size: 12px;
          }
        }
      }
      .contact {
        a {
          font-size: 12px;
        }
      }
      .desc {
        div {
          margin-bottom: 10px;
          p:first-child {
            font-size: 20px;
          }
          p:last-child {
            margin-left: 10px;
            font-size: 12px;
          }
        }
      }
      .book {
        hr {
          border: 1px #ba9e6e solid;
        }
        button {
          width: 115px;
          padding: 6px 18px;
          margin: 0 30px;
          font-size: 12px;
          border-radius: 2px;
        }
      }
    }
  }
  @media ${device.mobileL} {
    height: 625px;
    grid-template-rows: 250px 375px;
    .gallery-cont {
      border-top: 2px #ba9e6e solid;
      .direction {
        padding: 0 2%;
        i {
          font-size: 30px;
        }
      }
      .img-number {
        bottom: 15px;
        right: 25px;
        p {
          font-size: 18px;
        }
      }
      .go-back {
        top: 15px;
        left: 15px;
        i {
          font-size: 24px;
        }
      }
    }
    .desc-cont {
      border-left: none;
      border-top: 2px #ba9e6e solid;
      padding: 40px 0;
      .title {
        hr {
          border: 1px #ba9e6e solid;
        }
        hr:last-child {
          width: calc(100% - 160px - 45px - 60px);
        }
        div {
          width: 160px;
          h4 {
            font-size: 14px;
          }
          p {
            font-size: 10px;
          }
        }
      }
      .contact {
        a {
          font-size: 10px;
        }
      }
      .desc {
        div {
          margin-bottom: 10px;
          p:first-child {
            font-size: 16px;
          }
          p:last-child {
            margin-left: 10px;
            font-size: 10px;
          }
        }
      }
      .book {
        hr {
          border: 1px #ba9e6e solid;
        }
        hr:last-child {
          width: calc(100% - 50px - 45px - 60px);
        }
        button {
          width: 50px;
          width: 115px;
          padding: 6px 18px;
          margin: 0 30px;
          font-size: 10px;
          border-radius: 2px;
        }
      }
    }
  }
`;
