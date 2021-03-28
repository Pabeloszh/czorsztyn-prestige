import React, { useState, createContext } from "react";

export const MainDataContext = createContext();

export const MainDataProvider = (props) => {
  const [data, setData] = useState();

  return (
    <MainDataContext.Provider value={[data, setData]}>
      {props.children}
    </MainDataContext.Provider>
  );
};
