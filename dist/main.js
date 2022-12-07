/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bgimage.jpeg */ \"./src/images/bgimage.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Box sizing rules */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\n:root {\\n  /* Gold color used in logo */\\n  --clr-accent-1: #d7c516;\\n  \\n}\\n\\n/* Unedited CSS Reset */\\n/* Remove default margin */\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\np,\\nfigure,\\nblockquote,\\ndl,\\ndd {\\n  margin: 0;\\n}\\n\\n/* Unedited CSS Reset */\\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\\nul[role='list'],\\nol[role='list'] {\\n  list-style: none;\\n}\\n\\n/* Unedited CSS Reset */\\n/* Set core root defaults */\\nhtml:focus-within {\\n  scroll-behavior: smooth;\\n}\\n\\n/* Unedited CSS Reset */\\nhtml,\\nbody {\\n    height: 100%;\\n    width: 100%;\\n}\\n\\n/* Unedited CSS Reset */\\n/* Set core body defaults */\\nbody {\\n  text-rendering: optimizeSpeed;\\n  line-height: 1.5;\\n}\\n\\n#content {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.toprow {\\n  min-width: 100%;\\n  height: 10vh;\\n  background-color: white;\\n\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.logo {\\n  height: 100%;\\n}\\n\\n.dropdown {\\n  display: flex;\\n  align-content: center;\\n  position: relative;\\n  width: 100%;\\n  z-index: 1;\\n}\\n\\n.dropdown-menu {\\n  position:absolute;\\n  width: 100%;\\n  top: 100%;\\n  background-color: white;\\n  padding: .75rem;\\n  border-radius: .25rem;\\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);\\n  opacity: 0;\\n  pointer-events: none;\\n  transform: translateY(-10px);\\n  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;\\n\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.dropdown :last-child {\\n  padding-bottom: 0;\\n}\\n\\n.dropdown-menu.active {\\n  opacity: 1;\\n}\\n\\n.dropdown-item {\\n  height: 3.25rem;\\n  border-bottom: 1px solid rgb(226, 226, 226);\\n  font-size: 1.25rem;\\n\\n  display: flex;\\n  justify-content: space-between;\\n  padding-left: 1rem;\\n}\\n\\n.dropdown-item a {\\n  text-decoration: none;\\n  color: black;\\n  align-self: center;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\n.mobilemenubutton {\\n  height: 10vh;\\n  text-decoration: none;\\n  background-color: white;\\n  border: none;\\n}\\n\\n.mobilemenubutton:hover {\\n  cursor: pointer;\\n}\\n\\n.dropdown.active > .dropdown-menu {\\n  opacity: 1;\\n  transform: translateY(0);\\n  pointer-events: auto;\\n  width: 100vw;\\n}\\n\\n.menubar {\\n  width: 30rem;\\n  font-size: 1.3rem;\\n  gap: 1rem;\\n  margin-right: 5rem;\\n\\n  display: flex;\\n  flex-wrap: none;\\n  justify-content: space-around;\\n  align-items: center;\\n  \\n}\\n\\n.menubar a {\\n  text-decoration: none;\\n  color: white;\\n}\\n\\n.centerbox {\\n  margin-top: 3em;\\n  margin-left: clamp(5rem, 1vw + 11.5rem, 13rem);\\n  justify-self: flex-start;\\n  align-self: flex-start;\\n  color: white;\\n  \\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  text-align: center;\\n}\\n\\n.centertop {\\n  font-size: clamp(1.5rem, 2vw + 1rem, 2.5rem);\\n  border-bottom: 1px solid #d7c516;\\n}\\n\\n.centerbottomdiv {\\n  color: #fff;\\n  font-size: clamp(1.5rem, 2vw + 1rem, 3.5rem);\\n}\\n\\n.centerbottomblue {\\n  color: rgb(0, 166, 255);\\n  animation: animate 6s ease-in-out infinite;\\n  transform: translate(0%, -100%);\\n}\\n\\n@keyframes animate {\\n  0%,\\n  100% {\\n    clip-path: polygon(\\n      0% 45%,\\n      16% 44%,\\n      33% 50%,\\n      54% 60%,\\n      70% 61%,\\n      84% 59%,\\n      100% 52%,\\n      100% 100%,\\n      0% 100%\\n    );\\n  }\\n\\n  50% {\\n    clip-path: polygon(\\n      0% 60%,\\n      15% 65%,\\n      34% 66%,\\n      51% 62%,\\n      67% 50%,\\n      84% 45%,\\n      100% 46%,\\n      100% 100%,\\n      0% 100%\\n    );\\n  }\\n}\\n\\n.bg {\\n  min-height: 100%;\\n  /* Above code suggested by https://css-tricks.com/perfect-full-page-background-image/ */\\n\\n  background-position: right;\\n  background-attachment: fixed;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n\\n/* A elements that don't have a class get default styles */\\na:not([class]) {\\n  text-decoration-skip-ink: auto;\\n}\\n\\n/* Make images easier to work with */\\nimg,\\npicture, \\nsvg {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n/* Inherit fonts for inputs and buttons */\\n* {\\n    margin: 0;\\n    padding: 0;\\n    font: inherit;\\n}\\n\\n.menupagediv {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n}\\n\\n.infobox {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  text-align: center;\\n  font-size: clamp(.5rem, 1vw + .8rem, 1.2rem);\\n}\\n\\n.infobox p{\\n  padding: .5rem;\\n}\\n\\n.filternav {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-top: 1px solid black;\\n  border-bottom: 1px solid black;\\n}\\n\\n.filternavinnerdiv {\\n  width: 100%;\\n  display: grid;\\n  justify-content: center;\\n  grid-template-columns: repeat(2, 1fr);\\n  grid-template-rows: repeat(5, 1fr);\\n}\\n\\n.filterdiv {\\n  display: grid;\\n  grid-template-columns: 70% 30%;\\n  align-items: center;\\n  text-align: center;\\n  justify-content: space-between;\\n  border-left: 1px black;\\n  border-style: groove;\\n  padding-left: clamp(.5em, .8em, 5em);\\n  padding-right: clamp(.5em, .8em, 5em);\\n  min-height: 2.5em;\\n}\\n\\ninput.filterinput {\\n  justify-self: center;\\n  width: clamp(.5em, 1em, 5em);\\n  height: clamp(.5em, 1em, 5em);;\\n}\\n\\n.filterinputlabel {\\n  font-size: clamp(1rem, 1vw + .4rem, 1rem);\\n}\\n\\n\\n.optionscarousel {\\n  background-color: white;\\n}\\n\\n.foodcategories {\\n  padding: .5em;\\n  display: grid;\\n  justify-content: center;\\n  grid-template-columns: repeat(5, clamp(1.5rem, 2vw + 3rem, 7rem));\\n  gap: clamp(2rem, 1vw + .5rem, 4.5rem);\\n  margin-left: .5rem;\\n  margin-right: .5rem;\\n}\\n\\n.foodoption {\\n  display: grid;\\n  grid-template-rows: 70% 30%;\\n  justify-self: center;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.foodoption h3 {\\n  font-size: clamp(1rem, 1vw + .5rem, 1.5rem);\\n  height: auto;\\n  text-align: center;\\n}\\n\\n.foodoptionimage {\\n  width: clamp(1rem, 1vw + 2rem, 3rem);\\n  justify-self: center;\\n}\\n\\n.imagebutton,\\n.foodoptionbutton {\\n  color: black;\\n  text-decoration: none;\\n  background: none;\\n\\tcolor: inherit;\\n\\tborder: none;\\n\\tpadding: 0;\\n\\tfont: inherit;\\n\\tcursor: pointer;\\n\\toutline: inherit;\\n}\\n\\n.categorydiv {\\n  height: clamp(2rem, 3vw + 2rem, 5rem);\\n  border-top: 1px solid black;\\n  border-bottom: 1px solid black;\\n  background-color: white;\\n  \\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.categorytitleimage {\\n  width: clamp(15rem, 25vw + 20rem, 60rem);\\n}\\n\\n.menudiv {\\n  margin-top: 2rem;\\n  margin-bottom: 5rem;\\n  background-color: white;\\n  border: 3px solid var(--clr-accent-1);\\n  border-radius: 5px;\\n  width: 80%;\\n}\\n\\n.titlecard {\\n  width: 80vw;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.title {\\n  font-size: clamp(2.9rem, 2vw + 1rem, 3.5rem);\\n  color: white;\\n  border-bottom: 1px solid #d7c516;\\n  align-self: center;\\n  text-align: center;\\n  margin-top: 1rem;\\n}\\n\\n.menulayout {\\n  display: flex;\\n  flex-direction: column;\\n  gap: .5rem;\\n}\\n\\n.menurow {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: .3rem;\\n  padding: .3rem;\\n  border-bottom: 1px solid black;\\n}\\n\\n.menurow span {\\n  text-align: center;\\n}\\n\\n.itemnameprice {\\n  display: flex;\\n  justify-content: center;\\n  gap: .5rem;\\n  font-weight: 550;\\n  font-size: 1.1rem;\\n}\\n\\n.itemdescicon {\\n  width: 100%;\\n}\\n\\n.imagebutton {\\n  z-index: 1;\\n}\\n\\nfigure {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n}\\n\\n.hiddenfood {\\n  display: none;\\n  width: clamp(10rem, 25vw + 10rem, 30rem);\\n  margin: .2rem;\\n}\\n\\n.imagebutton {\\n  height: 1.5rem;\\n  width: 1.5rem;\\n  vertical-align: bottom;\\n  margin-left: .3rem;\\n}\\n\\n.menuitemicon {\\n  width: 1.5rem;\\n  height: 1.5rem;\\n  align-self: center;\\n  vertical-align: bottom;\\n}\\n\\n/* Set the size of the div element that contains the map */\\n#map {\\n  margin: 1rem;\\n  height: calc(20vw + 10rem);\\n  min-height: 15rem; \\n  width: 70vw;\\n  max-width: 40rem;\\n}\\n\\n#contactpagediv{\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: white;\\n  border-radius: .3rem;\\n  border: 2px solid var(--clr-accent-1);\\n\\n  margin-top: 2rem;\\n  margin-bottom: 5rem;\\n  background-color: white;\\n  border: 3px solid var(--clr-accent-1);\\n  border-radius: 5px;\\n}\\n\\n#contactinfodiv {\\n  background-color: white;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  margin: 1em 0 0 0;\\n  width: min(90%, 70rem);\\n  gap: .2rem;\\n}\\n\\n.infodetailsdiv {\\n  display: flex;\\n  align-items: center;\\n  gap: .5rem;\\n  margin-top: 1em;\\n  width: 100%;\\n  font-size: clamp(1rem, 1vw + .4rem, 2rem);\\n}\\n\\n#seafraemail {\\n  font-size: 1.3rem;\\n}\\n\\n#seafradetailsdiv,\\n#contactlogosdiv {\\n  display: flex;\\n  flex-direction: column;\\n  gap: .5em;\\n}\\n\\n.contactpageicon {\\n  width: 2rem;\\n}\\n\\n#contactform {\\n  margin-top: 1.5em;\\n  margin-bottom: 0;\\n  width: min(90%, 40rem);\\n  border-top: 1px solid black;\\n}\\n\\ntextarea {\\n  resize: none;\\n}\\n\\n#contactsubmitbutton {\\n  height: 2rem;\\n  width: 5rem;\\n  margin: 1rem 0 0 0;\\n}\\n\\n#inputfieldset {\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: .5rem;\\n  border: none;\\n  \\n}\\n\\n/* Unedited CSS Reset */\\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\\n@media (prefers-reduced-motion: reduce) {\\n  html:focus-within {\\n   scroll-behavior: auto;\\n  }\\n  \\n  *,\\n  *::before,\\n  *::after {\\n    animation-duration: 0.01ms !important;\\n    animation-iteration-count: 1 !important;\\n    transition-duration: 0.01ms !important;\\n    scroll-behavior: auto !important;\\n  }\\n}\\n\\n@media (max-width: 700px) {\\n\\n  /* Home Page */\\n  .centerbox {\\n    margin-top: 3rem;\\n    margin-left: 0;\\n    justify-self: center;\\n    align-self: center;\\n  }\\n\\n  .menudiv {\\n    margin-bottom: 7rem;\\n    width: 95%;\\n  }\\n\\n  .foodcategories {\\n    gap: clamp(.1rem, .8vw, 10.5rem);\\n    \\n  }\\n\\n  .categorydiv {\\n    height: clamp(2rem, 3vw + 3rem, 7rem);\\n  }\\n}\\n\\n@media (min-width: 700px) {\\n\\n  .filternavinnerdiv {\\n    grid-template-columns: repeat(5, 1fr);\\n    grid-template-rows: repeat(2, 1fr);\\n  }\\n\\n  .categorytitleimage {\\n    width: clamp(25rem, 50vw + 30rem, 100%);\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateContactPage\": () => (/* binding */ generateContactPage)\n/* harmony export */ });\n/* harmony import */ var _images_contacticons_mapmarker_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/contacticons/mapmarker.svg */ \"./src/images/contacticons/mapmarker.svg\");\n/* harmony import */ var _images_contacticons_clock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/contacticons/clock.svg */ \"./src/images/contacticons/clock.svg\");\n/* harmony import */ var _images_contacticons_phone_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/contacticons/phone.svg */ \"./src/images/contacticons/phone.svg\");\n/* harmony import */ var _images_contacticons_envelope_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/contacticons/envelope.svg */ \"./src/images/contacticons/envelope.svg\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n// Initialize and add the map\n\n\n\n\n\n\nfunction generateContactPage() {\n    let content = document.getElementById('content');\n    \n    //Title Card\n    let contactTitle = document.createElement('h1');\n    let contactTitleCard = document.createElement('div');\n    contactTitle.className = 'title';\n    contactTitle.innerHTML = 'Contact';\n    contactTitleCard.className = 'titlecard';\n\n    contactTitleCard.appendChild(contactTitle);\n    content.appendChild(contactTitleCard);\n\n    //Contact Page \n    let contactPageDiv = document.createElement('div');\n    contactPageDiv.id = 'contactpagediv';\n    \n    //Info Div At Top\n    let infoDiv = document.createElement('div');\n    infoDiv.id = 'contactinfodiv';\n    contactPageDiv.appendChild(infoDiv);\n\n    //Information Sections\n    //Address\n    let addressDiv = document.createElement('div');\n    addressDiv.className = 'infodetailsdiv';\n    \n    let seafraAddress = document.createElement('p');\n    seafraAddress.className = 'contactinfobox';\n    seafraAddress.innerText = '12 Acland St, St. Kilda';\n    \n    let mapIconImage = document.createElement('img');\n    (0,_view__WEBPACK_IMPORTED_MODULE_4__.setAttributes)(mapIconImage , {'src': _images_contacticons_mapmarker_svg__WEBPACK_IMPORTED_MODULE_0__, 'alt': 'Map Icon', 'class': 'contactpageicon'});\n\n    //Clock\n    let hoursDiv = document.createElement('div');\n    hoursDiv.className = 'infodetailsdiv';\n\n    let seafraHours = document.createElement('p');\n    seafraHours.className = 'contactinfobox';\n    seafraHours.innerText = 'Wed - Sun : 8am - 8pm';\n\n    let timeIconImage = document.createElement('img');\n    (0,_view__WEBPACK_IMPORTED_MODULE_4__.setAttributes)(timeIconImage , {'src': _images_contacticons_clock_svg__WEBPACK_IMPORTED_MODULE_1__, 'alt': 'Time Icon', 'class': 'contactpageicon'});\n\n    //Phone\n    let phoneDiv = document.createElement('div');\n    phoneDiv.className = 'infodetailsdiv';\n\n    let seafraPhone = document.createElement('p');\n    seafraPhone.className = 'contactinfobox';\n    seafraPhone.innerText = '+61 388 355 553';\n\n    let phoneIconImage = document.createElement('img');\n    (0,_view__WEBPACK_IMPORTED_MODULE_4__.setAttributes)(phoneIconImage , {'src': _images_contacticons_phone_svg__WEBPACK_IMPORTED_MODULE_2__, 'alt': 'Phone Icon', 'class': 'contactpageicon'});\n\n    //Append Divs to contact info box\n    addressDiv.append(mapIconImage, seafraAddress);\n    hoursDiv.append(timeIconImage, seafraHours);\n    phoneDiv.append(phoneIconImage, seafraPhone);\n    \n    infoDiv.append(addressDiv, hoursDiv, phoneDiv);\n\n    //Contact Form\n    let contactForm = document.createElement('form');\n    contactForm.id = 'contactform';\n    \n\n    //Email\n    let emailDiv = document.createElement('div');\n    emailDiv.className = 'infodetailsdiv';\n\n\n    let seafraEmail = document.createElement('p');\n    seafraEmail.className = 'contactinfobox';\n    seafraEmail.id = 'seafraemail';\n    seafraEmail.innerText = 'Message Us';\n    \n    let emailIconImage = document.createElement('img');\n    (0,_view__WEBPACK_IMPORTED_MODULE_4__.setAttributes)(emailIconImage , {'src': _images_contacticons_envelope_svg__WEBPACK_IMPORTED_MODULE_3__, 'alt': 'Email Icon', 'class': 'contactpageicon'});\n\n    emailDiv.append(emailIconImage, seafraEmail);\n\n    //Fieldset for Inputs\n    let inputFieldset = document.createElement('fieldset');\n    inputFieldset.id = 'inputfieldset';\n\n    //Inputs + Labels\n\n    //Name\n    let nameInput = document.createElement('input');\n    (0,_view__WEBPACK_IMPORTED_MODULE_4__.setAttributes)(nameInput, {'type': 'text', 'id': 'nameInput', 'name': 'nameInput'});\n\n    let nameLabel = document.createElement('label');\n    (0,_view__WEBPACK_IMPORTED_MODULE_4__.setAttributes)(nameLabel, {'htmlFor': nameInput.id, 'class': 'contactlabel'});\n    nameLabel.innerText = 'Full Name';\n\n    //Email\n    let emailInput = document.createElement('input');\n    (0,_view__WEBPACK_IMPORTED_MODULE_4__.setAttributes)(emailInput, {'type': 'email', 'id': 'emailinput', 'name': 'emailinput'});\n\n    let emailLabel = document.createElement('label');\n    (0,_view__WEBPACK_IMPORTED_MODULE_4__.setAttributes)(emailLabel, {'htmlFor': emailInput.id, 'class': 'contactlabel'});\n    emailLabel.innerText = 'Email';\n\n    //Message\n    let messageInput = document.createElement('textarea');\n    (0,_view__WEBPACK_IMPORTED_MODULE_4__.setAttributes)(messageInput, {'rows': '3', 'cols': '20', 'id': 'messageinput', 'name': 'messageinput'});\n\n    let messageLabel = document.createElement('label');\n    (0,_view__WEBPACK_IMPORTED_MODULE_4__.setAttributes)(messageLabel, {'htmlFor': messageInput.id, 'class': 'contactlabel'});\n    messageLabel.innerText = 'Enter your message below';\n\n    //Submit\n    let submitButton = document.createElement('button');\n    (0,_view__WEBPACK_IMPORTED_MODULE_4__.setAttributes)(submitButton, {'type': 'submit', 'id': 'contactsubmitbutton'});\n    submitButton.innerText = 'Submit';\n\n    //Appending Contact Form together\n    inputFieldset.append(nameLabel, nameInput, emailLabel, emailInput, messageLabel, messageInput);\n    contactForm.append(emailDiv, inputFieldset, submitButton);\n\n    //Google Maps\n    let mapDiv = document.createElement('div');\n    mapDiv.id = 'map';\n\n    //Appending sections to Contact Page\n    contactPageDiv.append(infoDiv, contactForm, mapDiv);\n        content.appendChild(contactPageDiv);\n    \n    //Initializing Google Maps API\n    initMap();    \n}\n\nfunction initMap() {\n\n    // The location of Seafra\n    const seafraLocation = { lat: -37.863379, lng: 144.975158 };\n\n    // The map, centered at Seafra\n    const map = new google.maps.Map(document.getElementById('map'), {\n      zoom: 12,\n      center: seafraLocation,\n    });\n    // The marker, positioned at Seafra\n    const marker = new google.maps.Marker({\n      position: seafraLocation,\n      map: map,\n    });\n  }\n\n  \n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCurrentCategory\": () => (/* binding */ getCurrentCategory),\n/* harmony export */   \"setCurrentCategory\": () => (/* binding */ setCurrentCategory),\n/* harmony export */   \"updateMenuWithFilters\": () => (/* binding */ updateMenuWithFilters)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\n\nfunction getCurrentCategory() {\n    for (let i = 0; i < _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray.length; i++) {\n        if (_data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[i].isCurrentCategory) {\n            return _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[i];\n        }\n    }\n}\n\nfunction setCurrentCategory(foodGroup) {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray.forEach((item) => {\n        if (item != foodGroup) {\n            item.isCurrentCategory = false\n        }\n        else {\n            item.isCurrentCategory = true;\n        }\n    });\n}\n\n\nfunction updateMenuWithFilters(menu, filterArray) {\n    menu.forEach((item) => {\n\n        if ((!item.isVegetarian && filterArray.vegetarianFilter === true)\n          ||(!item.isVegan && filterArray.veganFilter === true)\n          ||(!item.isDairyFree && filterArray.dairyFreeFilter === true)\n          ||(!item.isGlutenFree && filterArray.glutenFreeFilter === true)\n          ||(item.hasTreeNuts && filterArray.treeNutFilter === true)\n          ||(item.hasPeanuts && filterArray.peanutFilter === true)\n          ||(item.hasFish && filterArray.fishFilter === true)\n          ||(item.hasShellfish && filterArray.shellfishFilter === true)\n          ||(item.hasEgg && filterArray.eggFilter === true)\n          ||(item.hasSoy && filterArray.soyFilter === true)\n          ){\n            item.canShow = false;\n        } else {\n            item.canShow = true;\n        }\n    });\n}\n\n//# sourceURL=webpack://restaurant/./src/controller.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cPage\": () => (/* binding */ cPage),\n/* harmony export */   \"dessertsMenu\": () => (/* binding */ dessertsMenu),\n/* harmony export */   \"entrees\": () => (/* binding */ entrees),\n/* harmony export */   \"entreesMenu\": () => (/* binding */ entreesMenu),\n/* harmony export */   \"filterArray\": () => (/* binding */ filterArray),\n/* harmony export */   \"mainsMenu\": () => (/* binding */ mainsMenu),\n/* harmony export */   \"saladsMenu\": () => (/* binding */ saladsMenu),\n/* harmony export */   \"seafoodMenu\": () => (/* binding */ seafoodMenu),\n/* harmony export */   \"xfoodArray\": () => (/* binding */ xfoodArray)\n/* harmony export */ });\n/* harmony import */ var _images_menuicons_wheat_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menuicons/wheat.png */ \"./src/images/menuicons/wheat.png\");\n/* harmony import */ var _images_menuicons_prawn_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images//menuicons/prawn.png */ \"./src/images/menuicons/prawn.png\");\n/* harmony import */ var _images_menuicons_food_tray_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menuicons/food-tray.png */ \"./src/images/menuicons/food-tray.png\");\n/* harmony import */ var _images_menuicons_salad_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menuicons/salad.png */ \"./src/images/menuicons/salad.png\");\n/* harmony import */ var _images_menuicons_cupcake_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/menuicons/cupcake.png */ \"./src/images/menuicons/cupcake.png\");\n/* harmony import */ var _images_menuicons_prawncolor_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/menuicons/prawncolor.svg */ \"./src/images/menuicons/prawncolor.svg\");\n/* harmony import */ var _images_menuicons_wheatcolor_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/menuicons/wheatcolor.svg */ \"./src/images/menuicons/wheatcolor.svg\");\n/* harmony import */ var _images_menuicons_food_traycolor_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/menuicons/food-traycolor.svg */ \"./src/images/menuicons/food-traycolor.svg\");\n/* harmony import */ var _images_menuicons_saladcolor_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/menuicons/saladcolor.svg */ \"./src/images/menuicons/saladcolor.svg\");\n/* harmony import */ var _images_menuicons_cupcakecolor_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/menuicons/cupcakecolor.svg */ \"./src/images/menuicons/cupcakecolor.svg\");\n/* harmony import */ var _images_categoryimages_entreecategorymobile_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/categoryimages/entreecategorymobile.svg */ \"./src/images/categoryimages/entreecategorymobile.svg\");\n/* harmony import */ var _images_categoryimages_seafoodcategorymobile_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/categoryimages/seafoodcategorymobile.svg */ \"./src/images/categoryimages/seafoodcategorymobile.svg\");\n/* harmony import */ var _images_categoryimages_mainscategorymobile_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/categoryimages/mainscategorymobile.svg */ \"./src/images/categoryimages/mainscategorymobile.svg\");\n/* harmony import */ var _images_categoryimages_saladscategorymobile_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/categoryimages/saladscategorymobile.svg */ \"./src/images/categoryimages/saladscategorymobile.svg\");\n/* harmony import */ var _images_categoryimages_dessertscategorymobile_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/categoryimages/dessertscategorymobile.svg */ \"./src/images/categoryimages/dessertscategorymobile.svg\");\n/* harmony import */ var _images_categoryimages_entreecategorydesktop_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/categoryimages/entreecategorydesktop.svg */ \"./src/images/categoryimages/entreecategorydesktop.svg\");\n/* harmony import */ var _images_categoryimages_seafoodcategorydesktop_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/categoryimages/seafoodcategorydesktop.svg */ \"./src/images/categoryimages/seafoodcategorydesktop.svg\");\n/* harmony import */ var _images_categoryimages_mainscategorydesktop_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/categoryimages/mainscategorydesktop.svg */ \"./src/images/categoryimages/mainscategorydesktop.svg\");\n/* harmony import */ var _images_categoryimages_saladscategorydesktop_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/categoryimages/saladscategorydesktop.svg */ \"./src/images/categoryimages/saladscategorydesktop.svg\");\n/* harmony import */ var _images_categoryimages_dessertscategorydesktop_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/categoryimages/dessertscategorydesktop.svg */ \"./src/images/categoryimages/dessertscategorydesktop.svg\");\n/* harmony import */ var _images_food_foccaccia_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/food/foccaccia.jpg */ \"./src/images/food/foccaccia.jpg\");\n/* harmony import */ var _images_food_carrotlox_jpeg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/food/carrotlox.jpeg */ \"./src/images/food/carrotlox.jpeg\");\n/* harmony import */ var _images_food_pearloysters_jpeg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/food/pearloysters.jpeg */ \"./src/images/food/pearloysters.jpeg\");\n/* harmony import */ var _images_food_tempuracalamari_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/food/tempuracalamari.jpg */ \"./src/images/food/tempuracalamari.jpg\");\n/* harmony import */ var _images_food_buffaloshrimp_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images/food/buffaloshrimp.jpg */ \"./src/images/food/buffaloshrimp.jpg\");\n/* harmony import */ var _images_food_scallops_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./images/food/scallops.jpg */ \"./src/images/food/scallops.jpg\");\n/* harmony import */ var _images_food_grilledkingcrab_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./images/food/grilledkingcrab.jpg */ \"./src/images/food/grilledkingcrab.jpg\");\n/* harmony import */ var _images_food_fishtacos_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./images/food/fishtacos.jpg */ \"./src/images/food/fishtacos.jpg\");\n/* harmony import */ var _images_food_vegancrabcakes_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./images/food/vegancrabcakes.jpg */ \"./src/images/food/vegancrabcakes.jpg\");\n/* harmony import */ var _images_food_tunaaupoivre_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./images/food/tunaaupoivre.jpg */ \"./src/images/food/tunaaupoivre.jpg\");\n/* harmony import */ var _images_food_mixedseafoodgrill_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./images/food/mixedseafoodgrill.jpg */ \"./src/images/food/mixedseafoodgrill.jpg\");\n/* harmony import */ var _images_food_mushroompasta_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./images/food/mushroompasta.jpg */ \"./src/images/food/mushroompasta.jpg\");\n/* harmony import */ var _images_food_yellowtailpokebowl_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./images/food/yellowtailpokebowl.jpg */ \"./src/images/food/yellowtailpokebowl.jpg\");\n/* harmony import */ var _images_food_seaurchinspaghetti_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./images/food/seaurchinspaghetti.jpg */ \"./src/images/food/seaurchinspaghetti.jpg\");\n/* harmony import */ var _images_food_steakfrites_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./images/food/steakfrites.jpg */ \"./src/images/food/steakfrites.jpg\");\n/* harmony import */ var _images_food_ribeye_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./images/food/ribeye.jpg */ \"./src/images/food/ribeye.jpg\");\n/* harmony import */ var _images_food_choppedsalad_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./images/food/choppedsalad.jpg */ \"./src/images/food/choppedsalad.jpg\");\n/* harmony import */ var _images_food_icebergwedge_jpg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./images/food/icebergwedge.jpg */ \"./src/images/food/icebergwedge.jpg\");\n/* harmony import */ var _images_food_caesarsalad_jpg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./images/food/caesarsalad.jpg */ \"./src/images/food/caesarsalad.jpg\");\n/* harmony import */ var _images_food_greektomatosalad_jpg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./images/food/greektomatosalad.jpg */ \"./src/images/food/greektomatosalad.jpg\");\n/* harmony import */ var _images_food_seafoodsalad_jpg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./images/food/seafoodsalad.jpg */ \"./src/images/food/seafoodsalad.jpg\");\n/* harmony import */ var _images_food_peanutbutterpie_jpg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./images/food/peanutbutterpie.jpg */ \"./src/images/food/peanutbutterpie.jpg\");\n/* harmony import */ var _images_food_hazelnutpraline_jpg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./images/food/hazelnutpraline.jpg */ \"./src/images/food/hazelnutpraline.jpg\");\n/* harmony import */ var _images_food_bananacreamnapoleon_jpg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./images/food/bananacreamnapoleon.jpg */ \"./src/images/food/bananacreamnapoleon.jpg\");\n/* harmony import */ var _images_food_cremebrulee_jpg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./images/food/cremebrulee.jpg */ \"./src/images/food/cremebrulee.jpg\");\n/* harmony import */ var _images_food_gelato_jpg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./images/food/gelato.jpg */ \"./src/images/food/gelato.jpg\");\n//Black + White Icons\n\n\n\n\n\n\n//Color Icons\n\n\n\n\n\n\n//Mobile Banners\n\n\n\n\n\n\n//Desktop Banners\n\n\n\n\n\n\n//Entree Food Images\n\n\n\n\n\n\n//Seafood Food Images\n\n\n\n\n\n\n\n//Mains Food Images\n\n\n\n\n\n\n//Salads Food Images\n\n\n\n\n\n\n//Desserts Food Images\n\n\n\n\n\n\n//Create Food Groups for Menu\nfunction foodGroup(name, normalImage, colorImage, mobileBanner, desktopBanner, imageElement, titleElement, isCurrentCategory) {\n    return {\n        name,\n        normalImage,\n        colorImage,\n        imageElement,\n        titleElement,\n        isCurrentCategory,\n        mobileBanner,\n        desktopBanner,\n    }\n}\n\n//The only reason I'm exporting this is because I'm hardcoding the default value rather than loading\nlet entrees = foodGroup('Entrees', _images_menuicons_wheat_png__WEBPACK_IMPORTED_MODULE_0__, _images_menuicons_wheatcolor_svg__WEBPACK_IMPORTED_MODULE_6__, _images_categoryimages_entreecategorymobile_svg__WEBPACK_IMPORTED_MODULE_10__, _images_categoryimages_entreecategorydesktop_svg__WEBPACK_IMPORTED_MODULE_15__, document.getElementById('Entreesmenuicon'), document.getElementById('Entreestitle'), true);\nlet seafood = foodGroup('Seafood', _images_menuicons_prawn_png__WEBPACK_IMPORTED_MODULE_1__, _images_menuicons_prawncolor_svg__WEBPACK_IMPORTED_MODULE_5__, _images_categoryimages_seafoodcategorymobile_svg__WEBPACK_IMPORTED_MODULE_11__, _images_categoryimages_seafoodcategorydesktop_svg__WEBPACK_IMPORTED_MODULE_16__, document.getElementById('Seafoodmenuicon'), document.getElementById('Seafoodtitle'), false);\nlet mains = foodGroup('Mains', _images_menuicons_food_tray_png__WEBPACK_IMPORTED_MODULE_2__, _images_menuicons_food_traycolor_svg__WEBPACK_IMPORTED_MODULE_7__, _images_categoryimages_mainscategorymobile_svg__WEBPACK_IMPORTED_MODULE_12__, _images_categoryimages_mainscategorydesktop_svg__WEBPACK_IMPORTED_MODULE_17__, document.getElementById('Mainsmenuicon'), document.getElementById('Mainstitle'), false);\nlet salads = foodGroup('Salads', _images_menuicons_salad_png__WEBPACK_IMPORTED_MODULE_3__, _images_menuicons_saladcolor_svg__WEBPACK_IMPORTED_MODULE_8__, _images_categoryimages_saladscategorymobile_svg__WEBPACK_IMPORTED_MODULE_13__, _images_categoryimages_saladscategorydesktop_svg__WEBPACK_IMPORTED_MODULE_18__, document.getElementById('Saladsmenuicon'), document.getElementById('Saladstitle'), false);\nlet desserts = foodGroup('Desserts', _images_menuicons_cupcake_png__WEBPACK_IMPORTED_MODULE_4__, _images_menuicons_cupcakecolor_svg__WEBPACK_IMPORTED_MODULE_9__, _images_categoryimages_dessertscategorymobile_svg__WEBPACK_IMPORTED_MODULE_14__, _images_categoryimages_dessertscategorydesktop_svg__WEBPACK_IMPORTED_MODULE_19__, document.getElementById('Dessertsmenuicon'), document.getElementById('Dessertstitle'), false);\n\nconst xfoodArray = [entrees, seafood, mains, salads, desserts];\n\nfunction foodItem(name, description, foodGroup, price, canShow, foodImage, isVegetarian, isVegan, isDairyFree, isGlutenFree, hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy) {\n\n    return {\n        name,\n        description,\n        foodGroup,\n        price,\n        canShow,\n        isVegetarian,\n        isVegan,\n        isDairyFree,\n        isGlutenFree,\n        hasTreeNuts,\n        hasPeanuts,\n        hasFish,\n        hasShellfish,\n        hasEgg,\n        hasSoy,\n        foodImage,\n    }\n}\n\nconst filterArray = {\n    vegetarianFilter: false,\n    veganFilter: false,\n    dairyFreeFilter: false,\n    glutenFreeFilter: false,\n    treeNutFilter: false,\n    peanutFilter: false,\n    fishFilter: false,\n    shellfishFilter: false,\n    eggFilter: false,\n    soyFilter: false,\n\n    setFilter: function filterMenu(id) {\n        const checkboxes = document.querySelectorAll('.filterinput');\n        const filter = document.getElementById(id);\n            switch (id) {\n                case 'filterinputVego':\n                    if (filter.checked === true) {\n                        this.vegetarianFilter = true;\n                    }\n                    else {\n                        this.vegetarianFilter = false;\n                    }\n                    break;\n                case 'filterinputDairy-Free':\n                    if (filter.checked === true) {\n                        this.dairyFreeFilter = true;\n                    }\n                    else {\n                        this.dairyFreeFilter = false;\n                    }\n                    break;\n                case 'filterinputTreenut':\n                    if (filter.checked === true) {\n                        this.treeNutFilter = true;\n                    }\n                    else {\n                        this.treeNutFilter = false;\n                    }\n                    break;\n                case 'filterinputVegan':\n                    if (filter.checked === true) {\n                        this.veganFilter = true;\n                    }\n                    else {\n                        this.veganFilter = false;\n                    }\n                    break;\n                case 'filterinputFish':\n                    if (filter.checked === true) {\n                        this.fishFilter = true;\n                    }\n                    else {\n                        this.fishFilter = false;\n                    }\n                    break;\n                case 'filterinputGluten-Free':\n                    if (filter.checked === true) {\n                        this.glutenFreeFilter = true;\n                    }\n                    else {\n                        this.glutenFreeFilter = false;\n                    }\n                    break;\n                case 'filterinputPeanut':\n                    if (filter.checked === true) {\n                        this.peanutFilter = true;\n                    }\n                    else {\n                        this.peanutFilter = false;\n                    }\n                    break;\n                case 'filterinputSoy':\n                    if (filter.checked === true) {\n                        this.soyFilter = true;\n                    }\n                    else {\n                        this.soyFilter = false;\n                    }\n                    break;\n                case 'filterinputShellfish':\n                    if (filter.checked === true) {\n                        this.shellfishFilter = true;\n                    }\n                    else {\n                        this.shellfishFilter = false;\n                    }\n                    break;\n                case 'filterinputEgg':\n                    if (filter.checked === true) {\n                        this.eggFilter = true;\n                    }\n                    else {\n                        this.eggFilter = false;\n                    }\n                    break;\n                default:\n                    break;\n            }\n    },\n\n    resetFilters: function resetFilters() {\n        this.veganFilter = false;\n        this.dairyFreeFilter = false;\n        this.vegetarianFilter = false;\n        this.glutenFreeFilter = false;\n        this.treeNutFilter = false;\n        this.peanutFilter = false;\n        this.fishFilter = false;\n        this.shellfishFilter = false;\n        this.eggFilter = false;\n        this.soyFilter = false;\n    },\n\n    getFilters: function getFilters() {\n        let trueFilters = [];\n        this.booleanArray.forEach(item => {\n            if (item === true) {\n                trueFilters.push(item);\n            }\n        });\n        return trueFilters;\n    }\n};\n\nlet cPage = {\n    currentPage: 'x',\n};\n\n//Creating Entree Menu\nlet focaccia = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Cheese-Baked Foccacia', 'Served with House-Cured Olives', 'entrees', 15, true, _images_food_foccaccia_jpg__WEBPACK_IMPORTED_MODULE_20__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    true, true, true, false,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, false, false, false, false);\n\nlet carrotLox = foodItem(\n    //name, description, goodGroup, price, can show\n    'Carrot Lox', 'carrot strips flavored with tamari, liquid smoke and kelp seasoning', 'entrees', 18, true, _images_food_carrotlox_jpeg__WEBPACK_IMPORTED_MODULE_21__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    true, true, true, true,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, false, false, false, false);\n\nlet oysters = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Pearl Oysters', 'Six Oysters from Bay of Bedec in New Brunswick, Canada', 'entrees', 21, true, _images_food_pearloysters_jpeg__WEBPACK_IMPORTED_MODULE_22__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    false, false, true, true,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, false, true, false, false);\n\nlet calamari = foodItem(\n    //name, description, goodGroup, price\n    'Tempura Calamari', 'served with piparra peppers and a garlic aioli drizzle', 'entrees', 24, true, _images_food_tempuracalamari_jpg__WEBPACK_IMPORTED_MODULE_23__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    false, false, true, true,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    true, true, false, true, false, false);\n\nlet shrimp = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Buffalo Shrimp', 'tossed in our signature buffalo sauce, blue cheese dressing', 'entrees', 25, true, _images_food_buffaloshrimp_jpg__WEBPACK_IMPORTED_MODULE_24__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    false, false, false, true,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, false, true, true, false);\n\n\n\n//Creating Seafood Menu\n\nlet scallops = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Scallops', 'Lightly floured and shallow fried served with a yuzu chipotle aioli', 'seafood', 20, true, _images_food_scallops_jpg__WEBPACK_IMPORTED_MODULE_25__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    false, false, false, true,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, true, true, false, false);\n\n                        \nlet kingCrab = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Grilled King Crab', 'Herb-Garlic Butter, Curry Aioli', 'seafood', 25, true,  _images_food_grilledkingcrab_jpg__WEBPACK_IMPORTED_MODULE_26__,\n\n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    false, false, false, true,\n\n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, true, true, true, false);\n\nlet fishTacos = foodItem(\n    //name, description, foodGroup, price, canShow\n    'Fish Tacos', 'Alaskan Halibut, Crispy Batter, Salsa Verde', 'seafood', 26, true,  _images_food_fishtacos_jpg__WEBPACK_IMPORTED_MODULE_27__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    false, false, false, false,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, true, true, true, true);\n\n\nlet veganCrabCakes = foodItem(\n    //name, description, foodGroup, price, canShow\n    'Vegan Crab Cakes', 'Made with hearts of palm and chickpeas for a savory, satisfying appetizer or main course.', 'seafood', 30, true,  _images_food_vegancrabcakes_jpg__WEBPACK_IMPORTED_MODULE_28__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    true, true, true, true,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, false, false, false, false);\n\nlet tuna = foodItem(\n    //name, description, foodGroup, price, canShow\n    'Tuna au Poivre', 'Green Peppercorn Sauce', 'seafood', 42,  true,  _images_food_tunaaupoivre_jpg__WEBPACK_IMPORTED_MODULE_29__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    false, false, false, false,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    true, true, true, true, false, false);\n\n                                \nlet mixedSeafoodGrill = foodItem(\n    //name, description, foodGroup, price, canShow\n    'Mixed Seafood Grill', 'King Crab, Spanish Octopus, Blue Prawn, Flamed Table-Side', 'seafood', 80,  true,  _images_food_mixedseafoodgrill_jpg__WEBPACK_IMPORTED_MODULE_30__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    false, false, false, true,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, true, true, true, false);\n\n\n\n    //Creating Mains Menu\n\n\nlet mushroomPasta = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Woods Mushroom Pasta', 'with Roasted Garlic and Pesto', 'mains', 32, true,  _images_food_mushroompasta_jpg__WEBPACK_IMPORTED_MODULE_31__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    true, true, true, true,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    true, true, false, false, false, true);\n\nlet pokeBowl = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Yellowtail Poke Bowl', 'jasmine rice, edamame, avocado, carrots, red cabbage, cilantro, ginger vinaigrette', 'mains', 36, true,  _images_food_yellowtailpokebowl_jpg__WEBPACK_IMPORTED_MODULE_32__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    false, false, false, true,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    true, true, true, false, false, true);\n\nlet urchinSpaghetti = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Sea Urchin Spaghetti', 'Japanese Uni, Housemade Pasta, Black Truffle', 'mains', 47, true,  _images_food_seaurchinspaghetti_jpg__WEBPACK_IMPORTED_MODULE_33__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    false, false, false, false,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    true, true, false, true, false, true);\n\n\nlet steakFrites = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Steak Frites', 'Wood-Grilled, Truffle Béarnaise', 'mains', 52, true,  _images_food_steakfrites_jpg__WEBPACK_IMPORTED_MODULE_34__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    false, false, true, false,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, false, false, false, false);\n\nlet ribeye = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Grass-Fed Bone-in Ribeye', 'Reidsville, GA', 'mains', 73, true,  _images_food_ribeye_jpg__WEBPACK_IMPORTED_MODULE_35__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    false, false, true, true,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, false, false, false, false);\n\n\n\n//Creating Salads Menu\n\nlet chopped = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Chopped Salad', 'Haricots Verts, Avocado, Almonds', 'salads', 19, true, _images_food_choppedsalad_jpg__WEBPACK_IMPORTED_MODULE_36__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    true, true, true, true,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    true, true, false, false, false, false);\n\nlet wedge = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Iceberg Wedge', 'blue cheese dressing, herb vinaigrette, bacon, egg, tomatoes, croutons', 'salads', 20, true, _images_food_icebergwedge_jpg__WEBPACK_IMPORTED_MODULE_37__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    true, false, false, false,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, false, false, true, false);\n\nlet caesar = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Classic Caesar', 'Aged Parmesan, Anchovy', 'salads', 21, true, _images_food_caesarsalad_jpg__WEBPACK_IMPORTED_MODULE_38__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    true, false, false, false,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, false, false, true, false);\n\nlet greek = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Greek Tomato Salad', 'Feta, Peppers, Olives', 'salads', 25, true, _images_food_greektomatosalad_jpg__WEBPACK_IMPORTED_MODULE_39__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    true, false, false, true,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, false, false, false, false);\n\nlet seafoodSalad = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Signature Seafood Salad', 'alaskan bairdi crab, shrimp, lobster, hearts of palm, avocado, egg, cucumber, olives, tomatoes, scallions, louis dressing and italian vinaigrette', 'salads', 28, true, _images_food_seafoodsalad_jpg__WEBPACK_IMPORTED_MODULE_40__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    false, false, false, true,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, false, true, true, true);\n\n\n//Create Desserts Menu\n\n\nlet pie = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Peanut Butter Pie', 'with Chocolate gluten-free cust', 'desserts', 10, true, _images_food_peanutbutterpie_jpg__WEBPACK_IMPORTED_MODULE_41__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    true, true, true, true,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, true, false, false, false, false);\n\nlet praline = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Hazelnut Praline', 'Chocolate Shell, Salted Caramel', 'desserts', 11, true, _images_food_hazelnutpraline_jpg__WEBPACK_IMPORTED_MODULE_42__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    true, true, true, false,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    true, true, false, false, false, false);\n\nlet napoleon = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Banana Cream Napoleon', 'Warm Caramel, Phyllo, Whipped Cream', 'desserts', 13, true, _images_food_bananacreamnapoleon_jpg__WEBPACK_IMPORTED_MODULE_43__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    true, false, false, false,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, false, false, true, false);\n\nlet cremebrulee = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Pumpkin Spice Crème Brûlée', 'Candied Pecans, Pumpkin Gelato', 'desserts', 15, true, _images_food_cremebrulee_jpg__WEBPACK_IMPORTED_MODULE_44__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    true, false, false, true,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    true, false, false, false, true, false);\n\nlet gelato = foodItem(\n    //name, description, goodGroup, price, canShow\n    'Vegan Caramel Gelato', 'Chocolate Shell, Salted Caramel', 'desserts', 17, true, _images_food_gelato_jpg__WEBPACK_IMPORTED_MODULE_45__,\n    \n    //isVegetarian, isVegan, isDairyFree, isGlutenFree\n    true, true, true, true,\n    \n    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy\n    false, false, false, false, false, false);\n\nlet entreesMenu = [focaccia, carrotLox, oysters, calamari, shrimp];\nlet seafoodMenu = [scallops, kingCrab, fishTacos, veganCrabCakes, tuna, mixedSeafoodGrill];\nlet mainsMenu = [mushroomPasta, pokeBowl, urchinSpaghetti, steakFrites, ribeye];\nlet saladsMenu = [chopped, wedge, caesar, greek, seafoodSalad];\nlet dessertsMenu = [pie, praline, napoleon, cremebrulee, gelato];\n\n//# sourceURL=webpack://restaurant/./src/data.js?");

