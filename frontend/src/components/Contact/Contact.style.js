import styled from "styled-components";
import {device} from "../../utils/breakpoints";

export const ContactContainer = styled.div`
  width: 100%;
  height: 237.5px;
  .contact-info {
    width: 100%;
    height: 200px;
    padding: 0 calc((100% - 1200px) / 2);
    background-color: #262525;
    display: flex;
    align-items: center;
    .logo,
    .contact,
    .about,
    .check {
      width: 300px;
      height:150px;
      h5 {
        font-family: Open Sans;
        font-weight: 600;
        font-size: 14px;
        color: #ffffff;
        margin-bottom:10px;
        margin-left:10px;
      }
      p {
        font-family: Open Sans;
        font-weight: 400;
        font-size: 12px;
        color: #ffffff;
      }
    }
    .logo,
    .contact,
    .about{
      margin-right:30px;
    }
    .logo {
      position:relative;
      img {
        height: 75px;
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
      }
    }
    .contact {
      div {
        border-left: 2px solid #ba9e6e;
        height:115px;
        div {
          height:18px;
          border:none;
          display: flex;
          align-items: center;
          margin-left:10px;
          margin-bottom:15px;
          i {
            margin-right:15px;
            color: #fff;
            font-size: 15px;
          }
        }
      }
    }
    .about{
      div{
        border-left: 2px solid #ba9e6e;
        p{
          margin-left:10px;
          height:115px;
        }
      }
    }
    .check{
      h5{
        margin-left:15px;
      }
      div{
        border-left: 2px solid #ba9e6e;
        div{
          height:115px;
          border:none;
          display:flex;
          margin-left:10px;
          i{
            font-size:28px;
            color: #fff;
            margin-right:15px;

          }
          img{
            height:28px;
          }
        }
      }

    }
  }
  .footer {
    width: 100%;
    height: 37.5px;
    background-color: #ba9e6e;
    position:relative;
    p{
      width:100%;
      text-align:center;  
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      font-size:10px;
      font-family: Open Sans;
    }
  }

  @media only screen and (max-width: 1250px){
    .contact-info{
      justify-content:center;
      .logo{
        display:none;
      }
    }
  }

  @media ${device.laptop}{
    .contact-info{
      .about{
        display:none;
      }
    }
  }
  @media ${device.tablet}{
    .contact-info{
      .check{
        display:none;
      }
      .contact{
        width:auto;
        margin:0;
      }
    }
  }
`;
