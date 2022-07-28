import React from "react";
import { Link } from "gatsby";

import { content } from "../content/languages";

import "../styles/USP.css";

import bootfittingIntroImage from "../images/bootfittingIntroImage.jpg";
import modjoIntroImage from "../images/modjoIntroImage.jpg";
import ripNWudIntroImage from "../images/modjoIntroImage.jpg";

const USP = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <div className="usp">
      <div className="usp-intro bootfitting-intro">
        <Link to="/bootfitting" className="usp-link-container">
          <img
            src={bootfittingIntroImage}
            alt="bootfitting"
            className="usp-intro-image"
          />
          <h3 className="usp-link">{languageToUse.bootfitting}</h3>
        </Link>
        <p className="usp-intro-text">{languageToUse.Usp1Text}</p>
      </div>
      <div className="usp-intro modjo-intro">
        <Link to="/modjo" className="usp-link-container">
          <img
            src={modjoIntroImage}
            alt="ski modjo"
            className="usp-intro-image"
          />
          <h3 className="usp-link">{languageToUse.modjo}</h3>
        </Link>
        <p className="usp-intro-text">{languageToUse.Usp2Text}</p>
      </div>
      <div className="usp-intro services-intro">
        <Link to="/services" className="usp-link-container">
          <img src={ripNWudIntroImage} alt="" className="usp-intro-image" />
          <h3 className="usp-link">{languageToUse.ourServices}</h3>
        </Link>
        <p className="usp-intro-text">{languageToUse.Usp3Text}</p>
      </div>
    </div>
  );
};

export default USP;
