/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Roboto/Roboto-Regular.ttf */ "./src/assets/Roboto/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Roboto/Roboto-Bold.ttf */ "./src/assets/Roboto/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Roboto";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("ttf");
}

@font-face {
  font-family: "Roboto-Bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("ttf");
}

html {
  background-color: rgb(205, 205, 205);
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0px;
}

/* #todo-list-header {
  background-color: #37392e;
  color: whitesmoke;
  padding: 10px;
} */

#app-container {
  height: 100vh;
  display: flex;
}

#side-bar {
  background-color: #37392e;
  padding: 10px 50px;
  display: fixed;
  flex-grow: 1;
}

#side-bar h1 {
  color: whitesmoke;
  padding: 10px 20px;
}

#todo-list-container {
  width: 70%;
  flex-grow: 4;
  padding: 100px 50px;
  position: relative;
}

#todo-list {
  background-color: whitesmoke;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  justify-content: center;
  overflow: auto;
  height: 100%;
}

.todo-card {
  background-color: #eee5e5;
  padding: 5px;
  transition: background-color 0.3s, transform 0.3s;
  border-radius: 7px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  width: 80%;
  flex: 0 0 auto;
  align-self: flex-start;
  margin: 10px;
}

.todo-card:hover {
  background-color: #b9b3b3;
  transform: scale(1.01);
}

.todo-card.priority-high {
}
.todo-card.priority-medium {
}
.todo-card.priority-low {
}

.todo-title {
  font-family: "Roboto-Bold", sans-serif;
  font-size: 20px;
}

.todo-desc {
}
.todo-card.hidden .todo-details .todo-desc {
  display: none;
}
.todo-duedate {
}

.todo-priority {
  display: none;
}

button.new-todo-btn {
  background-color: #19647e;
  position: fixed;
  color: whitesmoke;
  padding: 10px;
  border-radius: 50%;
  border: none;
  width: 60px;
  height: 60px;
  content: "";
  left: 30px;
  bottom: 30px;
  cursor: pointer;
}

button.new-todo-btn::after {
  position: absolute;
  content: "";
  width: 40px;
  height: 6px;
  background-color: #ddcecd;
  left: 10px;
  top: 27px;
}

button.new-todo-btn::before {
  position: absolute;
  content: "";
  width: 40px;
  height: 6px;
  background-color: #ddcecd;
  left: 10px;
  top: 27px;
  transform: rotate(90deg);
}

#create-todo-dom {
  display: relative;
  border: none;
  border-radius: 7px;
  padding: 50px;
  height: 30vh;
  width: 50vw;
  /* display: grid; */
  /* grid-template-rows: 1fr 1fr 2fr 1fr; */
}
#create-todo-form {
  /* display: relative; */
  /* border: none; */
  /* border-radius: 7px; */
  /* padding: 50px; */
  height: 100%;
  /* width: 50vw; */
  display: grid;
  grid-template-rows: 1fr 1fr 2fr 1fr;
}

#create-todo-dom #createTodoCloseBtn {
  background-color: #19647e;
  position: absolute;
  color: whitesmoke;
  padding: 10px;
  border-radius: 50%;
  border: none;
  width: 60px;
  height: 60px;
  content: "";
  top: 15px;
  right: 30px;
  cursor: pointer;
}

#create-todo-dom #createTodoCloseBtn::before {
  position: absolute;
  content: "";
  width: 40px;
  height: 6px;
  background-color: #ddcecd;
  left: 10px;
  top: 27px;
  transform: rotate(45deg);
}
#create-todo-dom #createTodoCloseBtn::after {
  position: absolute;
  content: "";
  width: 40px;
  height: 6px;
  background-color: #ddcecd;
  left: 10px;
  top: 27px;
  transform: rotate(135deg);
}

#create-todo-dom h1 {
  margin: none;
}

#create-todo-dom div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: end;
}
#create-todo-dom button {
  border: none;
  border-radius: 7px;
  padding: 10px;
  background-color: #19647e;
  color: #ddcecd;
  transition: transform 0.3s;
}

#create-todo-dom button:hover {
  transform: scale(1.1);
}

#create-todo-dom input {
  border: none;
}

#create-todo-dom textarea {
  border: none;
  resize: none;
  overflow: auto;
}

.new_todo_title {
  font-size: 20px;
  line-height: 15px;
  vertical-align: top;
}