/***/ }),

/***/ "./src/dropdown.js":
/*!*************************!*\
  !*** ./src/dropdown.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeDropDown\": () => (/* binding */ removeDropDown)\n/* harmony export */ });\n// For explanation, watch https://www.youtube.com/watch?v=S-VeYcOCFZw\n\ndocument.addEventListener('click', e => {\n    let currentDropDown;\n    const isDropDownButton = e.target.matches(\"[data=dropdown-button]\");\n    let menubar = document.querySelector('.menubar');\n\n    // Makes sure not to close dropdown if user clicks inside it\n    if (!isDropDownButton && e.target.closest('[data-dropdown]') != null) {\n        return;\n        \n        //Closes Dropdown if Window is Clicked\n        //added the check against mobile menu button since both this if and the Toggle if's were firing simultaneously\n        //added !menubar since menubar is only in desktop. Before it was still firing in desktop even though there's no dropdown menu in that layout\n    } else if (!menubar && window && e.target.closest('[data-dropdown]') === null && e.target.closest('.dropdown-menu') === null && e.target.closest('.mobilemenubutton') === null) {\n        currentDropDown = document.querySelector('.dropdown');\n        currentDropDown.classList.remove('active');\n        let x = document.querySelector('.centerbottomblue');\n        if (x) {\n            if (x.style.color != 'rgb(0, 166, 255)') {\n                x.style.color = 'rgb(0, 166, 255)';\n            }\n        }\n    };\n    \n    //Toggles dropdown if button is clicked\n    if (isDropDownButton) {\n        currentDropDown = document.querySelector('.dropdown');\n        currentDropDown.classList.toggle('active');\n        let x = document.querySelector('.centerbottomblue');\n    }\n});\n\n//Adds Event Listener to Dropdown Menu Buttons\nfunction removeDropDown() {\n    document.addEventListener('click', e => {\n        if (e.target === this) {\n            let currentDropDown = document.querySelector('.dropdown');\n            if (currentDropDown) {\n                currentDropDown.classList.remove('active');\n            }\n        }   \n    });\n\n}\n\n//# sourceURL=webpack://restaurant/./src/dropdown.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateHomePage\": () => (/* binding */ generateHomePage)\n/* harmony export */ });\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ \"./src/view.js\");\n\n\nfunction generateHomePage() {\n    \n    // Generating Center Box\n    let content = document.getElementById('content');\n    let centerBox = document.createElement('div');\n    centerBox.className = 'centerbox';\n    \n    let centerTop = document.createElement('h1');\n    centerTop.className = 'centertop';\n    centerTop.innerHTML = 'Explore and Discover'\n    \n    let centerBottomDiv = document.createElement('div');\n    let centerBottomText = document.createElement('h2');\n    let centerBottomBlue = document.createElement('h2');\n\n    centerBottomDiv.className = 'centerbottomdiv';\n    centerBottomText.className = 'centerbottomtext';\n    centerBottomText.innerHTML = 'The Seafra Seafood Collection';\n    centerBottomBlue.className = 'centerbottomblue';\n    centerBottomBlue.innerHTML = 'The Seafra Seafood Collection';\n    \n    centerBottomDiv.appendChild(centerBottomText);\n    centerBottomDiv.appendChild(centerBottomBlue);\n\n    centerBox.appendChild(centerTop);\n    centerBox.appendChild(centerBottomDiv);\n    content.appendChild(centerBox);\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menupage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menupage.js */ \"./src/menupage.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.js */ \"./src/view.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\n//Desktop\n\n\n\n\n\n//Runs when user first arrives at webpage\n\n//Delete Javascript Warning\nlet javascriptWarning = document.getElementById('javascriptwarning');\nif (javascriptWarning) {\n    javascriptWarning.remove();\n}\n\nsiteStart();\n(0,_view_js__WEBPACK_IMPORTED_MODULE_3__.generateContent)();\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.generateHomePage)();\n(0,_view_js__WEBPACK_IMPORTED_MODULE_3__.addButtonEventListeners)();\n\nfunction siteStart() {\n\n    if (window.innerWidth < 700) {\n        (0,_view_js__WEBPACK_IMPORTED_MODULE_3__.generateMobile)();\n        _data_js__WEBPACK_IMPORTED_MODULE_4__.cPage.currentPage = document.getElementById('Homebutton');\n        (0,_view_js__WEBPACK_IMPORTED_MODULE_3__.setCurrentPage)(_data_js__WEBPACK_IMPORTED_MODULE_4__.cPage.currentPage);\n    } else {\n        (0,_view_js__WEBPACK_IMPORTED_MODULE_3__.generateDesktop)();\n        _data_js__WEBPACK_IMPORTED_MODULE_4__.cPage.currentPage = document.getElementById('Homebutton');\n        (0,_view_js__WEBPACK_IMPORTED_MODULE_3__.setCurrentPage)(_data_js__WEBPACK_IMPORTED_MODULE_4__.cPage.currentPage);\n    }\n\n    //Media Queries\n    const mediaQueryMax = window.matchMedia('(max-width: 699px');\n    const mediaQueryMin = window.matchMedia('(min-width: 700px)');\n    mediaQueryMax.addListener(handleMediaQueryMax);\n    mediaQueryMin.addListener(handleMediaQueryMin);\n}\n\n//Why does Min need e.matches?\nfunction handleMediaQueryMin (e){\n    if (e.matches) {\n        (0,_view_js__WEBPACK_IMPORTED_MODULE_3__.generateDesktop)();\n        (0,_view_js__WEBPACK_IMPORTED_MODULE_3__.addButtonEventListeners)();\n        (0,_menupage_js__WEBPACK_IMPORTED_MODULE_2__.changeBanner)(); \n        (0,_view_js__WEBPACK_IMPORTED_MODULE_3__.setCurrentPage)(_data_js__WEBPACK_IMPORTED_MODULE_4__.cPage.currentPage);\n    }\n}\n\nfunction handleMediaQueryMax () {\n    (0,_view_js__WEBPACK_IMPORTED_MODULE_3__.generateMobile)();\n    (0,_view_js__WEBPACK_IMPORTED_MODULE_3__.addButtonEventListeners)();\n    (0,_menupage_js__WEBPACK_IMPORTED_MODULE_2__.changeBanner)();\n    (0,_view_js__WEBPACK_IMPORTED_MODULE_3__.setCurrentPage)(_data_js__WEBPACK_IMPORTED_MODULE_4__.cPage.currentPage);\n}\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeBanner\": () => (/* binding */ changeBanner),\n/* harmony export */   \"changeCategoryView\": () => (/* binding */ changeCategoryView),\n/* harmony export */   \"generateMenu\": () => (/* binding */ generateMenu),\n/* harmony export */   \"generateMenuItems\": () => (/* binding */ generateMenuItems)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ \"./src/controller.js\");\n/* harmony import */ var _images_menuicons_imageicon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menuicons/imageicon.svg */ \"./src/images/menuicons/imageicon.svg\");\n/* harmony import */ var _images_menuicons_imageiconinverted_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menuicons/imageiconinverted.svg */ \"./src/images/menuicons/imageiconinverted.svg\");\n\n\n\n\n\n\nfunction generateMenu() {\n\n    let content = document.getElementById('content');\n\n    let checkIfAlreadyGenerated = document.querySelector('.menupagediv');\n    if (!checkIfAlreadyGenerated) {\n  \n    //Page Div to manage layout\n    let menuPageDiv = document.createElement('div');\n    menuPageDiv.className = 'menupagediv';\n    content.appendChild(menuPageDiv);\n\n    //Title Card\n    let menuTitle = document.createElement('h1');\n    let menuTitleCard = document.createElement('div');\n    menuTitle.className = 'title';\n    menuTitle.innerHTML = 'Seafra Menu';\n    menuTitleCard.className = 'titlecard';\n\n    menuTitleCard.appendChild(menuTitle);\n    menuPageDiv.appendChild(menuTitleCard);\n\n    //This Div is to organize all elements within the menu\n    let menuDiv = document.createElement('div');\n    let categoryDiv = document.createElement('div');\n    //Will change below to img once I have one\n    let categoryTitleImage = document.createElement('img');\n\n    menuDiv.className = 'menudiv';\n    categoryDiv.className = 'categorydiv';\n    categoryTitleImage.className = 'categorytitleimage';\n    \n    if (window.innerWidth >= 700) {\n        categoryTitleImage.src = _data_js__WEBPACK_IMPORTED_MODULE_0__.entrees.desktopBanner;\n    }\n    else {\n        categoryTitleImage.src = _data_js__WEBPACK_IMPORTED_MODULE_0__.entrees.mobileBanner;\n    }\n    \n    //Information box\n    let infoBox = document.createElement('div');\n    infoBox.className = 'infobox';\n    let infoBoxText = document.createElement('p');\n    infoBoxText.className = 'infoboxtext';\n    infoBoxText.textContent = 'Welcome to the filterable menu! If you have any dietary requirements or food allergies, use the filters below to change the menu accordingly.';\n\n    infoBox.appendChild(infoBoxText);\n    menuDiv.appendChild(infoBox);\n    \n    //Filter Navigation Element followed by filter creation based on object array\n    let filterNav = document.createElement('nav');\n    let filterNavInnerDiv = document.createElement('div');\n    filterNav.className = 'filternav';\n    filterNavInnerDiv.className = 'filternavinnerdiv';\n\n    let filters = ['Vego', 'Dairy-Free', 'Treenut', 'Vegan', 'Fish',\n     'Gluten-Free', 'Peanut', 'Soy', 'Shellfish', 'Egg'];\n\n    for (let i = 0; i < filters.length; i ++) {\n        let filterDiv = document.createElement('div');\n        let filterInput = document.createElement('input');\n        let filterLabel = document.createElement('label');\n\n        filterDiv.className = 'filterdiv';\n\n        filterInput.className = 'filterinput';\n        filterInput.id = filterInput.className + filters[i];\n        filterInput.type = 'checkbox';\n        filterInput.name = filters[i];\n        filterInput.addEventListener('click', () => {\n            _data_js__WEBPACK_IMPORTED_MODULE_0__.filterArray.setFilter(filterInput.id);\n            (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.updateMenuWithFilters)(_data_js__WEBPACK_IMPORTED_MODULE_0__.entreesMenu, _data_js__WEBPACK_IMPORTED_MODULE_0__.filterArray);\n            (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.updateMenuWithFilters)(_data_js__WEBPACK_IMPORTED_MODULE_0__.seafoodMenu, _data_js__WEBPACK_IMPORTED_MODULE_0__.filterArray);\n            (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.updateMenuWithFilters)(_data_js__WEBPACK_IMPORTED_MODULE_0__.mainsMenu, _data_js__WEBPACK_IMPORTED_MODULE_0__.filterArray);\n            (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.updateMenuWithFilters)(_data_js__WEBPACK_IMPORTED_MODULE_0__.saladsMenu, _data_js__WEBPACK_IMPORTED_MODULE_0__.filterArray);\n            (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.updateMenuWithFilters)(_data_js__WEBPACK_IMPORTED_MODULE_0__.dessertsMenu, _data_js__WEBPACK_IMPORTED_MODULE_0__.filterArray);\n            clearMenuItems();\n            let category =  (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentCategory)();\n            switch (category.name) {\n                case 'Entrees': generateMenuItems(_data_js__WEBPACK_IMPORTED_MODULE_0__.entreesMenu);\n                    break;\n                case 'Seafood': generateMenuItems(_data_js__WEBPACK_IMPORTED_MODULE_0__.seafoodMenu);\n                    break;\n                case 'Mains':  generateMenuItems(_data_js__WEBPACK_IMPORTED_MODULE_0__.mainsMenu);\n                    break;\n                case 'Salads': generateMenuItems(_data_js__WEBPACK_IMPORTED_MODULE_0__.saladsMenu);\n                    break;\n                case 'Desserts': generateMenuItems(_data_js__WEBPACK_IMPORTED_MODULE_0__.dessertsMenu);\n                    break;\n                default:\n                    break;\n            }\n            \n        });\n\n        filterLabel.for = filters[i];\n        filterLabel.innerText = filters[i];\n        filterLabel.className = 'filterinputlabel';\n\n        filterDiv.append(filterLabel, filterInput);\n        filterNavInnerDiv.append(filterDiv);\n    }\n\n    //Append everything to the menu div\n    filterNav.appendChild(filterNavInnerDiv);\n    menuDiv.appendChild(filterNav);\n\n    //generate food categories\n    let foodCategories = document.createElement('nav');\n    foodCategories.className = 'foodcategories';\n\n    for (let i = 0; i < _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray.length; i ++) {\n\n        let foodOptionAnchor = document.createElement('button');\n            foodOptionAnchor.className = 'foodoptionbutton';\n            //fdsa\n\n        let foodOption = document.createElement('li');\n            foodOption.className = 'foodoption';\n            foodOption.id = _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[i].name + 'option';\n\n        let foodOptionImage = document.createElement('img');\n            foodOptionImage.className = 'foodoptionimage';\n            foodOptionImage.id = _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[i].name + 'menuicon';\n            foodOptionImage.src = _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[i].normalImage;\n            _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[i].imageElement = foodOptionImage;\n\n        let foodOptionTitle = document.createElement('h3');\n            foodOptionTitle.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[i].name;\n            foodOptionTitle.id = _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[i].name + 'title';\n            _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[i].titleElement = foodOptionTitle;\n\n        foodOption.append(foodOptionImage, foodOptionTitle);\n        foodOptionAnchor.appendChild(foodOption);\n        foodCategories.appendChild(foodOptionAnchor);\n\n        foodOption.addEventListener('mouseover', () => {\n            \n            switch (foodOption.id) {\n                case 'Entreesoption':\n                    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[0].imageElement.src = _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[0].colorImage;\n                    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[0].titleElement.style.textDecoration = 'underline';\n                    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[0].titleElement.style.textDecorationColor = 'var(--clr-accent-1)';\n\n                    break;\n                case 'Seafoodoption':  \n                    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[1].imageElement.src = _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[1].colorImage;\n                    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[1].titleElement.style.textDecoration = 'underline';\n                    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[1].titleElement.style.textDecorationColor = 'var(--clr-accent-1)';\n                    break;\n                case 'Mainsoption':  \n                    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[2].imageElement.src = _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[2].colorImage;\n                    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[2].titleElement.style.textDecoration = 'underline';\n                    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[2].titleElement.style.textDecorationColor = 'var(--clr-accent-1)';\n                    break;\n                case 'Saladsoption':  \n                    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[3].imageElement.src = _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[3].colorImage;\n                    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[3].titleElement.style.textDecoration = 'underline';\n                    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[3].titleElement.style.textDecorationColor = 'var(--clr-accent-1)';\n                    break;\n                case 'Dessertsoption':  \n                    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[4].imageElement.src = _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[4].colorImage;\n                    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[4].titleElement.style.textDecoration = 'underline';\n                    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[4].titleElement.style.textDecorationColor = 'var(--clr-accent-1)';\n                    break;\n                default:\n                    break;\n            }\n        });\n\n        foodOption.addEventListener('mouseout', () => {\n            let isCurrentCategory =  (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentCategory)();\n            switch (foodOption.id) {\n                case 'Entreesoption': \n                    if (isCurrentCategory.name === 'Entrees') {\n                        break;\n                    } else {\n                        _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[0].imageElement.src = _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[0].normalImage;\n                        _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[0].titleElement.style.textDecoration = 'none';\n                        break;\n                    }\n                case 'Seafoodoption':  \n                    if (isCurrentCategory.name === 'Seafood') {\n                        break;\n                    } else {\n                        _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[1].imageElement.src = _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[1].normalImage;\n                        _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[1].titleElement.style.textDecoration = 'none';\n                        break;\n                    }\n                    break;\n                case 'Mainsoption':\n                    if (isCurrentCategory.name === 'Mains') {\n                        break;\n                    } else {\n                        _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[2].imageElement.src = _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[2].normalImage;\n                        _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[2].titleElement.style.textDecoration = 'none';\n                        break;\n                    }  \n                    break;\n                case 'Saladsoption':\n                    if (isCurrentCategory.name === 'Salads') {\n                        break;\n                    }\n                    else {\n                        _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[3].imageElement.src = _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[3].normalImage;\n                        _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[3].titleElement.style.textDecoration = 'none';\n                        break;\n                    }  \n                    break;\n                case 'Dessertsoption': \n                    if (isCurrentCategory.name === 'Desserts') {\n                        break;\n                    }\n                    else {\n                        _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[4].imageElement.src = _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[4].normalImage;\n                        _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[4].titleElement.style.textDecoration = 'none';\n                        break;\n                    }  \n                default:\n                    break;\n            }\n        });\n\n        foodOption.addEventListener('click', () => {\n            switch (foodOption.id) {\n                case 'Entreesoption': \n                    (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.setCurrentCategory)(_data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[0]);\n                    clearMenuItems();\n                    generateMenuItems(_data_js__WEBPACK_IMPORTED_MODULE_0__.entreesMenu);\n                    changeCategoryView();\n                    changeBanner();\n                    break;\n                case 'Seafoodoption': \n                    (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.setCurrentCategory)(_data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[1]);\n                    clearMenuItems();\n                    generateMenuItems(_data_js__WEBPACK_IMPORTED_MODULE_0__.seafoodMenu);\n                    changeCategoryView();\n                    changeBanner();\n                    break;\n                case 'Mainsoption':  \n                    (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.setCurrentCategory)(_data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[2]);\n                    clearMenuItems();\n                    generateMenuItems(_data_js__WEBPACK_IMPORTED_MODULE_0__.mainsMenu);\n                    changeCategoryView();\n                    changeBanner();\n                    break;\n                case 'Saladsoption':\n                    (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.setCurrentCategory)(_data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[3]);\n                    clearMenuItems();\n                    generateMenuItems(_data_js__WEBPACK_IMPORTED_MODULE_0__.saladsMenu);\n                    changeCategoryView();\n                    changeBanner();\n                    break;\n                case 'Dessertsoption': \n                    (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.setCurrentCategory)(_data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[4]);\n                    clearMenuItems();\n                    generateMenuItems(_data_js__WEBPACK_IMPORTED_MODULE_0__.dessertsMenu);\n                    changeCategoryView();\n                    changeBanner();\n                    break;\n                default:\n                    break;\n            }\n        });\n    }\n\n    menuDiv.appendChild(foodCategories);\n    menuPageDiv.appendChild(menuDiv);\n\n    //Menu Table\n    //Image? - Title/Descriptiong - Price\n    let menuLayout = document.createElement('div');\n    menuLayout.className = 'menulayout';\n    \n    categoryDiv.appendChild(categoryTitleImage);\n    menuDiv.appendChild(categoryDiv)\n    menuDiv.appendChild(menuLayout);\n\n    (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.setCurrentCategory)(_data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray[0]);\n    generateMenuItems(_data_js__WEBPACK_IMPORTED_MODULE_0__.entreesMenu);\n    changeCategoryView(_data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray);\n    }\n  \n}\n\nfunction generateMenuItems(menu) {\n\n    for (let i = 0; i < menu.length; i++) {\n\n        if (menu[i].canShow === true) {\n            let menuLayout = document.querySelector('.menulayout');\n            let row = document.createElement('div');\n            row.className = 'menurow';\n    \n            let itemNamePrice = document.createElement('span');\n            let itemName = document.createElement('span');\n            let itemPrice = document.createElement('span');\n\n            let itemDescIcon = document.createElement('span');\n            let itemDesc = document.createElement('span');\n            let imageButton = document.createElement('button');\n            let imageIcon = document.createElement('img');\n\n            let foodFigure = document.createElement('figure');\n            let hiddenFoodImage = document.createElement('img');\n            \n            hiddenFoodImage.src = menu[i].foodImage;\n            hiddenFoodImage.className = 'hiddenfood';\n            hiddenFoodImage.id = menu[i].name + 'image';\n            foodFigure.id = menu[i].name + 'imagefigure';\n            \n            itemNamePrice.className = 'itemnameprice';\n            itemName.innerText = menu[i].name;\n            itemPrice.innerText = menu[i].price;\n\n            itemDescIcon.className = 'itemdescicon';\n            itemDesc.className = 'itemdesc';\n            itemDesc.innerText = menu[i].description;\n            imageButton.className = 'imagebutton';\n            imageIcon.id = menu[i].name + 'button';\n            imageIcon.addEventListener('click', (e) => {\n                hideFood(e), false;\n            });\n            imageIcon.className = 'menuitemicon';\n            imageIcon.src = _images_menuicons_imageicon_svg__WEBPACK_IMPORTED_MODULE_2__;            \n    \n            itemNamePrice.appendChild(itemName);\n            itemNamePrice.appendChild(itemPrice);\n\n            imageButton.appendChild(imageIcon);\n            foodFigure.appendChild(hiddenFoodImage);\n\n            itemDescIcon.appendChild(itemDesc);\n            itemDescIcon.appendChild(imageButton);\n            itemDescIcon.appendChild(foodFigure);\n            row.appendChild(itemNamePrice);\n            row.appendChild(itemDescIcon);\n            menuLayout.appendChild(row);\n        }    \n    } \n}\n\n//Deletes then recreates MenuLayout Div\nfunction clearMenuItems() {\n    let menu = document.querySelector('.menulayout');\n    \n    if (menu.childNodes.length > 0) {\n        menu.remove();\n\n        //Recreate Div\n        let menuLayout = document.createElement('div');\n        let menuDiv = document.querySelector('.menudiv');\n        menuLayout.className = 'menulayout';\n        menuDiv.className = 'menudiv';\n        menuDiv.appendChild(menuLayout);\n    }\n}\n\nfunction changeBanner() {\n    let banner = document.querySelector('.categorytitleimage');\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray.forEach((item) => {\n        if (banner) {\n            if (item.isCurrentCategory) {\n                if (window.innerWidth >= 700) {\n                    banner.src = item.desktopBanner;\n                }\n                else {\n                    banner.src = item.mobileBanner;\n                }\n            }\n        }\n    });\n}\n\n//Technically Menu View\nfunction changeCategoryView() {\n\n    _data_js__WEBPACK_IMPORTED_MODULE_0__.xfoodArray.forEach((item) => {\n        if (item.isCurrentCategory) {\n            item.imageElement.src = item.colorImage;\n            item.titleElement.style.textDecoration = 'underline';\n            item.titleElement.style.textDecorationColor = 'var(--clr-accent-1)';\n        } else {\n            item.imageElement.src = item.normalImage;\n            item.titleElement.style.textDecoration = 'none';\n        }\n    });\n}\n\nfunction hideFood (e) {\n    \n    //If the click event target ID is the same as the entrees menu id, open the image.\n    let image;\n    let category = (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentCategory)();\n\n    switch (category.name) {\n        case 'Entrees':\n            _data_js__WEBPACK_IMPORTED_MODULE_0__.entreesMenu.forEach((item) => {\n                if (e.target.id === item.name + 'button') {\n                    image = document.getElementById(item.name + 'image');\n                }\n            });\n        case 'Seafood':\n            _data_js__WEBPACK_IMPORTED_MODULE_0__.seafoodMenu.forEach((item) => {\n                if (e.target.id === item.name + 'button') {\n                    image = document.getElementById(item.name + 'image');\n                }\n            });\n        case 'Mains':\n            _data_js__WEBPACK_IMPORTED_MODULE_0__.mainsMenu.forEach((item) => {\n                if (e.target.id === item.name + 'button') {\n                    image = document.getElementById(item.name + 'image');\n                }\n            });\n        case 'Salads':\n            _data_js__WEBPACK_IMPORTED_MODULE_0__.saladsMenu.forEach((item) => {\n                if (e.target.id === item.name + 'button') {\n                    image = document.getElementById(item.name + 'image');\n                }\n            });\n        case 'Desserts':\n            _data_js__WEBPACK_IMPORTED_MODULE_0__.dessertsMenu.forEach((item) => {\n                if (e.target.id === item.name + 'button') {\n                    image = document.getElementById(item.name + 'image');\n                }\n            });\n    }\n\n    toggleFood(image, e);\n}\n\nfunction toggleFood (image, e) {\n    e.target.src = ((e.target.src!=_images_menuicons_imageicon_svg__WEBPACK_IMPORTED_MODULE_2__) ? _images_menuicons_imageicon_svg__WEBPACK_IMPORTED_MODULE_2__ : _images_menuicons_imageiconinverted_svg__WEBPACK_IMPORTED_MODULE_3__);\n    image.style.display = ((image.style.display!='block') ? 'block' : 'none')\n}\n\n//# sourceURL=webpack://restaurant/./src/menupage.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addButtonEventListeners\": () => (/* binding */ addButtonEventListeners),\n/* harmony export */   \"clearContentDiv\": () => (/* binding */ clearContentDiv),\n/* harmony export */   \"generateContent\": () => (/* binding */ generateContent),\n/* harmony export */   \"generateDesktop\": () => (/* binding */ generateDesktop),\n/* harmony export */   \"generateMobile\": () => (/* binding */ generateMobile),\n/* harmony export */   \"setAttributes\": () => (/* binding */ setAttributes),\n/* harmony export */   \"setCurrentPage\": () => (/* binding */ setCurrentPage)\n/* harmony export */ });\n/* harmony import */ var _images_seafraLogoWhite_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/seafraLogoWhite.svg */ \"./src/images/seafraLogoWhite.svg\");\n/* harmony import */ var _images_Seafralogo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Seafralogo.svg */ \"./src/images/Seafralogo.svg\");\n/* harmony import */ var _images_mobilearrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/mobilearrow.svg */ \"./src/images/mobilearrow.svg\");\n/* harmony import */ var _images_dropdownicon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/dropdownicon.svg */ \"./src/images/dropdownicon.svg\");\n/* harmony import */ var _dropdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown.js */ \"./src/dropdown.js\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menupage */ \"./src/menupage.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n//Desktop\n\n\n//Mobile\n\n\n\n\n//Functions\n\n\n\n\n\n\n\nfunction clearContentDiv() {\n    let content = document.getElementById('content');\n    let children = Array.from(content.children);\n\n    children.forEach((child) => {\n        child.remove();\n    });\n}\n\nfunction generateContent() {\n    let content = document.createElement('div');\n    let body = document.querySelector('.bg');\n    content.id = 'content';\n    body.appendChild(content);\n}\n\nfunction generateDesktop() {\n\n    let body = document.querySelector('.bg');\n    let content = document.getElementById('content');\n    let menuBar = document.createElement('ul');\n    menuBar.className = 'menubar';\n\n    let menuArray = ['Home', 'Menu', 'Contact'];\n    menuArray.forEach((item)  => {\n        let menuItem = document.createElement('li');\n        menuItem.className = 'menuitem';\n    \n        let itemAnchor = document.createElement('a');\n        itemAnchor.innerHTML = item;\n        itemAnchor.href = '#';\n        itemAnchor.id = item + 'button';\n    \n        menuItem.append(itemAnchor);\n        menuBar.appendChild(menuItem);\n    });\n\n    //If there isn't a toprow (We are arriving for the first time to the site)\n    let topRow = document.querySelector('.toprow');\n    if (!topRow) {        \n\n        //Create TopRow\n        let topRow = document.createElement('div');\n        topRow.className = 'toprow';\n        topRow.style.backgroundColor = \"rgba(0, 0, 0, 0)\";\n\n        //Create Desktop Logo + Anchor\n        let rowAnchor = document.createElement('a');\n        rowAnchor.href = '#';\n\n        let rowLogo = document.createElement('img');\n        rowLogo.src = _images_seafraLogoWhite_svg__WEBPACK_IMPORTED_MODULE_0__;\n        rowLogo.className = 'logo';\n        rowLogo.alt = 'Seafra Logo';\n        \n        //Append everything\n        rowAnchor.appendChild(rowLogo);\n        topRow.appendChild(rowAnchor);\n        topRow.appendChild(menuBar);\n        body.appendChild(topRow);\n\n    //If there is already a top row / we are coming from a different page\n    } else {\n\n        //Get rid of Mobile-Specific elements\n        document.querySelector('.mobilemenubutton').remove();\n        document.querySelector('.dropdown').remove();\n\n        //Change to Desktop logo + background color\n        let rowLogo = document.querySelector('.logo');\n        rowLogo.src = _images_seafraLogoWhite_svg__WEBPACK_IMPORTED_MODULE_0__;\n        topRow.style.backgroundColor = \"rgba(0, 0, 0, 0)\";\n\n        //Append Desktop Menu\n        topRow.appendChild(menuBar);\n        body.insertBefore(topRow, content);\n    }\n}\n\nfunction generateMobile() {\n\n    let findRow = document.querySelector('.toprow');\n    if (findRow) {\n        findRow.remove();\n    }\n    let menuBar = document.querySelector('.menubar');\n    if (menuBar != 'undefined' && menuBar != null) {\n        menuBar.remove();\n    }\n    let dropDown = document.querySelector('.dropdown');\n    if (dropDown != 'undefined' && dropDown != null) {\n        dropDown.remove();\n    }\n\n    let menuArray = ['Home', 'Menu', 'Contact'];\n    \n    let topRow = document.createElement('div');\n    topRow.className = 'toprow';\n    \n    let rowAnchor = document.createElement('a');\n    \n    setAttributes(rowAnchor, {'href': '#', 'class': 'rowanchor'});\n    \n    let rowLogo = document.createElement('img');\n    setAttributes(rowLogo, {'alt': 'Seafra Logo', 'class': 'logo', 'src': _images_Seafralogo_svg__WEBPACK_IMPORTED_MODULE_1__});\n\n    let body = document.querySelector('.bg');\n    let content = document.getElementById('content');\n    let mobileMenuButton = document.querySelector('.mobilemenubutton');\n    \n    //Menu Button\n    mobileMenuButton = document.createElement('button');\n    mobileMenuButton.className = 'mobilemenubutton';\n    \n    let menuButtonImage = document.createElement('img');\n    menuButtonImage.src = _images_dropdownicon_svg__WEBPACK_IMPORTED_MODULE_3__;\n    menuButtonImage.alt = 'Click here to access dropdown menu in mobile';\n    menuButtonImage.setAttribute('data', 'dropdown-button');\n    \n    rowAnchor.appendChild(rowLogo);\n    mobileMenuButton.appendChild(menuButtonImage);\n    \n    topRow.style.backgroundColor = 'white';\n    topRow.appendChild(rowAnchor);\n    topRow.appendChild(mobileMenuButton);\n    body.insertBefore(topRow, content);\n    \n    // Generating DropDown Menu\n    dropDown = document.createElement('div');\n    dropDown.className = 'dropdown';\n    dropDown.setAttribute('data', 'dropdown');\n    \n    let dropDownMenu = document.createElement('ul');\n    dropDownMenu.className = 'dropdown-menu';\n\n    dropDown.appendChild(dropDownMenu);\n    body.insertBefore(dropDown, content);\n    \n    //Geneate Dropdown Items\n    menuArray.forEach((item)  => {\n        let dropDownItem = document.createElement('li');\n        dropDownItem.className = 'dropdown-item';\n    \n        let firstAnchor = document.createElement('a');\n        setAttributes(firstAnchor, {'href': '#'});\n        firstAnchor.innerHTML = item;\n        firstAnchor.id = item + 'button';\n        firstAnchor.addEventListener('click', _dropdown_js__WEBPACK_IMPORTED_MODULE_4__.removeDropDown);\n    \n        let secondAnchor = document.createElement('a');\n        secondAnchor.href = '#';\n    \n        let arrowImage = document.createElement('img');\n        arrowImage.src = _images_mobilearrow_svg__WEBPACK_IMPORTED_MODULE_2__;\n        arrowImage.addEventListener('click', _dropdown_js__WEBPACK_IMPORTED_MODULE_4__.removeDropDown);\n\n        switch (firstAnchor.id) {            \n            case 'Homebutton': \n                arrowImage.addEventListener('click', () => {\n                    clearContentDiv();\n                    (0,_dropdown_js__WEBPACK_IMPORTED_MODULE_4__.removeDropDown)();\n                    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_5__.generateHomePage)();\n                    // setCurrentPage(homeButton);\n                    });\n                break;\n\n            case 'Menubutton':\n                arrowImage.addEventListener('click', () => {\n                    (0,_dropdown_js__WEBPACK_IMPORTED_MODULE_4__.removeDropDown)();\n                    clearContentDiv();\n                    _data_js__WEBPACK_IMPORTED_MODULE_9__.filterArray.resetFilters();\n                    (0,_controller__WEBPACK_IMPORTED_MODULE_8__.updateMenuWithFilters)(_data_js__WEBPACK_IMPORTED_MODULE_9__.entreesMenu, _data_js__WEBPACK_IMPORTED_MODULE_9__.filterArray);\n                    (0,_controller__WEBPACK_IMPORTED_MODULE_8__.updateMenuWithFilters)(_data_js__WEBPACK_IMPORTED_MODULE_9__.seafoodMenu, _data_js__WEBPACK_IMPORTED_MODULE_9__.filterArray);\n                    (0,_controller__WEBPACK_IMPORTED_MODULE_8__.updateMenuWithFilters)(_data_js__WEBPACK_IMPORTED_MODULE_9__.mainsMenu, _data_js__WEBPACK_IMPORTED_MODULE_9__.filterArray);\n                    (0,_controller__WEBPACK_IMPORTED_MODULE_8__.updateMenuWithFilters)(_data_js__WEBPACK_IMPORTED_MODULE_9__.saladsMenu, _data_js__WEBPACK_IMPORTED_MODULE_9__.filterArray);\n                    (0,_controller__WEBPACK_IMPORTED_MODULE_8__.updateMenuWithFilters)(_data_js__WEBPACK_IMPORTED_MODULE_9__.dessertsMenu, _data_js__WEBPACK_IMPORTED_MODULE_9__.filterArray);\n                    // setCurrentPage(menuButton);\n                    (0,_menupage__WEBPACK_IMPORTED_MODULE_7__.generateMenu)();\n                    let category = (0,_controller__WEBPACK_IMPORTED_MODULE_8__.getCurrentCategory)();\n                    (0,_menupage__WEBPACK_IMPORTED_MODULE_7__.generateMenuItems)(category);\n                });\n                break;\n\n            case 'Contactbutton':\n                arrowImage.addEventListener('click', () => {\n                    (0,_dropdown_js__WEBPACK_IMPORTED_MODULE_4__.removeDropDown)();\n                    clearContentDiv();\n                    // setCurrentPage(contactButton);\n                    (0,_contact__WEBPACK_IMPORTED_MODULE_6__.generateContactPage)();\n                });\n                break;\n        }\n    \n        dropDownItem.append(firstAnchor, secondAnchor);\n        secondAnchor.append(arrowImage);\n        dropDownMenu.append(dropDownItem);\n    });\n}\n\nfunction addButtonEventListeners() {\n    let logoAnchor = document.querySelector('.logo');\n    let homeButton = document.getElementById('Homebutton');\n    let menuButton = document.getElementById('Menubutton');\n    let contactButton = document.getElementById('Contactbutton');\n\n    if (logoAnchor) {\n        logoAnchor.addEventListener('click', () => {\n            clearContentDiv();\n            (0,_homepage_js__WEBPACK_IMPORTED_MODULE_5__.generateHomePage)();\n            setCurrentPage(homeButton);\n        });\n    }\n    if (homeButton) {\n        homeButton.addEventListener('click', () => {\n            clearContentDiv();\n            (0,_homepage_js__WEBPACK_IMPORTED_MODULE_5__.generateHomePage)();\n            setCurrentPage(homeButton);\n        });\n    }\n    if (menuButton) {\n        menuButton.addEventListener('click', () => {\n            clearContentDiv();\n            _data_js__WEBPACK_IMPORTED_MODULE_9__.filterArray.resetFilters();\n            (0,_controller__WEBPACK_IMPORTED_MODULE_8__.updateMenuWithFilters)(_data_js__WEBPACK_IMPORTED_MODULE_9__.entreesMenu, _data_js__WEBPACK_IMPORTED_MODULE_9__.filterArray);\n            (0,_controller__WEBPACK_IMPORTED_MODULE_8__.updateMenuWithFilters)(_data_js__WEBPACK_IMPORTED_MODULE_9__.seafoodMenu, _data_js__WEBPACK_IMPORTED_MODULE_9__.filterArray);\n            (0,_controller__WEBPACK_IMPORTED_MODULE_8__.updateMenuWithFilters)(_data_js__WEBPACK_IMPORTED_MODULE_9__.mainsMenu, _data_js__WEBPACK_IMPORTED_MODULE_9__.filterArray);\n            (0,_controller__WEBPACK_IMPORTED_MODULE_8__.updateMenuWithFilters)(_data_js__WEBPACK_IMPORTED_MODULE_9__.saladsMenu, _data_js__WEBPACK_IMPORTED_MODULE_9__.filterArray);\n            (0,_controller__WEBPACK_IMPORTED_MODULE_8__.updateMenuWithFilters)(_data_js__WEBPACK_IMPORTED_MODULE_9__.dessertsMenu, _data_js__WEBPACK_IMPORTED_MODULE_9__.filterArray);\n            setCurrentPage(menuButton);\n            let x = _data_js__WEBPACK_IMPORTED_MODULE_9__.cPage.currentPage;\n            setCurrentPage(x);\n            (0,_menupage__WEBPACK_IMPORTED_MODULE_7__.generateMenu)();\n            let category = (0,_controller__WEBPACK_IMPORTED_MODULE_8__.getCurrentCategory)();\n            (0,_menupage__WEBPACK_IMPORTED_MODULE_7__.generateMenuItems)(category);\n        });\n    }\n    if (contactButton) {\n        contactButton.addEventListener('click', () => {\n            clearContentDiv();\n            setCurrentPage(contactButton);\n            (0,_contact__WEBPACK_IMPORTED_MODULE_6__.generateContactPage)();\n        });\n    }\n}\n\nfunction setCurrentPage(button) {\n    \n    //Desktop\n    //Sets all buttons to white\n    let menuItems = document.querySelectorAll('.menuitem');\n    menuItems.forEach((item) => {\n        if (item.firstChild != button) {\n            item.firstChild.style.color = 'white';\n        }\n    });\n\n    //Mobile sets buttons to black\n    let dropdown = document.querySelector('.dropdown');\n    let dropdownActive = document.querySelector('.dropdown active');\n    if (dropdown || dropdownActive) {\n        let dropdownItems = document.querySelectorAll('.dropdown-item');\n        dropdownItems.forEach((item) => {\n            if (item.firstChild != button) {\n                item.firstChild.style.color = 'black';\n            }\n        });\n    }\n\n    // Sets currentpage to gold/accent color\n        _data_js__WEBPACK_IMPORTED_MODULE_9__.cPage.currentPage = button;\n        _data_js__WEBPACK_IMPORTED_MODULE_9__.cPage.currentPage.style.color = 'var(--clr-accent-1)';\n}\n\nfunction setAttributes(el, attrs) {\n    for (let key in attrs) {\n        el.setAttribute(key, attrs[key]);\n    }\n}\n\n//# sourceURL=webpack://restaurant/./src/view.js?");

