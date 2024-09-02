import React from "react";
import "./Contact.css"; // Ensure no conflicting styles here
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import danish2 from '../../assets/images/danish2.png'; // Ensure this path is correct

export default function Contact() {
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contactInfo.title}</h1>
          <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

          <div className="contact-text-div">
            <a className="contact-detail" href={"tel:" + contactInfo.number}>
              {contactInfo.number}
            </a>
            <br />
            <br />
            <a
              className="contact-detail-email"
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>
  <div className="contact-image-div">
  <img
    alt="Contact"
    src={danish2}
    className=" object-cover object-left" // Make image cover 50% width of parent div
  />
</div>
      </div>
    </div>
  );
}
