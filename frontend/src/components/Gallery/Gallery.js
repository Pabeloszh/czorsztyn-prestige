import React, { useContext, useEffect } from "react";
import API from "../../utils/API";
import { GalleryContainer } from "./Gallery.style";
import { MainDataContext } from "../../context/MainDataContext";
import { useLocation } from "react-router-dom";
import { GalleryModalContext } from "../../context/GalleryModalContext";

const Gallery = () => {
  const [gallData, setGallData] = useContext(MainDataContext);
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
      const res = await API.getAll();
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
          ></div>
        );
      })}
    </GalleryContainer>
  );
};

export default Gallery;
