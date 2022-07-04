import React from "react";
import { Link } from "gatsby";

import footerLogo from "../images/LOGO-VER-White.svg";

import "../styles/Footer.css";
import { content } from "../content/languages";

const Footer = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="footer">
      <div>
        <h4>Links</h4>
        <div className="footer-links">
          <ul>
            <li>
              <Link to="/bootfitting">Bootfitting</Link>
            </li>
            <li>
              <Link to="/modjo">Ski Modjo</Link>
            </li>
            <li>
              <Link to="/rip-n-wud">Rip 'n Wud</Link>
            </li>

            <li>
              <Link to="/services">{languageToUse.services}</Link>
            </li>
            <li>
              <a
                href="https://zenith-skishop.notresphere.com/location-materiel"
                target="blank"
              >
                {languageToUse.book}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h4>{languageToUse.partners}</h4>
        <ul>
          <li>
            <a href="https://www.valthorens.com/">
              {languageToUse.siteValThorens}
            </a>
          </li>
          {/* <li>
          <a href="https://www.valthorens-location.com">{languageToUse.bookPrivate}</a>
        </li> */}
          <li>
            <a href="https://www.immobilier-valthorens.fr/" target="blank">
              MaCle Immo
            </a>
          </li>
          <li>
            <a href="https://www.agencelacime.com/" target="blank">
              Agence la Cime
            </a>
          </li>
          <li>
            <a href="https://www.alpineimmo.com/" target="blank">
              Alpine Immo
            </a>
          </li>
          <li>
            <a href="https://www.ski-cool.com/" target="blank">
              Ski Cool
            </a>
          </li>
          <li>
            <a href="https://libre-envol.com/" target="blank">
              {languageToUse.valthoFromSky}
            </a>
          </li>
        </ul>
      </div>
      <img className="footer-logo" src={footerLogo} alt="" />
    </div>
  );
};

export default Footer;