.new_todo_desc {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

.new_todo_title:focus,
.new_todo_desc:focus {
  outline: none;
}

.new_todo_title::placeholder {
  vertical-align: top;
}

.new_todo_desc::placeholder {
  position: absolute;
  top: 0px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Roboto\";\n  src: url(\"./assets/Roboto/Roboto-Regular.ttf\") format(\"ttf\");\n}\n\n@font-face {\n  font-family: \"Roboto-Bold\";\n  src: url(\"./assets/Roboto/Roboto-Bold.ttf\") format(\"ttf\");\n}\n\nhtml {\n  background-color: rgb(205, 205, 205);\n  font-family: \"Roboto\", sans-serif;\n}\n\nbody {\n  margin: 0px;\n}\n\n/* #todo-list-header {\n  background-color: #37392e;\n  color: whitesmoke;\n  padding: 10px;\n} */\n\n#app-container {\n  height: 100vh;\n  display: flex;\n}\n\n#side-bar {\n  background-color: #37392e;\n  padding: 10px 50px;\n  display: fixed;\n  flex-grow: 1;\n}\n\n#side-bar h1 {\n  color: whitesmoke;\n  padding: 10px 20px;\n}\n\n#todo-list-container {\n  width: 70%;\n  flex-grow: 4;\n  padding: 100px 50px;\n  position: relative;\n}\n\n#todo-list {\n  background-color: whitesmoke;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  /* width: 100%; */\n  justify-content: center;\n  overflow: auto;\n  height: 100%;\n}\n\n.todo-card {\n  background-color: #eee5e5;\n  padding: 5px;\n  transition: background-color 0.3s, transform 0.3s;\n  border-radius: 7px;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  width: 80%;\n  flex: 0 0 auto;\n  align-self: flex-start;\n  margin: 10px;\n}\n\n.todo-card:hover {\n  background-color: #b9b3b3;\n  transform: scale(1.01);\n}\n\n.todo-card.priority-high {\n}\n.todo-card.priority-medium {\n}\n.todo-card.priority-low {\n}\n\n.todo-title {\n  font-family: \"Roboto-Bold\", sans-serif;\n  font-size: 20px;\n}\n\n.todo-desc {\n}\n.todo-card.hidden .todo-details .todo-desc {\n  display: none;\n}\n.todo-duedate {\n}\n\n.todo-priority {\n  display: none;\n}\n\nbutton.new-todo-btn {\n  background-color: #19647e;\n  position: fixed;\n  color: whitesmoke;\n  padding: 10px;\n  border-radius: 50%;\n  border: none;\n  width: 60px;\n  height: 60px;\n  content: \"\";\n  left: 30px;\n  bottom: 30px;\n  cursor: pointer;\n}\n\nbutton.new-todo-btn::after {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 6px;\n  background-color: #ddcecd;\n  left: 10px;\n  top: 27px;\n}\n\nbutton.new-todo-btn::before {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 6px;\n  background-color: #ddcecd;\n  left: 10px;\n  top: 27px;\n  transform: rotate(90deg);\n}\n\n#create-todo-dom {\n  display: relative;\n  border: none;\n  border-radius: 7px;\n  padding: 50px;\n  height: 30vh;\n  width: 50vw;\n  /* display: grid; */\n  /* grid-template-rows: 1fr 1fr 2fr 1fr; */\n}\n#create-todo-form {\n  /* display: relative; */\n  /* border: none; */\n  /* border-radius: 7px; */\n  /* padding: 50px; */\n  height: 100%;\n  /* width: 50vw; */\n  display: grid;\n  grid-template-rows: 1fr 1fr 2fr 1fr;\n}\n\n#create-todo-dom #createTodoCloseBtn {\n  background-color: #19647e;\n  position: absolute;\n  color: whitesmoke;\n  padding: 10px;\n  border-radius: 50%;\n  border: none;\n  width: 60px;\n  height: 60px;\n  content: \"\";\n  top: 15px;\n  right: 30px;\n  cursor: pointer;\n}\n\n#create-todo-dom #createTodoCloseBtn::before {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 6px;\n  background-color: #ddcecd;\n  left: 10px;\n  top: 27px;\n  transform: rotate(45deg);\n}\n#create-todo-dom #createTodoCloseBtn::after {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 6px;\n  background-color: #ddcecd;\n  left: 10px;\n  top: 27px;\n  transform: rotate(135deg);\n}\n\n#create-todo-dom h1 {\n  margin: none;\n}\n\n#create-todo-dom div {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: end;\n}\n#create-todo-dom button {\n  border: none;\n  border-radius: 7px;\n  padding: 10px;\n  background-color: #19647e;\n  color: #ddcecd;\n  transition: transform 0.3s;\n}\n\n#create-todo-dom button:hover {\n  transform: scale(1.1);\n}\n\n#create-todo-dom input {\n  border: none;\n}\n\n#create-todo-dom textarea {\n  border: none;\n  resize: none;\n  overflow: auto;\n}\n\n.new_todo_title {\n  font-size: 20px;\n  line-height: 15px;\n  vertical-align: top;\n}\n\n.new_todo_desc {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n}\n\n.new_todo_title:focus,\n.new_todo_desc:focus {\n  outline: none;\n}\n\n.new_todo_title::placeholder {\n  vertical-align: top;\n}\n\n.new_todo_desc::placeholder {\n  position: absolute;\n  top: 0px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom/create_todo.js":
/*!********************************!*\
  !*** ./src/dom/create_todo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateCreateTodoDOM)
/* harmony export */ });
function generateCreateTodoDOM() {
  const dom_dialog = document.createElement("dialog");
  const create_todo_form = document.createElement("form");
  // const form = document.createElement("form");

  const header_text = document.createElement("h1");
  header_text.innerText = "New Todo";
  const closeBtn = document.createElement("button");

  closeBtn.id = "createTodoCloseBtn";
  closeBtn.formMethod = "dialog";
  closeBtn.value = "cancel";

  dom_dialog.id = "create-todo-dom";
  create_todo_form.id = "create-todo-form";
  create_todo_form.method = "dialog";

  const input_title = document.createElement("input");
  input_title.placeholder = "Title: new todo";
  input_title.classList.add("new_todo_title");
  input_title.required = true;
  input_title.name = "input_title";

  const input_desc = document.createElement("textarea");
  input_desc.placeholder = "Description";
  input_desc.classList.add("new_todo_desc");

  const date_div = document.createElement("div");
  const input_duedate = document.createElement("input");
  input_duedate.type = "date";
  const input_duedate_label = document.createElement("label");
  input_duedate_label.innerText = "Due Date:";
  date_div.appendChild(input_duedate_label);
  date_div.appendChild(input_duedate);

  const priority_div = document.createElement("div");
  const input_priority = document.createElement("select");
  const priority_high = document.createElement("option");
  const priority_med = document.createElement("option");
  const priority_low = document.createElement("option");

  priority_high.value = "high-priority";
  priority_high.innerText = "High";
  priority_med.value = "med-priority";
  priority_med.innerText = "Med";
  priority_low.value = "low-priority";
  priority_low.innerText = "Low";

  input_priority.appendChild(priority_high);
  input_priority.appendChild(priority_med);
  input_priority.appendChild(priority_low);
  input_priority.options[1].selected = true;
  const input_priority_label = document.createElement("label");
  input_priority_label.innerText = "Priority";
  priority_div.appendChild(input_priority_label);
  priority_div.appendChild(input_priority);

  // <input type="button" value="Submit" onclick="submitForm()"></input>

  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Create";
  submitBtn.id = "create-todo-submit-btn";
  // submitBtn.type = "button";
  submitBtn.value = "default";
  // submitBtn.onclick = submitAction();
  submitBtn.addEventListener("click", (event) => {
    // window.dispatchEvent(createTodoEvent);
    console.log("CREATING TODO EVENT TRIGGERED");
  });
  const details_div = document.createElement("div");
  details_div.appendChild(priority_div);
  details_div.appendChild(date_div);
  details_div.appendChild(submitBtn);

  create_todo_form.appendChild(header_text);
  create_todo_form.appendChild(closeBtn);
  create_todo_form.appendChild(input_title);
  create_todo_form.appendChild(input_desc);
  create_todo_form.appendChild(details_div);
  dom_dialog.appendChild(create_todo_form);

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let formData = {
      // Extract form data here, e.g., using form elements or other methods
      title: input_title.value,
      desc: input_desc.value,
      duedate: input_duedate.value,
      priority: input_priority.value,
      // Add more properties as needed
    };
    const customEvent = new CustomEvent("dataSubmitted", { detail: formData });
    document.dispatchEvent(customEvent);
    dom_dialog.close();
  });

  return dom_dialog;
}

