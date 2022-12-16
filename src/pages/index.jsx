import React, { useEffect } from "react";

import { Helmet } from "react-helmet";

import "../styles/global.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import USP from "../components/USP";
import Insta from "../components/Insta";
import Explanation from "../components/Explanation";
import Contact from "../components/Contact";

const IndexPage = function (props) {
  let { language, languageToUse, pathname, setPathname } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  useEffect(() => {
    if (window.navigator.language === "fr") {
      window.location.href = "./blocked";
    }

    function block() {
      window.location.href = "./blocked";
    }

    var requestOptions = {
      method: "GET",
    };

    fetch(
      "https://api.geoapify.com/v1/ipinfo?&apiKey=fc83c402de874a349d862264c7e3701a",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result.country.iso_code))
      .then((result) => console.log(result))
      .then((result) => (countryCode = result.country.iso_code))
      .then((result) => {
        if (countryCode === "FR") {
          block();
        }
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      <Helmet>
        <title>{languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
        <script
          src="https://cdn2.woxo.tech/a.js#60ca0c172d51e300159c2b7c"
          async
          data-usrc
        ></script>
      </Helmet>
      <div className="header-placeholder" />
      <Hero language={language} languageToUse={languageToUse} />
      <Intro language={language} languageToUse={languageToUse} />
      <USP
        language={language}
        languageToUse={languageToUse}
        pathname={pathname}
        setPathname={setPathname}
      />
      <Insta />
      <Explanation language={language} languageToUse={languageToUse} />
      <Contact language={language} languageToUse={languageToUse} />
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
