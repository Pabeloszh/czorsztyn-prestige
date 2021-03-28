import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MainDataProvider } from "./context/MainDataContext";
import { ApartmentsProvider } from "./context/ApartmentsContext";
import { ApartmentsModalProvider } from "./context/ApartmentsModalContext";
import { GalleryModalProvider } from "./context/GalleryModalContext";
import "./index.css";

ReactDOM.render(
  <MainDataProvider>
    <ApartmentsModalProvider>
      <GalleryModalProvider>
        <ApartmentsProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ApartmentsProvider>
      </GalleryModalProvider>
    </ApartmentsModalProvider>
  </MainDataProvider>,
  document.getElementById("root")
);
