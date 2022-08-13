exports.id = "component---src-pages-index-jsx";
exports.ids = ["component---src-pages-index-jsx"];
exports.modules = {

/***/ "./src/components/Contact.jsx":
/*!************************************!*\
  !*** ./src/components/Contact.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Contact_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Contact.css */ "./src/styles/Contact.css");
/* harmony import */ var _styles_Contact_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Contact_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/languages */ "./src/content/languages.js");
/* harmony import */ var _images_location_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/location.png */ "./src/images/location.png");
/* harmony import */ var _images_phone_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/phone.png */ "./src/images/phone.png");
/* harmony import */ var _images_at_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/at.png */ "./src/images/at.png");







const Contact = props => {
  let {
    language,
    languageToUse
  } = props;
  language === "english" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_2__.content.english : languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_2__.content.french;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact",
    id: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-placeholder"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, languageToUse.contactTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "explanation-text"
  }, languageToUse.contactIntro1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "explanation-text"
  }, languageToUse.contactIntro2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact-blocks"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "google-map-iframe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
    className: "iframe-google",
    id: "gmap_canvas",
    src: "https://maps.google.com/maps?q=Immeuble%20Le%20Z%C3%A9nith%20Place%20Caron%20Val%20Thorens,%2073440%20Les%20Belleville,%20France&t=&z=13&ie=UTF8&iwloc=&output=embed"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_location_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "",
    className: "contact-icon"
  }), languageToUse.addressContent1, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), languageToUse.addressContent2, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), languageToUse.addressContent3, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), languageToUse.addressContent4, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_phone_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "",
    className: "contact-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "tel:0033479000528"
  }, " ", languageToUse.telContent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_at_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "",
    className: "contact-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:zenith-skishop@wanadoo.fr"
  }, "zenith-skishop@wanadoo.fr")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./src/components/Explanation.jsx":
/*!****************************************!*\
  !*** ./src/components/Explanation.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/languages */ "./src/content/languages.js");
/* harmony import */ var _styles_Explanation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Explanation.css */ "./src/styles/Explanation.css");
/* harmony import */ var _styles_Explanation_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Explanation_css__WEBPACK_IMPORTED_MODULE_2__);




const Explanation = props => {
  let {
    language,
    languageToUse
  } = props;
  language === "english" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_1__.content.english : null;
  language === "french" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_1__.content.french : null;
  language === "dutch" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_1__.content.dutch : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "explanation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "intro-title"
  }, languageToUse.explanationTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "explanation-text"
  }, languageToUse.explanationText1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "explanation-text"
  }, languageToUse.explanationText2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "explanation-text"
  }, languageToUse.explanationText3));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Explanation);

/***/ }),

/***/ "./src/components/Hero.jsx":
/*!*********************************!*\
  !*** ./src/components/Hero.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/languages */ "./src/content/languages.js");
/* harmony import */ var _styles_Hero_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Hero.css */ "./src/styles/Hero.css");
/* harmony import */ var _styles_Hero_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Hero_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_logo_hero_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/logo-hero.svg */ "./src/images/logo-hero.svg");





const Hero = props => {
  let {
    language,
    languageToUse
  } = props;
  language === "english" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_1__.content.english : null;
  language === "french" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_1__.content.french : null;
  language === "dutch" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_1__.content.dutch : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero-content-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_logo_hero_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "logo",
    className: "hero-logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "hero-title"
  }, languageToUse.heroTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "hero-title-2"
  }, languageToUse.underTitle))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./src/components/Insta.jsx":
/*!**********************************!*\
  !*** ./src/components/Insta.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Insta_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Insta.css */ "./src/styles/Insta.css");
/* harmony import */ var _styles_Insta_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Insta_css__WEBPACK_IMPORTED_MODULE_1__);



const Insta = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "insta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "insta-feed",
    "data-mc-src": "b5424409-4089-4d37-8b5e-1a01f0e8caba#null"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Insta);

/***/ }),

