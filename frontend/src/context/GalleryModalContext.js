import React, { useState, createContext } from "react";

export const GalleryModalContext = createContext();

export const GalleryModalProvider = (props) => {
  const [galModal, toggleGalModal] = useState({
    isToggle: false,
    photo: "",
  });

  return (
    <GalleryModalContext.Provider value={[galModal, toggleGalModal]}>
      {props.children}
    </GalleryModalContext.Provider>
  );
};