/***/ }),

/***/ "./src/images/Seafralogo.svg":
/*!***********************************!*\
  !*** ./src/images/Seafralogo.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2905051b0589fff88900.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/Seafralogo.svg?");

/***/ }),

/***/ "./src/images/bgimage.jpeg":
/*!*********************************!*\
  !*** ./src/images/bgimage.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"56abffa8f86a7df6b20f.jpeg\";\n\n//# sourceURL=webpack://restaurant/./src/images/bgimage.jpeg?");

/***/ }),

/***/ "./src/images/categoryimages/dessertscategorydesktop.svg":
/*!***************************************************************!*\
  !*** ./src/images/categoryimages/dessertscategorydesktop.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"470193422bd2eb5e5977.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/categoryimages/dessertscategorydesktop.svg?");

/***/ }),

/***/ "./src/images/categoryimages/dessertscategorymobile.svg":
/*!**************************************************************!*\
  !*** ./src/images/categoryimages/dessertscategorymobile.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9dba441be2d31ae7ff3a.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/categoryimages/dessertscategorymobile.svg?");

/***/ }),

/***/ "./src/images/categoryimages/entreecategorydesktop.svg":
/*!*************************************************************!*\
  !*** ./src/images/categoryimages/entreecategorydesktop.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cfbca73d8c20c9324a13.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/categoryimages/entreecategorydesktop.svg?");

/***/ }),

