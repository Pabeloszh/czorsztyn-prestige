import React, { useContext } from "react";
import { MainDataContext } from "../../../context/MainDataContext";
import { ModalContainer } from "../../Apartments/ApartmentsModal/ApartmentsModal.style";
import { GalleryModalContext } from "../../../context/GalleryModalContext";

const GalleryModal = () => {
  const [data, setData] = useContext(MainDataContext);
  const [galModal, toggleGalModal] = useContext(GalleryModalContext);

  function toggleLeft() {
    if (galModal.photo > 0) {
      toggleGalModal({ ...galModal, photo: galModal.photo - 1 });
    } else {
      toggleGalModal({
        ...galModal,
        photo: data.length - 1,
      });
    }
  }

  function toggleRight() {
    if (galModal.photo < data.length - 1) {
      toggleGalModal({ ...galModal, photo: galModal.photo + 1 });
    } else {
      toggleGalModal({ ...galModal, photo: 0 });
    }
  }

  return (
    <ModalContainer>
      <div className='overlay'></div>
      <div className='close' onClick={() => toggleGalModal(false)}>
        <i class='fas fa-times'></i>
      </div>
      <div className='nav'>
        <i class='fas fa-chevron-left' onClick={() => toggleLeft()}></i>
        <i class='fas fa-chevron-right' onClick={() => toggleRight()}></i>
      </div>
      <div className='modal-box'>
        <img src={data[galModal.photo].pic} alt='' />
      </div>
    </ModalContainer>
  );
};

export default GalleryModal;
