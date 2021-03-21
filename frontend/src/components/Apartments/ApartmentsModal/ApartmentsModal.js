import React, { useContext } from "react";
import img from "../../../img/ap-1-main.png";
import { ModalContainer } from "./ApartmentsModal.style";
import { ApartmentsModalContext } from "../../../context/ApartmentsModalContext";

const ApartmentsModal = () => {
  const [modal, toggleModal] = useContext(ApartmentsModalContext);

  return (
    <ModalContainer>
      <div className='overlay' onClick={() => toggleModal(false)}></div>
      <div className='close' onClick={() => toggleModal(false)}>
        <i class='fas fa-times'></i>
      </div>
      <div className='nav'>
        <i class='fas fa-chevron-left'></i>
        <i class='fas fa-chevron-right'></i>
      </div>
      <div className='modal-box'>
        <img src={img} alt='' />
      </div>
    </ModalContainer>
  );
};

export default ApartmentsModal;
