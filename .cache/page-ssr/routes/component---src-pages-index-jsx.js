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
/* harmony import */ var _images_location_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/location.svg */ "./src/images/location.svg");
/* harmony import */ var _images_phone_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/phone.svg */ "./src/images/phone.svg");
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
    src: _images_location_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "",
    className: "contact-icon"
  }), languageToUse.addressContent1, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), languageToUse.addressContent2, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), languageToUse.addressContent3, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), languageToUse.addressContent4, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_phone_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
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
/* harmony import */ var _images_modjoIntroImage_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/modjoIntroImage.jpg */ "./src/images/modjoIntroImage.jpg");








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
    className: "usp-intro bootfitting-intro"
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
    className: "usp-intro modjo-intro"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/modjo",
    className: "usp-link-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_modjoIntroImage_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "ski modjo",
    className: "usp-intro-image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "usp-link"
  }, languageToUse.modjo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "usp-intro-text"
  }, languageToUse.Usp2Text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "usp-intro services-intro"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/services",
    className: "usp-link-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_modjoIntroImage_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4wIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFCOTlFMTlFMEJGMzExRURBNUUyQTQ0Q0MyNzU0RDBGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFCOTlFMTlGMEJGMzExRURBNUUyQTQ0Q0MyNzU0RDBGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUI5OUUxOUMwQkYzMTFFREE1RTJBNDRDQzI3NTREMEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUI5OUUxOUQwQkYzMTFFREE1RTJBNDRDQzI3NTREMEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5gtElEAAAOuUlEQVR42uxd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");

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

/***/ "./src/images/location.svg":
/*!*********************************!*\
  !*** ./src/images/location.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi40LjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FscXVlXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjUwIDI1MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjUwIDI1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzIyMUYxRjt9DQo8L3N0eWxlPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyNC44LDgzLjVjLTEzLjksMC0yNS4xLDExLjEtMjUuMiwyNC44Yy0wLjIsMTYuOCwyNS4yLDQzLjcsMjUuMiw0My43czI1LjItMjUuOCwyNS4yLTQzLjcNCgkJQzE1MC4xLDk0LjYsMTM4LjgsODMuNSwxMjQuOCw4My41eiBNMTI0LjksMTE3LjFjLTQuOSwwLTguOC0zLjktOC44LTguNmMwLTQuOCwzLjktOC42LDguOC04LjZjNC45LDAsOC44LDMuOSw4LjgsOC42DQoJCUMxMzMuNywxMTMuMiwxMjkuNywxMTcuMSwxMjQuOSwxMTcuMXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTI0LjgsMTY2LjhjLTE2LjksMC0zNC45LTUtMzQuOS0xNC4zYzAtNi4xLDgtMTEsMjEuMy0xMy4zYzEuMS0wLjIsMi4yLDAuNiwyLjQsMS43YzAuMiwxLjEtMC42LDIuMi0xLjcsMi40DQoJCWMtMTEuNywxLjktMTcuOCw2LjEtMTcuOCw5LjJjMCw0LjgsMTMuMiwxMC4yLDMwLjgsMTAuMnMzMC44LTUuNCwzMC44LTEwLjJjMC0zLjItNi4zLTcuNC0xOC4zLTkuM2MtMS4xLTAuMi0xLjktMS4yLTEuNy0yLjQNCgkJYzAuMi0xLjEsMS4yLTEuOSwyLjQtMS43YzEzLjQsMi4xLDIxLjgsNy4yLDIxLjgsMTMuM0MxNTkuNywxNjEuOCwxNDEuNywxNjYuOCwxMjQuOCwxNjYuOHoiLz4NCjwvZz4NCjwvc3ZnPg0K");

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

/***/ "./src/images/modjoIntroImage.jpg":
/*!****************************************!*\
  !*** ./src/images/modjoIntroImage.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/modjoIntroImage-4ec7fdfcf338493507aa9a714e7c7683.jpg");

/***/ }),

/***/ "./src/images/phone.svg":
/*!******************************!*\
  !*** ./src/images/phone.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi40LjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FscXVlXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjUwIDI1MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjUwIDI1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzIyMUYxRjt9DQo8L3N0eWxlPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyNS42LDkxLjJjLTM0LDAtNDUuOCwxOS4zLTQ1LjgsMTkuM3Y3LjJjMCwyLjIsMS44LDQsNCw0aDE1LjdjMi4yLDAsNC0xLjgsNC00di03LjJjMCwwLDcuMS03LjMsMjIuMS03LjMNCgkJczIwLjUsNy4zLDIwLjUsNy4zdjcuMmMwLDIuMiwxLjgsNCw0LDRoMTUuN2MyLjIsMCw0LTEuOCw0LTR2LTcuMkMxNjkuOSwxMTAuNSwxNTkuNiw5MS4yLDEyNS42LDkxLjJ6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1My40LDEyNS4zTDE1My40LDEyNS4zbC0zLjEsMGMtNS4xLDAtOS4zLTQuMi05LjMtOS4zdi00YzAtMC40LTAuMS0wLjgtMC40LTFjLTAuMS0wLjEtMC4zLTAuMy0wLjUtMC4zDQoJCWMtMS4zLTAuNy03LjItMy40LTE1LjMtMy40Yy04LjEsMC0xNCwyLjgtMTUuMywzLjRjLTAuMiwwLjEtMC4zLDAuMi0wLjUsMC4zYy0wLjMsMC4zLTAuNCwwLjctMC40LDF2NGMwLDUuMS00LjIsOS4zLTkuMyw5LjNoLTMuMQ0KCQlsMCwwbC0xMS40LDE4LjNjLTAuMiwwLjItMC4yLDAuNS0wLjIsMC44djEzLjFjMCwwLjksMC43LDEuNiwxLjYsMS42aDM4LjZoMzguNmMwLjksMCwxLjYtMC43LDEuNi0xLjZ2LTEzLjENCgkJYzAtMC4zLTAuMS0wLjYtMC4yLTAuOEwxNTMuNCwxMjUuM3ogTTEyNC44LDE1MC41Yy03LjcsMC0xNC02LjMtMTQtMTRjMC03LjcsNi4zLTE0LDE0LTE0YzcuNywwLDE0LDYuMywxNCwxNA0KCQlDMTM4LjksMTQ0LjIsMTMyLjYsMTUwLjUsMTI0LjgsMTUwLjV6Ii8+DQoJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTI0LjgiIGN5PSIxMzYuNyIgcj0iMTAuMSIvPg0KPC9nPg0KPC9zdmc+DQo=");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jsx.js.map