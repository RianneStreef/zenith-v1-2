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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, languageToUse.contactTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "contact-text"
  }, languageToUse.contactIntro1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "contact-text"
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_location_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "",
    className: "contact-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "address address-bold"
  }, languageToUse.addressContent1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "address"
  }, " ", languageToUse.addressContent2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "address"
  }, " ", languageToUse.addressContent3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "address"
  }, " ", languageToUse.addressContent4)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
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
  }, languageToUse.explanationTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "explanation-text"
  }, languageToUse.explanationText1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "explanation-text bold"
  }, languageToUse.explanationText2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "explanation-text"
  }, languageToUse.explanationText3)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "explanation-text"
  }, languageToUse.explanationText4), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "explanation-text bold"
  }, languageToUse.explanationText5)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "explanation-text"
  }, languageToUse.explanationText6)));
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
/* harmony import */ var _images_serviceIntro_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/serviceIntro.jpg */ "./src/images/serviceIntro.jpg");








const USP = props => {
  let {
    language,
    languageToUse,
    pathname,
    setPathname
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
    className: "usp-link-container",
    onClick: () => setPathname("/mojo")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_modjoIntroImage_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
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
    src: _images_serviceIntro_jpg__WEBPACK_IMPORTED_MODULE_6__["default"],
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
    languageToUse,
    pathname,
    setPathname
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
    languageToUse: languageToUse,
    pathname: pathname,
    setPathname: setPathname
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Insta__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Explanation__WEBPACK_IMPORTED_MODULE_10__["default"], {
    language: language,
    languageToUse: languageToUse
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_11__["default"], {
    language: language,
    languageToUse: languageToUse
  }));
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi41LjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FscXVlXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTQxLjcgMTQxLjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE0MS43IDE0MS43OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMjIxRjIwO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOTEuNCw1MS44bC04LTFsLTAuNywzLjdjLTIuNC0yLjUtNi4xLTQuNy0xMS42LTQuN2MtMTAuNCwwLTIxLjksOS42LTIxLjksMjMuM2MwLDkuOCw3LjQsMTcuMiwxNy4xLDE3LjINCgljNi41LDAsMTEtMy4xLDE0LjEtNi4zYzIuNCw0LDYuNyw2LjMsMTIuMiw2LjNjOC41LDAsMTcuNi03LjEsMTcuNi0yMi44YzAtOS4zLTQuMi0xOC40LTExLjQtMjUuMmMtNy40LTYuOS0xNy4zLTEwLjctMjcuOS0xMC43DQoJYy0yMS44LDAtMzkuNCwxNy43LTM5LjQsMzkuNGMwLDIyLDE3LjYsMzkuMyw0MC4xLDM5LjNjOC43LDAsMTYuMi0yLjEsMjMuNy02LjdsMS43LTFsLTMuMy01LjVsLTEuNywxYy02LjcsMy45LTEyLjYsNS41LTIwLjQsNS41DQoJYy0xOSwwLTMzLjMtMTQtMzMuMy0zMi42YzAtMTguNCwxNC4zLTMyLjcsMzIuNi0zMi43YzguNywwLDE3LDMuMywyMy4yLDkuMmM1LjgsNS41LDkuMiwxMi44LDkuMiwyMGMwLDcuOC0zLjIsMTUuNy0xMC4zLDE1LjcNCgljLTMuOCwwLTUuNy0xLjgtNS43LTUuNWMwLTAuNCwwLjEtMS44LDAuNy01LjhMOTEuNCw1MS44eiBNNjcsODIuM2MtNS44LDAtOS40LTMuNy05LjQtOS42YzAtOC44LDcuMS0xNC45LDEzLjUtMTQuOQ0KCWM1LjQsMCw5LjMsNC4yLDkuMyw5LjlDODAuNCw3NS4zLDczLjksODIuMyw2Nyw4Mi4zeiIvPg0KPC9zdmc+DQo=");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/bootfittingIntroImage-26ca9f2e7f05fc497200839d1e94616c.jpg");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi41LjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FscXVlXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTQxLjcgMTQxLjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE0MS43IDE0MS43OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMjIxRjFGO30NCjwvc3R5bGU+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzAuNywyOS40Yy0xMy45LDAtMjUuMSwxMS4xLTI1LjIsMjQuOEM0NS4zLDcxLDcwLjcsOTcuOSw3MC43LDk3LjlzMjUuMi0yNS44LDI1LjItNDMuNw0KCQlDOTYsNDAuNSw4NC43LDI5LjQsNzAuNywyOS40eiBNNzAuOCw2M2MtNC45LDAtOC44LTMuOS04LjgtOC42YzAtNC44LDMuOS04LjYsOC44LTguNnM4LjgsMy45LDguOCw4LjZTNzUuNiw2Myw3MC44LDYzeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03MC43LDExMi43Yy0xNi45LDAtMzQuOS01LTM0LjktMTQuM2MwLTYuMSw4LTExLDIxLjMtMTMuM2MxLjEtMC4yLDIuMiwwLjYsMi40LDEuN2MwLjIsMS4xLTAuNiwyLjItMS43LDIuNA0KCQlDNDYuMSw5MS4xLDQwLDk1LjMsNDAsOTguNGMwLDQuOCwxMy4yLDEwLjIsMzAuOCwxMC4yczMwLjgtNS40LDMwLjgtMTAuMmMwLTMuMi02LjMtNy40LTE4LjMtOS4zYy0xLjEtMC4yLTEuOS0xLjItMS43LTIuNA0KCQljMC4yLTEuMSwxLjItMS45LDIuNC0xLjdjMTMuNCwyLjEsMjEuOCw3LjIsMjEuOCwxMy4zQzEwNS42LDEwNy43LDg3LjYsMTEyLjcsNzAuNywxMTIuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/modjoIntroImage-714f55ac537983e2c57810642de4e6f3.jpg");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi41LjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FscXVlXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTQxLjcgMTQxLjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE0MS43IDE0MS43OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMjIxRjFGO30NCjwvc3R5bGU+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzEuNSwzNy4xYy0zNCwwLTQ1LjgsMTkuMy00NS44LDE5LjN2Ny4yYzAsMi4yLDEuOCw0LDQsNGgxNS43YzIuMiwwLDQtMS44LDQtNHYtNy4yYzAsMCw3LjEtNy4zLDIyLjEtNy4zDQoJCVM5Miw1Ni40LDkyLDU2LjR2Ny4yYzAsMi4yLDEuOCw0LDQsNGgxNS43YzIuMiwwLDQtMS44LDQtNHYtNy4yQzExNS44LDU2LjQsMTA1LjUsMzcuMSw3MS41LDM3LjF6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTk5LjMsNzEuMkw5OS4zLDcxLjJoLTMuMWMtNS4xLDAtOS4zLTQuMi05LjMtOS4zdi00YzAtMC40LTAuMS0wLjgtMC40LTFjLTAuMS0wLjEtMC4zLTAuMy0wLjUtMC4zDQoJCWMtMS4zLTAuNy03LjItMy40LTE1LjMtMy40cy0xNCwyLjgtMTUuMywzLjRjLTAuMiwwLjEtMC4zLDAuMi0wLjUsMC4zYy0wLjMsMC4zLTAuNCwwLjctMC40LDF2NGMwLDUuMS00LjIsOS4zLTkuMyw5LjNoLTMuMWwwLDANCgkJTDMwLjcsODkuNWMtMC4yLDAuMi0wLjIsMC41LTAuMiwwLjh2MTMuMWMwLDAuOSwwLjcsMS42LDEuNiwxLjZoMzguNmgzOC42YzAuOSwwLDEuNi0wLjcsMS42LTEuNlY5MC4zYzAtMC4zLTAuMS0wLjYtMC4yLTAuOA0KCQlMOTkuMyw3MS4yeiBNNzAuNyw5Ni40Yy03LjcsMC0xNC02LjMtMTQtMTRzNi4zLTE0LDE0LTE0czE0LDYuMywxNCwxNEM4NC44LDkwLjEsNzguNSw5Ni40LDcwLjcsOTYuNHoiLz4NCgk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI3MC43IiBjeT0iODIuNiIgcj0iMTAuMSIvPg0KPC9nPg0KPC9zdmc+DQo=");

/***/ }),

/***/ "./src/images/serviceIntro.jpg":
/*!*************************************!*\
  !*** ./src/images/serviceIntro.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/serviceIntro-ab80e616ba2f3a395223a313d0bc8167.jpg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jsx.js.map