/***/ "./src/images/categoryimages/entreecategorymobile.svg":
/*!************************************************************!*\
  !*** ./src/images/categoryimages/entreecategorymobile.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c0f34f4dccbf7c03e9a8.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/categoryimages/entreecategorymobile.svg?");

/***/ }),

/***/ "./src/images/categoryimages/mainscategorydesktop.svg":
/*!************************************************************!*\
  !*** ./src/images/categoryimages/mainscategorydesktop.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e026c30e51ed2739ed6.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/categoryimages/mainscategorydesktop.svg?");

/***/ }),

/***/ "./src/images/categoryimages/mainscategorymobile.svg":
/*!***********************************************************!*\
  !*** ./src/images/categoryimages/mainscategorymobile.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"54e08b38e28b4f74eef1.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/categoryimages/mainscategorymobile.svg?");

/***/ }),

/***/ "./src/images/categoryimages/saladscategorydesktop.svg":
/*!*************************************************************!*\
  !*** ./src/images/categoryimages/saladscategorydesktop.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e1c9aaf23daaca68695.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/categoryimages/saladscategorydesktop.svg?");

/***/ }),

/***/ "./src/images/categoryimages/saladscategorymobile.svg":
/*!************************************************************!*\
  !*** ./src/images/categoryimages/saladscategorymobile.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3cf29f5bcaf496ffbf53.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/categoryimages/saladscategorymobile.svg?");

/***/ }),

