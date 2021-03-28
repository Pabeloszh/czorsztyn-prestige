import React, { useContext } from "react";
import { MainDataContext } from "../../../context/MainDataContext";
import { ModalContainer } from "./ApartmentsModal.style";
import { ApartmentsModalContext } from "../../../context/ApartmentsModalContext";

const ApartmentsModal = () => {
  const [data, setData] = useContext(MainDataContext);
  const [modal, toggleModal] = useContext(ApartmentsModalContext);

  function toggleLeft() {
    if (modal.photo > 0) {
      toggleModal({ ...modal, photo: modal.photo - 1 });
    } else {
      toggleModal({
        ...modal,
        photo:
          data.filter((obj) => {
            if (obj.placement === modal.gal) return obj;
          }).length - 1,
      });
    }
  }

  function toggleRight() {
    if (
      modal.photo <
      data.filter((obj) => {
        if (obj.placement === modal.gal) return obj;
      }).length -
        1
    ) {
      toggleModal({ ...modal, photo: modal.photo + 1 });
    } else {
      toggleModal({ ...modal, photo: 0 });
    }
  }

  return (
    <ModalContainer>
      <div className='overlay'></div>
      <div className='close' onClick={() => toggleModal(false)}>
        <i class='fas fa-times'></i>
      </div>
      <div className='nav'>
        <i class='fas fa-chevron-left' onClick={() => toggleLeft()}></i>
        <i class='fas fa-chevron-right' onClick={() => toggleRight()}></i>
      </div>
      <div className='modal-box'>
        <img
          src={
            data.filter((obj) => {
              if (obj.placement === modal.gal) return obj;
            })[modal.photo].pic
          }
          alt=''
        />
      </div>
    </ModalContainer>
  );
};

export default ApartmentsModal;