// const createTodoEvent = new CustomEvent("create-todo", { detail: FormData });


/***/ }),

/***/ "./src/dom/dom_card.js":
/*!*****************************!*\
  !*** ./src/dom/dom_card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateTodoCardDOM)
/* harmony export */ });
function generateTodoCardDOM(todo) {
  const cardDiv = document.createElement("div");
  cardDiv.classList = "todo-card hidden";

  const todoTitle = document.createElement("h1");
  todoTitle.innerHTML = todo.title;
  todoTitle.classList = "todo-title";

  const todoDetails = document.createElement("div");
  todoDetails.classList = "todo-details";

  const todoDesc = document.createElement("p");
  todoDesc.innerHTML = todo.description;
  todoDesc.classList = "todo-desc";

  const todoDueDate = document.createElement("p");
  todoDueDate.innerHTML = todo.dueDate;
  todoDueDate.classList = "todo-duedate";

  const todoPriority = document.createElement("p");
  todoPriority.innerHTML = todo.priority;
  todoPriority.classList = "todo-priority";

  todoDetails.appendChild(todoDesc);
  todoDetails.appendChild(todoDueDate);
  todoDetails.appendChild(todoPriority);

  cardDiv.appendChild(todoTitle);
  cardDiv.appendChild(todoDetails);

  return cardDiv;
}


/***/ }),

/***/ "./src/dom/dom_new_todo_btn.js":
/*!*************************************!*\
  !*** ./src/dom/dom_new_todo_btn.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateTodoBtn)
/* harmony export */ });
function generateTodoBtn() {
  const button = document.createElement("button");
  // button.innerHTML = "NEW TODO";
  button.classList.add("new-todo-btn");

  return button;
}


/***/ }),

/***/ "./src/helper/id_generator.js":
/*!************************************!*\
  !*** ./src/helper/id_generator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateUniqueId() {
  const timestamp = new Date().getTime();
  const uniqueId = `id_${timestamp}`;
  return uniqueId;
}

// Example usage
// const newUniqueId = generateUniqueId();
// console.log(newUniqueId);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateUniqueId);


/***/ }),

/***/ "./src/todo/project.js":
/*!*****************************!*\
  !*** ./src/todo/project.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _helper_id_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/id_generator */ "./src/helper/id_generator.js");


class Project {
  constructor() {
    this._id = (0,_helper_id_generator__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this._title;
    this._description;
  }

  get id() {
    return this.id;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get title() {
    return this._title;
  }

  set description(newDesc) {
    this._description = newDesc;
  }

  get description() {
    return this._description;
  }
}


/***/ }),

/***/ "./src/todo/todo.js":
/*!**************************!*\
  !*** ./src/todo/todo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _helper_id_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/id_generator */ "./src/helper/id_generator.js");


class Todo {
  constructor() {
    this._id = (0,_helper_id_generator__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this._title;
    this._description;
    this._dueDate;
    this._priority; // 1 for low, 2 for medium, 3 for high
    this._completed = false;
  }

  get id() {
    return this._id;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get title() {
    return this._title;
  }

  set description(newDesc) {
    this._description = newDesc;
  }

  get description() {
    return this._description;
  }

  set dueDate(newDueDate) {
    this._dueDate = newDueDate;
  }

  get dueDate() {
    return this._dueDate;
  }

  set priority(priority) {
    this._priority = priority;
  }

  get priority() {
    return this._priority;
  }

  get completed() {
    return this._completed;
  }

  set completed(value) {
    this._completed = value;
  }

  toggleComplete() {
    if (this._completed == true) {
      this.completed = false;
    } else {
      this.completed = true;
    }
  }

  displayTodo() {
    //This should have print the todo
  }
}


/***/ }),

/***/ "./src/assets/Roboto/Roboto-Bold.ttf":
/*!*******************************************!*\
  !*** ./src/assets/Roboto/Roboto-Bold.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f80816a5455d171f948d.ttf";

/***/ }),

/***/ "./src/assets/Roboto/Roboto-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/assets/Roboto/Roboto-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo/todo */ "./src/todo/todo.js");
/* harmony import */ var _todo_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo/project */ "./src/todo/project.js");
/* harmony import */ var _dom_dom_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/dom_card */ "./src/dom/dom_card.js");
/* harmony import */ var _dom_dom_new_todo_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/dom_new_todo_btn */ "./src/dom/dom_new_todo_btn.js");
/* harmony import */ var _dom_create_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/create_todo */ "./src/dom/create_todo.js");







const priority_mapping = {};
priority_mapping["high"] = 3;
priority_mapping["medium"] = 2;
priority_mapping["low"] = 1;

const create_todo_dom = (0,_dom_create_todo__WEBPACK_IMPORTED_MODULE_5__["default"])();
const debug_dom = document.createElement("div");
debug_dom.id = "debug_dom";
debug_dom.innerText = "DEBUGGER";

const test = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();
const test1 = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();
const test2 = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();
const test3 = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();
const test4 = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();
const test5 = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();
const test6 = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();
const test7 = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();
const test8 = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();
const test9 = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();
const test10 = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();

test.title = "Learn Javascript";
test.description = "This is a test todo";
test.dueDate = "tomorrow";
test.priority = "HIGH";

const proj = new _todo_project__WEBPACK_IMPORTED_MODULE_2__["default"]();
proj.title = "Fitness";
proj.description = "My steps to becoming stronger!";

