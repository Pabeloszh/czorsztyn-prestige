import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApartmentsProvider } from "./context/ApartmentsContext";
import { ApartmentsModalProvider } from "./context/ApartmentsModalContext";
import "./index.css";

ReactDOM.render(
  <ApartmentsModalProvider>
    <ApartmentsProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApartmentsProvider>
  </ApartmentsModalProvider>,
  document.getElementById("root")
);
