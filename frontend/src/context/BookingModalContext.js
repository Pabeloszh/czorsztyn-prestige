import React, { useState, createContext } from "react";

export const BookingModalContext = createContext();

export const BookingModalProvider = (props) => {
  const [bModal, toggleBModal] = useState(false);

  return (
    <BookingModalContext.Provider value={[bModal, toggleBModal]}>
      {props.children}
    </BookingModalContext.Provider>
  );
};
