import styled from "styled-components";
import { device } from "../../../../utils/breakpoints";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
  .overlay {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 4;
  }
  .close {
    position: absolute;
    z-index: 6;
    top: 20px;
    right: 20px;
    i {
      color: #fff;
      font-size: 32px;
    }
  }
  .nav {
    width: 100%;
    padding: 0 5%;
    position: absolute;
    z-index: 6;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    i {
      color: #fff;
      font-size: 42px;
    }
  }
  .modal-box {
    position: absolute;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2% 10%;
    width: 100%;
    height: 100vh;
    position: relative;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 75%;
    }
  }
  @media ${device.tablet} {
    .close {
      top: 15px;
      right: 15px;
      i {
        font-size: 24px;
      }
    }
    .nav {
      padding: 0 2.5%;
      i {
        font-size: 36px;
      }
    }
    .modal-box {
      padding: 2% 10%;
      img {
        width: 80%;
      }
    }
  }
  @media ${device.mobileL} {
    .close {
      top: 15px;
      right: 15px;
      i {
        font-size: 24px;
      }
    }
    .nav {
      padding: 0;
      i {
        padding: 10px 10px 10px 5px;
        font-size: 28px;
        background-color: rgb(0, 0, 0, 0.5);
      }
      i:last-child {
        padding: 10px 5px 10px 10px;
      }
    }
    .modal-box {
      padding: 2% 10%;
      img {
        width: 100%;
      }
    }
  }
`;
