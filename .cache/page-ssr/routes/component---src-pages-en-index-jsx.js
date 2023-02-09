"use strict";
exports.id = 299;
exports.ids = [299];
exports.modules = {

/***/ 1282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Contact)
});

// EXTERNAL MODULE: external "/Users/rianne/Desktop/Zenith/zenith-v1-2/node_modules/react/index.js"
var index_js_ = __webpack_require__(9433);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/content/languages.js + 2 modules
var languages = __webpack_require__(3652);
;// CONCATENATED MODULE: ./src/images/location.svg
/* harmony default export */ const images_location = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi41LjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FscXVlXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTQxLjcgMTQxLjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE0MS43IDE0MS43OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMjIxRjFGO30NCjwvc3R5bGU+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzAuNywyOS40Yy0xMy45LDAtMjUuMSwxMS4xLTI1LjIsMjQuOEM0NS4zLDcxLDcwLjcsOTcuOSw3MC43LDk3LjlzMjUuMi0yNS44LDI1LjItNDMuNw0KCQlDOTYsNDAuNSw4NC43LDI5LjQsNzAuNywyOS40eiBNNzAuOCw2M2MtNC45LDAtOC44LTMuOS04LjgtOC42YzAtNC44LDMuOS04LjYsOC44LTguNnM4LjgsMy45LDguOCw4LjZTNzUuNiw2Myw3MC44LDYzeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03MC43LDExMi43Yy0xNi45LDAtMzQuOS01LTM0LjktMTQuM2MwLTYuMSw4LTExLDIxLjMtMTMuM2MxLjEtMC4yLDIuMiwwLjYsMi40LDEuN2MwLjIsMS4xLTAuNiwyLjItMS43LDIuNA0KCQlDNDYuMSw5MS4xLDQwLDk1LjMsNDAsOTguNGMwLDQuOCwxMy4yLDEwLjIsMzAuOCwxMC4yczMwLjgtNS40LDMwLjgtMTAuMmMwLTMuMi02LjMtNy40LTE4LjMtOS4zYy0xLjEtMC4yLTEuOS0xLjItMS43LTIuNA0KCQljMC4yLTEuMSwxLjItMS45LDIuNC0xLjdjMTMuNCwyLjEsMjEuOCw3LjIsMjEuOCwxMy4zQzEwNS42LDEwNy43LDg3LjYsMTEyLjcsNzAuNywxMTIuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K");
;// CONCATENATED MODULE: ./src/images/phone.svg
/* harmony default export */ const phone = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi41LjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FscXVlXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTQxLjcgMTQxLjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE0MS43IDE0MS43OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMjIxRjFGO30NCjwvc3R5bGU+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzEuNSwzNy4xYy0zNCwwLTQ1LjgsMTkuMy00NS44LDE5LjN2Ny4yYzAsMi4yLDEuOCw0LDQsNGgxNS43YzIuMiwwLDQtMS44LDQtNHYtNy4yYzAsMCw3LjEtNy4zLDIyLjEtNy4zDQoJCVM5Miw1Ni40LDkyLDU2LjR2Ny4yYzAsMi4yLDEuOCw0LDQsNGgxNS43YzIuMiwwLDQtMS44LDQtNHYtNy4yQzExNS44LDU2LjQsMTA1LjUsMzcuMSw3MS41LDM3LjF6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTk5LjMsNzEuMkw5OS4zLDcxLjJoLTMuMWMtNS4xLDAtOS4zLTQuMi05LjMtOS4zdi00YzAtMC40LTAuMS0wLjgtMC40LTFjLTAuMS0wLjEtMC4zLTAuMy0wLjUtMC4zDQoJCWMtMS4zLTAuNy03LjItMy40LTE1LjMtMy40cy0xNCwyLjgtMTUuMywzLjRjLTAuMiwwLjEtMC4zLDAuMi0wLjUsMC4zYy0wLjMsMC4zLTAuNCwwLjctMC40LDF2NGMwLDUuMS00LjIsOS4zLTkuMyw5LjNoLTMuMWwwLDANCgkJTDMwLjcsODkuNWMtMC4yLDAuMi0wLjIsMC41LTAuMiwwLjh2MTMuMWMwLDAuOSwwLjcsMS42LDEuNiwxLjZoMzguNmgzOC42YzAuOSwwLDEuNi0wLjcsMS42LTEuNlY5MC4zYzAtMC4zLTAuMS0wLjYtMC4yLTAuOA0KCQlMOTkuMyw3MS4yeiBNNzAuNyw5Ni40Yy03LjcsMC0xNC02LjMtMTQtMTRzNi4zLTE0LDE0LTE0czE0LDYuMywxNCwxNEM4NC44LDkwLjEsNzguNSw5Ni40LDcwLjcsOTYuNHoiLz4NCgk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI3MC43IiBjeT0iODIuNiIgcj0iMTAuMSIvPg0KPC9nPg0KPC9zdmc+DQo=");
;// CONCATENATED MODULE: ./src/images/at.svg
/* harmony default export */ const at = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi41LjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FscXVlXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTQxLjcgMTQxLjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE0MS43IDE0MS43OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMjIxRjIwO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOTEuNCw1MS44bC04LTFsLTAuNywzLjdjLTIuNC0yLjUtNi4xLTQuNy0xMS42LTQuN2MtMTAuNCwwLTIxLjksOS42LTIxLjksMjMuM2MwLDkuOCw3LjQsMTcuMiwxNy4xLDE3LjINCgljNi41LDAsMTEtMy4xLDE0LjEtNi4zYzIuNCw0LDYuNyw2LjMsMTIuMiw2LjNjOC41LDAsMTcuNi03LjEsMTcuNi0yMi44YzAtOS4zLTQuMi0xOC40LTExLjQtMjUuMmMtNy40LTYuOS0xNy4zLTEwLjctMjcuOS0xMC43DQoJYy0yMS44LDAtMzkuNCwxNy43LTM5LjQsMzkuNGMwLDIyLDE3LjYsMzkuMyw0MC4xLDM5LjNjOC43LDAsMTYuMi0yLjEsMjMuNy02LjdsMS43LTFsLTMuMy01LjVsLTEuNywxYy02LjcsMy45LTEyLjYsNS41LTIwLjQsNS41DQoJYy0xOSwwLTMzLjMtMTQtMzMuMy0zMi42YzAtMTguNCwxNC4zLTMyLjcsMzIuNi0zMi43YzguNywwLDE3LDMuMywyMy4yLDkuMmM1LjgsNS41LDkuMiwxMi44LDkuMiwyMGMwLDcuOC0zLjIsMTUuNy0xMC4zLDE1LjcNCgljLTMuOCwwLTUuNy0xLjgtNS43LTUuNWMwLTAuNCwwLjEtMS44LDAuNy01LjhMOTEuNCw1MS44eiBNNjcsODIuM2MtNS44LDAtOS40LTMuNy05LjQtOS42YzAtOC44LDcuMS0xNC45LDEzLjUtMTQuOQ0KCWM1LjQsMCw5LjMsNC4yLDkuMyw5LjlDODAuNCw3NS4zLDczLjksODIuMyw2Nyw4Mi4zeiIvPg0KPC9zdmc+DQo=");
;// CONCATENATED MODULE: ./src/components/Contact.jsx
const Contact=props=>{let{language,languageToUse}=props;language==="english"?languageToUse=languages/* content.english */.k.english:languageToUse=languages/* content.french */.k.french;return/*#__PURE__*/index_js_default().createElement("div",{className:"contact",id:"contact"},/*#__PURE__*/index_js_default().createElement("h2",null,languageToUse.contactTitle),/*#__PURE__*/index_js_default().createElement("p",{className:"contact-text"},languageToUse.contactIntro1),/*#__PURE__*/index_js_default().createElement("p",{className:"contact-text"},languageToUse.contactIntro2),/*#__PURE__*/index_js_default().createElement("div",{className:"contact-blocks"},/*#__PURE__*/index_js_default().createElement("div",{className:"google-map-iframe"},/*#__PURE__*/index_js_default().createElement("iframe",{className:"iframe-google",id:"gmap_canvas",src:"https://maps.google.com/maps?q=%20Immeuble%20Le%20Z%C3%A9nith%20%20Place%20Caron%20Val%20Thorens%20%2073440%20Les%20Belleville&t=&z=17&ie=UTF8&iwloc=&output=embed"})),/*#__PURE__*/index_js_default().createElement("div",{className:"contact-info"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("img",{src:images_location,alt:"",className:"contact-icon"}),/*#__PURE__*/index_js_default().createElement("p",{className:"address address-bold"},languageToUse.addressContent1),/*#__PURE__*/index_js_default().createElement("p",{className:"address"}," ",languageToUse.addressContent2),/*#__PURE__*/index_js_default().createElement("p",{className:"address"}," ",languageToUse.addressContent3),/*#__PURE__*/index_js_default().createElement("p",{className:"address"}," ",languageToUse.addressContent4)),/*#__PURE__*/index_js_default().createElement("p",null,/*#__PURE__*/index_js_default().createElement("img",{src:phone,alt:"",className:"contact-icon"}),/*#__PURE__*/index_js_default().createElement("a",{href:"tel:0033479000528"}," ",languageToUse.telContent)),/*#__PURE__*/index_js_default().createElement("p",null,/*#__PURE__*/index_js_default().createElement("img",{src:at,alt:"",className:"contact-icon"}),/*#__PURE__*/index_js_default().createElement("a",{href:"mailto:zenith-skishop@wanadoo.fr"},"zenith-skishop@wanadoo.fr")))));};/* harmony default export */ const components_Contact = (Contact);

