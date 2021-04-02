import React from "react";
import { LoaderContainer } from "./Loader.style";

const Loader = () => {
  return (
    <LoaderContainer>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderContainer>
  );
};

export default Loader;
