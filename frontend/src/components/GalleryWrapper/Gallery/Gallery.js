import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import API from "../../../API/API";
import { GalleryDataContext } from "../../../context/GalleryDataContext";
import { GalleryModalContext } from "../../../context/GalleryModalContext";
import { GalleryContainer } from "./Gallery.style";

const Gallery = () => {
  const [gallData, setGallData] = useContext(GalleryDataContext);
  const [galModal, toggleGalModal] = useContext(GalleryModalContext);
  const location = useLocation();

  function handleResize() {
    if (document.querySelector(".container-slide")) {
      document.querySelector(".container-slide").style.transition =
        "transform 0.4s ease-in-out";
      document.querySelector(
        ".container-slide"
      ).style.transform = `translateX(0px)`;
    }
  }

  useEffect(() => {
    if (location.pathname !== "/")
      window.removeEventListener("resize", handleResize);
    else window.addEventListener("resize", handleResize, false);
  }, []);

  useEffect(() => {
    (async () => {
      const res = await API.getGallery();
      setGallData(res.data);
    })();
  }, []);

  return (
    <GalleryContainer>
      {gallData.map((photo, index) => {
        return (
          <div
            onClick={() =>
              toggleGalModal({
                isToggle: true,
                photo: index,
              })
            }
            style={{ background: `url(${photo.pic})` }}
            key={index}
          ></div>
        );
      })}
    </GalleryContainer>
  );
};

export default Gallery;
