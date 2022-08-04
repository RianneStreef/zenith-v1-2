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
/* harmony import */ var _images_at_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/at.svg */ "./src/images/at.svg");







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
    src: _images_at_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
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

/***/ "./src/images/at.svg":
/*!***************************!*\
  !*** ./src/images/at.svg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMS4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjA3LjggMjAuNzNjLTkzLjQ1IDE4LjMyLTE2OC43IDkzLjY2LTE4NyAxODcuMWMtMjcuNjQgMTQwLjkgNjguNjUgMjY2LjIgMTk5LjEgMjg1LjFjMTkuMDEgMi44ODggMzYuMTctMTIuMjYgMzYuMTctMzEuNDlsLjAwMDEtLjY2MzFjMC0xNS43NC0xMS40NC0yOC44OC0yNi44NC0zMS4yNGMtODQuMzUtMTIuOTgtMTQ5LjItODYuMTMtMTQ5LjItMTc0LjJjMC0xMDIuOSA4OC42MS0xODUuNSAxOTMuNC0xNzUuNGM5MS41NCA4Ljg2OSAxNTguNiA5MS4yNSAxNTguNiAxODMuMmwwIDE2LjE2YzAgMjIuMDktMTcuOTQgNDAuMDUtNDAgNDAuMDVzLTQwLjAxLTE3Ljk2LTQwLjAxLTQwLjA1di0xMjAuMWMwLTguODQ3LTcuMTYxLTE2LjAyLTE2LjAxLTE2LjAybC0zMS45OCAuMDAzNmMtNy4yOTkgMC0xMy4yIDQuOTkyLTE1LjEyIDExLjY4Yy0yNC44NS0xMi4xNS01NC4yNC0xNi4zOC04Ni4wNi01LjEwNmMtMzguNzUgMTMuNzMtNjguMTIgNDguOTEtNzMuNzIgODkuNjRjLTkuNDgzIDY5LjAxIDQzLjgxIDEyOCAxMTAuOSAxMjhjMjYuNDQgMCA1MC40My05LjU0NCA2OS41OS0yNC44OGMyNCAzMS4zIDY1LjIzIDQ4LjY5IDEwOS40IDM3LjQ5QzQ2NS4yIDM2OS4zIDQ5NiAzMjQuMSA0OTUuMSAyNzcuMlYyNTYuM0M0OTUuMSAxMDcuMSAzNjEuMi05LjMzMiAyMDcuOCAyMC43M3pNMjM5LjEgMzA0LjNjLTI2LjQ3IDAtNDgtMjEuNTYtNDgtNDguMDVzMjEuNTMtNDguMDUgNDgtNDguMDVzNDggMjEuNTYgNDggNDguMDVTMjY2LjUgMzA0LjMgMjM5LjEgMzA0LjN6Ii8+PC9zdmc+");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/bootfittingIntroImage-cbf2a1da38c68a2c4c868682d3e92013.jpg");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMS4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTY4LjMgNDk5LjJDMTE2LjEgNDM1IDAgMjc5LjQgMCAxOTJDMCA4NS45NiA4NS45NiAwIDE5MiAwQzI5OCAwIDM4NCA4NS45NiAzODQgMTkyQzM4NCAyNzkuNCAyNjcgNDM1IDIxNS43IDQ5OS4yQzIwMy40IDUxNC41IDE4MC42IDUxNC41IDE2OC4zIDQ5OS4ySDE2OC4zek0xOTIgMjU2QzIyNy4zIDI1NiAyNTYgMjI3LjMgMjU2IDE5MkMyNTYgMTU2LjcgMjI3LjMgMTI4IDE5MiAxMjhDMTU2LjcgMTI4IDEyOCAxNTYuNyAxMjggMTkyQzEyOCAyMjcuMyAxNTYuNyAyNTYgMTkyIDI1NnoiLz48L3N2Zz4=");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/modjoIntroImage-dbcdfe8271a16351eb70ac462f3a1e6a.jpg");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMS4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTExLjIgMzg3bC0yMy4yNSAxMDAuOGMtMy4yNjYgMTQuMjUtMTUuNzkgMjQuMjItMzAuNDYgMjQuMjJDMjA1LjIgNTEyIDAgMzA2LjggMCA1NC41YzAtMTQuNjYgOS45NjktMjcuMiAyNC4yMi0zMC40NWwxMDAuOC0yMy4yNUMxMzkuNy0yLjYwMiAxNTQuNyA1LjAxOCAxNjAuOCAxOC45Mmw0Ni41MiAxMDguNWM1LjQzOCAxMi43OCAxLjc3IDI3LjY3LTguOTggMzYuNDVMMTQ0LjUgMjA3LjFjMzMuOTggNjkuMjIgOTAuMjYgMTI1LjUgMTU5LjUgMTU5LjVsNDQuMDgtNTMuOGM4LjY4OC0xMC43OCAyMy42OS0xNC41MSAzNi40Ny04Ljk3NWwxMDguNSA0Ni41MUM1MDYuMSAzNTcuMiA1MTQuNiAzNzIuNCA1MTEuMiAzODd6Ii8+PC9zdmc+");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jsx.js.map