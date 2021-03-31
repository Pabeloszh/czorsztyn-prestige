import React from "react";
import { ContactContainer } from "./Contact.style";

const Contact = () => {
  return (
    <ContactContainer>
      <div className='contact-info'>
        <div className='logo'>
          <img
            src='https://czorsztyn-prestige-s3bucket.s3.eu-central-1.amazonaws.com/logo.png?fbclid=IwAR3Bg9NTDa7LmP39NDD9N47Eu4u1084XAGpfape8mUSeaVg8zBI6Y0QH3Ew'
            alt=''
          />
        </div>
        <div className='contact'>
          <h5>Kontakt:</h5>
          <div>
            <div>
              <i class='fas fa-phone-alt'></i>{" "}
              <a href='tel:+48783113111'>+48 783 113 111</a>
            </div>
            <div>
              <i class='fas fa-envelope'></i>{" "}
              <a href='mailto:biuro@nadczorsztynem.pl'>
                biuro@nadczorsztynem.pl
              </a>
            </div>
            <div>
              <i class='fas fa-map-marker-alt'></i>
              <a href='https://www.google.pl/maps/place/Czorsztyn+Prestige/@49.4447416,20.285381,17z/data=!4m13!1m7!3m6!1s0x4715f8a386e7ae7f:0x8e476ab9460ef8f3!2sZa+Stylchyn+110,+34-440+Kluszkowce!3b1!8m2!3d49.4447381!4d20.2875697!3m4!1s0x4715f8a467e55e0f:0x7fdbe86aeb92fcd2!8m2!3d49.4444716!4d20.2882022'>
                ul. Za Stylchyn 110
                <br />
                34-440 Kluszkowce
              </a>
            </div>
          </div>
        </div>
        <div className='about'>
          <h5>O nas:</h5>
          <div>
            <p>
              Bacon ipsum dolor amet alcatra chicken leberkas, pancetta swine
              sausage beef ribs burgdoggen prosciutto meatloaf chislic boudin
              turducken. Beef jerky.
            </p>
          </div>
        </div>
        <div className='check'>
          <h5>Sprawdź również:</h5>
          <div>
            <div>
              <a href='https://www.facebook.com/czorsztynprestige'>
                <i class='fab fa-facebook'></i>
              </a>
              <a href='https://www.instagram.com/czorsztyn_prestige/'>
                <i class='fab fa-instagram'></i>
              </a>
              <a href='https://nadczorsztynem.pl/'>
                <img
                  src='https://czorsztyn-prestige-s3bucket.s3.eu-central-1.amazonaws.com/nadczorsztynem.4f0022ab.png'
                  alt=''
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <p>© Copyright - BTF Developer | Wdrożenie: PAWEŁ I MATI</p>
      </div>
    </ContactContainer>
  );
};

export default Contact;