/***/ }),

/***/ 7686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9433);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3652);
const Explanation=props=>{let{language,languageToUse}=props;language==="english"?languageToUse=_content_languages__WEBPACK_IMPORTED_MODULE_1__/* .content.english */ .k.english:null;language==="french"?languageToUse=_content_languages__WEBPACK_IMPORTED_MODULE_1__/* .content.french */ .k.french:null;language==="dutch"?languageToUse=_content_languages__WEBPACK_IMPORTED_MODULE_1__/* .content.dutch */ .k.dutch:null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"explanation"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"intro-title"},languageToUse.explanationTitle),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"explanation-text"},languageToUse.explanationText1),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"explanation-text bold"},languageToUse.explanationText2),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"explanation-text"},languageToUse.explanationText3)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"explanation-text"},languageToUse.explanationText4),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"explanation-text bold"},languageToUse.explanationText5)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"explanation-text"},languageToUse.explanationText6)));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Explanation);

/***/ }),

/***/ 4213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9433);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3652);
/* harmony import */ var _images_logo_hero_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6400);
const Hero=props=>{let{language,languageToUse}=props;language==="english"?languageToUse=_content_languages__WEBPACK_IMPORTED_MODULE_1__/* .content.english */ .k.english:null;language==="french"?languageToUse=_content_languages__WEBPACK_IMPORTED_MODULE_1__/* .content.french */ .k.french:null;language==="dutch"?languageToUse=_content_languages__WEBPACK_IMPORTED_MODULE_1__/* .content.dutch */ .k.dutch:null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"hero"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"hero-content-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"hero-text"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:"hero-title"},languageToUse.heroTitle),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"hero-title-2"},languageToUse.underTitle)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:_images_logo_hero_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,alt:"logo",className:"hero-logo"})));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ 9753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9433);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const Insta=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"insta"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"insta-feed","data-mc-src":"b5424409-4089-4d37-8b5e-1a01f0e8caba#null"}));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Insta);

/***/ }),

