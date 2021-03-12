import React, { useState, createContext } from "react";

export const ApartmentsContext = createContext();

export const ApartmentsProvider = (props) => {
  const [apartment, toggleApartment] = useState(false);

  return (
    <ApartmentsContext.Provider value={[apartment, toggleApartment]}>
      {props.children}
    </ApartmentsContext.Provider>
  );
};
