import React from "react";
import { Helmet } from "react-helmet";

import { Link } from "gatsby";

import "../styles/services.css";

import Layout from "../components/Layout";
import Hero2 from "../components/Hero2";

import Insta from "../components/Insta";
import Partenaires from "../components/Partenaires";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import service1Image from "../images/service1.jpg";
import service2Image from "../images/service2.jpg";
import service3Image from "../images/service3.jpg";
import service4Image from "../images/service4.jpg";

const ServicesPage = function (props) {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div>
      <Helmet>
        <title>{languageToUse.servicesMetaTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <Hero2 />
      <div className="services">
        <div className="services-container services-container-1">
          <h1 className="services-title">{languageToUse.servicesTitle}</h1>
          <div className="service service-1">
            <img src={service1Image} alt="" />
            <div className="service-text-container">
              <h3>{languageToUse.service1Title}</h3>
              <p>{languageToUse.service1Text1}</p>
              <p>
                {languageToUse.service1Text2}
                <Link to="/bootfitting">{languageToUse.service1Link}</Link>
              </p>
            </div>
          </div>
          <div className="service service-2">
            <img src={service2Image} alt="" />
            <div className="service-text-container">
              <h3>{languageToUse.service2Title}</h3>
              <p>{languageToUse.service2Text1}</p>
              <p>{languageToUse.service2Text2}</p>
            </div>
          </div>
        </div>
        <div className="banner" />

        <div className="services-container services-container-2">
          <div className="service service-1">
            <img src={service3Image} alt="" />
            <div className="service-text-container">
              <h3>{languageToUse.service3Title}</h3>
              <p>{languageToUse.service3Text}</p>
            </div>
          </div>
          <div className="service service-2">
            <img src={service4Image} alt="" />
            <div className="service-text-container">
              <h3>{languageToUse.service4Title}</h3>
              <p>{languageToUse.service4Text1}</p>
              <p>
                {languageToUse.service4Text2}
                <a
                  href="https://zenith-skishop.notresphere.com/location-materiel"
                  target="blank"
                >
                  {languageToUse.service4Link}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Partenaires />
    </div>
  );
};

ServicesPage.Layout = Layout;
export default ServicesPage;