/***/ 6599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9433);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3652);
const Intro=props=>{let{language,languageToUse}=props;language==="english"?languageToUse=_content_languages__WEBPACK_IMPORTED_MODULE_1__/* .content.english */ .k.english:null;language==="french"?languageToUse=_content_languages__WEBPACK_IMPORTED_MODULE_1__/* .content.french */ .k.french:null;language==="dutch"?languageToUse=_content_languages__WEBPACK_IMPORTED_MODULE_1__/* .content.dutch */ .k.dutch:null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"intro"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"intro-text"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"intro-title"},languageToUse.introTitle1),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"intro-title"},languageToUse.introTitle2),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"intro-text-p"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",null,languageToUse.introText1),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"bold"},languageToUse.introText1B),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",null,languageToUse.introText2),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"bold"},languageToUse.introText2B),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",null,languageToUse.introText3),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"bold"},languageToUse.introText3B),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",null,languageToUse.introText4)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"intro-text-p"},languageToUse.introText5),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"intro-text-p bold"},languageToUse.introText6)));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);

/***/ }),

/***/ 7816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_USP)
});

// EXTERNAL MODULE: external "/Users/rianne/Desktop/Zenith/zenith-v1-2/node_modules/react/index.js"
var index_js_ = __webpack_require__(9433);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 6 modules
var gatsby_browser_entry = __webpack_require__(4718);
// EXTERNAL MODULE: ./src/content/languages.js + 2 modules
var languages = __webpack_require__(3652);
;// CONCATENATED MODULE: ./src/images/USP-BOOT-FR.jpg
/* harmony default export */ const USP_BOOT_FR = ("/static/USP-BOOT-FR-494fbd8fe54a0381b4e66726091c9789.jpg");
;// CONCATENATED MODULE: ./src/images/USP-MOJO-FR.jpg
/* harmony default export */ const USP_MOJO_FR = ("/static/USP-MOJO-FR-714f55ac537983e2c57810642de4e6f3.jpg");
;// CONCATENATED MODULE: ./src/images/USP-SERVICE-FR.jpg
/* harmony default export */ const USP_SERVICE_FR = ("/static/USP-SERVICE-FR-ab80e616ba2f3a395223a313d0bc8167.jpg");
;// CONCATENATED MODULE: ./src/images/USP-BOOT-EN.jpg
/* harmony default export */ const USP_BOOT_EN = ("/static/USP-BOOT-EN-26ca9f2e7f05fc497200839d1e94616c.jpg");
;// CONCATENATED MODULE: ./src/images/USP-MOJO-EN.jpg
/* harmony default export */ const USP_MOJO_EN = ("/static/USP-MOJO-EN-c4db441628f2d9ed28b2e1acd8c07135.jpg");
;// CONCATENATED MODULE: ./src/images/USP-SERVICE-EN.jpg
/* harmony default export */ const USP_SERVICE_EN = ("/static/USP-SERVICE-EN-607c3d3e6983b60f9855f86578f66b5d.jpg");
;// CONCATENATED MODULE: ./src/components/USP.jsx
const USP=props=>{let{language,languageToUse,pathname,setPathname}=props;language==="english"?languageToUse=languages/* content.english */.k.english:null;language==="french"?languageToUse=languages/* content.french */.k.french:null;language==="dutch"?languageToUse=languages/* content.dutch */.k.dutch:null;return/*#__PURE__*/index_js_default().createElement("div",{className:"usp"},/*#__PURE__*/index_js_default().createElement("div",{className:"usp-intro"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/bootfitting",className:"usp-link-container"},language==="english"?/*#__PURE__*/index_js_default().createElement("img",{src:USP_BOOT_EN,alt:"bootfitting",className:"usp-intro-image"}):/*#__PURE__*/index_js_default().createElement("img",{src:USP_BOOT_FR,alt:"bootfitting",className:"usp-intro-image"}),/*#__PURE__*/index_js_default().createElement("h3",{className:"usp-link"},languageToUse.bootfitting)),/*#__PURE__*/index_js_default().createElement("p",{className:"usp-intro-text"},languageToUse.Usp1Text)),/*#__PURE__*/index_js_default().createElement("div",{className:"usp-intro"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/mojo",className:"usp-link-container",onClick:()=>setPathname("/mojo")},language==="english"?/*#__PURE__*/index_js_default().createElement("img",{src:USP_MOJO_EN,alt:"ski mojo",className:"usp-intro-image"}):/*#__PURE__*/index_js_default().createElement("img",{src:USP_MOJO_FR,alt:"ski mojo",className:"usp-intro-image"}),/*#__PURE__*/index_js_default().createElement("h3",{className:"usp-link"},languageToUse.mojo)),/*#__PURE__*/index_js_default().createElement("p",{className:"usp-intro-text"},languageToUse.Usp2Text)),/*#__PURE__*/index_js_default().createElement("div",{className:"usp-intro "},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/services",className:"usp-link-container"},language==="english"?/*#__PURE__*/index_js_default().createElement("img",{src:USP_SERVICE_EN,alt:"",className:"usp-intro-image"}):/*#__PURE__*/index_js_default().createElement("img",{src:USP_SERVICE_FR,alt:"",className:"usp-intro-image"}),/*#__PURE__*/index_js_default().createElement("h3",{className:"usp-link"},languageToUse.ourServices)),/*#__PURE__*/index_js_default().createElement("p",{className:"usp-intro-text"},languageToUse.Usp3Text)));};/* harmony default export */ const components_USP = (USP);

/***/ }),

