import React, { useContext } from "react";
import { BookingModalContext } from "../../../../context/BookingModalContext";
import { BModalContainer } from "./BookingModal.style";

const BookingModal = () => {
  const [bModal, toggleBModal] = useContext(BookingModalContext);

  return (
    <BModalContainer>
      <div className='overlay'></div>
      <div className='bmodal-box'>
        <i class='fas fa-times' onClick={() => toggleBModal(false)}></i>
        <h2>Zainteresowany rezerwacją?</h2>
        <p>
          Aby zarezerwować jeden z apartamentów możesz skontaktować się z nami
          dzwoniąc na <a href='tel:+48602257284'>+48 602 257 284</a> bądź
          mailowo{" "}
          <a href='mailto:prestigeroland@gmail.com'>prestigeroland@gmail.com</a>{" "}
          albo dokonać tego przez naszą stronę
        </p>
        <div>
          <a href='https://czorsztynprestige.pl/rezerwacje/'>Strona</a>
          <a href='tel:+48602257284'>
            <button>Zadzwoń</button>
          </a>
        </div>
      </div>
    </BModalContainer>
  );
};

export default BookingModal;
