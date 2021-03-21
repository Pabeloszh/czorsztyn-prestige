import React, { useState, createContext } from "react";

export const ApartmentsModalContext = createContext();

export const ApartmentsModalProvider = (props) => {
  const [modal, toggleModal] = useState(false);

  return (
    <ApartmentsModalContext.Provider value={[modal, toggleModal]}>
      {props.children}
    </ApartmentsModalContext.Provider>
  );
};
