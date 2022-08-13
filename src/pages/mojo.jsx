import React from "react";
import { Helmet } from "react-helmet";

import "../styles/mojo.css";

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
        <title>{languageToUse.mojoTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <div className="header-placeholder" />
      Mojo
    </div>
  );
};

BootfittingPage.Layout = Layout;
export default BootfittingPage;
