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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Open+Sans|Roboto:400,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* body {\\r\\n  height: 100%;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  background: #f4f4f4;\\r\\n  font-family: 'Open Sans', 'Lucida Grande', sans-serif;\\r\\n}\\r\\n\\r\\n.main-parent {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  height: 100vh;\\r\\n  margin-top: 32px;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.to-do-container {\\r\\n  width: 400px;\\r\\n  background-color: white;\\r\\n  box-shadow: 0 5px 8px 0 #c9c9c930, 0 6px 20px 0 #c9c9c930;\\r\\n}\\r\\n\\r\\n.task-container {\\r\\n  list-style: none;\\r\\n  margin-block: 0;\\r\\n  padding-inline: 0;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\nli {\\r\\n  border-bottom: 1px solid #dedede;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  float: right;\\r\\n  height: 1rem;\\r\\n}\\r\\n\\r\\n.decoration {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.task-text {\\r\\n  border: none;\\r\\n  font-style: italic;\\r\\n  font-size: 1rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.task-text:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.add-task {\\r\\n  border: none;\\r\\n  font-size: 1rem;\\r\\n  width: 80%;\\r\\n  letter-spacing: 1px;\\r\\n}\\r\\n\\r\\n.clear {\\r\\n  background-color: #e9e9e996;\\r\\n  text-align: center;\\r\\n  color: gray;\\r\\n  border-bottom: none;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  height: 1.3rem;\\r\\n  width: 1.4rem;\\r\\n  border: 2px solid #ccc;\\r\\n  border-radius: 3px;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.line {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  background-color: #fffeca;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  background-image: url(\\\"/src/icons/check.png\\\");\\r\\n  width: 1.4rem;\\r\\n  background-repeat: no-repeat;\\r\\n  height: 1.4rem;\\r\\n}\\r\\n\\r\\n.clear-all {\\r\\n  cursor: pointer;\\r\\n} */\\r\\n\\r\\n\\r\\n\\r\\n:root {\\r\\n  /* dark shades of primary color*/\\r\\n  --clr-primary-1: hsl(205, 86%, 17%);\\r\\n  --clr-primary-2: hsl(205, 77%, 27%);\\r\\n  --clr-primary-3: hsl(205, 72%, 37%);\\r\\n  --clr-primary-4: hsl(205, 63%, 48%);\\r\\n  /* primary/main color */\\r\\n  --clr-primary-5: #49a6e9;\\r\\n  /* lighter shades of primary color */\\r\\n  --clr-primary-6: hsl(205, 89%, 70%);\\r\\n  --clr-primary-7: hsl(205, 90%, 76%);\\r\\n  --clr-primary-8: hsl(205, 86%, 81%);\\r\\n  --clr-primary-9: hsl(205, 90%, 88%);\\r\\n  --clr-primary-10: hsl(205, 100%, 96%);\\r\\n  /* darkest grey - used for headings */\\r\\n  --clr-grey-1: hsl(209, 61%, 16%);\\r\\n  --clr-grey-2: hsl(211, 39%, 23%);\\r\\n  --clr-grey-3: hsl(209, 34%, 30%);\\r\\n  --clr-grey-4: hsl(209, 28%, 39%);\\r\\n  /* grey used for paragraphs */\\r\\n  --clr-grey-5: hsl(210, 22%, 49%);\\r\\n  --clr-grey-6: hsl(209, 23%, 60%);\\r\\n  --clr-grey-7: hsl(211, 27%, 70%);\\r\\n  --clr-grey-8: hsl(210, 31%, 80%);\\r\\n  --clr-grey-9: hsl(212, 33%, 89%);\\r\\n  --clr-grey-10: hsl(210, 36%, 96%);\\r\\n  --clr-white: #fff;\\r\\n  --clr-red-dark: hsl(360, 67%, 44%);\\r\\n  --clr-red-light: hsl(360, 71%, 66%);\\r\\n  --clr-green-dark: hsl(125, 67%, 44%);\\r\\n  --clr-green-light: hsl(125, 71%, 66%);\\r\\n  --clr-black: #222;\\r\\n  --ff-primary: \\\"Roboto\\\", sans-serif;\\r\\n  --ff-secondary: \\\"Open Sans\\\", sans-serif;\\r\\n  --transition: all 0.3s linear;\\r\\n  --spacing: 0.25rem;\\r\\n  --radius: 0.5rem;\\r\\n  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\\r\\n  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\\r\\n  --max-width: 1170px;\\r\\n  --fixed-width: 620px;\\r\\n}\\r\\n/*\\r\\n=============== \\r\\nGlobal Styles\\r\\n===============\\r\\n*/\\r\\n\\r\\n*,\\r\\n::after,\\r\\n::before {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\nbody {\\r\\n  font-family: var(--ff-secondary);\\r\\n  background: var(--clr-grey-10);\\r\\n  color: var(--clr-grey-1);\\r\\n  line-height: 1.5;\\r\\n  font-size: 0.875rem;\\r\\n}\\r\\nul {\\r\\n  list-style-type: none;\\r\\n}\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\nimg:not(.logo) {\\r\\n  width: 100%;\\r\\n}\\r\\nimg {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4 {\\r\\n  letter-spacing: var(--spacing);\\r\\n  text-transform: capitalize;\\r\\n  line-height: 1.25;\\r\\n  margin-bottom: 0.75rem;\\r\\n  font-family: var(--ff-primary);\\r\\n}\\r\\nh1 {\\r\\n  font-size: 3rem;\\r\\n}\\r\\nh2 {\\r\\n  font-size: 2rem;\\r\\n}\\r\\nh3 {\\r\\n  font-size: 1.25rem;\\r\\n}\\r\\nh4 {\\r\\n  font-size: 0.875rem;\\r\\n}\\r\\np {\\r\\n  margin-bottom: 1.25rem;\\r\\n  color: var(--clr-grey-5);\\r\\n}\\r\\n@media screen and (min-width: 800px) {\\r\\n  h1 {\\r\\n    font-size: 4rem;\\r\\n  }\\r\\n  h2 {\\r\\n    font-size: 2.5rem;\\r\\n  }\\r\\n  h3 {\\r\\n    font-size: 1.75rem;\\r\\n  }\\r\\n  h4 {\\r\\n    font-size: 1rem;\\r\\n  }\\r\\n  body {\\r\\n    font-size: 1rem;\\r\\n  }\\r\\n  h1,\\r\\n  h2,\\r\\n  h3,\\r\\n  h4 {\\r\\n    line-height: 1;\\r\\n  }\\r\\n}\\r\\n/*  global classes */\\r\\n\\r\\n.btn {\\r\\n  text-transform: uppercase;\\r\\n  background: transparent;\\r\\n  color: var(--clr-black);\\r\\n  padding: 0.375rem 0.75rem;\\r\\n  letter-spacing: var(--spacing);\\r\\n  display: inline-block;\\r\\n  transition: var(--transition);\\r\\n  font-size: 0.875rem;\\r\\n  border: 2px solid var(--clr-black);\\r\\n  cursor: pointer;\\r\\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\\r\\n  border-radius: var(--radius);\\r\\n}\\r\\n.btn:hover {\\r\\n  color: var(--clr-white);\\r\\n  background: var(--clr-black);\\r\\n}\\r\\n/* section */\\r\\n.section {\\r\\n  padding: 50rem 0;\\r\\n}\\r\\n\\r\\n.section-center {\\r\\n  width: 90vw;\\r\\n  margin: 0 auto;\\r\\n  max-width: 35rem;\\r\\n  margin-top: 8rem;\\r\\n}\\r\\n@media screen and (min-width: 992px) {\\r\\n  .section-center {\\r\\n    width: 95vw;\\r\\n  }\\r\\n}\\r\\nmain {\\r\\n  min-height: 100vh;\\r\\n  display: grid;\\r\\n  place-items: center;\\r\\n}\\r\\n/*\\r\\n=============== \\r\\nGrocery List\\r\\n===============\\r\\n*/\\r\\n.section-center {\\r\\n  background: var(--clr-white);\\r\\n  border-radius: var(--radius);\\r\\n  box-shadow: var(--light-shadow);\\r\\n  transition: var(--transition);\\r\\n  padding: 2rem;\\r\\n}\\r\\n.section-center:hover {\\r\\n  box-shadow: var(--dark-shadow);\\r\\n}\\r\\n.alert {\\r\\n  margin-bottom: 1rem;\\r\\n  height: 1.25rem;\\r\\n  display: grid;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  font-size: 0.7rem;\\r\\n  border-radius: 0.25rem;\\r\\n  letter-spacing: var(--spacing);\\r\\n  text-transform: capitalize;\\r\\n}\\r\\n.alert-danger {\\r\\n  color: #721c24;\\r\\n  background: #f8d7da;\\r\\n}\\r\\n.alert-success {\\r\\n  color: #155724;\\r\\n  background: #d4edda;\\r\\n}\\r\\n.grocery-form h3 {\\r\\n  color: var(--clr-primary-1);\\r\\n  margin-bottom: 1.5rem;\\r\\n  text-align: center;\\r\\n}\\r\\n.form-control {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n#grocery {\\r\\n  padding: 0.25rem;\\r\\n  padding-left: 1rem;\\r\\n  background: var(--clr-grey-10);\\r\\n  border-top-left-radius: var(--radius);\\r\\n  border-bottom-left-radius: var(--radius);\\r\\n  border-color: transparent;\\r\\n  font-size: 1rem;\\r\\n  flex: 1 0 auto;\\r\\n  color: var(--clr-grey-5);\\r\\n}\\r\\n#grocery::placeholder {\\r\\n  font-family: var(--ff-secondary);\\r\\n  color: var(--clr-grey-5);\\r\\n}\\r\\n.submit-btn {\\r\\n  background: var(--clr-primary-8);\\r\\n  border-color: transparent;\\r\\n  flex: 0 0 5rem;\\r\\n  display: grid;\\r\\n  align-items: center;\\r\\n  padding: 0.25rem;\\r\\n  text-transform: capitalize;\\r\\n  letter-spacing: 2px;\\r\\n  border-top-right-radius: var(--radius);\\r\\n  border-bottom-right-radius: var(--radius);\\r\\n  cursor: pointer;\\r\\n  content: var(--clr-primary-5);\\r\\n  transition: var(--transition);\\r\\n  font-size: 0.85rem;\\r\\n}\\r\\n.submit-btn:hover {\\r\\n  background: var(--clr-primary-5);\\r\\n  color: var(--clr-white);\\r\\n}\\r\\n\\r\\n.grocery-container {\\r\\n  margin-top: 2rem;\\r\\n  transition: var(--transition);\\r\\n  /* visibility: hidden; */\\r\\n}\\r\\n.show-container {\\r\\n  visibility: visible;\\r\\n}\\r\\n.grocery-item {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 0.5rem;\\r\\n  transition: var(--transition);\\r\\n  padding: 0.25rem 1rem;\\r\\n  border-radius: var(--radius);\\r\\n  text-transform: capitalize;\\r\\n}\\r\\n.grocery-item:hover {\\r\\n  color: var(--clr-grey-5);\\r\\n  background: var(--clr-grey-10);\\r\\n}\\r\\n.grocery-item:hover .title {\\r\\n  color: var(--clr-grey-5);\\r\\n}\\r\\n.title {\\r\\n  margin-bottom: 0;\\r\\n  color: var(--clr-grey-1);\\r\\n  letter-spacing: 2px;\\r\\n  transition: var(--transition);\\r\\n}\\r\\n.edit-btn,\\r\\n.delete-btn {\\r\\n  background: transparent;\\r\\n  border-color: transparent;\\r\\n  cursor: pointer;\\r\\n  font-size: 0.7rem;\\r\\n  margin: 0 0.15rem;\\r\\n  transition: var(--transition);\\r\\n}\\r\\n.edit-btn {\\r\\n  color: var(--clr-green-light);\\r\\n}\\r\\n.edit-btn:hover {\\r\\n  color: var(--clr-green-dark);\\r\\n}\\r\\n.delete-btn {\\r\\n  color: var(--clr-red-light);\\r\\n}\\r\\n.delete-btn:hover {\\r\\n  color: var(--clr-red-dark);\\r\\n}\\r\\n.clear-btn {\\r\\n  text-transform: capitalize;\\r\\n  width: 10rem;\\r\\n  height: 1.5rem;\\r\\n  display: grid;\\r\\n  align-items: center;\\r\\n  background: transparent;\\r\\n  border-color: transparent;\\r\\n  color: var(--clr-red-light);\\r\\n  margin: 0 auto;\\r\\n  font-size: 0.85rem;\\r\\n  letter-spacing: var(--spacing);\\r\\n  cursor: pointer;\\r\\n  transition: var(--transition);\\r\\n  margin-top: 1.25rem;\\r\\n}\\r\\n.clear-btn:hover {\\r\\n  color: var(--clr-red-dark);\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-exercise/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-exercise/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _taskUpdate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskUpdate.js */ \"./src/taskUpdate.js\");\n\r\n\r\n\r\n\r\nconst alert = document.querySelector(\".alert\");\r\nconst form = document.querySelector(\".grocery-form\");\r\nconst grocery = document.getElementById(\"grocery\");\r\nconst submitBtn = document.querySelector(\".submit-btn\");\r\nconst container = document.querySelector(\".grocery-container\");\r\nconst list = document.querySelector(\".grocery-list\");\r\nconst clearBtn = document.querySelector(\".clear-btn\");\r\n\r\n//edit option\r\n\r\nlet editElement;\r\nlet editFlag = false;\r\nlet editID = \"\";\r\n\r\n// *******  Event listeners ********\r\n//submit form\r\nform.addEventListener(\"submit\", addItem);\r\n\r\n// clear all items\r\nclearBtn.addEventListener(\"click\", clearItems);\r\n\r\n// load items\r\nwindow.addEventListener('DOMContentLoaded', setupItems)\r\n\r\n//FUNCTIONS\r\n\r\nfunction addItem(e) {\r\n  e.preventDefault();\r\n  const value = grocery.value;\r\n  const id = new Date().getTime().toString();\r\n  if (value && !editFlag) {\r\n    createListItem(id, value)\r\n    // display alert\r\n    displayAlert(\"Task has been added successfully\", \"success\");\r\n    //show container\r\n    container.classList.add(\"show-container\");\r\n    // add to local storage\r\n    addToLocalStorage(id, value);\r\n    // set back to default\r\n    setBackToDefault();\r\n  } else if (value && editFlag) {\r\n    editElement.innerHTML = value;\r\n    displayAlert(\"Task edited\", \"success\");\r\n    //edit local storage\r\n    editLocalStorage(editID, value);\r\n    setBackToDefault();\r\n  } else {\r\n    displayAlert(\"Please enter task\", \"danger\");\r\n  }\r\n}\r\n\r\n//display alert\r\n\r\nfunction displayAlert(text, action) {\r\n  alert.textContent = text;\r\n  alert.classList.add(`alert-${action}`);\r\n\r\n  //remove alert\r\n  setTimeout(function () {\r\n    alert.textContent = \"\";\r\n    alert.classList.remove(`alert-${action}`);\r\n  }, 1000);\r\n}\r\n\r\nfunction clearItems() {\r\n  const items = document.querySelectorAll(\".grocery-item\");\r\n\r\n  if (items.length > 0) {\r\n    items.forEach(function (item) {\r\n      list.removeChild(item);\r\n    });\r\n  }\r\n  container.classList.remove(\"show-container\");\r\n  displayAlert(\"empty list\", \"danger\");\r\n  setBackToDefault();\r\n  localStorage.removeItem(\"list\");\r\n}\r\n\r\n// delete function\r\nfunction deleteItem(e) {\r\n  const element = e.currentTarget.parentElement.parentElement;\r\n  const id = element.dataset.id;\r\n  list.removeChild(element);\r\n  if (list.children.length === 0) {\r\n    container.classList.remove(\"show-container\");\r\n  }\r\n  displayAlert(\"Task removed\", \"danger\");\r\n  setBackToDefault();\r\n  //remove from local storage\r\n  removeFromLocalStorage(id);\r\n}\r\n//edit function\r\nfunction editItem(e) {\r\n  const element = e.currentTarget.parentElement.parentElement;\r\n\r\n  //set edit item\r\n  editElement = e.currentTarget.parentElement.previousElementSibling;\r\n  // set form value\r\n  grocery.value = editElement.innerHTML;\r\n  editFlag = true;\r\n  editID = element.dataset.id;\r\n  submitBtn.textContent = \"edit\";\r\n}\r\n\r\n// set back to default\r\nfunction setBackToDefault() {\r\n  grocery.value = \"\";\r\n  editFlag = false;\r\n  editID = \"\";\r\n  submitBtn.textContent = \"submit\";\r\n}\r\n\r\n// Local Storage\r\n\r\nfunction addToLocalStorage(id, value) {\r\n  const todo = { id, value };\r\n  let items = getLocalStorage();\r\n  items.push(todo);\r\n  localStorage.setItem(\"list\", JSON.stringify(items));\r\n}\r\n\r\nfunction removeFromLocalStorage(id) {\r\n  let items = getLocalStorage();\r\n\r\n  items = items.filter(function (item) {\r\n    if (item.id !== id) {\r\n      return item;\r\n    }\r\n  });\r\n  localStorage.setItem(\"list\", JSON.stringify(items));\r\n}\r\nfunction editLocalStorage(id, value) {\r\n  let items = getLocalStorage();\r\n  items = items.map(function (item) {\r\n    if (item.id === id) {\r\n      item.value = value;\r\n    }\r\n    return item;\r\n  });\r\n\r\n  localStorage.setItem(\"list\", JSON.stringify(items));\r\n}\r\n\r\nfunction getLocalStorage() {\r\n  return localStorage.getItem(\"list\")\r\n    ? JSON.parse(localStorage.getItem(\"list\"))\r\n    : [];\r\n}\r\n\r\nfunction setupItems(){\r\n    let items = getLocalStorage()\r\n    if(items.length > 0){\r\n      items.forEach(function(item){\r\n        createListItem(item.id, item.value)\r\n      })  \r\n\r\n    }\r\n}\r\n\r\nfunction createListItem(id, value){\r\n    const element = document.createElement(\"article\");\r\n    // add class\r\n    element.classList.add(\"grocery-item\");\r\n    //add id\r\n    const attr = document.createAttribute(\"data-id\");\r\n    attr.value = id;\r\n    element.setAttributeNode(attr);\r\n    element.innerHTML = `<p class=\"title\">${value}</p>\r\n            <div class=\"btn-container\">\r\n               <button type=\"button\" class=\"edit-btn\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n               </button>\r\n               <button type=\"button\" class=\"delete-btn\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n               </button>\r\n            </div>`;\r\n    const deleteBtn = element.querySelector(\".delete-btn\");\r\n    const editBtn = element.querySelector(\".edit-btn\");\r\n    deleteBtn.addEventListener(\"click\", deleteItem);\r\n    editBtn.addEventListener(\"click\", editItem);\r\n\r\n    // append child\r\n    list.appendChild(element);\r\n} \n\n//# sourceURL=webpack://webpack-exercise/./src/index.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TASK {\r\n  constructor() {\r\n    this.taskList = [];\r\n  }\r\n\r\n  static fetch() {\r\n    return JSON.parse(localStorage.getItem('task')) || [];\r\n  }\r\n\r\n  static updateStorage(updatedTask) {\r\n    localStorage.setItem('task', JSON.stringify(updatedTask));\r\n  }\r\n\r\n  add(task) {\r\n    this.taskList = TASK.fetch();\r\n    this.taskList.push(task);\r\n    TASK.updateStorage(this.taskList);\r\n  }\r\n\r\n  updateIndex() {\r\n    this.taskList.forEach((item, id) => {\r\n      item.index = id + 1;\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TASK);\r\n\n\n//# sourceURL=webpack://webpack-exercise/./src/task.js?");

/***/ }),

/***/ "./src/taskUpdate.js":
/*!***************************!*\
  !*** ./src/taskUpdate.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\nconst taskUpdate = (e) => {\r\n  const id = parseInt(e.target.id.split('-')[1], 10);\r\n  _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskList = _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch();\r\n  _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskList[id - 1].completed = !_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskList[id - 1].completed;\r\n  _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateStorage(_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskList);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskUpdate);\r\n\n\n//# sourceURL=webpack://webpack-exercise/./src/taskUpdate.js?");

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