/***/ "./src/components/Intro.jsx":
/*!**********************************!*\
  !*** ./src/components/Intro.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/languages */ "./src/content/languages.js");
/* harmony import */ var _styles_Intro_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Intro.css */ "./src/styles/Intro.css");
/* harmony import */ var _styles_Intro_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Intro_css__WEBPACK_IMPORTED_MODULE_2__);




const Intro = props => {
  let {
    language,
    languageToUse
  } = props;
  language === "english" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_1__.content.english : null;
  language === "french" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_1__.content.french : null;
  language === "dutch" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_1__.content.dutch : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "intro"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "intro-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "intro-title"
  }, languageToUse.introTitle1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "intro-title"
  }, languageToUse.introTitle2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "intro-text-p"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, languageToUse.introText1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bold"
  }, languageToUse.introText1B), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, languageToUse.introText2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bold"
  }, languageToUse.introText2B), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, languageToUse.introText3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bold"
  }, languageToUse.introText3B), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, languageToUse.introText4)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "intro-text-p"
  }, languageToUse.introText5), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "intro-text-p bold"
  }, languageToUse.introText6)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);

/***/ }),

/***/ "./src/components/USP.jsx":
/*!********************************!*\
  !*** ./src/components/USP.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _content_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/languages */ "./src/content/languages.js");
/* harmony import */ var _styles_USP_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/USP.css */ "./src/styles/USP.css");
/* harmony import */ var _styles_USP_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_USP_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_bootfittingIntroImage_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/bootfittingIntroImage.jpg */ "./src/images/bootfittingIntroImage.jpg");








const USP = props => {
  let {
    language,
    languageToUse
  } = props;
  language === "english" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_2__.content.english : null;
  language === "french" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_2__.content.french : null;
  language === "dutch" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_2__.content.dutch : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "usp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "usp-intro"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/bootfitting",
    className: "usp-link-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_bootfittingIntroImage_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "bootfitting",
    className: "usp-intro-image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "usp-link"
  }, languageToUse.bootfitting)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "usp-intro-text"
  }, languageToUse.Usp1Text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "usp-intro"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/mojo",
    className: "usp-link-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_bootfittingIntroImage_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "ski mojo",
    className: "usp-intro-image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "usp-link"
  }, languageToUse.mojo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "usp-intro-text"
  }, languageToUse.Usp2Text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "usp-intro "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/services",
    className: "usp-link-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_bootfittingIntroImage_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "",
    className: "usp-intro-image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "usp-link"
  }, languageToUse.ourServices)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "usp-intro-text"
  }, languageToUse.Usp3Text)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (USP);

/***/ }),

/***/ "./src/content/intake.js":
/*!*******************************!*\
  !*** ./src/content/intake.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const intakeInfo = {
  companyName: "Zenith",
  companyAddress: "Immeuble Le Zénith, Place Caron Val Thorens",
  domainName: "zenith-skishop.com",
  contactEmail: "zenith-skishop@wanadoo.fr",
  siteName: "Zenith Ski Shop",
  highlightColor: "#ff00ff",
  taxNumber: "1313"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intakeInfo);

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content_languages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/languages */ "./src/content/languages.js");
/* harmony import */ var _content_intake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/intake */ "./src/content/intake.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.jsx");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Hero */ "./src/components/Hero.jsx");
/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Intro */ "./src/components/Intro.jsx");
/* harmony import */ var _components_USP__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/USP */ "./src/components/USP.jsx");
/* harmony import */ var _components_Insta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Insta */ "./src/components/Insta.jsx");
/* harmony import */ var _components_Explanation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Explanation */ "./src/components/Explanation.jsx");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Contact */ "./src/components/Contact.jsx");













