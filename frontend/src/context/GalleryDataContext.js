import React, { useState, createContext } from "react";

export const GalleryDataContext = createContext();

export const GalleryDataProvider = (props) => {
  const [gallData, setGallData] = useState();

  return (
    <GalleryDataContext.Provider value={[gallData, setGallData]}>
      {props.children}
    </GalleryDataContext.Provider>
  );
};
