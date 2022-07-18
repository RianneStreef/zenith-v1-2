import React from "react";
import { content } from "../content/languages";

import "../styles/Explanation.css";

const Explanation = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <div className="explanation">
      <h2 className="intro-title">{languageToUse.explanationTitle}</h2>
      <p className="explanation-text">{languageToUse.explanationText1}</p>
      <p className="explanation-text">{languageToUse.explanationText2}</p>
      <p className="explanation-text">{languageToUse.explanationText3}</p>
    </div>
  );
};

export default Explanation;
