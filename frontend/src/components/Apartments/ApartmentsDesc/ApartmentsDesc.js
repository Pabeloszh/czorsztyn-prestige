import React, { useState, useEffect, useContext } from "react";
import ApartmentsInfo1 from "./ApartmentsInfo/ApartmentsInfo1";
import ApartmentsInfo2 from "./ApartmentsInfo/ApartmentsInfo2";
import { ApartmentsContext } from "../../../context/ApartmentsContext";

const ApartmentsDesc = () => {
  const [apartment, toggleApartment] = useContext(ApartmentsContext);

  return <>{!apartment ? <ApartmentsInfo1 /> : <ApartmentsInfo2 />}</>;
};

export default ApartmentsDesc;
