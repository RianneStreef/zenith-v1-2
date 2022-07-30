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
        © Zenith Ski Shop.{languageToUse.rights}{" "}
        <Link to="/legal">{languageToUse.legal}</Link>
      </p>
    </div>
  );
};

export default Footer;
