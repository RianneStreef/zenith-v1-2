import React from "react";
import { content } from "../content/languages";

import "../styles/Intro.css";

import introImage from "../images/introImage.jpg";

const Intro = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <div className="intro">
      <div className="intro-text">
        <h2>{languageToUse.introTitle1}</h2>
        <h2>{languageToUse.introTitle2}</h2>
        <p>{languageToUse.introText1}</p>
        <p>{languageToUse.introText2}</p>
        <p>{languageToUse.introText3}</p>
      </div>
      <img src={introImage} alt="" className="intro-image" />
    </div>
  );
};

export default Intro;
