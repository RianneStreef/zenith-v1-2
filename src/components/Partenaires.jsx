import React from "react";

import { content } from "../content/languages";

import "../styles/Partenaires.css";

const Partenaires = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="partenaires">
      <h4>{languageToUse.partners}</h4>
      <ul>
        <li>
          <a href="https://www.valthorens.com/">
            {languageToUse.siteValThorens}
          </a>
        </li>
        {/* <li>
      <a href="https://www.valthorens-location.com">{languageToUse.bookPrivate}</a>
    </li> */}
        <li>
          <a href="https://www.immobilier-valthorens.fr/" target="blank">
            MaCle Immo
          </a>
        </li>
        <li>
          <a href="https://www.agencelacime.com/" target="blank">
            Agence la Cime
          </a>
        </li>
        <li>
          <a href="https://www.alpineimmo.com/" target="blank">
            Alpine Immo
          </a>
        </li>
        <li>
          <a href="https://www.ski-cool.com/" target="blank">
            Ski Cool
          </a>
        </li>
        <li>
          <a href="https://libre-envol.com/" target="blank">
            {languageToUse.valthoFromSky}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Partenaires;
