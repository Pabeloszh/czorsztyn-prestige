import React from "react";
import logo from "../../img/logo.png";
import nadczorsztynem from "../../img/nadczorsztynem.png";
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
              <i class='fas fa-phone-alt'></i> <p>+48 783 113 111</p>
            </div>
            <div>
              <i class='fas fa-envelope'></i> <p>biuro@nadczorsztynem.pl</p>
            </div>
            <div>
              <i class='fas fa-map-marker-alt'></i>
              <p>
                ul. Za Stylchyn 110
                <br />
                34-440 Kluszkowce
              </p>
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
              <i class='fab fa-facebook'></i>
              <i class='fab fa-instagram'></i>
              <img
                src='https://czorsztyn-prestige-s3bucket.s3.eu-central-1.amazonaws.com/nadczorsztynem.4f0022ab.png'
                alt=''
              />
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
