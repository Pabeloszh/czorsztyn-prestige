import React, { useContext } from "react";
import ApartmentsMain from "./ApartmentsMain/ApartmentsMain";
import ApartmentsDesc1 from "./ApartmentsDesc/ApartmentsDesc1";
import ApartmentsDesc2 from "./ApartmentsDesc/ApartmentsDesc2";
import { ApartmentsContext } from "../../context/ApartmentsContext";
import { ApartmentsContainer } from "./Apartments.style";

const Apartments = () => {
  const [apartment, toggleApartment] = useContext(ApartmentsContext);
  return (
    <ApartmentsContainer>
      <div className='container-slide'>
        <ApartmentsMain />
        <>{!apartment ? <ApartmentsDesc1 /> : <ApartmentsDesc2 />}</>
      </div>
    </ApartmentsContainer>
  );
};

export default Apartments;
