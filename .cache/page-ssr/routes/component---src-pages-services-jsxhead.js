exports.id = "component---src-pages-services-jsxhead";
exports.ids = ["component---src-pages-services-jsxhead"];
exports.modules = {

/***/ "./src/components/Hero2.jsx":
/*!**********************************!*\
  !*** ./src/components/Hero2.jsx ***!
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
/* harmony import */ var _styles_Hero2_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Hero2.css */ "./src/styles/Hero2.css");
/* harmony import */ var _styles_Hero2_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Hero2_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_logo_hero_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/logo-hero.svg */ "./src/images/logo-hero.svg");




const Hero2 = props => {
  let {
    language,
    languageToUse
  } = props;
  language === "english" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_1__.content.english : null;
  language === "french" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_1__.content.french : null;
  language === "dutch" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_1__.content.dutch : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_logo_hero_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "logo",
    className: "hero-logo-2"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero2);

/***/ }),

/***/ "./src/components/Partenaires.jsx":
/*!****************************************!*\
  !*** ./src/components/Partenaires.jsx ***!
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
/* harmony import */ var _styles_Partenaires_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Partenaires.css */ "./src/styles/Partenaires.css");
/* harmony import */ var _styles_Partenaires_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Partenaires_css__WEBPACK_IMPORTED_MODULE_2__);



const Partenaires = props => {
  let {
    language,
    languageToUse
  } = props;
  language === "english" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_1__.content.english : languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_1__.content.french;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partenaires"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, languageToUse.partners), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, languageToUse.siteValThorens, ": "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.valthorens.com/",
    target: "blank",
    className: "partner-link"
  }, "www.valthorens.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, languageToUse.logementAgence, ": "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.immobilier-valthorens.fr/",
    target: "blank",
    className: "partner-link"
  }, "www.immobilier-valthorens.fr"), ",", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.agencelacime.com/",
    target: "blank",
    className: "partner-link"
  }, "www.agencelacime.com"), ",", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.alpineimmo.com/",
    target: "blank",
    className: "partner-link"
  }, "www.alpineimmo.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " ", languageToUse.coursSki, ": "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.ski-cool.com/",
    target: "blank",
    className: "partner-link"
  }, "www.ski-cool.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " ", languageToUse.valthoFromSky, ": "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.libre-envol.com/",
    target: "blank",
    className: "partner-link"
  }, "www.libre-envol.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " ", languageToUse.savoie, ": "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.france-voyage.com/",
    target: "blank",
    className: "partner-link"
  }, "www.france-voyage.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " ", languageToUse.pasChere, ": "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.montagnepascher.com/",
    target: "blank",
    className: "partner-link"
  }, "www.montagnepascher.com"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Partenaires);

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
  domainName: "https://www.zenith-skishop.com",
  contactEmail: "zenith-skishop@wanadoo.fr",
  siteName: "Zenith Ski Shop",
  highlightColor: "#ff00ff",
  taxNumber: "38848588000016"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intakeInfo);

/***/ }),

/***/ "./src/pages/services.jsx?export=head":
/*!********************************************!*\
  !*** ./src/pages/services.jsx?export=head ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _styles_services_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/services.css */ "./src/styles/services.css");
/* harmony import */ var _styles_services_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_services_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.jsx");
/* harmony import */ var _components_Hero2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Hero2 */ "./src/components/Hero2.jsx");
/* harmony import */ var _components_Partenaires__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Partenaires */ "./src/components/Partenaires.jsx");
/* harmony import */ var _content_languages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content/languages */ "./src/content/languages.js");
/* harmony import */ var _content_intake__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../content/intake */ "./src/content/intake.js");
/* harmony import */ var _images_service1_square_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/service1-square.jpg */ "./src/images/service1-square.jpg");
/* harmony import */ var _images_service2_square_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/service2-square.jpg */ "./src/images/service2-square.jpg");
/* harmony import */ var _images_service3_square_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/service3-square.jpg */ "./src/images/service3-square.jpg");
/* harmony import */ var _images_service4_square_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/service4-square.jpg */ "./src/images/service4-square.jpg");













