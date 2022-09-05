import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import Burger from "../components/Burger";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import { content } from "../content/languages";

import "../styles/Header.css";

const Header = (props) => {
  let { language, languageToUse, setLanguage, pathname, setPathname } = props;

  useEffect(() => {
    console.log("pathname");
    console.log(pathname);
  }, [pathname]);

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <div className="header">
      <ul className="links hidden-mobile">
        <li>
          <Link
            to="/"
            className={`nav-link ${
              pathname === "http://localhost:8000/" ||
              "https://zenith-vt.netlify.app/"
                ? "active"
                : ""
            }`}
          >
            {languageToUse.home}
          </Link>
          <Link
            to="/bootfitting"
            className={`nav-link ${
              pathname === "http://localhost:8000/bootfitting" ||
              "https://zenith-vt.netlify.app/bootfitting"
                ? "active"
                : ""
            }`}
          >
            {languageToUse.bootfitting}
          </Link>
          <Link
            to="/services"
            className={`nav-link ${
              pathname === "http://localhost:8000/services" ||
              "https://zenith-vt.netlify.app/services"
                ? "active"
                : ""
            }`}
          >
            {languageToUse.services}
          </Link>
          <Link
            to="/#contact"
            className={`nav-link ${
              pathname === "http://localhost:8000/#contact" ||
              "https://zenith-vt.netlify.app/#contact"
                ? "active"
                : ""
            }`}
          >
            {languageToUse.contact}
          </Link>
          <a
            href="https://zenith-skishop.notresphere.com/location-materiel"
            target="blank"
            className="nav-link nav-link-yellow"
          >
            {languageToUse.book}
          </a>
        </li>

        <li>
          <div className="set-language">
            <button
              onClick={() => handleSetLanguage("english")}
              onKeyPress={() => handleSetLanguage("english")}
              className="invisible-button"
            >
              <img
                src={flagEn}
                alt="english"
                className={`flag ${
                  languageToUse.language === "english" ? "opaque" : "fade"
                } `}
              />
            </button>
            <button
              onClick={() => handleSetLanguage("french")}
              onKeyPress={() => handleSetLanguage("french")}
              className="invisible-button"
            >
              <img
                src={flagFr}
                alt="français"
                className={`flag ${
                  languageToUse.language === "french" ? "opaque" : "fade"
                } `}
              />
            </button>
          </div>
        </li>
      </ul>
      <div className="hidden-desktop">
        <Burger
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
        />
      </div>
    </div>
  );
};

export default Header;