const IndexPage = function (props) {
  let {
    language,
    languageToUse
  } = props;
  language === "english" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_3__.content.english : null;
  language === "french" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_3__.content.french : null;
  language === "dutch" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_3__.content.dutch : null;
  console.log(language);
  console.log(languageToUse);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, languageToUse.indexTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "robots",
    content: "index, follow"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: languageToUse.metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "keywords",
    content: languageToUse.metaKeywords
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "canonical",
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    src: "https://cdn2.woxo.tech/a.js#60ca0c172d51e300159c2b7c",
    async: true,
    "data-usrc": true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-placeholder"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_6__["default"], {
    language: language,
    languageToUse: languageToUse
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Intro__WEBPACK_IMPORTED_MODULE_7__["default"], {
    language: language,
    languageToUse: languageToUse
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_USP__WEBPACK_IMPORTED_MODULE_8__["default"], {
    language: language,
    languageToUse: languageToUse
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Insta__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Explanation__WEBPACK_IMPORTED_MODULE_10__["default"], {
    language: language,
    languageToUse: languageToUse
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_11__["default"], {
    language: language,
    languageToUse: languageToUse
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://zenith-skishop.notresphere.com/location-materiel",
    target: "blank",
    className: "book-link"
  }, languageToUse.book));
};

IndexPage.Layout = _components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./src/styles/Contact.css":
/*!********************************!*\
  !*** ./src/styles/Contact.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/Explanation.css":
/*!************************************!*\
  !*** ./src/styles/Explanation.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/Hero.css":
/*!*****************************!*\
  !*** ./src/styles/Hero.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/Insta.css":
/*!******************************!*\
  !*** ./src/styles/Insta.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/Intro.css":
/*!******************************!*\
  !*** ./src/styles/Intro.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/USP.css":
/*!****************************!*\
  !*** ./src/styles/USP.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./src/images/at.png":
/*!***************************!*\
  !*** ./src/images/at.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4wIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFCOTlFMTlFMEJGMzExRURBNUUyQTQ0Q0MyNzU0RDBGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFCOTlFMTlGMEJGMzExRURBNUUyQTQ0Q0MyNzU0RDBGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUI5OUUxOUMwQkYzMTFFREE1RTJBNDRDQzI3NTREMEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUI5OUUxOUQwQkYzMTFFREE1RTJBNDRDQzI3NTREMEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5gtElEAAAOuUlEQVR42uxdCbRVVRne94GPsdcDiSFQCMGQeUYiAkIkQkkSlVpYgoGBrGIJSWGLXJWSlSARprIUUNFEw1gCCikImMwoMiczAjI+wAiBgL6P+9+6XN+959/n7HOH1/vX+td5F/b8nb33P+19IibHqH7detXxqA2+ElwFXCkhyVlwkfBB8L4du3edzZX+RbJ44Cvj0RHcDtxMuD64go/iDoC3gDeD3wevBG8EUP8uBSQ5AHkCQE9wL3BrcF6IVZ4CLwG/BZ4DcLaWAhIFohUed4L7g2tlsCkfgv8MnpFJcCIZAqEcHgPAw2QmZBstA/8J/DLA+bTEAiL7wnDwCHCNHNhjD4EfIzgA5niJAQRA5AsQY0Q6yjU6Af4deCKA+WdOAwIwbsJjPLihyX36GDwa/ByAuZhTgACImnhMAvczJY+4xwwCKFtyAhCAcSseT4GrOiqS6/c68HrwdvAuUfqOgT+VJYVUWfSUqrJHXQ1uAG4CbgH+gsNungE/CP4tgLmQlYAAiPJ4/AE8OGBRJ0U/eAO8lEqdiyUC7aNi2Rl8g+g7LgBaRIkR7dufVYCgs3XxeAXc1mcRNG+8Sj0AvAAdPBPy3lYGj07g74LvABcGlMb6oc1LswIQdI4gzAVX95H9I5lVT6NDxzKkF5UXUH4UQC86R0kSfXgqo4CIFDXT2NuY9oJ/BZ6aTTYl9OcbeDwA/qrPIn4NHut3iY0EbPzteDwPvsJyf3iYClfYy1LAvvXhhg3+so/sT9AK4QeUMgHBeBFc1iIb94jeaOgbRSeOn89muRbt21qlsJDLz2mZLTb95BJeA/nnoZzwZ4gsU7MsZsZJeWNm5KLSgf42wmM6uL1l1nHo85hQZ4hs4PPA5ZRZ6H/ohoYtyVUtEG/5Ebzt06XPnSyydka+IuRfEcoMEdF2hdEbBl8CDwQYp0uKio4x6EvTifmspzIZUWm8CWPwulNARDRcaqFn/B58f1g2nwyD0lJWCa3/hhtJW4zFdq+ENh65iRZg/AyV/6QkgkFCv96XpWu7MguVzpniBwoOiEzTIcrKH0CDf2NKOKGPO/HoagFKa9FRgi1ZYrXdaHSGwglo6H3m/4gwPleZqPW3tnI/6ZrKxKIBhBvz7Uodo59Ly2eKNtGqe52JWnH5whSAK5qo1ZcOpN1g+sU3pyMECO1pLKAUKJIz8qVlsnZFPCrqjcccRSWbwB3C9KZJMASXzhtNNDRIs9xSunsb/Br4BbTvRJKyuTl/yUTN+gf87H0oo5eMlaZdY1DHOCtAxO26wXh7+v4FbhOGswZtoH1sEPhucKuAxRGcqVzH0dYDCfXQxz9Bfp6VGbarGN6OvAdTtPcXJuoj8SK+uNegrEOJ/5HKHDDU6NyuI12DIS8DI1JGy5LkgipImQNR/ljZ72Lmm3iw86XfxfX9TXCPFHXQWNoN3MWjLVxyCd69KilL1uifKzq5EPykYzDYoXXyxtYMYfUjMAxYWIi6YgpuS2XejR6SF/fPu2QGeNFg1F9bK/YyQqSaR4G01N7jSteg4gl+XEBulAYB6WvgVaiTgkFjF4AIKFzaxirKoh1wlCcgslz8WKMoovJtjsC4Bo/lskymk64SU5DWkrtBmW6SBjzujej757xmyADFUnEU/JAjMNoJGC0ypEpUskirGWQjDrfRiqQE4/tegAzT2KlQ6UkHYHxdxNJqJvtpr02fkXauzD4vGpgUEDGatfEogI2a7ACMjiK3V8wRpXyTjzyaVaS1KJbFir13KgqYAvQ/caDZzjP+znrEE/cwxmpRr2CQAS3S15qoI6mSY0A2+sgzV9rYwCMdgwl/eRkgcj5DYyJ5IiAYXDfpbSwMMDAUtWfjxdiTpA5KMD1FWuzpCJD1thkoBqMtU/DnIx5J+8QAiV+yOoDreGRc4kCyetr4CxzYKqaTZmjDpGRgyECcA/MQDiNI6G4+mKEZQqLb+qJi2aqaCEgvReEvBpwdPJRzm2U2doZ2nxYY4L/a6j2yubayEFmT0WY/mVD/PhM1PKaiiOhFVoBckKXGLxhcoh6zzEYBglEqY4KEDIntiuGje3wWsTug4VRjoO30X0DEVOIVsbemOGOYBdF2Y3NIh7pOd60vWgEKl63vyItlSx8ErP5NRZpW8TOko/E2G88PMDto3v6hRRZaZm/GIK52KSahvHfxmJYmkTee3jPRKP1U1CwekHaKQt8J0KDRIpJqaQgGb5kJh8YpNlmngIjm7jXLqlMCzYtHx4OW+5wdVPwGWWTh6aTnw9LuREr8u2W2DQ6q1rgo6moB2ZXM26agfmKz0RDDZUalQeueY5H2goMli7RTkaZmDJD6rpWiOPqeRdpHAgoOWlplM6kcHY3W6ELV8uTuEC8Txg6fy1WlmHytoE+CWgFsxNg0KITF9c+LynOGaMJXdvlsRFejD8h+OV1nwUWkTjcgKj2GgFzpaLolA0RLL5j0kc3Rgg2O6rxCC4gmAM7vUbMmynRnfEg+QagwAzNEY30+RUA0/gi/m9p1ynRr03ynSH1luvNKcVVDmpXonDbY2lrklWj5ug5ldJfUVJlum8PIR82B2KNh3kdF3UN73GFvmgHplub9Qzsr9+VZDK4tVbZIW5S2tSoqimsB2eywak1o00d5yv2hnI8GfN5kJ/U1evfuDkcvQQXFfnrpbsg85dvp50olG/9FfhoBGWGRdrujOumN9TrPuS4m9mqUJD9hOqcs0l6dpuWK0fxtMgDIDYo0a2KAfKxIXNdHI1iu1hnUIg1gUDF71HKG73dU/bcVaVbFAGGl5xzJ7f9bfKPiotZl2l68lmESozpsgit2OrqBqJVi/6C/ZPElQCRi22vgGvtsj1ZszFe+RX4HhaFA91tmc2V1vleRZmksKjJPOXDXiqRgS4st0t4nsWGuwaCvZ6axvwO4yEHd3Bs17ofZsT9ijfTyd5Sx3AxjZOOH5z5yTwhg8HhDgY/sBQ6awMtrvIyKXNpnJAKyVlF4J9vWYBoSaBtv26MYxPaOwGBY0zvGfyB3w4D132Kid3B50SyM05FEQN5VZLzRZ9umWqTlsjgfnekcRAkD8xaJuQHf8jpy6YyfNlB4mKZMPjH+R568yfR3fOg1Q3xKQozDtTFO0jS+CHU9bFMfxVow12saKkcaN7fljfIBBkF8S2mpYHzy8sS94RJVKSxsKBplMqJTZ33RieNWBjekP4uyCXx3i2xMz1kyDHlrg8+AD6Gscwmdr4h/7wimJPOMbKAuTTatUfYO1PuBAogI0g6QDVqzTNK0fwfKvkyaiyRosV7RGIyt7evjrSkne0n9AINzUXSmI3HmnC+acL+gEKNnwePR93XF9I3+pG+Z6DHADhZlFnuXViRh0A55rLtUYOqkOqudAhTeyva2CXCLXRYQx4cWYPr+OV6MyGzqo0/0QrYtzilXJm5pOY8pR5drc4+l5BjSWkcxIs8elH/OcukKizbIjLPdE2klrmeipnQewqnpY4YSzO7Jwp0SC9NcwTdcTupak1wnMSXDYDDOlmcbB2Wgbr6Q/VOdsUkEZIHCjMJ1e0CARg2VDTgTxD2yCwbkMHieKG7pBIOX88z30sDjl5WLWFYqyRvkJX1M9nOzqNTxmiwZXUx6PplBex3vqhoav26jHRRPeUSibcj1UxBhNP8Cr4Sf2YzQSEpDwz1UfoqWxzG4viLUeXUqeDHqWibgF4Q4GP8A34LBeJYvQ2I7eJWriKBdQ3o5GN7UqzgJTQUIGnkajeSy5GXCuB7pnkH6U35birzbUcYUAb+NsQtg02yevKF6oFx3kerlWIJ2LJQ+V3dUPx1/PIbB63HVhspIEhGV4hz9yV5nOl5CZf0d2Z5qiSw/MOCg8HAor7aYbnsMDW0oK/WzHU181r9frBMT/ZwYSHVfFm/j0fifb0XFs1y91vLVgh5iO+ssYni+h27A5WCxKK4bHbSB48JTZb2lHU1M8oD0C7Is8tgal78Fcdc+GZeA8CuaFM+8Qk0ZZtpcTps6JwHoalHCKsmsPSFLEm9/Oxy2RCB+Guof/N4IQ6KondOhxLq3ubzD3uuKP4qojyvKWS7iZM584jRbyUvL5FqouUDlehP97l8pBaQyCp2BvpLBCntNK6S9SHG2dFhDAkRAOYyBpmiruTOkG9IeRp5VpUMbEiCiLK6QZamBInlvpD9u80WAUlJu6gkbPP0PjK7TBs0xDurBknr/e8YBEVBaiilAe+kYL6sZlO4P/JZkKesykq8C3Gb0IaK8W2S5XHJZoih2nVJGARFQqI3axE8x3uo9dODuEgJEAZgxwnv9RqUE3tSLkbzWMuhATAsaoruzjwQkLEP+ohwEoizaTkX5LyYazU6DaCP05bmMAyKgrBZQvmmxF1FKG4J8jBZZjTLO5AAQeWgr44759QfeSRl/2Kc+3RXoxyZX9bn4sCQ/XTrN2H3LkETzNAPa/hj2N8p99ov9Yd9oQk8Vvc4vlTZCH05lBSDS+K4mettcFR/ZaShkdONkVzdlB+wLb7umv/0HxvsOyhjxjpafZg0g0pEGMq2bBiiGX57hjQ6v+gk1CtB2+l9uNtGbi3r6GBf6y5u7+EqE6893Uz/hJct3BSyKyuRK8N9MNJZrZdC7ghPaSRc0/R0MIOeJ3K84GIsZaOOArAIkrsN802gpdiWrE6AtwtxAeZsPo2OOCVM4iO1DsWszuPnSf1FDnoyabCRcz2HfOTvGgx9y8dJEQlwGOBATRDksqcQ43lEu977QQ3AATA95g5qWICB47mUEgFiYcU3dh2bPfYAHH/kdxL05DsRmmfEtwwAjLTMkYbbki0g50uhM+dlCvK6WXzqYHbb1OpKJ3knQAM0uPNfRw6TnSIEt8etzjHV+EiCsSVelkUz3GuBQ+aK4SCty6ww3h24Chnu+IrPhZLobEMmmVxLg8OOOvWTWUD9IxwU2jOPit94XgV/PtBknYrKUZFlrJApcM5HS+LuWzyWObzvvLtkgugyfywDA0Wzqd9YCkgIoGv3qiLJHtzLtZ/kJSuQJeTKQjSaY/Rj407nQv/8IMAC7oNXeWfI96gAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/images/bootfittingIntroImage.jpg":
/*!**********************************************!*\
  !*** ./src/images/bootfittingIntroImage.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/bootfittingIntroImage-00bed75bff4e310a6a4e20ba1ea14784.jpg");

/***/ }),

