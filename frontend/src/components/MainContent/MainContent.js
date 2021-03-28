import React, { useState, useEffect, useContext } from "react";
import { MainContainer } from "./MainContent.style";
import { MainDataContext } from "../../context/MainDataContext";

const MainContent = () => {
  const [data, setData] = useContext(MainDataContext);

  return (
    <MainContainer
      data={
        data.find((obj) => {
          if (obj.placement === "mainphoto") return obj;
        }).pic
      }
    >
      <div className='scl-media'>
        <h4>SOCIAL MEDIA</h4>
        <div className='line'>
          <hr />
        </div>
        <i class='fab fa-facebook'></i>
        <i class='fab fa-instagram'></i>
      </div>
      <div className='title-container'>
        <h1>APARTAMENTY</h1>
        <h1>CZORSZTYN PRESTIGE</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Scelerisque in dictum non consectetur.
        </h2>
      </div>
      <div className='scl-media-mobile'>
        <i class='fab fa-facebook'></i>
        <i class='fab fa-instagram'></i>
      </div>
    </MainContainer>
  );
};

export default MainContent;
