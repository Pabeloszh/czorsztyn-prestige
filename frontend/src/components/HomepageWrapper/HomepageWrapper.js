import React, { useEffect, useContext } from "react";
import { MainDataContext } from "../../context/MainDataContext";
import { ApartmentsModalContext } from "../../context/ApartmentsModalContext";
import API from "../../API/API";
import Loader from "../Loader/Loader";
import MainContent from "./MainContent/MainContent";
import Apartments from "./Apartments/Apartments";
import Slider from "./Slider/Slider";
import ApartmentsModal from "./Apartments/ApartmentsModal/ApartmentsModal";

const HomepageWrapper = () => {
  const [data, setData] = useContext(MainDataContext);
  const [modal, toggleModal] = useContext(ApartmentsModalContext);

  useEffect(() => {
    (async () => {
      const res = await API.getAll();
      setData(res.data);
    })();
  }, []);

  return (
    <>
      {data ? (
        <>
          <MainContent />
          <Apartments />
          <Slider />
          {modal.isToggle && <ApartmentsModal />}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomepageWrapper;
