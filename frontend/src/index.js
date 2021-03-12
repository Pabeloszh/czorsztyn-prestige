import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApartmentsProvider } from "./context/ApartmentsContext";
import "./index.css";

ReactDOM.render(
  <ApartmentsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApartmentsProvider>,
  document.getElementById("root")
);