/***/ "./src/images/categoryimages/seafoodcategorydesktop.svg":
/*!**************************************************************!*\
  !*** ./src/images/categoryimages/seafoodcategorydesktop.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"94e95f462687dd55c923.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/categoryimages/seafoodcategorydesktop.svg?");

/***/ }),

/***/ "./src/images/categoryimages/seafoodcategorymobile.svg":
/*!*************************************************************!*\
  !*** ./src/images/categoryimages/seafoodcategorymobile.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3f019736d07855671f62.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/categoryimages/seafoodcategorymobile.svg?");

/***/ }),

/***/ "./src/images/contacticons/clock.svg":
/*!*******************************************!*\
  !*** ./src/images/contacticons/clock.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7cc0c70c215a0e7592ab.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/contacticons/clock.svg?");

/***/ }),

/***/ "./src/images/contacticons/envelope.svg":
/*!**********************************************!*\
  !*** ./src/images/contacticons/envelope.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1611c24ab515f515e92d.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/contacticons/envelope.svg?");

/***/ }),

/***/ "./src/images/contacticons/mapmarker.svg":
/*!***********************************************!*\
  !*** ./src/images/contacticons/mapmarker.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ae0f4f12733eeadc9b9e.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/contacticons/mapmarker.svg?");

/***/ }),

