import React from "react";
import { Helmet } from "react-helmet";

import "../styles/modjo.css";

import Layout from "../components/Layout";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

const BootfittingPage = function (props) {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div className="bootfitting">
      <Helmet>
        <title>{languageToUse.modjoTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <div className="header-placeholder" />
      Modjo
    </div>
  );
};

BootfittingPage.Layout = Layout;
export default BootfittingPage;
