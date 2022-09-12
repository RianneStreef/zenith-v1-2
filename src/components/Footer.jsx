import React from "react";

import { Link } from "gatsby";

import "../styles/Footer.css";
import { content } from "../content/languages";

const Footer = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div className="footer">
      <p>
        © Zenith Ski Shop - 2022. {languageToUse.rights} -{" "}
        <Link to="/legal">{languageToUse.legal}</Link>{" "}
        <a href="https://vts-webdesign.com" target="_blank">
          - VTS Webdesign
        </a>
      </p>
    </div>
  );
};

export default Footer;
