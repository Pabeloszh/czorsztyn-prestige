import React from "react";
import { GalleryContainer } from "./Gallery.style";
import img from "../../img/ap-1-hover.png";

const Gallery = () => {
  return (
    <GalleryContainer>
      <div style={{ background: `url(${img})` }}></div>
      <div style={{ background: `url(${img})` }}></div>
      <div style={{ background: `url(${img})` }}></div>
      <div style={{ background: `url(${img})` }}></div>
      <div style={{ background: `url(${img})` }}></div>
      <div style={{ background: `url(${img})` }}></div>
      <div style={{ background: `url(${img})` }}></div>
      <div style={{ background: `url(${img})` }}></div>
      <div style={{ background: `url(${img})` }}></div>
      <div style={{ background: `url(${img})` }}></div>
      <div style={{ background: `url(${img})` }}></div>
    </GalleryContainer>
  );
};

export default Gallery;
