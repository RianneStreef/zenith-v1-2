import React, { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";

import { content } from "../content/languages";

import buttonLocationEnLigne from "../images/location-en-ligne.svg";

const Layout = ({ children }) => {
  let [language, setLanguage] = useState("french");
  let languageToUse = "";
  //  let languageInStorage = "";

  // useEffect(() => {
  //   if (localStorage.getItem("languageInStorage")) {
  //     setLanguage(languageInStorage);
  //     console.log("language found");
  //     console.log(languageInStorage);
  //   }
  // }, []);

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  console.log("language in layout");
  console.log(language);

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      language,
      setLanguage,
      languageToUse,
    })
  );
  return (
    <div className="layout">
      <Header
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
      <section className="main">{childrenWithProps}</section>
      <a
        href="https://zenith-skishop.notresphere.com/location-materiel"
        target="blank"
        className="book-link"
      >
        <img src={buttonLocationEnLigne} className="button-location-en-ligne" />
      </a>
      <Footer language={language} languageToUse={languageToUse} />
    </div>
  );
};

export default Layout;
