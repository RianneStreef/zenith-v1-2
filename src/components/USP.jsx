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
        <div className="bootfitting-intro-text">
          <h2>{languageToUse.bootfitting}</h2>
          <p>{languageToUse.Usp1Text}</p>
        </div>
        <img
          src={bootfittingIntroImage}
          alt="bootfitting"
          className="usp-intro-image"
        />
        <Link to="/bootfitting">{languageToUse.moreInfo}</Link>
      </div>
      <div className="usp-intro modjo-intro">
        <div className="usp-intro-text">
          <h2>{languageToUse.modjo}</h2>

          <p>{languageToUse.Usp2Text}</p>
        </div>
        <img
          src={modjoIntroImage}
          alt="ski modjo"
          className="usp-intro-image"
        />
        <Link to="/modjo">{languageToUse.moreInfo}</Link>
      </div>
      <div className="usp-intro rip-n-wud-intro">
        <div className="usp-intro-text">
          <h2>{languageToUse.ripNWud}</h2>

          <p>{languageToUse.Usp3Text}</p>
        </div>
        <img
          src={ripNWudIntroImage}
          alt="Rip 'n Wood"
          className="usp-intro-image"
        />
        <Link to="/rip-n-wud">{languageToUse.moreInfo}</Link>
      </div>
    </div>
  );
};

export default USP;
