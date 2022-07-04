import React from "react";
import { Helmet } from "react-helmet";

import "../styles/bootfitting.css";

import Layout from "../components/Layout";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

const RipNWudPage = function (props) {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div className="rip-n-wud">
      <Helmet>
        <title>{languageToUse.ripNWudTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <div className="header-placeholder" />
      Rip n Wud
    </div>
  );
};

RipNWudPage.Layout = Layout;
export default RipNWudPage;
