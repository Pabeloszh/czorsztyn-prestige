import styled from "styled-components";
import { device } from "../../../../utils/breakpoints";

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
    .fa-chevron-left,
    .fa-chevron-right {
      position: absolute;
      padding: 10px;
      font-size: 50px;
      color: #fff;
    }
    .fa-chevron-left {
      top: 50%;
      left: 5%;
      transform: translateY(-50%);
    }
    .fa-chevron-right {
      top: 50%;
      right: 5%;
      transform: translateY(-50%);
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
    padding: 12% 0;
    .title {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      hr {
        height: 2px;
        border: 2px #ba9e6e solid;
      }
      hr:first-child {
        width: 45px;
      }
      hr:last-child {
        width: calc(100% - 260px - 65px);
      }
      div {
        width: 260px;
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
    .desc {
      padding: 0 25px 0 35px;
      margin-bottom: 35px;
      div {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        p:first-child {
          color: #ba9e6e;
          font-size: 40px;
          height: 30px;
          line-height: 30px;
        }
        p:last-child {
          margin-left: 15px;
          color: #fff;
          font-family: Open Sans;
          font-size: 16px;
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
  @media ${device.laptopL} {
    .desc-cont {
      padding: 16% 0;
    }
  }
  @media ${device.laptop} {
    height: 900px;
    grid-template-columns: 100%;
    grid-template-rows: 400px 600px;
    .gallery-cont {
      border-top: 4px #ba9e6e solid;
      .fa-chevron-left,
      .fa-chevron-right {
        font-size: 40px;
      }
      .fa-chevron-left {
        left: 3%;
      }
      .fa-chevron-right {
        top: 50%;
        right: 3%;
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
      padding: 8% 0;
      .title {
        div {
          h4 {
            font-size: 18px;
          }
          p {
            font-size: 14px;
          }
        }
        hr:last-child {
          width: calc(100% - 220px);
        }
      }
      .desc {
        div {
          margin-bottom: 12.5px;
          p:first-child {
            height: 20px;
            line-height: 20px;
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
    height: 800px;
    grid-template-rows: 350px 450px;
    .gallery-cont {
      border-top: 2px #ba9e6e solid;
      .fa-chevron-left,
      .fa-chevron-right {
        font-size: 30px;
      }
      .fa-chevron-left {
        left: 2%;
      }
      .fa-chevron-right {
        top: 50%;
        right: 2%;
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
      padding: 12% 0;
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
      .desc {
        margin-bottom: 25px;
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
    height: 675px;
    grid-template-rows: 250px 375px;
    .gallery-cont {
      border-top: 2px #ba9e6e solid;
      .fa-chevron-left {
        left: 1%;
      }
      .fa-chevron-right {
        top: 50%;
        right: 1%;
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
      padding: 20% 0;
      .title {
        margin-bottom: 12.5px;
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
      .desc {
        margin-bottom: 20px;
        div {
          margin-bottom: 10px;
          p:first-child {
            height: 15px;
            line-height: 15px;
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
  @media ${device.mobileM} {
    .desc-cont {
      padding: 16% 0;
    }
  }
`;