/***/ "./src/images/contacticons/phone.svg":
/*!*******************************************!*\
  !*** ./src/images/contacticons/phone.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"68befc0564dcf8c87c55.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/contacticons/phone.svg?");

/***/ }),

/***/ "./src/images/dropdownicon.svg":
/*!*************************************!*\
  !*** ./src/images/dropdownicon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"113d59e2703636dfe157.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/dropdownicon.svg?");

/***/ }),

/***/ "./src/images/food/bananacreamnapoleon.jpg":
/*!*************************************************!*\
  !*** ./src/images/food/bananacreamnapoleon.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"00402cac60b5ee0b66aa.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/bananacreamnapoleon.jpg?");

/***/ }),

/***/ "./src/images/food/buffaloshrimp.jpg":
/*!*******************************************!*\
  !*** ./src/images/food/buffaloshrimp.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d11ff2f5b78409da3cbe.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/buffaloshrimp.jpg?");

/***/ }),

/***/ "./src/images/food/caesarsalad.jpg":
/*!*****************************************!*\
  !*** ./src/images/food/caesarsalad.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"865c459b18f9c948d859.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/caesarsalad.jpg?");

/***/ }),

/***/ "./src/images/food/carrotlox.jpeg":
/*!****************************************!*\
  !*** ./src/images/food/carrotlox.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d98a104d00dbb21c8d08.jpeg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/carrotlox.jpeg?");

/***/ }),

