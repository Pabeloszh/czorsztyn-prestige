import styled from "styled-components";
import { device } from "../../../../utils/breakpoints";

export const BModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  .overlay {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 4;
  }
  .bmodal-box {
    width: 600px;
    position: absolute;
    z-index: 5;
    background-color: #262525;
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px 20px;
    text-align: center;
    border: 1px solid #ba9e6e;
    i {
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
      color: #ba9e6e;
    }
    h2 {
      color: #ba9e6e;
      font-size: 32px;
      font-family: Open Sans;
      font-style: normal;
      margin-bottom: 8px;
      font-weight: 400;
      font-family: Open Sans;
    }
    p {
      width: 500px;
      margin: 0 30px;
      color: #fff;
      font-size: 18px;
      font-family: Open Sans;
      font-style: normal;
      margin-bottom: 25px;
      font-weight: 100;
      a,
      a:visited {
        color: #ba9e6e;
        text-decoration: none;
      }
    }
    div {
      padding-left: 18px;
      a,
      a:visited {
        color: #fff;
        font-family: Open Sans;
        margin-right: 15px;
        font-size: 18px;
      }
      button {
        cursor: pointer;
        padding: 8px 24px;
        margin-left: 15px;
        background-color: #ba9e6e;
        color: #fff;
        font-size: 18px;
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
  @media ${device.tablet} {
    .bmodal-box {
      width: 95vw;
      padding: 30px 10px;
      h2 {
        font-size: 20px;
        margin-bottom: 8px;
        font-weight: 400;
      }
      p {
        width: auto;
        margin: 0 5px;
        font-size: 14px;
        margin-bottom: 20px;
      }
      div {
        padding-left: 18px;
        a,
        a:visited {
          margin-right: 15px;
          font-size: 14px;
        }
        button {
          padding: 6px 18px;
          margin-left: 15px;
          font-size: 14px;
          border-radius: 2px;
        }
        button:hover {
          transition: background-color 500ms ease-in-out;
          background-color: #836f4d;
        }
      }
    }
  } ;
`;