/***/ 3661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const intakeInfo={companyName:"Zenith",companyAddress:"Immeuble Le Zénith, Place Caron Val Thorens",domainName:"https://www.zenith-skishop.com",contactEmail:"zenith-skishop@wanadoo.fr",siteName:"Zenith Ski Shop",highlightColor:"#ff00ff",taxNumber:"38848588000016"};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intakeInfo);

/***/ }),

/***/ 1370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9433);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4593);
/* harmony import */ var _content_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3652);
/* harmony import */ var _content_intake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3661);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5500);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4213);
/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6599);
/* harmony import */ var _components_USP__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7816);
/* harmony import */ var _components_Insta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9753);
/* harmony import */ var _components_Explanation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7686);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1282);
const IndexPage=function(props){let{language,languageToUse,pathname,setPathname}=props;languageToUse=_content_languages__WEBPACK_IMPORTED_MODULE_2__/* .content.english */ .k.english;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet,{htmlAttributes:{lang:"en"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,languageToUse.indexTitle),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"robots",content:"index, follow"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"description",content:languageToUse.metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"keywords",content:languageToUse.metaKeywords}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link",{rel:"canonical",href:_content_intake__WEBPACK_IMPORTED_MODULE_3__/* ["default"].domainName */ .Z.domainName}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script",{src:"https://cdn2.woxo.tech/a.js#60ca0c172d51e300159c2b7c",async:true,"data-usrc":true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"header-placeholder"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{language:language,languageToUse:languageToUse}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Intro__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{language:language,languageToUse:languageToUse}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_USP__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{language:language,languageToUse:languageToUse,pathname:pathname,setPathname:setPathname}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Insta__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Explanation__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,{language:language,languageToUse:languageToUse}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,{language:language,languageToUse:languageToUse}));};IndexPage.Layout=_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"];/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ 6400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/logo-hero-a8e697e2d15a95995d8b4b6c03c5db6f.svg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-en-index-jsx.js.map