/***/ "./src/images/location.png":
/*!*********************************!*\
  !*** ./src/images/location.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4wIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIxQTY2RjZGMEZFMDExRURCNjRCQjRCQzBCQzE4RUU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIxQTY2RjcwMEZFMDExRURCNjRCQjRCQzBCQzE4RUU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjFBNjZGNkQwRkUwMTFFREI2NEJCNEJDMEJDMThFRTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjFBNjZGNkUwRkUwMTFFREI2NEJCNEJDMEJDMThFRTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz45jDyiAAAKc0lEQVR42uxd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");

/***/ }),

/***/ "./src/images/logo-hero.svg":
/*!**********************************!*\
  !*** ./src/images/logo-hero.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/logo-hero-a8e697e2d15a95995d8b4b6c03c5db6f.svg");

/***/ }),

/***/ "./src/images/phone.png":
/*!******************************!*\
  !*** ./src/images/phone.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4wIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIxQTY2RjczMEZFMDExRURCNjRCQjRCQzBCQzE4RUU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIxQTY2Rjc0MEZFMDExRURCNjRCQjRCQzBCQzE4RUU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjFBNjZGNzEwRkUwMTFFREI2NEJCNEJDMEJDMThFRTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjFBNjZGNzIwRkUwMTFFREI2NEJCNEJDMEJDMThFRTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4lR5VPAAAI30lEQVR42uxc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");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jsx.js.map