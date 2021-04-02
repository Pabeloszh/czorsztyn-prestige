import React, { useEffect, useContext } from "react";
import API from "../../API/API";
import { GalleryModalContext } from "../../context/GalleryModalContext";
import { GalleryDataContext } from "../../context/GalleryDataContext";
import Loader from "../Loader/Loader";
import Gallery from "./Gallery/Gallery";
import GalleryModal from "./Gallery/GalleryModal/GalleryModal";
const GalleryWraper = () => {
  const [gallData, setGallData] = useContext(GalleryDataContext);
  const [galModal, toggleGalModal] = useContext(GalleryModalContext);

  useEffect(() => {
    (async () => {
      const res = await API.getGallery();
      setGallData(res.data);
    })();
  }, []);
  return (
    <>
      {gallData ? (
        <>
          <Gallery />
          {galModal.isToggle && <GalleryModal />}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default GalleryWraper;
