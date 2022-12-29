exports.id = "component---src-pages-legal-jsxhead";
exports.ids = ["component---src-pages-legal-jsxhead"];
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
  companyAddress: "Immeuble Le Zénith, Place Caron Val Thorens",
  domainName: "https://www.zenith-skishop.com",
  contactEmail: "zenith-skishop@wanadoo.fr",
  siteName: "Zenith Ski Shop",
  highlightColor: "#ff00ff",
  taxNumber: "38848588000016"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intakeInfo);

/***/ }),

/***/ "./src/pages/legal.jsx?export=head":
/*!*****************************************!*\
  !*** ./src/pages/legal.jsx?export=head ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.jsx");
/* harmony import */ var _content_languages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/languages */ "./src/content/languages.js");
/* harmony import */ var _content_intake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/intake */ "./src/content/intake.js");
/* harmony import */ var _styles_legal_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/legal.css */ "./src/styles/legal.css");
/* harmony import */ var _styles_legal_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_legal_css__WEBPACK_IMPORTED_MODULE_5__);






const LegalPage = props => {
  let {
    language,
    languageToUse
  } = props;
  language === "english" ? languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_3__.content.english : languageToUse = _content_languages__WEBPACK_IMPORTED_MODULE_3__.content.french;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, languageToUse.indexTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "robots",
    content: "noindex"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: languageToUse.metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "keywords",
    content: languageToUse.metaKeywords
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "canonical",
    href: `${_content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName}/legal`
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-placeholder"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "legal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Informations l\xE9gales"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "1. Pr\xE9sentation du site."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "En vertu de l\u2018article 6 de la loi n\xB0 2004-575 du 21 juin 2004 pour la confiance dans l\u2018\xE9conomie num\xE9rique, il est pr\xE9cis\xE9 aux utilisateurs du site", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), " ", "l\u2018identit\xE9 des diff\xE9rents intervenants dans le cadre de sa r\xE9alisation et de son suivi :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Propri\xE9taire"), " : ", _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].companyName, " -", " ", _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].companyAddress, " -", _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].taxNumber, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Cr\xE9ateur"), " :", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    target: "blank",
    href: "http://www.vts-webdesign.com/"
  }, "Rianne STREEF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Responsable publication"), " : Rianne STREEF \u2013 rianne@vts-webdesign.com", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Le responsable publication est une personne physique ou une personne morale.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Webmaster"), " : Rianne STREEF \u2013 rianne@vts-webdesign.com", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "H\xE9bergeur"), " : OVH \u2013 77 Boulevard Marius Vivier Merle, 69003 Lyon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "2. Conditions g\xE9n\xE9rales d\u2019utilisation du site et des services propos\xE9s."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "L\u2019utilisation du site", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), " implique l\u2019acceptation pleine et enti\xE8re des conditions g\xE9n\xE9rales d\u2019utilisation ci-apr\xE8s d\xE9crites. Ces conditions d\u2019utilisation sont susceptibles d\u2019\xEAtre modifi\xE9es ou compl\xE9t\xE9es \xE0 tout moment, les utilisateurs du site", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), " sont donc invit\xE9s \xE0 les consulter de mani\xE8re r\xE9guli\xE8re."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Ce site est normalement accessible \xE0 tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut \xEAtre toutefois d\xE9cid\xE9e par ", _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].companyName, " , qui s\u2019efforcera alors de communiquer pr\xE9alablement aux utilisateurs les dates et heures de l\u2019intervention."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Le site ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), " ", "est mis \xE0 jour r\xE9guli\xE8rement par Rianne STREEF. De la m\xEAme fa\xE7on, les mentions l\xE9gales peuvent \xEAtre modifi\xE9es \xE0 tout moment : elles s\u2019imposent n\xE9anmoins \xE0 l\u2019utilisateur qui est invit\xE9 \xE0 s\u2019y r\xE9f\xE9rer le plus souvent possible afin d\u2019en prendre connaissance."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "3. Description des services fournis."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Le site ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), " a pour objet de fournir une information concernant l\u2019ensemble des activit\xE9s de la soci\xE9t\xE9."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].companyName, " s\u2019efforce de fournir sur le site", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), " des informations aussi pr\xE9cises que possible. Toutefois, il ne pourra \xEAtre tenue responsable des omissions, des inexactitudes et des carences dans la mise \xE0 jour, qu\u2019elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Tous les informations indiqu\xE9es sur le site", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), " sont donn\xE9es \xE0 titre indicatif, et sont susceptibles d\u2019\xE9voluer. Par ailleurs, les renseignements figurant sur le site", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), " ne sont pas exhaustifs. Ils sont donn\xE9s sous r\xE9serve de modifications ayant \xE9t\xE9 apport\xE9es depuis leur mise en ligne."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "4. Limitations contractuelles sur les donn\xE9es techniques."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Le site utilise la technologie JavaScript."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Le site Internet ne pourra \xEAtre tenu responsable de dommages mat\xE9riels li\xE9s \xE0 l\u2019utilisation du site. De plus, l\u2019utilisateur du site s\u2019engage \xE0 acc\xE9der au site en utilisant un mat\xE9riel r\xE9cent, ne contenant pas de virus et avec un navigateur de derni\xE8re g\xE9n\xE9ration mis-\xE0-jour"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "5. Propri\xE9t\xE9 intellectuelle et contrefa\xE7ons."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].companyName, " est propri\xE9taire des droits de propri\xE9t\xE9 intellectuelle ou d\xE9tient les droits d\u2019usage sur tous les \xE9l\xE9ments accessibles sur le site, notamment les textes, images, graphismes, logo, ic\xF4nes, sons, logiciels."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Toute reproduction, repr\xE9sentation, modification, publication, adaptation de tout ou partie des \xE9l\xE9ments du site, quel que soit le moyen ou le proc\xE9d\xE9 utilis\xE9, est interdite, sauf autorisation \xE9crite pr\xE9alable de : ", _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].companyName, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Toute exploitation non autoris\xE9e du site ou de l\u2019un quelconque des \xE9l\xE9ments qu\u2019il contient sera consid\xE9r\xE9e comme constitutive d\u2019une contrefa\xE7on et poursuivie conform\xE9ment aux dispositions des articles L.335-2 et suivants du Code de Propri\xE9t\xE9 Intellectuelle."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "6. Limitations de responsabilit\xE9."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].companyName, " ne pourra \xEAtre tenue responsable des dommages directs et indirects caus\xE9s au mat\xE9riel de l\u2019utilisateur, lors de l\u2019acc\xE8s au site ", _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName, " et r\xE9sultant soit de l\u2019utilisation d\u2019un mat\xE9riel ne r\xE9pondant pas aux sp\xE9cifications indiqu\xE9es au point 4, soit de l\u2019apparition d\u2019un bug ou d\u2019une incompatibilit\xE9."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].companyName, " ne pourra \xE9galement \xEAtre tenue responsable des dommages indirects (tels par exemple qu\u2019une perte de march\xE9 ou perte d\u2019une chance) cons\xE9cutifs \xE0 l\u2019utilisation du site", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Des espaces interactifs (possibilit\xE9 de poser des questions dans l\u2019espace contact) sont \xE0 la disposition des utilisateurs.", " ", _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].companyName, " r\xE9serve le droit de supprimer, sans mise en demeure pr\xE9alable, tout contenu d\xE9pos\xE9 dans cet espace qui contreviendrait \xE0 la l\xE9gislation applicable en France, en particulier aux dispositions relatives \xE0 la protection des donn\xE9es. Le cas \xE9ch\xE9ant, ", _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].companyName, " se r\xE9serve \xE9galement la possibilit\xE9 de mettre en cause la responsabilit\xE9 civile et/ou p\xE9nale de l\u2019utilisateur, notamment en cas de message \xE0 caract\xE8re raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilis\xE9 (texte, photographie\u2026)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "7. Gestion des donn\xE9es personnelles."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "En France, les donn\xE9es personnelles sont notamment prot\xE9g\xE9es par la loi n\xB0 78-87 du 6 janvier 1978, la loi n\xB0 2004-801 du 6 ao\xFBt 2004, l'article L. 226-13 du Code p\xE9nal et la Directive Europ\xE9enne du 24 octobre 1995."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "A l\u2018occasion de l\u2018utilisation du site", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), ", peuvent \xEAtres recueillies : l\u2018URL des liens par l\u2018interm\xE9diaire desquels l\u2018utilisateur a acc\xE9d\xE9 au site", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), ", le fournisseur d\u2018acc\xE8s de l\u2018utilisateur, l\u2018adresse de protocole Internet (IP) de l\u2018utilisateur."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, " ", "En tout \xE9tat de cause ", _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].companyName, " ne collecte des informations personnelles relatives \xE0 l\u2018utilisateur que pour le besoin de certains services propos\xE9s par le site", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), ". L\u2018utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu\u2018il proc\xE8de par lui-m\xEAme \xE0 leur saisie. Il est alors pr\xE9cis\xE9 \xE0 l\u2018utilisateur du site", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), " ", "l\u2019obligation ou non de fournir ces informations."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Conform\xE9ment aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative \xE0 l\u2019informatique, aux fichiers et aux libert\xE9s, tout utilisateur dispose d\u2019un droit d\u2019acc\xE8s, de rectification et d\u2019opposition aux donn\xE9es personnelles le concernant, en effectuant sa demande \xE9crite et sign\xE9e, accompagn\xE9e d\u2019une copie du titre d\u2019identit\xE9 avec signature du titulaire de la pi\xE8ce, en pr\xE9cisant l\u2019adresse \xE0 laquelle la r\xE9ponse doit \xEAtre envoy\xE9e."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Aucune information personnelle de l\u2018utilisateur du site", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), " ", "n\u2018est publi\xE9e \xE0 l\u2018insu de l\u2018utilisateur, \xE9chang\xE9e, transf\xE9r\xE9e, c\xE9d\xE9e ou vendue sur un support quelconque \xE0 des tiers. Seule l\u2018hypoth\xE8se du rachat de ", _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].companyName, " et de ses droits permettrait la transmission des dites informations \xE0 l\u2018\xE9ventuel acqu\xE9reur qui serait \xE0 son tour tenu de la m\xEAme obligation de conservation et de modification des donn\xE9es vis \xE0 vis de l\u2018utilisateur du site", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Les bases de donn\xE9es sont prot\xE9g\xE9es par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative \xE0 la protection juridique des bases de donn\xE9es."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "8. Liens hypertextes et cookies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Le site ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), " ", "contient un certain nombre de liens hypertextes vers d\u2019autres sites, mis en place avec l\u2019autorisation de ", _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].companyName, ". Cependant, ", _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].companyName, " n\u2019a pas la possibilit\xE9 de v\xE9rifier le contenu des sites ainsi visit\xE9s, et n\u2019assumera en cons\xE9quence aucune responsabilit\xE9 de ce fait."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "La navigation sur le site", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), " est susceptible de provoquer l\u2019installation de cookie(s) sur l\u2019ordinateur de l\u2019utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l\u2019identification de l\u2019utilisateur, mais qui enregistre des informations relatives \xE0 la navigation d\u2019un ordinateur sur un site. Les donn\xE9es ainsi obtenues visent \xE0 faciliter la navigation ult\xE9rieure sur le site, et ont \xE9galement vocation \xE0 permettre diverses mesures de fr\xE9quentation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Le refus d\u2019installation d\u2019un cookie peut entra\xEEner l\u2019impossibilit\xE9 d\u2019acc\xE9der \xE0 certains services. L\u2019utilisateur peut toutefois configurer son ordinateur de la mani\xE8re suivante, pour refuser l\u2019installation des cookies :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. Cliquez sur Confidentialit\xE9 et choisissez Bloquer tous les cookies. Validez sur Ok."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Sous Firefox : en haut de la fen\xEAtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l\u2018onglet Options. Cliquer sur l\u2018onglet Vie priv\xE9e. Param\xE9trez les R\xE8gles de conservation sur : utiliser les param\xE8tres personnalis\xE9s pour l\u2018historique. Enfin d\xE9cochez-la pour d\xE9sactiver les cookies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Sous Safari : Cliquez en haut \xE0 droite du navigateur sur le pictogramme de menu (symbolis\xE9 par un rouage). S\xE9lectionnez Param\xE8tres. Cliquez sur Afficher les param\xE8tres avanc\xE9s. Dans la section \u2018Confidentialit\xE9\u2018, cliquez sur Param\xE8tres de contenu. Dans la section \u2018Cookies\u2018, vous pouvez bloquer les cookies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Sous Chrome : Cliquez en haut \xE0 droite du navigateur sur le pictogramme de menu (symbolis\xE9 par trois lignes horizontales). S\xE9lectionnez Param\xE8tres. Cliquez sur Afficher les param\xE8tres avanc\xE9s. Dans la section \u2018Confidentialit\xE9\u2018, cliquez sur pr\xE9f\xE9rences. Dans l'onglet \u2018Confidentialit\xE9\u2018, vous pouvez bloquer les cookies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "9. Droit applicable et attribution de juridiction."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Tout litige en relation avec l\u2019utilisation du site", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName
  }, _content_intake__WEBPACK_IMPORTED_MODULE_4__["default"].domainName), " est soumis au droit fran\xE7ais. Il est fait attribution exclusive de juridiction aux tribunaux comp\xE9tents de Paris."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "10. Les principales lois concern\xE9es."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loi n\xB0 78-17 du 6 janvier 1978, notamment modifi\xE9e par la loi n\xB0 2004-801 du 6 ao\xFBt 2004 relative \xE0 l'informatique, aux fichiers et aux libert\xE9s."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, " ", "Loi n\xB0 2004-575 du 21 juin 2004 pour la confiance dans l'\xE9conomie num\xE9rique."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "11. Lexique."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Utilisateur : Internaute se connectant, utilisant le site susnomm\xE9."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Informations personnelles : \xAB les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent \xBB (article 4 de la loi n\xB0 78-17 du 6 janvier 1978).")));
};
LegalPage.Layout = _components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LegalPage);

/***/ }),

/***/ "./src/styles/legal.css":
/*!******************************!*\
  !*** ./src/styles/legal.css ***!
  \******************************/
/***/ (() => {



/***/ })

};
;
//# sourceMappingURL=component---src-pages-legal-jsxhead.js.map