/***/ "./src/images/food/choppedsalad.jpg":
/*!******************************************!*\
  !*** ./src/images/food/choppedsalad.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ec61acc8acead32d479a.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/choppedsalad.jpg?");

/***/ }),

/***/ "./src/images/food/cremebrulee.jpg":
/*!*****************************************!*\
  !*** ./src/images/food/cremebrulee.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c57a98b15f4fe86b17d2.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/cremebrulee.jpg?");

/***/ }),

/***/ "./src/images/food/fishtacos.jpg":
/*!***************************************!*\
  !*** ./src/images/food/fishtacos.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e726d1b5e65565737a5.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/fishtacos.jpg?");

/***/ }),

/***/ "./src/images/food/foccaccia.jpg":
/*!***************************************!*\
  !*** ./src/images/food/foccaccia.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"68d577ef975401f7d2f1.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/foccaccia.jpg?");

/***/ }),

/***/ "./src/images/food/gelato.jpg":
/*!************************************!*\
  !*** ./src/images/food/gelato.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4da8e57f49e199c74b10.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/gelato.jpg?");

/***/ }),

/***/ "./src/images/food/greektomatosalad.jpg":
/*!**********************************************!*\
  !*** ./src/images/food/greektomatosalad.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf62ace8d4fee4b0b52b.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/greektomatosalad.jpg?");

/***/ }),

