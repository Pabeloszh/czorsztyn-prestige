import styled, { keyframes } from "styled-components";

const loadingAnim = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  .lds-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid #ba9e6e;
      border-radius: 50%;
      animation: ${loadingAnim} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #ba9e6e transparent transparent transparent;
    }
    div:nth-child(1) {
      animation-delay: -0.45s;
    }
    div:nth-child(2) {
      animation-delay: -0.3s;
    }
    div:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;
