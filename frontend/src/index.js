import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { MainDataProvider } from "./context/MainDataContext";
import { ApartmentsProvider } from "./context/ApartmentsContext";
import { ApartmentsModalProvider } from "./context/ApartmentsModalContext";
import { GalleryModalProvider } from "./context/GalleryModalContext";
import { GalleryDataProvider } from "./context/GalleryDataContext";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    background-color: #262525;
  }
`;

ReactDOM.render(
  <MainDataProvider>
    <GalleryDataProvider>
      <ApartmentsModalProvider>
        <GalleryModalProvider>
          <ApartmentsProvider>
            <React.StrictMode>
              <GlobalStyle />
              <App />
            </React.StrictMode>
          </ApartmentsProvider>
        </GalleryModalProvider>
      </ApartmentsModalProvider>
    </GalleryDataProvider>
  </MainDataProvider>,
  document.getElementById("root")
);
