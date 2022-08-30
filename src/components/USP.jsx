import React from "react";
import { Link } from "gatsby";

import { content } from "../content/languages";

import "../styles/USP.css";

import bootfittingIntroImage from "../images/bootfittingIntroImage.jpg";
import mojoIntroImage from "../images/modjoIntroImage.jpg";
import servicesIntroImage from "../images/serviceIntro.jpg";

const USP = (props) => {
  let { language, languageToUse, pathname, setPathname } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <div className="usp">
      <div className="usp-intro">
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
      <div className="usp-intro">
        <Link
          to="/mojo"
          className="usp-link-container"
          onClick={() => setPathname("/mojo")}
        >
          <img
            src={mojoIntroImage}
            alt="ski mojo"
            className="usp-intro-image"
          />
          <h3 className="usp-link">{languageToUse.mojo}</h3>
        </Link>
        <p className="usp-intro-text">{languageToUse.Usp2Text}</p>
      </div>
      <div className="usp-intro ">
        <Link to="/services" className="usp-link-container">
          <img src={servicesIntroImage} alt="" className="usp-intro-image" />
          <h3 className="usp-link">{languageToUse.ourServices}</h3>
        </Link>
        <p className="usp-intro-text">{languageToUse.Usp3Text}</p>
      </div>
    </div>
  );
};

export default USP;
