import React from "react";

import { content } from "../content/languages";

import "../styles/Hero.css";

import logoHero from "../images/logo-hero.svg";

const Hero = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  return (
    <div className="hero">
      <div className="hero-content-container">
        <img src={logoHero} alt="logo" className="hero-logo" />
        <div>
          <h1 className="hero-title">{languageToUse.heroTitle}</h1>
          <h2 className="hero-title-2">{languageToUse.underTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
