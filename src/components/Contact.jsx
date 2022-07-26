import React from "react";

import "../styles/Contact.css";

import { content } from "../content/languages";

import location from "../images/location.svg";
import telephone from "../images/phone.svg";
import email from "../images/at.svg";

const Contact = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="contact" id="contact">
      <div className="header-placeholder" />

      <h2>{languageToUse.contactTitle}</h2>
      <p className="explanation-text">{languageToUse.contactIntro1}</p>
      <p className="explanation-text">{languageToUse.contactIntro2}</p>
      <div className="contact-blocks">
        <div className="google-map-iframe">
          <iframe
            className="iframe-google"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Immeuble%20Le%20Z%C3%A9nith%20Place%20Caron%20Val%20Thorens,%2073440%20Les%20Belleville,%20France&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
        <div className="contact-info">
          <p>
            <img src={location} alt="" className="contact-icon" />
            {languageToUse.addressContent1}
            <br />
            {languageToUse.addressContent2}
            <br />
            {languageToUse.addressContent3}
            <br />
            {languageToUse.addressContent4}
            <br />
          </p>
          <p>
            <img src={telephone} alt="" className="contact-icon" />
            <a href="tel:0033479000528"> {languageToUse.telContent}</a>
          </p>
          <p>
            <img src={email} alt="" className="contact-icon" />
            <a href="mailto:zenith-skishop@wanadoo.fr">
              zenith-skishop@wanadoo.fr
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
