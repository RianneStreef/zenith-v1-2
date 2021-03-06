exports.id = "component---src-pages-modjo-jsx";
exports.ids = ["component---src-pages-modjo-jsx"];
exports.modules = {

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
  companyAddress: "Template Street",
  domainName: "www.template.com",
  contactEmail: "",
  siteName: "Zenith Ski Shop",
  highlightColor: "#ff00ff",
  taxNumber: "1313"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intakeInfo);

/***/ }),

/***/ "./src/pages/modjo.jsx":
/*!*****************************!*\
  !*** ./src/pages/modjo.jsx ***!
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
/* harmony import */ var _styles_modjo_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/modjo.css */ "./src/styles/modjo.css");
/* harmony import */ var _styles_modjo_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_modjo_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.jsx");
/* harmony import */ var _content_languages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/languages */ "./src/content/languages.js");
/* harmony import */ var _content_intake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/intake */ "./src/content/intake.js");







const BootfittingPage = function (props) {
  let {
    language,
    languageToUse
  } = props;
  language === "english" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_4__.content.english : languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_4__.content.french;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bootfitting"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, languageToUse.modjoTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
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
    href: _content_intake__WEBPACK_IMPORTED_MODULE_5__["default"].domainName
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-placeholder"
  }), "Modjo");
};

BootfittingPage.Layout = _components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BootfittingPage);

/***/ }),

/***/ "./src/styles/modjo.css":
/*!******************************!*\
  !*** ./src/styles/modjo.css ***!
  \******************************/
/***/ (() => {



/***/ })

};
;
//# sourceMappingURL=component---src-pages-modjo-jsx.js.map