const card = new _dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"](test);
const card1 = new _dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"](test1);
const card2 = new _dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"](test2);
const card3 = new _dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"](test3);
const card4 = new _dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"](test4);
const card5 = new _dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"](test5);
const card6 = new _dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"](test6);
const card7 = new _dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"](test7);
const card8 = new _dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"](test8);
const card9 = new _dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"](test9);
const card10 = new _dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"](test10);

const todo_container = document.getElementById("todo-list");
const side_bar_dom = document.getElementById("side-bar");

todo_container.appendChild(card);
todo_container.appendChild(card1);
todo_container.appendChild(card2);
todo_container.appendChild(card3);
todo_container.appendChild(card4);
todo_container.appendChild(card5);
todo_container.appendChild(card6);
todo_container.appendChild(card7);
todo_container.appendChild(card8);
todo_container.appendChild(card9);
todo_container.appendChild(card10);

const newTodoBtn = (0,_dom_dom_new_todo_btn__WEBPACK_IMPORTED_MODULE_4__["default"])();
// const DOM_BODY = document.querySelector("body");
document.body.appendChild(newTodoBtn);
document.body.appendChild(create_todo_dom);
side_bar_dom.appendChild(debug_dom);
newTodoBtn.addEventListener("click", (event) => {
  // event.preventDefault();
  create_todo_dom.showModal();
});

const createTodoCloseBtn = document.getElementById("createTodoCloseBtn");
createTodoCloseBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  create_todo_dom.close("cancel");
  console.log("CLOSING MODAL!");
  console.log(create_todo_dom);
});

const createTodoSubmitBtn = document.getElementById("create-todo-submit-btn");
createTodoSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // createTodoSubmitBtn.value = {};
});

