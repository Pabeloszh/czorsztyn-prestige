import React, { useContext } from "react";
import { MainContainer } from "./MainContent.style";
import { MainDataContext } from "../../../context/MainDataContext";

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
        <a href='https://www.facebook.com/czorsztynprestige'>
          <i className='fab fa-facebook'></i>
        </a>
        <a href='https://www.instagram.com/czorsztyn_prestige/'>
          <i className='fab fa-instagram'></i>
        </a>
      </div>
      <div className='title-container'>
        <h1>APARTAMENTY</h1>
        <h1>CZORSZTYN PRESTIGE</h1>
        <h2>
          Przepiękne, przytulne apartamenty wykończone w wysokim standardzie
          położone w Pieninach, tuż przy linii brzegowej Zalewu Czorsztyńskiego.
        </h2>
      </div>
      <div className='scl-media-mobile'>
        <a href='https://www.facebook.com/czorsztynprestige'>
          <i className='fab fa-facebook'></i>
        </a>
        <a href='https://www.instagram.com/czorsztyn_prestige/'>
          <i className='fab fa-instagram'></i>
        </a>
      </div>
    </MainContainer>
  );
};

export default MainContent;
