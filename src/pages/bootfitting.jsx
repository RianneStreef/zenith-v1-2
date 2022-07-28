import React from "react";
import { Helmet } from "react-helmet";

import "../styles/bootfitting.css";

import Layout from "../components/Layout";
import Hero2 from "../components/Hero2";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import bootfittingIntroImage from "../images/bootfittingIntroImage.jpg";

import bootfittingProblem1Image from "../images/bootfitting/crampes.png";
import bootfittingProblem2Image from "../images/bootfitting/froid.png";
import bootfittingProblem3Image from "../images/bootfitting/tibia.png";
import bootfittingProblem4Image from "../images/bootfitting/ampoule.png";
import bootfittingProblem5Image from "../images/bootfitting/douleur.png";
import bootfittingProblem6Image from "../images/bootfitting/genou.png";
import bootfittingProblem7Image from "../images/bootfitting/hallux.png";
import bootfittingProblem8Image from "../images/bootfitting/malleole.png";
import bootfittingProblem9Image from "../images/bootfitting/meta.png";

const BootfittingPage = function (props) {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div className="bootfitting">
      <Helmet>
        <title>{languageToUse.bootfittingMetaTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <Hero2 />
      <h1 className="bootfitting-title">{languageToUse.bootfittingTitle}</h1>
      <div className="bootfitting-intro">
        <div className="bootfitting-intro-text">
          <p>{languageToUse.bootfittingIntro1}</p>
          <p>{languageToUse.bootfittingIntro2}</p>
          <p>{languageToUse.bootfittingIntro3}</p>

          <ul>
            <li>{languageToUse.bootfittingIntroLi1}</li>
            <li>{languageToUse.bootfittingIntroLi2}</li>
            <li>{languageToUse.bootfittingIntroLi3}</li>
          </ul>
          <p>{languageToUse.bootfittingIntro4}</p>
        </div>
      </div>
      <div className="bootfitting-problems-container">
        <h2 className="bootfitting-title">
          {languageToUse.bootfittingProblemTitle}
        </h2>
        <div className="bootfitting-problems">
          <div className="bootfitting-problem">
            <img
              src={bootfittingProblem1Image}
              alt=""
              className="bootfitting-problem-image"
            />
            <h3>{languageToUse.bootfittingProblem1Title}</h3>
            <p>{languageToUse.bootfittingProblem1Text}</p>
          </div>
          <div className="bootfitting-problem">
            <img
              src={bootfittingProblem2Image}
              alt=""
              className="bootfitting-problem-image"
            />
            <h3>{languageToUse.bootfittingProblem2Title}</h3>
            <p>{languageToUse.bootfittingProblem2Text}</p>
          </div>
          <div className="bootfitting-problem">
            <img
              src={bootfittingProblem3Image}
              alt=""
              className="bootfitting-problem-image"
            />
            <h3>{languageToUse.bootfittingProblem3Title}</h3>
            <p>{languageToUse.bootfittingProblem3Text}</p>
          </div>
          <div className="bootfitting-problem">
            <img
              src={bootfittingProblem4Image}
              alt=""
              className="bootfitting-problem-image"
            />
            <h3>{languageToUse.bootfittingProblem4Title}</h3>
            <p>{languageToUse.bootfittingProblem4Text}</p>
          </div>
          <div className="bootfitting-problem">
            <img
              src={bootfittingProblem5Image}
              alt=""
              className="bootfitting-problem-image"
            />
            <h3>{languageToUse.bootfittingProblem5Title}</h3>
            <p>{languageToUse.bootfittingProblem5Text}</p>
          </div>
          <div className="bootfitting-problem">
            <img
              src={bootfittingProblem6Image}
              alt=""
              className="bootfitting-problem-image"
            />
            <h3>{languageToUse.bootfittingProblem6Title}</h3>
            <p>{languageToUse.bootfittingProblem6Text}</p>
          </div>
          <div className="bootfitting-problem">
            <img
              src={bootfittingProblem7Image}
              alt=""
              className="bootfitting-problem-image"
            />
            <h3>{languageToUse.bootfittingProblem7Title}</h3>
            <p>{languageToUse.bootfittingProblem7Text}</p>
          </div>
          <div className="bootfitting-problem">
            <img
              src={bootfittingProblem8Image}
              alt=""
              className="bootfitting-problem-image"
            />
            <h3>{languageToUse.bootfittingProblem8Title}</h3>
            <p>{languageToUse.bootfittingProblem8Text}</p>
          </div>
          <div className="bootfitting-problem">
            <img
              src={bootfittingProblem9Image}
              alt=""
              className="bootfitting-problem-image"
            />
            <h3>{languageToUse.bootfittingProblem9Title}</h3>
            <p>{languageToUse.bootfittingProblem9Text}</p>
          </div>
        </div>
        <h3 className="bootfitting-under-title">
          {languageToUse.bootfittingUnderTitle}
        </h3>
      </div>
    </div>
  );
};

BootfittingPage.Layout = Layout;
export default BootfittingPage;