document.addEventListener("dataSubmitted", function (event) {
  const receivedData = event.detail;
  // Handle the received data as needed
  console.log("Form received!");
  debug_dom.innerHTML = "Received data from dialog:" + receivedData;
  let title = receivedData["title"];
  let desc = receivedData["desc"];
  let priority = receivedData["priority"];
  let duedate = receivedData["duedate"];
  console.log(title, desc, priority, duedate);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvZG9tL2NyZWF0ZV90b2RvLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvZG9tL2RvbV9jYXJkLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvZG9tL2RvbV9uZXdfdG9kb19idG4uanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy9oZWxwZXIvaWRfZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvdG9kby9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvdG9kby90b2RvLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL1JvYm90by9Sb2JvdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInR0ZlwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInR0ZlwiKTtcbn1cblxuaHRtbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDIwNSwgMjA1KTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDBweDtcbn1cblxuLyogI3RvZG8tbGlzdC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczOTJlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogMTBweDtcbn0gKi9cblxuI2FwcC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jc2lkZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczOTJlO1xuICBwYWRkaW5nOiAxMHB4IDUwcHg7XG4gIGRpc3BsYXk6IGZpeGVkO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbiNzaWRlLWJhciBoMSB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbiN0b2RvLWxpc3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgZmxleC1ncm93OiA0O1xuICBwYWRkaW5nOiAxMDBweCA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiN0b2RvLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvKiB3aWR0aDogMTAwJTsgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50b2RvLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlNWU1O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgdHJhbnNmb3JtIDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDgwJTtcbiAgZmxleDogMCAwIGF1dG87XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnRvZG8tY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWIzYjM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG59XG5cbi50b2RvLWNhcmQucHJpb3JpdHktaGlnaCB7XG59XG4udG9kby1jYXJkLnByaW9yaXR5LW1lZGl1bSB7XG59XG4udG9kby1jYXJkLnByaW9yaXR5LWxvdyB7XG59XG5cbi50b2RvLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udG9kby1kZXNjIHtcbn1cbi50b2RvLWNhcmQuaGlkZGVuIC50b2RvLWRldGFpbHMgLnRvZG8tZGVzYyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udG9kby1kdWVkYXRlIHtcbn1cblxuLnRvZG8tcHJpb3JpdHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24ubmV3LXRvZG8tYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NjQ3ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDMwcHg7XG4gIGJvdHRvbTogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24ubmV3LXRvZG8tYnRuOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjZWNkO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDI3cHg7XG59XG5cbmJ1dHRvbi5uZXctdG9kby1idG46OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjZWNkO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDI3cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuI2NyZWF0ZS10b2RvLWRvbSB7XG4gIGRpc3BsYXk6IHJlbGF0aXZlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogNTBweDtcbiAgaGVpZ2h0OiAzMHZoO1xuICB3aWR0aDogNTB2dztcbiAgLyogZGlzcGxheTogZ3JpZDsgKi9cbiAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDJmciAxZnI7ICovXG59XG4jY3JlYXRlLXRvZG8tZm9ybSB7XG4gIC8qIGRpc3BsYXk6IHJlbGF0aXZlOyAqL1xuICAvKiBib3JkZXI6IG5vbmU7ICovXG4gIC8qIGJvcmRlci1yYWRpdXM6IDdweDsgKi9cbiAgLyogcGFkZGluZzogNTBweDsgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiB3aWR0aDogNTB2dzsgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDJmciAxZnI7XG59XG5cbiNjcmVhdGUtdG9kby1kb20gI2NyZWF0ZVRvZG9DbG9zZUJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTY0N2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDE1cHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjcmVhdGUtdG9kby1kb20gI2NyZWF0ZVRvZG9DbG9zZUJ0bjo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNlY2Q7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMjdweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuI2NyZWF0ZS10b2RvLWRvbSAjY3JlYXRlVG9kb0Nsb3NlQnRuOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjZWNkO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDI3cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG59XG5cbiNjcmVhdGUtdG9kby1kb20gaDEge1xuICBtYXJnaW46IG5vbmU7XG59XG5cbiNjcmVhdGUtdG9kby1kb20gZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbn1cbiNjcmVhdGUtdG9kby1kb20gYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTY0N2U7XG4gIGNvbG9yOiAjZGRjZWNkO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cblxuI2NyZWF0ZS10b2RvLWRvbSBidXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbiNjcmVhdGUtdG9kby1kb20gaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiNjcmVhdGUtdG9kby1kb20gdGV4dGFyZWEge1xuICBib3JkZXI6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5uZXdfdG9kb190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5uZXdfdG9kb19kZXNjIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm5ld190b2RvX3RpdGxlOmZvY3VzLFxuLm5ld190b2RvX2Rlc2M6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubmV3X3RvZG9fdGl0bGU6OnBsYWNlaG9sZGVyIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm5ld190b2RvX2Rlc2M6OnBsYWNlaG9sZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiwwREFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMERB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RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90by1Cb2xkXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9Sb2JvdG8vUm9ib3RvLUJvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAyMDUsIDIwNSk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi8qICN0b2RvLWxpc3QtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzM5MmU7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufSAqL1xcblxcbiNhcHAtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZS1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzkyZTtcXG4gIHBhZGRpbmc6IDEwcHggNTBweDtcXG4gIGRpc3BsYXk6IGZpeGVkO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jc2lkZS1iYXIgaDEge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbiN0b2RvLWxpc3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBmbGV4LWdyb3c6IDQ7XFxuICBwYWRkaW5nOiAxMDBweCA1MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jdG9kby1saXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50b2RvLWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTVlNTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgdHJhbnNmb3JtIDAuM3M7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogODAlO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4udG9kby1jYXJkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWIzYjM7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbn1cXG5cXG4udG9kby1jYXJkLnByaW9yaXR5LWhpZ2gge1xcbn1cXG4udG9kby1jYXJkLnByaW9yaXR5LW1lZGl1bSB7XFxufVxcbi50b2RvLWNhcmQucHJpb3JpdHktbG93IHtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8tQm9sZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b2RvLWRlc2Mge1xcbn1cXG4udG9kby1jYXJkLmhpZGRlbiAudG9kby1kZXRhaWxzIC50b2RvLWRlc2Mge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRvZG8tZHVlZGF0ZSB7XFxufVxcblxcbi50b2RvLXByaW9yaXR5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJ1dHRvbi5uZXctdG9kby1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NjQ3ZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBsZWZ0OiAzMHB4O1xcbiAgYm90dG9tOiAzMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24ubmV3LXRvZG8tYnRuOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjZWNkO1xcbiAgbGVmdDogMTBweDtcXG4gIHRvcDogMjdweDtcXG59XFxuXFxuYnV0dG9uLm5ldy10b2RvLWJ0bjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNlY2Q7XFxuICBsZWZ0OiAxMHB4O1xcbiAgdG9wOiAyN3B4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4jY3JlYXRlLXRvZG8tZG9tIHtcXG4gIGRpc3BsYXk6IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGhlaWdodDogMzB2aDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgLyogZGlzcGxheTogZ3JpZDsgKi9cXG4gIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAyZnIgMWZyOyAqL1xcbn1cXG4jY3JlYXRlLXRvZG8tZm9ybSB7XFxuICAvKiBkaXNwbGF5OiByZWxhdGl2ZTsgKi9cXG4gIC8qIGJvcmRlcjogbm9uZTsgKi9cXG4gIC8qIGJvcmRlci1yYWRpdXM6IDdweDsgKi9cXG4gIC8qIHBhZGRpbmc6IDUwcHg7ICovXFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiB3aWR0aDogNTB2dzsgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMmZyIDFmcjtcXG59XFxuXFxuI2NyZWF0ZS10b2RvLWRvbSAjY3JlYXRlVG9kb0Nsb3NlQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTY0N2U7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgdG9wOiAxNXB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjcmVhdGUtdG9kby1kb20gI2NyZWF0ZVRvZG9DbG9zZUJ0bjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNlY2Q7XFxuICBsZWZ0OiAxMHB4O1xcbiAgdG9wOiAyN3B4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4jY3JlYXRlLXRvZG8tZG9tICNjcmVhdGVUb2RvQ2xvc2VCdG46OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNlY2Q7XFxuICBsZWZ0OiAxMHB4O1xcbiAgdG9wOiAyN3B4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXG59XFxuXFxuI2NyZWF0ZS10b2RvLWRvbSBoMSB7XFxuICBtYXJnaW46IG5vbmU7XFxufVxcblxcbiNjcmVhdGUtdG9kby1kb20gZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG59XFxuI2NyZWF0ZS10b2RvLWRvbSBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTY0N2U7XFxuICBjb2xvcjogI2RkY2VjZDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG4jY3JlYXRlLXRvZG8tZG9tIGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbiNjcmVhdGUtdG9kby1kb20gaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jY3JlYXRlLXRvZG8tZG9tIHRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubmV3X3RvZG9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG4ubmV3X3RvZG9fZGVzYyB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5uZXdfdG9kb190aXRsZTpmb2N1cyxcXG4ubmV3X3RvZG9fZGVzYzpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubmV3X3RvZG9fdGl0bGU6OnBsYWNlaG9sZGVyIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbi5uZXdfdG9kb19kZXNjOjpwbGFjZWhvbGRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUNyZWF0ZVRvZG9ET00oKSB7XG4gIGNvbnN0IGRvbV9kaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICBjb25zdCBjcmVhdGVfdG9kb19mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIC8vIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICBjb25zdCBoZWFkZXJfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyX3RleHQuaW5uZXJUZXh0ID0gXCJOZXcgVG9kb1wiO1xuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgY2xvc2VCdG4uaWQgPSBcImNyZWF0ZVRvZG9DbG9zZUJ0blwiO1xuICBjbG9zZUJ0bi5mb3JtTWV0aG9kID0gXCJkaWFsb2dcIjtcbiAgY2xvc2VCdG4udmFsdWUgPSBcImNhbmNlbFwiO1xuXG4gIGRvbV9kaWFsb2cuaWQgPSBcImNyZWF0ZS10b2RvLWRvbVwiO1xuICBjcmVhdGVfdG9kb19mb3JtLmlkID0gXCJjcmVhdGUtdG9kby1mb3JtXCI7XG4gIGNyZWF0ZV90b2RvX2Zvcm0ubWV0aG9kID0gXCJkaWFsb2dcIjtcblxuICBjb25zdCBpbnB1dF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRfdGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlOiBuZXcgdG9kb1wiO1xuICBpbnB1dF90aXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3X3RvZG9fdGl0bGVcIik7XG4gIGlucHV0X3RpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgaW5wdXRfdGl0bGUubmFtZSA9IFwiaW5wdXRfdGl0bGVcIjtcblxuICBjb25zdCBpbnB1dF9kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBpbnB1dF9kZXNjLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xuICBpbnB1dF9kZXNjLmNsYXNzTGlzdC5hZGQoXCJuZXdfdG9kb19kZXNjXCIpO1xuXG4gIGNvbnN0IGRhdGVfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5wdXRfZHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRfZHVlZGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gIGNvbnN0IGlucHV0X2R1ZWRhdGVfbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGlucHV0X2R1ZWRhdGVfbGFiZWwuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTpcIjtcbiAgZGF0ZV9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfZHVlZGF0ZV9sYWJlbCk7XG4gIGRhdGVfZGl2LmFwcGVuZENoaWxkKGlucHV0X2R1ZWRhdGUpO1xuXG4gIGNvbnN0IHByaW9yaXR5X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGlucHV0X3ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgcHJpb3JpdHlfaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IHByaW9yaXR5X21lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IHByaW9yaXR5X2xvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgcHJpb3JpdHlfaGlnaC52YWx1ZSA9IFwiaGlnaC1wcmlvcml0eVwiO1xuICBwcmlvcml0eV9oaWdoLmlubmVyVGV4dCA9IFwiSGlnaFwiO1xuICBwcmlvcml0eV9tZWQudmFsdWUgPSBcIm1lZC1wcmlvcml0eVwiO1xuICBwcmlvcml0eV9tZWQuaW5uZXJUZXh0ID0gXCJNZWRcIjtcbiAgcHJpb3JpdHlfbG93LnZhbHVlID0gXCJsb3ctcHJpb3JpdHlcIjtcbiAgcHJpb3JpdHlfbG93LmlubmVyVGV4dCA9IFwiTG93XCI7XG5cbiAgaW5wdXRfcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlfaGlnaCk7XG4gIGlucHV0X3ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5X21lZCk7XG4gIGlucHV0X3ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5X2xvdyk7XG4gIGlucHV0X3ByaW9yaXR5Lm9wdGlvbnNbMV0uc2VsZWN0ZWQgPSB0cnVlO1xuICBjb25zdCBpbnB1dF9wcmlvcml0eV9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgaW5wdXRfcHJpb3JpdHlfbGFiZWwuaW5uZXJUZXh0ID0gXCJQcmlvcml0eVwiO1xuICBwcmlvcml0eV9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfcHJpb3JpdHlfbGFiZWwpO1xuICBwcmlvcml0eV9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfcHJpb3JpdHkpO1xuXG4gIC8vIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJTdWJtaXRcIiBvbmNsaWNrPVwic3VibWl0Rm9ybSgpXCI+PC9pbnB1dD5cblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXRCdG4uaW5uZXJUZXh0ID0gXCJDcmVhdGVcIjtcbiAgc3VibWl0QnRuLmlkID0gXCJjcmVhdGUtdG9kby1zdWJtaXQtYnRuXCI7XG4gIC8vIHN1Ym1pdEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgc3VibWl0QnRuLnZhbHVlID0gXCJkZWZhdWx0XCI7XG4gIC8vIHN1Ym1pdEJ0bi5vbmNsaWNrID0gc3VibWl0QWN0aW9uKCk7XG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgLy8gd2luZG93LmRpc3BhdGNoRXZlbnQoY3JlYXRlVG9kb0V2ZW50KTtcbiAgICBjb25zb2xlLmxvZyhcIkNSRUFUSU5HIFRPRE8gRVZFTlQgVFJJR0dFUkVEXCIpO1xuICB9KTtcbiAgY29uc3QgZGV0YWlsc19kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWxzX2Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eV9kaXYpO1xuICBkZXRhaWxzX2Rpdi5hcHBlbmRDaGlsZChkYXRlX2Rpdik7XG4gIGRldGFpbHNfZGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgY3JlYXRlX3RvZG9fZm9ybS5hcHBlbmRDaGlsZChoZWFkZXJfdGV4dCk7XG4gIGNyZWF0ZV90b2RvX2Zvcm0uYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICBjcmVhdGVfdG9kb19mb3JtLmFwcGVuZENoaWxkKGlucHV0X3RpdGxlKTtcbiAgY3JlYXRlX3RvZG9fZm9ybS5hcHBlbmRDaGlsZChpbnB1dF9kZXNjKTtcbiAgY3JlYXRlX3RvZG9fZm9ybS5hcHBlbmRDaGlsZChkZXRhaWxzX2Rpdik7XG4gIGRvbV9kaWFsb2cuYXBwZW5kQ2hpbGQoY3JlYXRlX3RvZG9fZm9ybSk7XG5cbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZm9ybURhdGEgPSB7XG4gICAgICAvLyBFeHRyYWN0IGZvcm0gZGF0YSBoZXJlLCBlLmcuLCB1c2luZyBmb3JtIGVsZW1lbnRzIG9yIG90aGVyIG1ldGhvZHNcbiAgICAgIHRpdGxlOiBpbnB1dF90aXRsZS52YWx1ZSxcbiAgICAgIGRlc2M6IGlucHV0X2Rlc2MudmFsdWUsXG4gICAgICBkdWVkYXRlOiBpbnB1dF9kdWVkYXRlLnZhbHVlLFxuICAgICAgcHJpb3JpdHk6IGlucHV0X3ByaW9yaXR5LnZhbHVlLFxuICAgICAgLy8gQWRkIG1vcmUgcHJvcGVydGllcyBhcyBuZWVkZWRcbiAgICB9O1xuICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwiZGF0YVN1Ym1pdHRlZFwiLCB7IGRldGFpbDogZm9ybURhdGEgfSk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XG4gICAgZG9tX2RpYWxvZy5jbG9zZSgpO1xuICB9KTtcblxuICByZXR1cm4gZG9tX2RpYWxvZztcbn1cblxuLy8gY29uc3QgY3JlYXRlVG9kb0V2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwiY3JlYXRlLXRvZG9cIiwgeyBkZXRhaWw6IEZvcm1EYXRhIH0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVUb2RvQ2FyZERPTSh0b2RvKSB7XG4gIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkRGl2LmNsYXNzTGlzdCA9IFwidG9kby1jYXJkIGhpZGRlblwiO1xuXG4gIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdG9kb1RpdGxlLmlubmVySFRNTCA9IHRvZG8udGl0bGU7XG4gIHRvZG9UaXRsZS5jbGFzc0xpc3QgPSBcInRvZG8tdGl0bGVcIjtcblxuICBjb25zdCB0b2RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9EZXRhaWxzLmNsYXNzTGlzdCA9IFwidG9kby1kZXRhaWxzXCI7XG5cbiAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9kb0Rlc2MuaW5uZXJIVE1MID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgdG9kb0Rlc2MuY2xhc3NMaXN0ID0gXCJ0b2RvLWRlc2NcIjtcblxuICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0b2RvRHVlRGF0ZS5pbm5lckhUTUwgPSB0b2RvLmR1ZURhdGU7XG4gIHRvZG9EdWVEYXRlLmNsYXNzTGlzdCA9IFwidG9kby1kdWVkYXRlXCI7XG5cbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRvZG9Qcmlvcml0eS5pbm5lckhUTUwgPSB0b2RvLnByaW9yaXR5O1xuICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0ID0gXCJ0b2RvLXByaW9yaXR5XCI7XG5cbiAgdG9kb0RldGFpbHMuYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xuICB0b2RvRGV0YWlscy5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XG4gIHRvZG9EZXRhaWxzLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XG5cbiAgY2FyZERpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICBjYXJkRGl2LmFwcGVuZENoaWxkKHRvZG9EZXRhaWxzKTtcblxuICByZXR1cm4gY2FyZERpdjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVG9kb0J0bigpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgLy8gYnV0dG9uLmlubmVySFRNTCA9IFwiTkVXIFRPRE9cIjtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXctdG9kby1idG5cIik7XG5cbiAgcmV0dXJuIGJ1dHRvbjtcbn1cbiIsImZ1bmN0aW9uIGdlbmVyYXRlVW5pcXVlSWQoKSB7XG4gIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICBjb25zdCB1bmlxdWVJZCA9IGBpZF8ke3RpbWVzdGFtcH1gO1xuICByZXR1cm4gdW5pcXVlSWQ7XG59XG5cbi8vIEV4YW1wbGUgdXNhZ2Vcbi8vIGNvbnN0IG5ld1VuaXF1ZUlkID0gZ2VuZXJhdGVVbmlxdWVJZCgpO1xuLy8gY29uc29sZS5sb2cobmV3VW5pcXVlSWQpO1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVVuaXF1ZUlkO1xuIiwiaW1wb3J0IGdlbmVyYXRlVW5pcXVlSWQgZnJvbSBcIi4uL2hlbHBlci9pZF9nZW5lcmF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2lkID0gZ2VuZXJhdGVVbmlxdWVJZCgpO1xuICAgIHRoaXMuX3RpdGxlO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7XG4gICAgdGhpcy5fdGl0bGUgPSBuZXdUaXRsZTtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24obmV3RGVzYykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gbmV3RGVzYztcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cbn1cbiIsImltcG9ydCBnZW5lcmF0ZVVuaXF1ZUlkIGZyb20gXCIuLi9oZWxwZXIvaWRfZ2VuZXJhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9pZCA9IGdlbmVyYXRlVW5pcXVlSWQoKTtcbiAgICB0aGlzLl90aXRsZTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9kdWVEYXRlO1xuICAgIHRoaXMuX3ByaW9yaXR5OyAvLyAxIGZvciBsb3csIDIgZm9yIG1lZGl1bSwgMyBmb3IgaGlnaFxuICAgIHRoaXMuX2NvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgIHRoaXMuX3RpdGxlID0gbmV3VGl0bGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKG5ld0Rlc2MpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUobmV3RHVlRGF0ZSkge1xuICAgIHRoaXMuX2R1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICB9XG5cbiAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gIH1cblxuICBzZXQgcHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIGdldCBjb21wbGV0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRlZDtcbiAgfVxuXG4gIHNldCBjb21wbGV0ZWQodmFsdWUpIHtcbiAgICB0aGlzLl9jb21wbGV0ZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIHRvZ2dsZUNvbXBsZXRlKCkge1xuICAgIGlmICh0aGlzLl9jb21wbGV0ZWQgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlUb2RvKCkge1xuICAgIC8vVGhpcyBzaG91bGQgaGF2ZSBwcmludCB0aGUgdG9kb1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8vdG9kb1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vdG9kby9wcm9qZWN0XCI7XG5pbXBvcnQgZ2VuZXJhdGVUb2RvQ2FyZERPTSBmcm9tIFwiLi9kb20vZG9tX2NhcmRcIjtcbmltcG9ydCBnZW5lcmF0ZVRvZG9CdG4gZnJvbSBcIi4vZG9tL2RvbV9uZXdfdG9kb19idG5cIjtcbmltcG9ydCBnZW5lcmF0ZUNyZWF0ZVRvZG9ET00gZnJvbSBcIi4vZG9tL2NyZWF0ZV90b2RvXCI7XG5cbmNvbnN0IHByaW9yaXR5X21hcHBpbmcgPSB7fTtcbnByaW9yaXR5X21hcHBpbmdbXCJoaWdoXCJdID0gMztcbnByaW9yaXR5X21hcHBpbmdbXCJtZWRpdW1cIl0gPSAyO1xucHJpb3JpdHlfbWFwcGluZ1tcImxvd1wiXSA9IDE7XG5cbmNvbnN0IGNyZWF0ZV90b2RvX2RvbSA9IGdlbmVyYXRlQ3JlYXRlVG9kb0RPTSgpO1xuY29uc3QgZGVidWdfZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRlYnVnX2RvbS5pZCA9IFwiZGVidWdfZG9tXCI7XG5kZWJ1Z19kb20uaW5uZXJUZXh0ID0gXCJERUJVR0dFUlwiO1xuXG5jb25zdCB0ZXN0ID0gbmV3IFRvZG8oKTtcbmNvbnN0IHRlc3QxID0gbmV3IFRvZG8oKTtcbmNvbnN0IHRlc3QyID0gbmV3IFRvZG8oKTtcbmNvbnN0IHRlc3QzID0gbmV3IFRvZG8oKTtcbmNvbnN0IHRlc3Q0ID0gbmV3IFRvZG8oKTtcbmNvbnN0IHRlc3Q1ID0gbmV3IFRvZG8oKTtcbmNvbnN0IHRlc3Q2ID0gbmV3IFRvZG8oKTtcbmNvbnN0IHRlc3Q3ID0gbmV3IFRvZG8oKTtcbmNvbnN0IHRlc3Q4ID0gbmV3IFRvZG8oKTtcbmNvbnN0IHRlc3Q5ID0gbmV3IFRvZG8oKTtcbmNvbnN0IHRlc3QxMCA9IG5ldyBUb2RvKCk7XG5cbnRlc3QudGl0bGUgPSBcIkxlYXJuIEphdmFzY3JpcHRcIjtcbnRlc3QuZGVzY3JpcHRpb24gPSBcIlRoaXMgaXMgYSB0ZXN0IHRvZG9cIjtcbnRlc3QuZHVlRGF0ZSA9IFwidG9tb3Jyb3dcIjtcbnRlc3QucHJpb3JpdHkgPSBcIkhJR0hcIjtcblxuY29uc3QgcHJvaiA9IG5ldyBQcm9qZWN0KCk7XG5wcm9qLnRpdGxlID0gXCJGaXRuZXNzXCI7XG5wcm9qLmRlc2NyaXB0aW9uID0gXCJNeSBzdGVwcyB0byBiZWNvbWluZyBzdHJvbmdlciFcIjtcblxuY29uc3QgY2FyZCA9IG5ldyBnZW5lcmF0ZVRvZG9DYXJkRE9NKHRlc3QpO1xuY29uc3QgY2FyZDEgPSBuZXcgZ2VuZXJhdGVUb2RvQ2FyZERPTSh0ZXN0MSk7XG5jb25zdCBjYXJkMiA9IG5ldyBnZW5lcmF0ZVRvZG9DYXJkRE9NKHRlc3QyKTtcbmNvbnN0IGNhcmQzID0gbmV3IGdlbmVyYXRlVG9kb0NhcmRET00odGVzdDMpO1xuY29uc3QgY2FyZDQgPSBuZXcgZ2VuZXJhdGVUb2RvQ2FyZERPTSh0ZXN0NCk7XG5jb25zdCBjYXJkNSA9IG5ldyBnZW5lcmF0ZVRvZG9DYXJkRE9NKHRlc3Q1KTtcbmNvbnN0IGNhcmQ2ID0gbmV3IGdlbmVyYXRlVG9kb0NhcmRET00odGVzdDYpO1xuY29uc3QgY2FyZDcgPSBuZXcgZ2VuZXJhdGVUb2RvQ2FyZERPTSh0ZXN0Nyk7XG5jb25zdCBjYXJkOCA9IG5ldyBnZW5lcmF0ZVRvZG9DYXJkRE9NKHRlc3Q4KTtcbmNvbnN0IGNhcmQ5ID0gbmV3IGdlbmVyYXRlVG9kb0NhcmRET00odGVzdDkpO1xuY29uc3QgY2FyZDEwID0gbmV3IGdlbmVyYXRlVG9kb0NhcmRET00odGVzdDEwKTtcblxuY29uc3QgdG9kb19jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbGlzdFwiKTtcbmNvbnN0IHNpZGVfYmFyX2RvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZS1iYXJcIik7XG5cbnRvZG9fY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xudG9kb19jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDEpO1xudG9kb19jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDIpO1xudG9kb19jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDMpO1xudG9kb19jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDQpO1xudG9kb19jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDUpO1xudG9kb19jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDYpO1xudG9kb19jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDcpO1xudG9kb19jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDgpO1xudG9kb19jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDkpO1xudG9kb19jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDEwKTtcblxuY29uc3QgbmV3VG9kb0J0biA9IGdlbmVyYXRlVG9kb0J0bigpO1xuLy8gY29uc3QgRE9NX0JPRFkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3VG9kb0J0bik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZV90b2RvX2RvbSk7XG5zaWRlX2Jhcl9kb20uYXBwZW5kQ2hpbGQoZGVidWdfZG9tKTtcbm5ld1RvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjcmVhdGVfdG9kb19kb20uc2hvd01vZGFsKCk7XG59KTtcblxuY29uc3QgY3JlYXRlVG9kb0Nsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVUb2RvQ2xvc2VCdG5cIik7XG5jcmVhdGVUb2RvQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgY3JlYXRlX3RvZG9fZG9tLmNsb3NlKFwiY2FuY2VsXCIpO1xuICBjb25zb2xlLmxvZyhcIkNMT1NJTkcgTU9EQUwhXCIpO1xuICBjb25zb2xlLmxvZyhjcmVhdGVfdG9kb19kb20pO1xufSk7XG5cbmNvbnN0IGNyZWF0ZVRvZG9TdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS10b2RvLXN1Ym1pdC1idG5cIik7XG5jcmVhdGVUb2RvU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIGNyZWF0ZVRvZG9TdWJtaXRCdG4udmFsdWUgPSB7fTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZGF0YVN1Ym1pdHRlZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgcmVjZWl2ZWREYXRhID0gZXZlbnQuZGV0YWlsO1xuICAvLyBIYW5kbGUgdGhlIHJlY2VpdmVkIGRhdGEgYXMgbmVlZGVkXG4gIGNvbnNvbGUubG9nKFwiRm9ybSByZWNlaXZlZCFcIik7XG4gIGRlYnVnX2RvbS5pbm5lckhUTUwgPSBcIlJlY2VpdmVkIGRhdGEgZnJvbSBkaWFsb2c6XCIgKyByZWNlaXZlZERhdGE7XG4gIGxldCB0aXRsZSA9IHJlY2VpdmVkRGF0YVtcInRpdGxlXCJdO1xuICBsZXQgZGVzYyA9IHJlY2VpdmVkRGF0YVtcImRlc2NcIl07XG4gIGxldCBwcmlvcml0eSA9IHJlY2VpdmVkRGF0YVtcInByaW9yaXR5XCJdO1xuICBsZXQgZHVlZGF0ZSA9IHJlY2VpdmVkRGF0YVtcImR1ZWRhdGVcIl07XG4gIGNvbnNvbGUubG9nKHRpdGxlLCBkZXNjLCBwcmlvcml0eSwgZHVlZGF0ZSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==