const ServicesPage = function (props) {
  let {
    language,
    languageToUse
  } = props;
  languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_7__.content.french;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let width = window.innerWidth;
    window.addEventListener("scroll", scrollImages);
    let serviceImage1 = document.getElementById("service-image-1");
    let serviceImage2 = document.getElementById("service-image-2");
    let serviceImage3 = document.getElementById("service-image-3");
    let serviceImage4 = document.getElementById("service-image-4");
    let serviceText1 = document.getElementById("serviceText1");
    let serviceText2 = document.getElementById("serviceText2");
    let serviceText3 = document.getElementById("serviceText3");
    let serviceText4 = document.getElementById("serviceText4");
    if (width < 768) {
      setTimeout(() => {
        serviceImage1.classList.add("slide-from-left");
      }, 500);
    } else {
      setTimeout(() => {
        serviceImage1.classList.add("slide-from-left");
        serviceText1.classList.add("remove-margin-left");
      }, 500);
    }
    function scrollImages() {
      let positionImage2 = serviceImage2.getBoundingClientRect();
      let positionImage3 = serviceImage3.getBoundingClientRect();
      let positionImage4 = serviceImage4.getBoundingClientRect();
      let scrollY = window.innerHeight;
      if (positionImage2.y < scrollY) {
        serviceImage2.classList.add("slide-from-right");
        serviceText2.classList.add("remove-margin-right");
      }
      if (positionImage3.y < scrollY) {
        serviceImage3.classList.add("slide-from-left");
        serviceText3.classList.add("remove-margin-left");
      }
      if (positionImage4.y < scrollY) {
        serviceImage4.classList.add("slide-from-right");
        serviceText4.classList.add("remove-margin-right");
      }
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
    htmlAttributes: {
      lang: "fr"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, languageToUse.serviceMetaTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "robots",
    content: "index, follow"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: languageToUse.metaDescriptionServices
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "keywords",
    content: languageToUse.metaKeywords
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "canonical",
    href: `${_content_intake__WEBPACK_IMPORTED_MODULE_8__["default"].domainName}/services`
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-placeholder"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Hero2__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "services"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "services-container services-container-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "services-title"
  }, languageToUse.servicesTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "service service-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_service1_square_jpg__WEBPACK_IMPORTED_MODULE_9__["default"],
    alt: "",
    className: "service-image-left",
    id: "service-image-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "service-text-container-right service-text-container",
    id: "serviceText1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, languageToUse.service1Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, languageToUse.service1Text1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, languageToUse.service1Text2, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/bootfitting"
  }, languageToUse.service1Link)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "service service-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_service2_square_jpg__WEBPACK_IMPORTED_MODULE_10__["default"],
    alt: "",
    className: "service-image-right",
    id: "service-image-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "service-text-container-left service-text-container",
    id: "serviceText2"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, languageToUse.service2Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, languageToUse.service2Text1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, languageToUse.service2Text2)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "services-container services-container-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "service service-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_service3_square_jpg__WEBPACK_IMPORTED_MODULE_11__["default"],
    alt: "",
    className: "service-image-left",
    id: "service-image-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "service-text-container-right service-text-container",
    id: "serviceText3"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, languageToUse.service3Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, languageToUse.service3Text))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "service service-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_service4_square_jpg__WEBPACK_IMPORTED_MODULE_12__["default"],
    alt: "",
    className: "service-image-right",
    id: "service-image-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "service-text-container-left service-text-container",
    id: "serviceText4"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, languageToUse.service4Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, languageToUse.service4Text1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, languageToUse.service4Text2, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://zenith-skishop.notresphere.com/location-materiel",
    target: "blank"
  }, languageToUse.service4Link)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Partenaires__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};
ServicesPage.Layout = _components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicesPage);

/***/ }),

/***/ "./src/styles/Hero2.css":
/*!******************************!*\
  !*** ./src/styles/Hero2.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/Partenaires.css":
/*!************************************!*\
  !*** ./src/styles/Partenaires.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/services.css":
/*!*********************************!*\
  !*** ./src/styles/services.css ***!
  \*********************************/
/***/ (() => {



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/logo-hero-a8e697e2d15a95995d8b4b6c03c5db6f.svg");

/***/ }),

/***/ "./src/images/service1-square.jpg":
/*!****************************************!*\
  !*** ./src/images/service1-square.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/service1-square-945c12ad77c729bcc2e6d0b825040f33.jpg");

/***/ }),

/***/ "./src/images/service2-square.jpg":
/*!****************************************!*\
  !*** ./src/images/service2-square.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/service2-square-9daee0d81f6d1f629e0766cf578b324f.jpg");

/***/ }),

/***/ "./src/images/service3-square.jpg":
/*!****************************************!*\
  !*** ./src/images/service3-square.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/service3-square-b17158b5f39d575921d60a615749fbe3.jpg");

/***/ }),

/***/ "./src/images/service4-square.jpg":
/*!****************************************!*\
  !*** ./src/images/service4-square.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/service4-square-adceef6c60292336781bbf34d4e615de.jpg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-services-jsxhead.js.map