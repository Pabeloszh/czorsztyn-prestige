import styled from "styled-components";

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
    z-index: 5;
    top: 20px;
    right: 20px;
    i {
      color: #fff;
      font-size: 36px;
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
      font-size: 36px;
    }
  }
  .modal-box {
    position: absolute;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      height: 75vh;
    }
  }
`;