/***/ "./src/images/food/grilledkingcrab.jpg":
/*!*********************************************!*\
  !*** ./src/images/food/grilledkingcrab.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c3759d646276fef47940.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/grilledkingcrab.jpg?");

/***/ }),

/***/ "./src/images/food/hazelnutpraline.jpg":
/*!*********************************************!*\
  !*** ./src/images/food/hazelnutpraline.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"279cd134395363822c02.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/hazelnutpraline.jpg?");

/***/ }),

/***/ "./src/images/food/icebergwedge.jpg":
/*!******************************************!*\
  !*** ./src/images/food/icebergwedge.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a67aecc4e72f910beed.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/icebergwedge.jpg?");

/***/ }),

/***/ "./src/images/food/mixedseafoodgrill.jpg":
/*!***********************************************!*\
  !*** ./src/images/food/mixedseafoodgrill.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"99d2c3a70f348cad2bdc.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/mixedseafoodgrill.jpg?");

/***/ }),

/***/ "./src/images/food/mushroompasta.jpg":
/*!*******************************************!*\
  !*** ./src/images/food/mushroompasta.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a106fcffe94591c02368.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/mushroompasta.jpg?");

/***/ }),

/***/ "./src/images/food/peanutbutterpie.jpg":
/*!*********************************************!*\
  !*** ./src/images/food/peanutbutterpie.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"51d6320b17439f7d6d51.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/peanutbutterpie.jpg?");

/***/ }),

/***/ "./src/images/food/pearloysters.jpeg":
/*!*******************************************!*\
  !*** ./src/images/food/pearloysters.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c1d3e1a8838f9de3a9ec.jpeg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/pearloysters.jpeg?");

/***/ }),

/***/ "./src/images/food/ribeye.jpg":
/*!************************************!*\
  !*** ./src/images/food/ribeye.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d01575d303173c2ca7af.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/ribeye.jpg?");

/***/ }),

/***/ "./src/images/food/scallops.jpg":
/*!**************************************!*\
  !*** ./src/images/food/scallops.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"05ef5f36f661613cb97d.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/scallops.jpg?");

/***/ }),

/***/ "./src/images/food/seafoodsalad.jpg":
/*!******************************************!*\
  !*** ./src/images/food/seafoodsalad.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"722c04ced35937c3c07a.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/seafoodsalad.jpg?");

/***/ }),

/***/ "./src/images/food/seaurchinspaghetti.jpg":
/*!************************************************!*\
  !*** ./src/images/food/seaurchinspaghetti.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8d11f7198747f58ef5d6.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/seaurchinspaghetti.jpg?");

/***/ }),

/***/ "./src/images/food/steakfrites.jpg":
/*!*****************************************!*\
  !*** ./src/images/food/steakfrites.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4fb4b9ac9d0a386b585c.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/steakfrites.jpg?");

/***/ }),

/***/ "./src/images/food/tempuracalamari.jpg":
/*!*********************************************!*\
  !*** ./src/images/food/tempuracalamari.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ecde09a942779902a668.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/tempuracalamari.jpg?");

/***/ }),

/***/ "./src/images/food/tunaaupoivre.jpg":
/*!******************************************!*\
  !*** ./src/images/food/tunaaupoivre.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5000124133b9a32c139a.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/tunaaupoivre.jpg?");

/***/ }),

/***/ "./src/images/food/vegancrabcakes.jpg":
/*!********************************************!*\
  !*** ./src/images/food/vegancrabcakes.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e9dc19c565c37895173.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/vegancrabcakes.jpg?");

/***/ }),

/***/ "./src/images/food/yellowtailpokebowl.jpg":
/*!************************************************!*\
  !*** ./src/images/food/yellowtailpokebowl.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b61ed2f11f7ebe07cec7.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/food/yellowtailpokebowl.jpg?");

/***/ }),

/***/ "./src/images/menuicons/cupcake.png":
/*!******************************************!*\
  !*** ./src/images/menuicons/cupcake.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9be9fb5c5552fd8678b7.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/menuicons/cupcake.png?");

/***/ }),

/***/ "./src/images/menuicons/cupcakecolor.svg":
/*!***********************************************!*\
  !*** ./src/images/menuicons/cupcakecolor.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9a1565eb30b2a0b5a2b1.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/menuicons/cupcakecolor.svg?");

/***/ }),

/***/ "./src/images/menuicons/food-tray.png":
/*!********************************************!*\
  !*** ./src/images/menuicons/food-tray.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4a36970d3d27edf54e46.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/menuicons/food-tray.png?");

/***/ }),

/***/ "./src/images/menuicons/food-traycolor.svg":
/*!*************************************************!*\
  !*** ./src/images/menuicons/food-traycolor.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ef06fefb98af5b7a7d90.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/menuicons/food-traycolor.svg?");

/***/ }),

/***/ "./src/images/menuicons/imageicon.svg":
/*!********************************************!*\
  !*** ./src/images/menuicons/imageicon.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"20988a3e4726a74c77ac.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/menuicons/imageicon.svg?");

/***/ }),

/***/ "./src/images/menuicons/imageiconinverted.svg":
/*!****************************************************!*\
  !*** ./src/images/menuicons/imageiconinverted.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"221bef5785ee7ac7252f.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/menuicons/imageiconinverted.svg?");

/***/ }),

/***/ "./src/images/menuicons/prawn.png":
/*!****************************************!*\
  !*** ./src/images/menuicons/prawn.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6dcd349450f0a7be4c03.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/menuicons/prawn.png?");

/***/ }),

/***/ "./src/images/menuicons/prawncolor.svg":
/*!*********************************************!*\
  !*** ./src/images/menuicons/prawncolor.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dbb462fb560afea786cf.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/menuicons/prawncolor.svg?");

/***/ }),

/***/ "./src/images/menuicons/salad.png":
/*!****************************************!*\
  !*** ./src/images/menuicons/salad.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f80643c387315e3dc765.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/menuicons/salad.png?");

/***/ }),

/***/ "./src/images/menuicons/saladcolor.svg":
/*!*********************************************!*\
  !*** ./src/images/menuicons/saladcolor.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4a23c376b469b2a3e0e6.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/menuicons/saladcolor.svg?");

/***/ }),

/***/ "./src/images/menuicons/wheat.png":
/*!****************************************!*\
  !*** ./src/images/menuicons/wheat.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"816bcc19903069e6c249.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/menuicons/wheat.png?");

/***/ }),

/***/ "./src/images/menuicons/wheatcolor.svg":
/*!*********************************************!*\
  !*** ./src/images/menuicons/wheatcolor.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"40abdea6b4ee36a56801.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/menuicons/wheatcolor.svg?");

/***/ }),

/***/ "./src/images/mobilearrow.svg":
/*!************************************!*\
  !*** ./src/images/mobilearrow.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dae75cf942c943f64a96.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/mobilearrow.svg?");

/***/ }),

/***/ "./src/images/seafraLogoWhite.svg":
/*!****************************************!*\
  !*** ./src/images/seafraLogoWhite.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"356c608eb453ce4e8436.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/seafraLogoWhite.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;