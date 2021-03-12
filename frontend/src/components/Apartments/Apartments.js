import React, { useState, useEffect } from "react";
import ApartmentsMain from "./ApartmentsMain/ApartmentsMain";
import ApartmentsDesc from "./ApartmentsDesc/ApartmentsDesc";
import { ApartmentsContainer } from "./Apartments.style";

const Apartments = () => {
  return (
    <ApartmentsContainer>
      <div className='container-slide'>
        <ApartmentsMain />
        <ApartmentsDesc />
      </div>
    </ApartmentsContainer>
  );
};

export default Apartments;
