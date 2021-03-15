import styled from "styled-components";
import device from "../../utils/breakpoints";

export const ContactContainer = styled.div`
  width: 100%;
  height: 375px;
  .contact-info {
    width: 100%;
    height: 300px;
    padding: 0 calc((100% - 1200px) / 2);
    background-color: #262525;
    display: flex;
    align-items: center;
    .logo,
    .contact,
    .about,
    .check {
      width: 300px;
      h5 {
        font-family: Open Sans;
        font-weight: 600;
        font-size: 18px;
        color: #ffffff;
      }
      p {
        font-family: Open Sans;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
      }
    }
    .logo {
      img {
        height: 75px;
      }
    }
    .contact {
      div {
        border-left: 2px solid #ba9e6e;
        div {
          display: flex;
          align-items: center;
          i {
            color: #fff;
            font-size: 15px;
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 75px;
    background-color: #ba9e6e;
  }
`;
