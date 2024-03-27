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

.animated-button {
  transition: transform 0.3s;
  cursor: pointer;
}

.animated-button:hover {
  transform: scale(1.1);
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
  font-family: "Roboto-Bold", sans-serif;
}

#side-bar h1 {
  color: whitesmoke;
  padding: 10px 20px;
}

#side-bar #project-list-dom {
  padding: 0;
}

#side-bar #project-list-dom li {
  list-style-type: none;
  margin: 10px;
}

#side-bar #project-list-dom li button {
  background: none;
  color: whitesmoke;
  border: none;
  cursor: pointer;
  transition: transform 0.3s;
  font-size: 20px;
  font-weight: bolds;
}

#side-bar #project-list-dom li button:hover {
  transform: scale(1.1);
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
  /* justify-content: center; */
  overflow: auto;
  height: 100%;
}

.todo-card {
  position: relative;
  background-color: #d8cfcf;
  transition: background-color 0.3s, transform 0.3s;
  border-radius: 7px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 80%;
  flex: 0 0 auto;
  align-self: flex-start;
  margin: 10px;
}

.todo-card:hover {
  background-color: #b9b3b3;
  transform: scale(1.01);
}

.todo-card.completed h1 {
  color: rgb(143, 135, 135);
  text-decoration: line-through;
}

.todo-card.completed > .todo-details > .todo-desc {
  color: rgb(143, 135, 135);
  text-decoration: line-through;
}

.todo-card.hidden {
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
  justify-content: space-between;
}

.todo-card .edit-delete-btns {
  position: absolute;
  right: 10px;
}

.todo-card.hidden .edit-delete-btns {
  display: none;
}

.todo-card .edit-delete-btns > button {
  background: none;
  border: none;
}

.todo-card .edit-delete-btns > button > img {
  height: auto;
  width: 20px;
}

.todo-card::before {
  content: "";
  height: 90%;
  width: 5px;
  position: absolute;
  left: 10px;
  top: 5%;
  bottom: 5%;
  border-radius: 2px;
}

.todo-card.hidden::before {
  height: 80%;
  top: 10%;
  bottom: 10%;
}

.todo-card.med-priority::before {
  background-color: orange;
}

.todo-card.high-priority::before {
  background-color: red;
}

.todo-card.low-priority::before {
  background-color: green;
}

.todo-card > div,
.todo-card > h1,
.todo-card > button {
  margin: 0 10px;
  flex: 1;
  padding: 10px;
}

.todo-card.hidden .todo-details .todo-desc {
  display: none;
}

.todo-card .todo-project {
  background-color: #b6a8aa;
  padding: 5px 15px;
  border-radius: 5px;
}

.todo-details-bottom {
  display: flex;
  align-items: center;
}
.todo-details-bottom > p,
.todo-details-bottom > button {
  margin: 5px;
}

.todo-details-bottom {
  justify-content: end;
}

.todo-title {
  font-family: "Roboto-Bold", sans-serif;
  font-size: 20px;
}

.todo-desc {
}
/* .todo-card.hidden .todo-details .todo-desc {
  display: none;
} */
.todo-duedate {
}

.todo-priority {
  display: none;
}

.todo-complete-btn {
  border: none;
  background-color: #19647e;
  border-radius: 5px;
  padding: 5px 15px;
  height: 35px;
  color: #ddcecd;
  font-size: 14px;
}

#create-buttons {
  position: fixed;
  left: 30px;
  bottom: 30px;
}

#create-buttons #minimised-buttons {
  display: flex;
  flex-direction: column;
  opacity: 1; /* Make it fully visible */
  transform: translateY(0); /* Slide it to the top */
  transition: opacity 0.3s ease, transform 0.3s ease;
}

#create-buttons.minimised #minimised-buttons {
  /* display: none; */
  /* flex-direction: column; */
  opacity: 0;
  transform: translateY(50px);
  pointer-events: none;
}

#create-buttons #minimised-buttons button {
  border: none;
  background-color: #19647e;
  border-radius: 5px;
  padding: 5px 15px;
  height: 35px;
  color: #ddcecd;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
}

button.create-main-btn {
  background-color: #19647e;
  /* position: fixed; */
  color: whitesmoke;
  padding: 10px;
  border-radius: 50%;
  border: none;
  width: 60px;
  height: 60px;
  content: "";
  /* left: 30px;
  bottom: 30px; */
  cursor: pointer;
  transition: transform 0.3s;
}

button.create-main-btn::after {
  position: absolute;
  content: "";
  width: 40px;
  height: 6px;
  background-color: #ddcecd;
  left: 10px;
  bottom: 27px;
  transform: rotate(45deg);
  transition: transform 0.3s;
}

button.create-main-btn::before {
  position: absolute;
  content: "";
  width: 40px;
  height: 6px;
  background-color: #ddcecd;
  left: 10px;
  /* top: 190px; */
  bottom: 27px;
  transform: rotate(135deg);
  /* transform: rotate(45deg); */
  transition: transform 0.3s;
}

#create-buttons.minimised button.create-main-btn::after {
  transform: rotate(90deg);
}
#create-buttons.minimised button.create-main-btn::before {
  transform: rotate(0deg);
}

button.create-main-btn:hover {
  transform: scale(1.1);
}

.create-dialog {
  display: relative;
  border: none;
  border-radius: 7px;
  padding: 50px;
  /* height: 30vh; */
  width: 50vw;
}
.create-dialog-form#create-todo-form {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}

.create-dialog-form#create-project-form {
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
}

.create-dialog-form#create-project-form h1 {
  grid-row: 1;
  grid-column: 1 / span 3;
}

.create-dialog-form#create-project-form input {
  grid-row: 2;
  grid-column: 1 / span 3;
}

.create-dialog-form#create-project-form button {
  grid-row: 3;
  grid-column: 3 / span 1;
  height: 40px;
}

.universal-close-btn {
  background-color: #19647e;
  position: absolute;
  color: whitesmoke;
  padding: 10px;
  border-radius: 50% !important;
  border: none;
  width: 60px !important;
  height: 60px !important;
  content: "";
  top: 30px;
  right: 30px;
  cursor: pointer;
}

.universal-close-btn::before {
  position: absolute;
  content: "";
  width: 40px;
  height: 6px;
  background-color: #ddcecd;
  left: 10px;
  top: 27px;
  transform: rotate(45deg);
}
.universal-close-btn::after {
  position: absolute;
  content: "";
  width: 40px;
  height: 6px;
  background-color: #ddcecd;
  left: 10px;
  top: 27px;
  transform: rotate(135deg);
}
/* #create-todo-dom #createTodoCloseBtn::before {
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
} */

h1.dialog-header {
  margin: none;
}
/* #create-todo-dom h1 {
  margin: none;
} */

#create-todo-dom div {
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* align-items: end; */
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

#details_div {
  grid-template-columns: 1fr 1fr 1fr 1fr !important;
}

#create-todo-dom .dialog-submit-btn {
  width: 130px;
}

.dialog-submit-btn {
  border: none;
  border-radius: 7px;
  padding: 10px;
  background-color: #19647e;
  color: #ddcecd;
  transition: transform 0.3s;
  /* height: 20px; */
  /* width: 130px; */
}

.dialog-submit-btn:hover {
  transform: scale(1.1);
}

.create-dialog-form input {
  border: none;
}

#create-todo-dom textarea {
  border: none;
  resize: none;
  overflow: auto;
}

.new_entry_title {
  font-size: 20px;
  line-height: 15px;
  vertical-align: top;
}

.new_todo_desc {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

input:focus,
textarea:focus {
  outline: none;
}

.new_todo_title::placeholder {
  vertical-align: top;
}

.new_todo_desc::placeholder {
  position: absolute;
  top: 0px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Roboto\";\n  src: url(\"./assets/Roboto/Roboto-Regular.ttf\") format(\"ttf\");\n}\n\n@font-face {\n  font-family: \"Roboto-Bold\";\n  src: url(\"./assets/Roboto/Roboto-Bold.ttf\") format(\"ttf\");\n}\n\nhtml {\n  background-color: rgb(205, 205, 205);\n  font-family: \"Roboto\", sans-serif;\n}\n\nbody {\n  margin: 0px;\n}\n\n.animated-button {\n  transition: transform 0.3s;\n  cursor: pointer;\n}\n\n.animated-button:hover {\n  transform: scale(1.1);\n}\n\n/* #todo-list-header {\n  background-color: #37392e;\n  color: whitesmoke;\n  padding: 10px;\n} */\n\n#app-container {\n  height: 100vh;\n  display: flex;\n}\n\n#side-bar {\n  background-color: #37392e;\n  padding: 10px 50px;\n  display: fixed;\n  flex-grow: 1;\n  font-family: \"Roboto-Bold\", sans-serif;\n}\n\n#side-bar h1 {\n  color: whitesmoke;\n  padding: 10px 20px;\n}\n\n#side-bar #project-list-dom {\n  padding: 0;\n}\n\n#side-bar #project-list-dom li {\n  list-style-type: none;\n  margin: 10px;\n}\n\n#side-bar #project-list-dom li button {\n  background: none;\n  color: whitesmoke;\n  border: none;\n  cursor: pointer;\n  transition: transform 0.3s;\n  font-size: 20px;\n  font-weight: bolds;\n}\n\n#side-bar #project-list-dom li button:hover {\n  transform: scale(1.1);\n}\n\n#todo-list-container {\n  width: 70%;\n  flex-grow: 4;\n  padding: 100px 50px;\n  position: relative;\n}\n\n#todo-list {\n  background-color: whitesmoke;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  /* width: 100%; */\n  /* justify-content: center; */\n  overflow: auto;\n  height: 100%;\n}\n\n.todo-card {\n  position: relative;\n  background-color: #d8cfcf;\n  transition: background-color 0.3s, transform 0.3s;\n  border-radius: 7px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  flex: 0 0 auto;\n  align-self: flex-start;\n  margin: 10px;\n}\n\n.todo-card:hover {\n  background-color: #b9b3b3;\n  transform: scale(1.01);\n}\n\n.todo-card.completed h1 {\n  color: rgb(143, 135, 135);\n  text-decoration: line-through;\n}\n\n.todo-card.completed > .todo-details > .todo-desc {\n  color: rgb(143, 135, 135);\n  text-decoration: line-through;\n}\n\n.todo-card.hidden {\n  flex-direction: row;\n  align-self: flex-start;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.todo-card .edit-delete-btns {\n  position: absolute;\n  right: 10px;\n}\n\n.todo-card.hidden .edit-delete-btns {\n  display: none;\n}\n\n.todo-card .edit-delete-btns > button {\n  background: none;\n  border: none;\n}\n\n.todo-card .edit-delete-btns > button > img {\n  height: auto;\n  width: 20px;\n}\n\n.todo-card::before {\n  content: \"\";\n  height: 90%;\n  width: 5px;\n  position: absolute;\n  left: 10px;\n  top: 5%;\n  bottom: 5%;\n  border-radius: 2px;\n}\n\n.todo-card.hidden::before {\n  height: 80%;\n  top: 10%;\n  bottom: 10%;\n}\n\n.todo-card.med-priority::before {\n  background-color: orange;\n}\n\n.todo-card.high-priority::before {\n  background-color: red;\n}\n\n.todo-card.low-priority::before {\n  background-color: green;\n}\n\n.todo-card > div,\n.todo-card > h1,\n.todo-card > button {\n  margin: 0 10px;\n  flex: 1;\n  padding: 10px;\n}\n\n.todo-card.hidden .todo-details .todo-desc {\n  display: none;\n}\n\n.todo-card .todo-project {\n  background-color: #b6a8aa;\n  padding: 5px 15px;\n  border-radius: 5px;\n}\n\n.todo-details-bottom {\n  display: flex;\n  align-items: center;\n}\n.todo-details-bottom > p,\n.todo-details-bottom > button {\n  margin: 5px;\n}\n\n.todo-details-bottom {\n  justify-content: end;\n}\n\n.todo-title {\n  font-family: \"Roboto-Bold\", sans-serif;\n  font-size: 20px;\n}\n\n.todo-desc {\n}\n/* .todo-card.hidden .todo-details .todo-desc {\n  display: none;\n} */\n.todo-duedate {\n}\n\n.todo-priority {\n  display: none;\n}\n\n.todo-complete-btn {\n  border: none;\n  background-color: #19647e;\n  border-radius: 5px;\n  padding: 5px 15px;\n  height: 35px;\n  color: #ddcecd;\n  font-size: 14px;\n}\n\n#create-buttons {\n  position: fixed;\n  left: 30px;\n  bottom: 30px;\n}\n\n#create-buttons #minimised-buttons {\n  display: flex;\n  flex-direction: column;\n  opacity: 1; /* Make it fully visible */\n  transform: translateY(0); /* Slide it to the top */\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n\n#create-buttons.minimised #minimised-buttons {\n  /* display: none; */\n  /* flex-direction: column; */\n  opacity: 0;\n  transform: translateY(50px);\n  pointer-events: none;\n}\n\n#create-buttons #minimised-buttons button {\n  border: none;\n  background-color: #19647e;\n  border-radius: 5px;\n  padding: 5px 15px;\n  height: 35px;\n  color: #ddcecd;\n  font-size: 14px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-align: left;\n}\n\nbutton.create-main-btn {\n  background-color: #19647e;\n  /* position: fixed; */\n  color: whitesmoke;\n  padding: 10px;\n  border-radius: 50%;\n  border: none;\n  width: 60px;\n  height: 60px;\n  content: \"\";\n  /* left: 30px;\n  bottom: 30px; */\n  cursor: pointer;\n  transition: transform 0.3s;\n}\n\nbutton.create-main-btn::after {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 6px;\n  background-color: #ddcecd;\n  left: 10px;\n  bottom: 27px;\n  transform: rotate(45deg);\n  transition: transform 0.3s;\n}\n\nbutton.create-main-btn::before {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 6px;\n  background-color: #ddcecd;\n  left: 10px;\n  /* top: 190px; */\n  bottom: 27px;\n  transform: rotate(135deg);\n  /* transform: rotate(45deg); */\n  transition: transform 0.3s;\n}\n\n#create-buttons.minimised button.create-main-btn::after {\n  transform: rotate(90deg);\n}\n#create-buttons.minimised button.create-main-btn::before {\n  transform: rotate(0deg);\n}\n\nbutton.create-main-btn:hover {\n  transform: scale(1.1);\n}\n\n.create-dialog {\n  display: relative;\n  border: none;\n  border-radius: 7px;\n  padding: 50px;\n  /* height: 30vh; */\n  width: 50vw;\n}\n.create-dialog-form#create-todo-form {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n}\n\n.create-dialog-form#create-project-form {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 2fr 1fr 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n\n.create-dialog-form#create-project-form h1 {\n  grid-row: 1;\n  grid-column: 1 / span 3;\n}\n\n.create-dialog-form#create-project-form input {\n  grid-row: 2;\n  grid-column: 1 / span 3;\n}\n\n.create-dialog-form#create-project-form button {\n  grid-row: 3;\n  grid-column: 3 / span 1;\n  height: 40px;\n}\n\n.universal-close-btn {\n  background-color: #19647e;\n  position: absolute;\n  color: whitesmoke;\n  padding: 10px;\n  border-radius: 50% !important;\n  border: none;\n  width: 60px !important;\n  height: 60px !important;\n  content: \"\";\n  top: 30px;\n  right: 30px;\n  cursor: pointer;\n}\n\n.universal-close-btn::before {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 6px;\n  background-color: #ddcecd;\n  left: 10px;\n  top: 27px;\n  transform: rotate(45deg);\n}\n.universal-close-btn::after {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 6px;\n  background-color: #ddcecd;\n  left: 10px;\n  top: 27px;\n  transform: rotate(135deg);\n}\n/* #create-todo-dom #createTodoCloseBtn::before {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 6px;\n  background-color: #ddcecd;\n  left: 10px;\n  top: 27px;\n  transform: rotate(45deg);\n}\n\n#create-todo-dom #createTodoCloseBtn::after {\n  position: absolute;\n  content: \"\";\n  width: 40px;\n  height: 6px;\n  background-color: #ddcecd;\n  left: 10px;\n  top: 27px;\n  transform: rotate(135deg);\n} */\n\nh1.dialog-header {\n  margin: none;\n}\n/* #create-todo-dom h1 {\n  margin: none;\n} */\n\n#create-todo-dom div {\n  /* display: grid; */\n  /* grid-template-columns: 1fr 1fr 1fr; */\n  /* align-items: end; */\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n\n#details_div {\n  grid-template-columns: 1fr 1fr 1fr 1fr !important;\n}\n\n#create-todo-dom .dialog-submit-btn {\n  width: 130px;\n}\n\n.dialog-submit-btn {\n  border: none;\n  border-radius: 7px;\n  padding: 10px;\n  background-color: #19647e;\n  color: #ddcecd;\n  transition: transform 0.3s;\n  /* height: 20px; */\n  /* width: 130px; */\n}\n\n.dialog-submit-btn:hover {\n  transform: scale(1.1);\n}\n\n.create-dialog-form input {\n  border: none;\n}\n\n#create-todo-dom textarea {\n  border: none;\n  resize: none;\n  overflow: auto;\n}\n\n.new_entry_title {\n  font-size: 20px;\n  line-height: 15px;\n  vertical-align: top;\n}\n\n.new_todo_desc {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n.new_todo_title::placeholder {\n  vertical-align: top;\n}\n\n.new_todo_desc::placeholder {\n  position: absolute;\n  top: 0px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/database/database.js":
/*!**********************************!*\
  !*** ./src/database/database.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ database)
/* harmony export */ });
class database {
  constructor() {
    this.database = [];
  }

  add(object) {
    this.database.push(object);
  }

  delete(object) {
    const indexToRemove = this.database.indexOf(object);
    if (indexToRemove !== -1) {
      this.database.splice(indexToRemove, 1);
      // console.log(`Item with id ${id} removed successfully.`);
    } else {
      // console.log(`Item with id ${id} not found.`);
    }
  }

  update(objectID, newObject) {
    const index = this.database.findIndex((item) => item.id === objectID);

    // If item with given id is found, update it
    if (index !== -1) {
      this.database[index] = newObject;
      // console.log(`Item with id ${objectID} updated successfully.`);
    } else {
      // console.log(`Item with id ${objectID} not found.`);
    }
  }

  getData() {
    return this.database;
  }
}


/***/ }),

/***/ "./src/database/database_helper_functions.js":
/*!***************************************************!*\
  !*** ./src/database/database_helper_functions.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAllData: () => (/* binding */ fetchAllData),
/* harmony export */   fetchProjectData: () => (/* binding */ fetchProjectData),
/* harmony export */   fetchTodoData: () => (/* binding */ fetchTodoData),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   getTodos: () => (/* binding */ getTodos),
/* harmony export */   initialiseDatabase: () => (/* binding */ initialiseDatabase),
/* harmony export */   pushData: () => (/* binding */ pushData),
/* harmony export */   wipeData: () => (/* binding */ wipeData)
/* harmony export */ });
const default_database = {
  todos: [],
  projects: [],
  // notes: [],
};

function initialiseDatabase() {
  localStorage.setItem("todo_data", JSON.stringify(default_database));
}

function fetchAllData() {
  const todoData = JSON.parse(localStorage.getItem("todo_data"));
  return todoData;
}

function fetchTodoData() {
  return JSON.parse(localStorage.getItem("todo_data")).todos;
}

function fetchProjectData() {
  return JSON.parse(localStorage.getItem("todo_data")).projects;
}

function pushData(todo_data, project_data) {
  const updatedData = {
    todos: todo_data,
    projects: project_data,
  };
  localStorage.setItem("todo_data", JSON.stringify(updatedData));
}

function wipeData() {
  localStorage.clear();
  initialiseDatabase();
}

function getTodos() {
  let todo_data = JSON.parse(localStorage.getItem("todo_data")).todos;
  return todo_data;
}

function getProjects() {
  let project_data = JSON.parse(localStorage.getItem("todo_data")).todos;
  return project_data;
}


/***/ }),

/***/ "./src/dom/create_project_dialog.js":
/*!******************************************!*\
  !*** ./src/dom/create_project_dialog.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectDOM)
/* harmony export */ });
function createProjectDOM() {
  const dom_dialog = document.createElement("dialog");
  dom_dialog.id = "create-project-dom";
  dom_dialog.classList = "create-dialog";

  const create_project_form = document.createElement("form");
  create_project_form.id = "create-project-form";
  create_project_form.classList = "create-dialog-form";
  // create_project_form.method = "dialog";

  const header_text = document.createElement("h1");
  header_text.innerText = "New Project";
  header_text.classList = "dialog-header";

  const closeBtn = document.createElement("button");
  // closeBtn.innerText = "";

  closeBtn.id = "createTodoCloseBtn";
  closeBtn.classList = "universal-close-btn";
  // closeBtn.formMethod = "dialog";
  // closeBtn.value = "cancel";

  closeBtn.onclick = (e) => {
    e.preventDefault();
    dom_dialog.close();
  };

  const project_title = document.createElement("input");
  project_title.placeholder = "New Project Name";
  project_title.required = true;
  project_title.classList.add("new_entry_title");
  project_title.name = "project_title";

  // const project_title_label = document.createElement("label");
  // project_title_label.innerText = "Project Name";

  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Create";
  submitBtn.id = "create-project-submit-btn";
  submitBtn.classList = "dialog-submit-btn";
  // console.log(submitBtn);
  // submitBtn.value = "default";

  create_project_form.appendChild(header_text);
  create_project_form.appendChild(project_title);
  // create_project_form.appendChild(project_title_label);
  create_project_form.appendChild(submitBtn);
  create_project_form.appendChild(closeBtn);
  dom_dialog.appendChild(create_project_form);

  submitBtn.onclick = (e) => {
    e.preventDefault();
    if (create_project_form.checkValidity()) {
      let formData = {
        projectID: project_title.value,
      };

      console.log(formData);
      const create_project_event = new CustomEvent("createNewProjectEvent", {
        detail: formData,
      });
      document.dispatchEvent(create_project_event);
      create_project_form.reset();
      dom_dialog.close();
    } else {
      create_project_form.reportValidity();
    }
  };

  return dom_dialog;
}


/***/ }),

/***/ "./src/dom/create_todo_dialog.js":
/*!***************************************!*\
  !*** ./src/dom/create_todo_dialog.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateCreateTodoDOM)
/* harmony export */ });
function generateCreateTodoDOM(project_data) {
  const dom_dialog = document.createElement("dialog");
  dom_dialog.id = "create-todo-dom";
  dom_dialog.classList = "create-dialog";

  const create_todo_form = document.createElement("form");
  // const form = document.createElement("form");
  create_todo_form.id = "create-todo-form";
  create_todo_form.classList = "create-dialog-form";
  // create_todo_form.method = "dialog";

  const header_text = document.createElement("h1");
  header_text.innerText = "New Todo";
  header_text.classList = "dialog-header";

  const closeBtn = document.createElement("button");
  closeBtn.id = "createTodoCloseBtn";
  closeBtn.classList = "universal-close-btn";
  closeBtn.formMethod = "dialog";
  closeBtn.value = "cancel";
  closeBtn.onclick = (e) => {
    e.preventDefault();
    dom_dialog.close();
    // console.log("Closing modal");
  };

  const input_title = document.createElement("input");
  input_title.placeholder = "Title: new todo";
  input_title.classList.add("new_entry_title");
  input_title.id = "new_todo_title";
  input_title.required = true;
  input_title.name = "input_title";

  const input_desc = document.createElement("textarea");
  input_desc.placeholder = "Description";
  input_desc.classList.add("new_todo_desc");

  const date_div = document.createElement("div");
  const input_duedate = document.createElement("input");
  input_duedate.classList = "new_todo_duedate";
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

  input_priority.classList = "new_todo_priority";

  input_priority.appendChild(priority_high);
  input_priority.appendChild(priority_med);
  input_priority.appendChild(priority_low);
  input_priority.options[1].selected = true;
  const input_priority_label = document.createElement("label");
  input_priority_label.innerText = "Priority: ";
  priority_div.appendChild(input_priority_label);
  priority_div.appendChild(input_priority);

  const project_div = document.createElement("div");
  const project_label = document.createElement("label");
  project_label.innerText = "Project: ";
  project_div.appendChild(project_label);
  const input_project = document.createElement("select");
  const project_option_default = document.createElement("option");
  project_option_default.value = null;
  project_option_default.innerText = "none";
  input_project.appendChild(project_option_default);
  // console.log(project_data);
  if ((project_data !== null) & (project_data.getData() !== null)) {
    project_data.getData().forEach((project) => {
      // console.log(project);
      let projectOption = document.createElement("option");
      projectOption.value = project._title;
      projectOption.innerText = project._title;
      input_project.appendChild(projectOption);
    });
  }
  project_div.appendChild(input_project);

  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Create";
  submitBtn.classList = "dialog-submit-btn";
  submitBtn.id = "create-todo-submit-btn";
  submitBtn.value = "default";

  const details_div = document.createElement("div");
  details_div.id = "details_div";
  details_div.appendChild(priority_div);
  details_div.appendChild(date_div);
  details_div.appendChild(project_div);
  details_div.appendChild(submitBtn);

  create_todo_form.appendChild(header_text);
  create_todo_form.appendChild(closeBtn);
  create_todo_form.appendChild(input_title);
  create_todo_form.appendChild(input_desc);
  create_todo_form.appendChild(details_div);

  dom_dialog.appendChild(create_todo_form);

  // if (todoObject == null) {
  //   console.log("Todo is null!");
  // } else {
  //   input_title.value = todoObject._title;
  //   input_desc.value = todoObject._description;
  //   input_duedate.value = todoObject._dueDate;
  //   input_priority.value = todoObject.input_priority;
  //   input_project.value = todoObject._project;
  // }

  //This adds the event listener to the submit button to check form valid then submit as a custom event
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(create_todo_form.checkValidity());
    // console.log(input_duedate.value);
    let dueDateObj;
    // console.log(dueDateObj);
    let validForm = create_todo_form.checkValidity();
    if (validForm) {
      if (input_duedate.value == null) {
        dueDateObj = null;
      } else {
        dueDateObj = new Date(input_duedate.value);
      }
      let formData = {
        // Extract form data here, e.g., using form elements or other methods
        title: input_title.value,
        desc: input_desc.value,
        duedate: dueDateObj,
        priority: input_priority.value,
        project: input_project.value,
        // Add more properties as needed
      };

      const customEvent = new CustomEvent("createNewTodoEvent", {
        detail: formData,
      });
      document.dispatchEvent(customEvent);
      console.log("Create todo event fired!");
      create_todo_form.reset();
      dom_dialog.close();
    } else {
      create_todo_form.reportValidity();
    }
  });

  //TODO: Add a new field that holds the project
  return dom_dialog;
}


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
/* harmony import */ var _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/edit.svg */ "./src/assets/icons/edit.svg");
/* harmony import */ var _assets_icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/delete.svg */ "./src/assets/icons/delete.svg");



function generateTodoCardDOM(todo) {
  // const editButtonSVG = "src/assets/icons/edit.svg";
  // const deleteButtonSVG = "src/assets/icons/delete.svg";
  // console.log(todo);
  // console.log(todo.duedate);
  // console.log(todo._duedate);
  // console.log(todo.getDueDate);
  // console.log(todo.project);
  const cardDiv = document.createElement("div");

  cardDiv.classList = "todo-card hidden";

  let todoCompleted = todo._completed;
  if (todoCompleted) {
    cardDiv.classList.add("completed");
  } else {
    cardDiv.classList.add("uncompleted");
  }

  cardDiv.classList.add(todo._priority);

  const todoID = document.createElement("p");
  todoID.innerHTML = todo._id;
  todoID.classList = "todo-id";
  todoID.style = "display: none";

  const todoTitle = document.createElement("h1");
  todoTitle.innerHTML = todo._title;
  todoTitle.classList = "todo-title";

  const todoDetails = document.createElement("div");
  todoDetails.classList = "todo-details";

  const todoDesc = document.createElement("p");
  todoDesc.innerHTML = todo._description;
  todoDesc.classList = "todo-desc";

  const todoDueDate = document.createElement("p");
  todoDueDate.innerHTML = todo.dueDate;
  // console.log(todo.dueDate);
  todoDueDate.classList = "todo-duedate";

  const completeButton = document.createElement("button");
  completeButton.innerHTML = "Done";
  completeButton.classList = "todo-complete-btn";

  const editDeleteBtns = document.createElement("div");
  editDeleteBtns.classList = "edit-delete-btns";
  const deleteBtn = document.createElement("button");
  const deleteBtnIcon = document.createElement("img");
  deleteBtnIcon.src = _assets_icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__;
  deleteBtn.appendChild(deleteBtnIcon);
  const editBtn = document.createElement("button");
  const editBtnIcon = document.createElement("img");
  editBtnIcon.src = _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_0__;
  editBtn.appendChild(editBtnIcon);
  editDeleteBtns.appendChild(editBtn);
  editDeleteBtns.appendChild(deleteBtn);

  const todoDetailsBottom = document.createElement("div");
  todoDetailsBottom.classList.add("todo-details-bottom");
  // console.log(todo);
  if (todo.project != "null") {
    const todoProject = document.createElement("p");
    todoProject.innerHTML = todo.project;
    todoProject.classList = "todo-project";
    todoDetailsBottom.appendChild(todoProject);
  }

  todoDetailsBottom.appendChild(todoDueDate);
  todoDetailsBottom.appendChild(completeButton);

  todoDetails.appendChild(todoDesc);
  todoDetails.appendChild(todoDetailsBottom);

  cardDiv.appendChild(todoID);
  cardDiv.appendChild(todoTitle);
  cardDiv.appendChild(todoDetails);
  cardDiv.appendChild(editDeleteBtns);

  completeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    // console.log(e.target);
    const toggleCompleteEvent = new CustomEvent("toggleTodoComplete", {
      detail: todo._id,
    });
    document.dispatchEvent(toggleCompleteEvent);
  });

  deleteBtn.addEventListener("click", (e) => {
    console.log("Delete todo event fired");
    e.stopPropagation();
    const deleteTodoEvent = new CustomEvent("deleteTodo", {
      detail: todo._id,
    });
    document.dispatchEvent(deleteTodoEvent);
  });

  editBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    // console.log("EDIT");

    const editTodoEvent = new CustomEvent("openEditTodoDialog", {
      detail: todo._id,
    });

    document.dispatchEvent(editTodoEvent);
  });

  cardDiv.addEventListener("click", (event) => {
    // console.log(event.target.nodeName);
    if (event.target.nodeName === "BUTTON") {
      return;
    }
    if (cardDiv.classList.contains("hidden")) {
      cardDiv.classList.remove("hidden");
    } else {
      cardDiv.classList.add("hidden");
    }
  });

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
  const create_buttons = document.createElement("div");
  create_buttons.id = "create-buttons";
  create_buttons.className = "minimised";

  const button_main = document.createElement("button");
  button_main.id = "main-button";
  button_main.classList = "create-main-btn animated-button";

  //Div to house the minimised buttons
  const minimised_buttons = document.createElement("div");
  minimised_buttons.id = "minimised-buttons";
  // minimised_buttons.classList.add("minimised");

  //Create todo button
  const create_todo_btn = document.createElement("button");
  create_todo_btn.id = "create-todo-btn";
  create_todo_btn.innerText = "Create Todo";
  create_todo_btn.classList = "animated-button";

  //Create project button
  const create_project_btn = document.createElement("button");
  create_project_btn.id = "create-project-btn";
  create_project_btn.innerText = "Create Project";
  create_project_btn.classList = "animated-button";

  //Create note button
  const create_note_btn = document.createElement("button");
  create_note_btn.id = "create-note-btn";
  create_note_btn.innerText = "Create Note";
  create_note_btn.classList = "animated-button";

  minimised_buttons.appendChild(create_todo_btn);
  minimised_buttons.appendChild(create_project_btn);
  minimised_buttons.appendChild(create_note_btn);

  create_buttons.appendChild(minimised_buttons);
  create_buttons.appendChild(button_main);

  //Adding the event listeners
  button_main.addEventListener("click", (e) => {
    e.preventDefault();
    create_buttons.classList.toggle("minimised");
    // console.log(create_buttons.classList);
  });
  create_todo_btn.addEventListener("click", (e) => {
    console.log("Creating new Todo");
    const create_todo_event = new CustomEvent("openCreateTodoDialogEvent");
    document.dispatchEvent(create_todo_event);
  });
  create_project_btn.addEventListener("click", (e) => {
    console.log("Creating new project");
    const create_project_event = new CustomEvent(
      "openCreateProjectDialogEvent"
    );
    document.dispatchEvent(create_project_event);
  });
  create_note_btn.addEventListener("click", (e) => {
    console.log("Creating new note");
    const create_note_event = new CustomEvent("openCreateNoteDialogEvent");
    document.dispatchEvent(create_note_event);
  });

  // const button = document.createElement("button");
  // button.innerHTML = "NEW TODO";
  // button.classList.add("new-todo-btn");

  return create_buttons;
}


/***/ }),

/***/ "./src/dom/edit_todo_dialog.js":
/*!*************************************!*\
  !*** ./src/dom/edit_todo_dialog.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateEditTodoDOM)
/* harmony export */ });
function generateEditTodoDOM(project_data, todoObject) {
  const dom_dialog = document.createElement("dialog");
  dom_dialog.id = "create-todo-dom";
  dom_dialog.classList = "create-dialog";

  const create_todo_form = document.createElement("form");
  // const form = document.createElement("form");
  create_todo_form.id = "create-todo-form";
  create_todo_form.classList = "create-dialog-form";
  // create_todo_form.method = "dialog";

  const header_text = document.createElement("h1");
  header_text.innerText = "Edit Todo";
  header_text.classList = "dialog-header";

  const closeBtn = document.createElement("button");
  closeBtn.id = "createTodoCloseBtn";
  closeBtn.classList = "universal-close-btn";
  closeBtn.formMethod = "dialog";
  closeBtn.value = "cancel";
  closeBtn.onclick = (e) => {
    e.preventDefault();
    dom_dialog.close();
    // console.log("Closing modal");
  };

  const input_title = document.createElement("input");
  input_title.placeholder = "Title: new todo";
  input_title.classList.add("new_entry_title");
  input_title.id = "new_todo_title";
  input_title.required = true;
  input_title.name = "input_title";

  const input_desc = document.createElement("textarea");
  input_desc.placeholder = "Description";
  input_desc.classList.add("new_todo_desc");

  const date_div = document.createElement("div");
  const input_duedate = document.createElement("input");
  input_duedate.classList = "new_todo_duedate";
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

  input_priority.classList = "new_todo_priority";

  input_priority.appendChild(priority_high);
  input_priority.appendChild(priority_med);
  input_priority.appendChild(priority_low);
  input_priority.options[1].selected = true;
  const input_priority_label = document.createElement("label");
  input_priority_label.innerText = "Priority: ";
  priority_div.appendChild(input_priority_label);
  priority_div.appendChild(input_priority);

  const project_div = document.createElement("div");
  const project_label = document.createElement("label");
  project_label.innerText = "Project: ";
  project_div.appendChild(project_label);
  const input_project = document.createElement("select");
  const project_option_default = document.createElement("option");
  project_option_default.value = null;
  project_option_default.innerText = "none";
  input_project.appendChild(project_option_default);
  // console.log(project_data);
  if ((project_data !== null) & (project_data.getData() !== null)) {
    project_data.getData().forEach((project) => {
      console.log(project);
      let projectOption = document.createElement("option");
      projectOption.value = project._title;
      projectOption.innerText = project._title;
      input_project.appendChild(projectOption);
    });
  }
  project_div.appendChild(input_project);

  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Edit";
  submitBtn.classList = "dialog-submit-btn";
  submitBtn.id = "create-todo-submit-btn";
  submitBtn.value = "default";

  const details_div = document.createElement("div");
  details_div.id = "details_div";
  details_div.appendChild(priority_div);
  details_div.appendChild(date_div);
  details_div.appendChild(project_div);
  details_div.appendChild(submitBtn);

  create_todo_form.appendChild(header_text);
  create_todo_form.appendChild(closeBtn);
  create_todo_form.appendChild(input_title);
  create_todo_form.appendChild(input_desc);
  create_todo_form.appendChild(details_div);

  dom_dialog.appendChild(create_todo_form);

  if (todoObject == null) {
    console.log("Todo is null!");
  } else {
    console.log(todoObject);
    input_title.value = todoObject._title;
    input_desc.value = todoObject._description;
    if (todoObject._dueDate != null) {
      input_duedate.value = todoObject._dueDate.toISOString().split("T")[0];
    }
    input_priority.value = todoObject._priority;
    input_project.value = todoObject._project;
  }

  //This adds the event listener to the submit button to check form valid then submit as a custom event
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(create_todo_form.checkValidity());
    console.log(input_duedate.value);
    let dueDateObj;
    console.log(dueDateObj);
    let validForm = create_todo_form.checkValidity();
    if (validForm) {
      if (input_duedate.value == null) {
        dueDateObj = null;
      } else {
        dueDateObj = new Date(input_duedate.value);
      }
      console.log(dueDateObj);
      let formData = {
        // Extract form data here, e.g., using form elements or other methods
        id: todoObject._id,
        title: input_title.value,
        desc: input_desc.value,
        dueDate: dueDateObj,
        priority: input_priority.value,
        project: input_project.value,
        // Add more properties as needed
      };

      const customEvent = new CustomEvent("editTodoEvent", {
        detail: formData,
      });
      document.dispatchEvent(customEvent);
      console.log("Edit todo event fired!");
      create_todo_form.reset();
      dom_dialog.close();
    } else {
      create_todo_form.reportValidity();
    }
  });

  //TODO: Add a new field that holds the project
  return dom_dialog;
}


/***/ }),

/***/ "./src/dom/project_list.js":
/*!*********************************!*\
  !*** ./src/dom/project_list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateProjectsListDOM)
/* harmony export */ });
/* harmony import */ var _todo_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo/project */ "./src/todo/project.js");


function generateProjectsListDOM(project_data) {
  // console.log(project_data);
  const project_list_dom = document.createElement("ul");
  project_list_dom.id = "project-list-dom";

  const project_today = { _id: 0, _title: "today" };
  const project_all = { _id: 1, _title: "all" };
  // console.log(project_today);
  // console.log(project_all);

  const project_list = [...project_data.getData()];
  project_list.unshift(project_today);
  project_list.unshift(project_all);
  // project_data.push(project_all, project_today)
  // console.log(project_data.getData());
  // console.log(project_list);

  project_list.forEach((project) => {
    // console.log(project);
    const list_elm = document.createElement("li");
    list_elm.classList = "project-list-item";
    const project_button = document.createElement("button");
    project_button.classList.add("project_btn");
    project_button.id = project._id;
    project_button.innerHTML = project._title;
    list_elm.appendChild(project_button);

    project_button.onclick = (event) => {
      project_list_dom.childNodes.forEach((el) => {
        // console.log(el);
        // console.log(el.childNodes[0]);
        let btn = el.childNodes[0];
        btn.style.fontWeight = "normal";
        btn.textContent = btn.textContent.replace(/[<>]/g, "");
        // console.log(btn);
      });
      // console.log(project_button);
      project_button.textContent = `< ${project_button.textContent} >`;
      project_button.style.fontWeight = "bold";
      event.preventDefault();
      // console.log(project._title);
      const filter_data = {
        projectID: project._id,
        project_title: project._title,
      };
      // console.log(filter_data);
      const filterEvent = new CustomEvent("filterEvent", {
        detail: filter_data,
      });
      document.dispatchEvent(filterEvent);
      console.log("Filter event fired!");
    };

    project_list_dom.appendChild(list_elm);
  });

  project_list_dom.classList = "project-list";

  return project_list_dom;
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
  constructor(project_title) {
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
    this._project = null;
  }

  get id() {
    return this._id;
  }

  set id(newID) {
    this._id = newID;
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
    if (newDueDate == null) {
      // console.log("nothing!");
      this._dueDate = null;
    } else {
      let newDate = new Date(newDueDate);
      this._dueDate = newDate;
    }
  }

  get dueDate() {
    if (this._dueDate == null) {
      return null;
    } else {
      const dateString = this._dueDate.toLocaleString();
      const [datePart, timePart] = dateString.split(", ");
      return datePart;
    }
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

  set project(projectID) {
    this._project = projectID;
  }

  get project() {
    return this._project;
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

/***/ }),

/***/ "./src/assets/icons/delete.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/delete.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7fa3d2069d3067f5a44c.svg";

/***/ }),

/***/ "./src/assets/icons/edit.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/edit.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ea4cf483224d228ffe4.svg";

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
/* harmony import */ var _dom_create_todo_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/create_todo_dialog */ "./src/dom/create_todo_dialog.js");
/* harmony import */ var _database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./database/database_helper_functions */ "./src/database/database_helper_functions.js");
/* harmony import */ var _dom_project_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/project_list */ "./src/dom/project_list.js");
/* harmony import */ var _dom_create_project_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/create_project_dialog */ "./src/dom/create_project_dialog.js");
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./database/database */ "./src/database/database.js");
/* harmony import */ var _dom_edit_todo_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/edit_todo_dialog */ "./src/dom/edit_todo_dialog.js");












let todo_database;
let project_database;

function populateDatabase() {
  let todoData = (0,_database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__.fetchAllData)();

  todo_database = new _database_database__WEBPACK_IMPORTED_MODULE_9__["default"]();
  project_database = new _database_database__WEBPACK_IMPORTED_MODULE_9__["default"]();

  todoData.todos.forEach((todoObj) => {
    let newTodo = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();
    newTodo.id = todoObj._id;
    newTodo.title = todoObj._title;
    newTodo.description = todoObj._description;
    newTodo.dueDate = todoObj._dueDate;
    newTodo.priority = todoObj._priority;
    newTodo.completed = todoObj._completed;
    newTodo.project = todoObj._project;
    // console.log(newTodo);
    todo_database.add(newTodo);
  });
  todoData.projects.forEach((projectObj) => {
    project_database.add(projectObj);
  });

  // console.log(todo_database, project_database);
}
if (_database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__.checkDatabase === true) {
  (0,_database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__.initialiseDatabase)();
}

populateDatabase();
// console.log(project_database);

//Create todo dom element

const create_project_dom = (0,_dom_create_project_dialog__WEBPACK_IMPORTED_MODULE_8__["default"])();
document.body.appendChild(create_project_dom);

//SIDE BAR
const side_bar_dom = document.getElementById("side-bar");
//TODO: add the projects her

//DEBUGGER DOM ELEMENT: FOR DEBUGGING
// const debug_dom = document.createElement("div");
// debug_dom.id = "debug_dom";
// debug_dom.innerText = "DEBUGGER";
// side_bar_dom.appendChild(debug_dom);

const side_bar_project_list = document.createElement("div");
side_bar_dom.appendChild(side_bar_project_list);

const todo_container = document.getElementById("todo-list");

const newTodoBtn = (0,_dom_dom_new_todo_btn__WEBPACK_IMPORTED_MODULE_4__["default"])();
// console.log(newTodoBtn);
document.body.appendChild(newTodoBtn);
// newTodoBtn.addEventListener("click", (event) => {
//   // event.preventDefault();
//   create_todo_dom.showModal();
// });

//TODO: MOVE THESE FUNCTIONS OUT OF HERE!
function createNewTodo(details) {
  // console.log(details);
  const newTodo = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();
  newTodo.title = details["title"];
  newTodo.description = details["desc"];
  newTodo.priority = details["priority"];
  newTodo.dueDate = details["duedate"];
  newTodo.project = details["project"];
  // console.log(newTodo);
  // console.log(newTodo.dueDate);
  return newTodo;
}

function createNewProject(details) {
  const newProject = new _todo_project__WEBPACK_IMPORTED_MODULE_2__["default"]();
  newProject.title = details["projectID"];
  // console.log(newProject);
  // newProject.title = details["title"];
  return newProject;
}

document.addEventListener("createNewTodoEvent", function (event) {
  console.log("Creating new todo and pushing to database!");
  const receivedData = event.detail;
  // console.log(receivedData);
  // Handle the received data as needed
  const newTodo = createNewTodo(receivedData);
  todo_database.add(newTodo);
  (0,_database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__.pushData)(todo_database.getData(), project_database.getData());
  // storeTodo(newTodo);
  populateDatabase();
  show_todos();
});

document.addEventListener("editTodoEvent", (event) => {
  console.log("Captured edited todo");
  const receivedData = event.detail;
  // console.log(todo_database.getData());
  console.log(receivedData);
  let oldTodoIndex = todo_database
    .getData()
    .findIndex((item) => item._id === receivedData.id);
  let oldTodo = todo_database.getData()[oldTodoIndex];
  // console.log(oldTodo);
  const updated_todo = new _todo_todo__WEBPACK_IMPORTED_MODULE_1__["default"]();
  updated_todo.id = receivedData.id;
  updated_todo.title = receivedData.title;
  updated_todo.description = receivedData.desc;
  updated_todo.dueDate = receivedData.dueDate;
  updated_todo.priority = receivedData.priority;
  updated_todo.completed = oldTodo._completed;
  updated_todo.project = receivedData.project;
  console.log(oldTodo);
  console.log(updated_todo);
  todo_database.update(receivedData.id, updated_todo);
  (0,_database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__.pushData)(todo_database.getData(), project_database.getData());
  populateDatabase();
  show_todos();
});

document.addEventListener("createNewProjectEvent", function (event) {
  console.log("Creating new project and pushing to database!");
  const receivedData = event.detail;
  // console.log(receivedData);
  const newProject = createNewProject(receivedData);
  // console.log(newProject);
  project_database.add(newProject);

  (0,_database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__.pushData)(todo_database.getData(), project_database.getData());
  // show_todos();
  populateDatabase();
  showProjects();
});

document.addEventListener("toggleTodoComplete", (event) => {
  const data = event.detail;
  let updated_todo = todo_database
    .getData()
    .filter((todo) => todo._id == data)[0];
  if (updated_todo._completed == false) {
    updated_todo._completed = true;
  } else {
    updated_todo._completed = false;
  }
  (0,_database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__.pushData)(todo_database.getData(), project_database.getData());
  // console.log(data);
  // toggleTodoCompletion(data);
  populateDatabase();
  show_todos();
});

document.addEventListener("deleteTodo", (event) => {
  event.preventDefault();

  const todoToDeleteID = event.detail;
  // console.log("delete todo event captured");
  const todoToDelete = todo_database
    .getData()
    .filter((todo) => todo._id == todoToDeleteID)[0];
  todo_database.delete(todoToDelete);
  (0,_database_database_helper_functions__WEBPACK_IMPORTED_MODULE_6__.pushData)(todo_database.getData(), project_database.getData());

  // deleteTodo(data);
  populateDatabase();
  show_todos();
});

document.addEventListener("openEditTodoDialog", (event) => {
  event.preventDefault();
  console.log(`Edit to event event captured: ${event.detail}`);
  let todo = todo_database
    .getData()
    .filter((todo) => todo._id === event.detail)[0];
  console.log(todo);
  const edit_todo_dialog = (0,_dom_edit_todo_dialog__WEBPACK_IMPORTED_MODULE_10__["default"])(project_database, todo);
  document.body.appendChild(edit_todo_dialog);
  event.preventDefault();
  edit_todo_dialog.showModal();
});

//Event listeners to show modals

document.addEventListener("openCreateTodoDialogEvent", (event) => {
  const create_todo_dom = (0,_dom_create_todo_dialog__WEBPACK_IMPORTED_MODULE_5__["default"])(project_database);
  document.body.appendChild(create_todo_dom);
  event.preventDefault();
  create_todo_dom.showModal();
});

document.addEventListener("openCreateProjectDialogEvent", (event) => {
  event.preventDefault();
  create_project_dom.showModal();
});

document.addEventListener("openCreateNoteDialogEvent", (event) => {
  event.preventDefault();
  // create_project_dom.showModal();
});

document.addEventListener("filterEvent", (event) => {
  console.log("filter event captured!");
  console.log(event.detail.project_title);
  show_todos(event.detail.project_title);
});

function show_todos(filter = "all") {
  // const todosArray = getTodos();
  const todosArray = todo_database.getData();
  // console.log(todo_database);
  // console.log(filter);
  // console.log(todosArray);
  todo_container.innerHTML = "";

  if (filter == "all") {
    todo_container.innerHTML = "";
    todosArray.forEach((todo_obj) => {
      let todo_dom_card = (0,_dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"])(todo_obj);
      todo_container.appendChild(todo_dom_card);
    });
  } else if (filter == "today") {
    //Get today's date
    //Get all todos that are either due today or have been due
    const today = new Date();
    const dateFilteredTodos = todosArray.filter((todo) => {
      return todo._dueDate?.toDateString() === today.toDateString();
    });
    console.log(dateFilteredTodos);
    dateFilteredTodos.forEach((todo_obj) => {
      let todo_dom_card = (0,_dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"])(todo_obj);
      todo_container.appendChild(todo_dom_card);
    });
  } else {
    const filteredTodos = todosArray.filter((todo) => todo._project === filter);
    // console.log(filteredTodos);

    filteredTodos.forEach((todo_obj) => {
      let todo_dom_card = (0,_dom_dom_card__WEBPACK_IMPORTED_MODULE_3__["default"])(todo_obj);
      todo_container.appendChild(todo_dom_card);
    });
  }
}

function showProjects() {
  const project_list_dom = (0,_dom_project_list__WEBPACK_IMPORTED_MODULE_7__["default"])(project_database);
  side_bar_project_list.innerHTML = "";
  side_bar_project_list.appendChild(project_list_dom);
}

// function show_projects(){
//   const
// }
// populateDatabase();
show_todos();
showProjects();

// wipeData();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSx1QkFBdUIseUJBQXlCLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLHdCQUF3QixPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxV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Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1Q2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RFZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEsrQztBQUNJOztBQUVwQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbURBQU87QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3SGU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEVlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDTDtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDZEQUF1QjtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vc3JjL2RhdGFiYXNlL2RhdGFiYXNlLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2VfaGVscGVyX2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vc3JjL2RvbS9jcmVhdGVfcHJvamVjdF9kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy9kb20vY3JlYXRlX3RvZG9fZGlhbG9nLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvZG9tL2RvbV9jYXJkLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvZG9tL2RvbV9uZXdfdG9kb19idG4uanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy9kb20vZWRpdF90b2RvX2RpYWxvZy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0Ly4vc3JjL2RvbS9wcm9qZWN0X2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy9oZWxwZXIvaWRfZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvdG9kby9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3QvLi9zcmMvdG9kby90b2RvLmpzIiwid2VicGFjazovL3RvcF90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcF90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL1JvYm90by9Sb2JvdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInR0ZlwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1Cb2xkXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInR0ZlwiKTtcbn1cblxuaHRtbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDIwNSwgMjA1KTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmFuaW1hdGVkLWJ1dHRvbiB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hbmltYXRlZC1idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi8qICN0b2RvLWxpc3QtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzkyZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDEwcHg7XG59ICovXG5cbiNhcHAtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI3NpZGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzkyZTtcbiAgcGFkZGluZzogMTBweCA1MHB4O1xuICBkaXNwbGF5OiBmaXhlZDtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiLCBzYW5zLXNlcmlmO1xufVxuXG4jc2lkZS1iYXIgaDEge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4jc2lkZS1iYXIgI3Byb2plY3QtbGlzdC1kb20ge1xuICBwYWRkaW5nOiAwO1xufVxuXG4jc2lkZS1iYXIgI3Byb2plY3QtbGlzdC1kb20gbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuI3NpZGUtYmFyICNwcm9qZWN0LWxpc3QtZG9tIGxpIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRzO1xufVxuXG4jc2lkZS1iYXIgI3Byb2plY3QtbGlzdC1kb20gbGkgYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4jdG9kby1saXN0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA3MCU7XG4gIGZsZXgtZ3JvdzogNDtcbiAgcGFkZGluZzogMTAwcHggNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jdG9kby1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLyogd2lkdGg6IDEwMCU7ICovXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udG9kby1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhjZmNmO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIHRyYW5zZm9ybSAwLjNzO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA4MCU7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi50b2RvLWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliM2IzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxuXG4udG9kby1jYXJkLmNvbXBsZXRlZCBoMSB7XG4gIGNvbG9yOiByZ2IoMTQzLCAxMzUsIDEzNSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4udG9kby1jYXJkLmNvbXBsZXRlZCA+IC50b2RvLWRldGFpbHMgPiAudG9kby1kZXNjIHtcbiAgY29sb3I6IHJnYigxNDMsIDEzNSwgMTM1KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi50b2RvLWNhcmQuaGlkZGVuIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udG9kby1jYXJkIC5lZGl0LWRlbGV0ZS1idG5zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbn1cblxuLnRvZG8tY2FyZC5oaWRkZW4gLmVkaXQtZGVsZXRlLWJ0bnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udG9kby1jYXJkIC5lZGl0LWRlbGV0ZS1idG5zID4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udG9kby1jYXJkIC5lZGl0LWRlbGV0ZS1idG5zID4gYnV0dG9uID4gaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMjBweDtcbn1cblxuLnRvZG8tY2FyZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiA1JTtcbiAgYm90dG9tOiA1JTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4udG9kby1jYXJkLmhpZGRlbjo6YmVmb3JlIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHRvcDogMTAlO1xuICBib3R0b206IDEwJTtcbn1cblxuLnRvZG8tY2FyZC5tZWQtcHJpb3JpdHk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLnRvZG8tY2FyZC5oaWdoLXByaW9yaXR5OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi50b2RvLWNhcmQubG93LXByaW9yaXR5OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLnRvZG8tY2FyZCA+IGRpdixcbi50b2RvLWNhcmQgPiBoMSxcbi50b2RvLWNhcmQgPiBidXR0b24ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnRvZG8tY2FyZC5oaWRkZW4gLnRvZG8tZGV0YWlscyAudG9kby1kZXNjIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG8tY2FyZCAudG9kby1wcm9qZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I2YThhYTtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRvZG8tZGV0YWlscy1ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvZG8tZGV0YWlscy1ib3R0b20gPiBwLFxuLnRvZG8tZGV0YWlscy1ib3R0b20gPiBidXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cblxuLnRvZG8tZGV0YWlscy1ib3R0b20ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLnRvZG8tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi50b2RvLWRlc2Mge1xufVxuLyogLnRvZG8tY2FyZC5oaWRkZW4gLnRvZG8tZGV0YWlscyAudG9kby1kZXNjIHtcbiAgZGlzcGxheTogbm9uZTtcbn0gKi9cbi50b2RvLWR1ZWRhdGUge1xufVxuXG4udG9kby1wcmlvcml0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b2RvLWNvbXBsZXRlLWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NjQ3ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogI2RkY2VjZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4jY3JlYXRlLWJ1dHRvbnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDMwcHg7XG4gIGJvdHRvbTogMzBweDtcbn1cblxuI2NyZWF0ZS1idXR0b25zICNtaW5pbWlzZWQtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG9wYWNpdHk6IDE7IC8qIE1ha2UgaXQgZnVsbHkgdmlzaWJsZSAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IC8qIFNsaWRlIGl0IHRvIHRoZSB0b3AgKi9cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbiNjcmVhdGUtYnV0dG9ucy5taW5pbWlzZWQgI21pbmltaXNlZC1idXR0b25zIHtcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuI2NyZWF0ZS1idXR0b25zICNtaW5pbWlzZWQtYnV0dG9ucyBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTY0N2U7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6ICNkZGNlY2Q7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuYnV0dG9uLmNyZWF0ZS1tYWluLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTY0N2U7XG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBjb250ZW50OiBcIlwiO1xuICAvKiBsZWZ0OiAzMHB4O1xuICBib3R0b206IDMwcHg7ICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG59XG5cbmJ1dHRvbi5jcmVhdGUtbWFpbi1idG46OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNlY2Q7XG4gIGxlZnQ6IDEwcHg7XG4gIGJvdHRvbTogMjdweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cblxuYnV0dG9uLmNyZWF0ZS1tYWluLWJ0bjo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNlY2Q7XG4gIGxlZnQ6IDEwcHg7XG4gIC8qIHRvcDogMTkwcHg7ICovXG4gIGJvdHRvbTogMjdweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgLyogdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyAqL1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cblxuI2NyZWF0ZS1idXR0b25zLm1pbmltaXNlZCBidXR0b24uY3JlYXRlLW1haW4tYnRuOjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbiNjcmVhdGUtYnV0dG9ucy5taW5pbWlzZWQgYnV0dG9uLmNyZWF0ZS1tYWluLWJ0bjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbmJ1dHRvbi5jcmVhdGUtbWFpbi1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5jcmVhdGUtZGlhbG9nIHtcbiAgZGlzcGxheTogcmVsYXRpdmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiA1MHB4O1xuICAvKiBoZWlnaHQ6IDMwdmg7ICovXG4gIHdpZHRoOiA1MHZ3O1xufVxuLmNyZWF0ZS1kaWFsb2ctZm9ybSNjcmVhdGUtdG9kby1mb3JtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcbn1cblxuLmNyZWF0ZS1kaWFsb2ctZm9ybSNjcmVhdGUtcHJvamVjdC1mb3JtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xufVxuXG4uY3JlYXRlLWRpYWxvZy1mb3JtI2NyZWF0ZS1wcm9qZWN0LWZvcm0gaDEge1xuICBncmlkLXJvdzogMTtcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XG59XG5cbi5jcmVhdGUtZGlhbG9nLWZvcm0jY3JlYXRlLXByb2plY3QtZm9ybSBpbnB1dCB7XG4gIGdyaWQtcm93OiAyO1xuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcbn1cblxuLmNyZWF0ZS1kaWFsb2ctZm9ybSNjcmVhdGUtcHJvamVjdC1mb3JtIGJ1dHRvbiB7XG4gIGdyaWQtcm93OiAzO1xuICBncmlkLWNvbHVtbjogMyAvIHNwYW4gMTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4udW5pdmVyc2FsLWNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTY0N2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51bml2ZXJzYWwtY2xvc2UtYnRuOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkY2VjZDtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAyN3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4udW5pdmVyc2FsLWNsb3NlLWJ0bjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkY2VjZDtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAyN3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufVxuLyogI2NyZWF0ZS10b2RvLWRvbSAjY3JlYXRlVG9kb0Nsb3NlQnRuOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkY2VjZDtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAyN3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbiNjcmVhdGUtdG9kby1kb20gI2NyZWF0ZVRvZG9DbG9zZUJ0bjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkY2VjZDtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAyN3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufSAqL1xuXG5oMS5kaWFsb2ctaGVhZGVyIHtcbiAgbWFyZ2luOiBub25lO1xufVxuLyogI2NyZWF0ZS10b2RvLWRvbSBoMSB7XG4gIG1hcmdpbjogbm9uZTtcbn0gKi9cblxuI2NyZWF0ZS10b2RvLWRvbSBkaXYge1xuICAvKiBkaXNwbGF5OiBncmlkOyAqL1xuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyOyAqL1xuICAvKiBhbGlnbi1pdGVtczogZW5kOyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI2RldGFpbHNfZGl2IHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgIWltcG9ydGFudDtcbn1cblxuI2NyZWF0ZS10b2RvLWRvbSAuZGlhbG9nLXN1Ym1pdC1idG4ge1xuICB3aWR0aDogMTMwcHg7XG59XG5cbi5kaWFsb2ctc3VibWl0LWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk2NDdlO1xuICBjb2xvcjogI2RkY2VjZDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gIC8qIGhlaWdodDogMjBweDsgKi9cbiAgLyogd2lkdGg6IDEzMHB4OyAqL1xufVxuXG4uZGlhbG9nLXN1Ym1pdC1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5jcmVhdGUtZGlhbG9nLWZvcm0gaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiNjcmVhdGUtdG9kby1kb20gdGV4dGFyZWEge1xuICBib3JkZXI6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5uZXdfZW50cnlfdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubmV3X3RvZG9fZGVzYyB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubmV3X3RvZG9fdGl0bGU6OnBsYWNlaG9sZGVyIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm5ld190b2RvX2Rlc2M6OnBsYWNlaG9sZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiwwREFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMERBQXlEO0FBQzNEOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBOzs7O0dBSUc7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixhQUFh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OztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90by1Cb2xkXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9Sb2JvdG8vUm9ib3RvLUJvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAyMDUsIDIwNSk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5hbmltYXRlZC1idXR0b24ge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hbmltYXRlZC1idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4vKiAjdG9kby1saXN0LWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczOTJlO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn0gKi9cXG5cXG4jYXBwLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGUtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzM5MmU7XFxuICBwYWRkaW5nOiAxMHB4IDUwcHg7XFxuICBkaXNwbGF5OiBmaXhlZDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvLUJvbGRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jc2lkZS1iYXIgaDEge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbiNzaWRlLWJhciAjcHJvamVjdC1saXN0LWRvbSB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jc2lkZS1iYXIgI3Byb2plY3QtbGlzdC1kb20gbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jc2lkZS1iYXIgI3Byb2plY3QtbGlzdC1kb20gbGkgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRzO1xcbn1cXG5cXG4jc2lkZS1iYXIgI3Byb2plY3QtbGlzdC1kb20gbGkgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuI3RvZG8tbGlzdC1jb250YWluZXIge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGZsZXgtZ3JvdzogNDtcXG4gIHBhZGRpbmc6IDEwMHB4IDUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiN0b2RvLWxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRvZG8tY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhjZmNmO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCB0cmFuc2Zvcm0gMC4zcztcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA4MCU7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi50b2RvLWNhcmQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjNiMztcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxufVxcblxcbi50b2RvLWNhcmQuY29tcGxldGVkIGgxIHtcXG4gIGNvbG9yOiByZ2IoMTQzLCAxMzUsIDEzNSk7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8tY2FyZC5jb21wbGV0ZWQgPiAudG9kby1kZXRhaWxzID4gLnRvZG8tZGVzYyB7XFxuICBjb2xvcjogcmdiKDE0MywgMTM1LCAxMzUpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvLWNhcmQuaGlkZGVuIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvZG8tY2FyZCAuZWRpdC1kZWxldGUtYnRucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG59XFxuXFxuLnRvZG8tY2FyZC5oaWRkZW4gLmVkaXQtZGVsZXRlLWJ0bnMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tY2FyZCAuZWRpdC1kZWxldGUtYnRucyA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udG9kby1jYXJkIC5lZGl0LWRlbGV0ZS1idG5zID4gYnV0dG9uID4gaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4udG9kby1jYXJkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxMHB4O1xcbiAgdG9wOiA1JTtcXG4gIGJvdHRvbTogNSU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi50b2RvLWNhcmQuaGlkZGVuOjpiZWZvcmUge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB0b3A6IDEwJTtcXG4gIGJvdHRvbTogMTAlO1xcbn1cXG5cXG4udG9kby1jYXJkLm1lZC1wcmlvcml0eTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnRvZG8tY2FyZC5oaWdoLXByaW9yaXR5OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udG9kby1jYXJkLmxvdy1wcmlvcml0eTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4udG9kby1jYXJkID4gZGl2LFxcbi50b2RvLWNhcmQgPiBoMSxcXG4udG9kby1jYXJkID4gYnV0dG9uIHtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50b2RvLWNhcmQuaGlkZGVuIC50b2RvLWRldGFpbHMgLnRvZG8tZGVzYyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1jYXJkIC50b2RvLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I2YThhYTtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udG9kby1kZXRhaWxzLWJvdHRvbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRvZG8tZGV0YWlscy1ib3R0b20gPiBwLFxcbi50b2RvLWRldGFpbHMtYm90dG9tID4gYnV0dG9uIHtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4udG9kby1kZXRhaWxzLWJvdHRvbSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8tQm9sZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b2RvLWRlc2Mge1xcbn1cXG4vKiAudG9kby1jYXJkLmhpZGRlbiAudG9kby1kZXRhaWxzIC50b2RvLWRlc2Mge1xcbiAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuLnRvZG8tZHVlZGF0ZSB7XFxufVxcblxcbi50b2RvLXByaW9yaXR5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWNvbXBsZXRlLWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk2NDdlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBjb2xvcjogI2RkY2VjZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuI2NyZWF0ZS1idXR0b25zIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDMwcHg7XFxuICBib3R0b206IDMwcHg7XFxufVxcblxcbiNjcmVhdGUtYnV0dG9ucyAjbWluaW1pc2VkLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvcGFjaXR5OiAxOyAvKiBNYWtlIGl0IGZ1bGx5IHZpc2libGUgKi9cXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgLyogU2xpZGUgaXQgdG8gdGhlIHRvcCAqL1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxufVxcblxcbiNjcmVhdGUtYnV0dG9ucy5taW5pbWlzZWQgI21pbmltaXNlZC1idXR0b25zIHtcXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jY3JlYXRlLWJ1dHRvbnMgI21pbmltaXNlZC1idXR0b25zIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk2NDdlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBjb2xvcjogI2RkY2VjZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuYnV0dG9uLmNyZWF0ZS1tYWluLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk2NDdlO1xcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIC8qIGxlZnQ6IDMwcHg7XFxuICBib3R0b206IDMwcHg7ICovXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG59XFxuXFxuYnV0dG9uLmNyZWF0ZS1tYWluLWJ0bjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkY2VjZDtcXG4gIGxlZnQ6IDEwcHg7XFxuICBib3R0b206IDI3cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG59XFxuXFxuYnV0dG9uLmNyZWF0ZS1tYWluLWJ0bjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNlY2Q7XFxuICBsZWZ0OiAxMHB4O1xcbiAgLyogdG9wOiAxOTBweDsgKi9cXG4gIGJvdHRvbTogMjdweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxuICAvKiB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7ICovXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG59XFxuXFxuI2NyZWF0ZS1idXR0b25zLm1pbmltaXNlZCBidXR0b24uY3JlYXRlLW1haW4tYnRuOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcbiNjcmVhdGUtYnV0dG9ucy5taW5pbWlzZWQgYnV0dG9uLmNyZWF0ZS1tYWluLWJ0bjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG5cXG5idXR0b24uY3JlYXRlLW1haW4tYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmNyZWF0ZS1kaWFsb2cge1xcbiAgZGlzcGxheTogcmVsYXRpdmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgLyogaGVpZ2h0OiAzMHZoOyAqL1xcbiAgd2lkdGg6IDUwdnc7XFxufVxcbi5jcmVhdGUtZGlhbG9nLWZvcm0jY3JlYXRlLXRvZG8tZm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxufVxcblxcbi5jcmVhdGUtZGlhbG9nLWZvcm0jY3JlYXRlLXByb2plY3QtZm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxufVxcblxcbi5jcmVhdGUtZGlhbG9nLWZvcm0jY3JlYXRlLXByb2plY3QtZm9ybSBoMSB7XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbn1cXG5cXG4uY3JlYXRlLWRpYWxvZy1mb3JtI2NyZWF0ZS1wcm9qZWN0LWZvcm0gaW5wdXQge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcXG59XFxuXFxuLmNyZWF0ZS1kaWFsb2ctZm9ybSNjcmVhdGUtcHJvamVjdC1mb3JtIGJ1dHRvbiB7XFxuICBncmlkLXJvdzogMztcXG4gIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAxO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4udW5pdmVyc2FsLWNsb3NlLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk2NDdlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRvcDogMzBweDtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udW5pdmVyc2FsLWNsb3NlLWJ0bjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGNlY2Q7XFxuICBsZWZ0OiAxMHB4O1xcbiAgdG9wOiAyN3B4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4udW5pdmVyc2FsLWNsb3NlLWJ0bjo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkY2VjZDtcXG4gIGxlZnQ6IDEwcHg7XFxuICB0b3A6IDI3cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcbn1cXG4vKiAjY3JlYXRlLXRvZG8tZG9tICNjcmVhdGVUb2RvQ2xvc2VCdG46OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjZWNkO1xcbiAgbGVmdDogMTBweDtcXG4gIHRvcDogMjdweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuI2NyZWF0ZS10b2RvLWRvbSAjY3JlYXRlVG9kb0Nsb3NlQnRuOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjZWNkO1xcbiAgbGVmdDogMTBweDtcXG4gIHRvcDogMjdweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxufSAqL1xcblxcbmgxLmRpYWxvZy1oZWFkZXIge1xcbiAgbWFyZ2luOiBub25lO1xcbn1cXG4vKiAjY3JlYXRlLXRvZG8tZG9tIGgxIHtcXG4gIG1hcmdpbjogbm9uZTtcXG59ICovXFxuXFxuI2NyZWF0ZS10b2RvLWRvbSBkaXYge1xcbiAgLyogZGlzcGxheTogZ3JpZDsgKi9cXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7ICovXFxuICAvKiBhbGlnbi1pdGVtczogZW5kOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2RldGFpbHNfZGl2IHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyICFpbXBvcnRhbnQ7XFxufVxcblxcbiNjcmVhdGUtdG9kby1kb20gLmRpYWxvZy1zdWJtaXQtYnRuIHtcXG4gIHdpZHRoOiAxMzBweDtcXG59XFxuXFxuLmRpYWxvZy1zdWJtaXQtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk2NDdlO1xcbiAgY29sb3I6ICNkZGNlY2Q7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG4gIC8qIGhlaWdodDogMjBweDsgKi9cXG4gIC8qIHdpZHRoOiAxMzBweDsgKi9cXG59XFxuXFxuLmRpYWxvZy1zdWJtaXQtYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmNyZWF0ZS1kaWFsb2ctZm9ybSBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNjcmVhdGUtdG9kby1kb20gdGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5uZXdfZW50cnlfdGl0bGUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG4ubmV3X3RvZG9fZGVzYyB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5uZXdfdG9kb190aXRsZTo6cGxhY2Vob2xkZXIge1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuLm5ld190b2RvX2Rlc2M6OnBsYWNlaG9sZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGRhdGFiYXNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRhYmFzZSA9IFtdO1xuICB9XG5cbiAgYWRkKG9iamVjdCkge1xuICAgIHRoaXMuZGF0YWJhc2UucHVzaChvYmplY3QpO1xuICB9XG5cbiAgZGVsZXRlKG9iamVjdCkge1xuICAgIGNvbnN0IGluZGV4VG9SZW1vdmUgPSB0aGlzLmRhdGFiYXNlLmluZGV4T2Yob2JqZWN0KTtcbiAgICBpZiAoaW5kZXhUb1JlbW92ZSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuZGF0YWJhc2Uuc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xuICAgICAgLy8gY29uc29sZS5sb2coYEl0ZW0gd2l0aCBpZCAke2lkfSByZW1vdmVkIHN1Y2Nlc3NmdWxseS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coYEl0ZW0gd2l0aCBpZCAke2lkfSBub3QgZm91bmQuYCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iamVjdElELCBuZXdPYmplY3QpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0YWJhc2UuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSBvYmplY3RJRCk7XG5cbiAgICAvLyBJZiBpdGVtIHdpdGggZ2l2ZW4gaWQgaXMgZm91bmQsIHVwZGF0ZSBpdFxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuZGF0YWJhc2VbaW5kZXhdID0gbmV3T2JqZWN0O1xuICAgICAgLy8gY29uc29sZS5sb2coYEl0ZW0gd2l0aCBpZCAke29iamVjdElEfSB1cGRhdGVkIHN1Y2Nlc3NmdWxseS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coYEl0ZW0gd2l0aCBpZCAke29iamVjdElEfSBub3QgZm91bmQuYCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhYmFzZTtcbiAgfVxufVxuIiwiY29uc3QgZGVmYXVsdF9kYXRhYmFzZSA9IHtcbiAgdG9kb3M6IFtdLFxuICBwcm9qZWN0czogW10sXG4gIC8vIG5vdGVzOiBbXSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXNlRGF0YWJhc2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb19kYXRhXCIsIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRfZGF0YWJhc2UpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQWxsRGF0YSgpIHtcbiAgY29uc3QgdG9kb0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb19kYXRhXCIpKTtcbiAgcmV0dXJuIHRvZG9EYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hUb2RvRGF0YSgpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvX2RhdGFcIikpLnRvZG9zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQcm9qZWN0RGF0YSgpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvX2RhdGFcIikpLnByb2plY3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaERhdGEodG9kb19kYXRhLCBwcm9qZWN0X2RhdGEpIHtcbiAgY29uc3QgdXBkYXRlZERhdGEgPSB7XG4gICAgdG9kb3M6IHRvZG9fZGF0YSxcbiAgICBwcm9qZWN0czogcHJvamVjdF9kYXRhLFxuICB9O1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9fZGF0YVwiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkRGF0YSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2lwZURhdGEoKSB7XG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICBpbml0aWFsaXNlRGF0YWJhc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9zKCkge1xuICBsZXQgdG9kb19kYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9fZGF0YVwiKSkudG9kb3M7XG4gIHJldHVybiB0b2RvX2RhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgbGV0IHByb2plY3RfZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvX2RhdGFcIikpLnRvZG9zO1xuICByZXR1cm4gcHJvamVjdF9kYXRhO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdERPTSgpIHtcbiAgY29uc3QgZG9tX2RpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIGRvbV9kaWFsb2cuaWQgPSBcImNyZWF0ZS1wcm9qZWN0LWRvbVwiO1xuICBkb21fZGlhbG9nLmNsYXNzTGlzdCA9IFwiY3JlYXRlLWRpYWxvZ1wiO1xuXG4gIGNvbnN0IGNyZWF0ZV9wcm9qZWN0X2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY3JlYXRlX3Byb2plY3RfZm9ybS5pZCA9IFwiY3JlYXRlLXByb2plY3QtZm9ybVwiO1xuICBjcmVhdGVfcHJvamVjdF9mb3JtLmNsYXNzTGlzdCA9IFwiY3JlYXRlLWRpYWxvZy1mb3JtXCI7XG4gIC8vIGNyZWF0ZV9wcm9qZWN0X2Zvcm0ubWV0aG9kID0gXCJkaWFsb2dcIjtcblxuICBjb25zdCBoZWFkZXJfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyX3RleHQuaW5uZXJUZXh0ID0gXCJOZXcgUHJvamVjdFwiO1xuICBoZWFkZXJfdGV4dC5jbGFzc0xpc3QgPSBcImRpYWxvZy1oZWFkZXJcIjtcblxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIC8vIGNsb3NlQnRuLmlubmVyVGV4dCA9IFwiXCI7XG5cbiAgY2xvc2VCdG4uaWQgPSBcImNyZWF0ZVRvZG9DbG9zZUJ0blwiO1xuICBjbG9zZUJ0bi5jbGFzc0xpc3QgPSBcInVuaXZlcnNhbC1jbG9zZS1idG5cIjtcbiAgLy8gY2xvc2VCdG4uZm9ybU1ldGhvZCA9IFwiZGlhbG9nXCI7XG4gIC8vIGNsb3NlQnRuLnZhbHVlID0gXCJjYW5jZWxcIjtcblxuICBjbG9zZUJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9tX2RpYWxvZy5jbG9zZSgpO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHByb2plY3RfdGl0bGUucGxhY2Vob2xkZXIgPSBcIk5ldyBQcm9qZWN0IE5hbWVcIjtcbiAgcHJvamVjdF90aXRsZS5yZXF1aXJlZCA9IHRydWU7XG4gIHByb2plY3RfdGl0bGUuY2xhc3NMaXN0LmFkZChcIm5ld19lbnRyeV90aXRsZVwiKTtcbiAgcHJvamVjdF90aXRsZS5uYW1lID0gXCJwcm9qZWN0X3RpdGxlXCI7XG5cbiAgLy8gY29uc3QgcHJvamVjdF90aXRsZV9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgLy8gcHJvamVjdF90aXRsZV9sYWJlbC5pbm5lclRleHQgPSBcIlByb2plY3QgTmFtZVwiO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSBcIkNyZWF0ZVwiO1xuICBzdWJtaXRCdG4uaWQgPSBcImNyZWF0ZS1wcm9qZWN0LXN1Ym1pdC1idG5cIjtcbiAgc3VibWl0QnRuLmNsYXNzTGlzdCA9IFwiZGlhbG9nLXN1Ym1pdC1idG5cIjtcbiAgLy8gY29uc29sZS5sb2coc3VibWl0QnRuKTtcbiAgLy8gc3VibWl0QnRuLnZhbHVlID0gXCJkZWZhdWx0XCI7XG5cbiAgY3JlYXRlX3Byb2plY3RfZm9ybS5hcHBlbmRDaGlsZChoZWFkZXJfdGV4dCk7XG4gIGNyZWF0ZV9wcm9qZWN0X2Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdF90aXRsZSk7XG4gIC8vIGNyZWF0ZV9wcm9qZWN0X2Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdF90aXRsZV9sYWJlbCk7XG4gIGNyZWF0ZV9wcm9qZWN0X2Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgY3JlYXRlX3Byb2plY3RfZm9ybS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gIGRvbV9kaWFsb2cuYXBwZW5kQ2hpbGQoY3JlYXRlX3Byb2plY3RfZm9ybSk7XG5cbiAgc3VibWl0QnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoY3JlYXRlX3Byb2plY3RfZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIGxldCBmb3JtRGF0YSA9IHtcbiAgICAgICAgcHJvamVjdElEOiBwcm9qZWN0X3RpdGxlLnZhbHVlLFxuICAgICAgfTtcblxuICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xuICAgICAgY29uc3QgY3JlYXRlX3Byb2plY3RfZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJjcmVhdGVOZXdQcm9qZWN0RXZlbnRcIiwge1xuICAgICAgICBkZXRhaWw6IGZvcm1EYXRhLFxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZV9wcm9qZWN0X2V2ZW50KTtcbiAgICAgIGNyZWF0ZV9wcm9qZWN0X2Zvcm0ucmVzZXQoKTtcbiAgICAgIGRvbV9kaWFsb2cuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlX3Byb2plY3RfZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gZG9tX2RpYWxvZztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlQ3JlYXRlVG9kb0RPTShwcm9qZWN0X2RhdGEpIHtcbiAgY29uc3QgZG9tX2RpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIGRvbV9kaWFsb2cuaWQgPSBcImNyZWF0ZS10b2RvLWRvbVwiO1xuICBkb21fZGlhbG9nLmNsYXNzTGlzdCA9IFwiY3JlYXRlLWRpYWxvZ1wiO1xuXG4gIGNvbnN0IGNyZWF0ZV90b2RvX2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjcmVhdGVfdG9kb19mb3JtLmlkID0gXCJjcmVhdGUtdG9kby1mb3JtXCI7XG4gIGNyZWF0ZV90b2RvX2Zvcm0uY2xhc3NMaXN0ID0gXCJjcmVhdGUtZGlhbG9nLWZvcm1cIjtcbiAgLy8gY3JlYXRlX3RvZG9fZm9ybS5tZXRob2QgPSBcImRpYWxvZ1wiO1xuXG4gIGNvbnN0IGhlYWRlcl90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXJfdGV4dC5pbm5lclRleHQgPSBcIk5ldyBUb2RvXCI7XG4gIGhlYWRlcl90ZXh0LmNsYXNzTGlzdCA9IFwiZGlhbG9nLWhlYWRlclwiO1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2xvc2VCdG4uaWQgPSBcImNyZWF0ZVRvZG9DbG9zZUJ0blwiO1xuICBjbG9zZUJ0bi5jbGFzc0xpc3QgPSBcInVuaXZlcnNhbC1jbG9zZS1idG5cIjtcbiAgY2xvc2VCdG4uZm9ybU1ldGhvZCA9IFwiZGlhbG9nXCI7XG4gIGNsb3NlQnRuLnZhbHVlID0gXCJjYW5jZWxcIjtcbiAgY2xvc2VCdG4ub25jbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvbV9kaWFsb2cuY2xvc2UoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkNsb3NpbmcgbW9kYWxcIik7XG4gIH07XG5cbiAgY29uc3QgaW5wdXRfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0X3RpdGxlLnBsYWNlaG9sZGVyID0gXCJUaXRsZTogbmV3IHRvZG9cIjtcbiAgaW5wdXRfdGl0bGUuY2xhc3NMaXN0LmFkZChcIm5ld19lbnRyeV90aXRsZVwiKTtcbiAgaW5wdXRfdGl0bGUuaWQgPSBcIm5ld190b2RvX3RpdGxlXCI7XG4gIGlucHV0X3RpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgaW5wdXRfdGl0bGUubmFtZSA9IFwiaW5wdXRfdGl0bGVcIjtcblxuICBjb25zdCBpbnB1dF9kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBpbnB1dF9kZXNjLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xuICBpbnB1dF9kZXNjLmNsYXNzTGlzdC5hZGQoXCJuZXdfdG9kb19kZXNjXCIpO1xuXG4gIGNvbnN0IGRhdGVfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5wdXRfZHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRfZHVlZGF0ZS5jbGFzc0xpc3QgPSBcIm5ld190b2RvX2R1ZWRhdGVcIjtcbiAgaW5wdXRfZHVlZGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gIGNvbnN0IGlucHV0X2R1ZWRhdGVfbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGlucHV0X2R1ZWRhdGVfbGFiZWwuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTpcIjtcbiAgZGF0ZV9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfZHVlZGF0ZV9sYWJlbCk7XG4gIGRhdGVfZGl2LmFwcGVuZENoaWxkKGlucHV0X2R1ZWRhdGUpO1xuXG4gIGNvbnN0IHByaW9yaXR5X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGlucHV0X3ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgcHJpb3JpdHlfaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IHByaW9yaXR5X21lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IHByaW9yaXR5X2xvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgcHJpb3JpdHlfaGlnaC52YWx1ZSA9IFwiaGlnaC1wcmlvcml0eVwiO1xuICBwcmlvcml0eV9oaWdoLmlubmVyVGV4dCA9IFwiSGlnaFwiO1xuICBwcmlvcml0eV9tZWQudmFsdWUgPSBcIm1lZC1wcmlvcml0eVwiO1xuICBwcmlvcml0eV9tZWQuaW5uZXJUZXh0ID0gXCJNZWRcIjtcbiAgcHJpb3JpdHlfbG93LnZhbHVlID0gXCJsb3ctcHJpb3JpdHlcIjtcbiAgcHJpb3JpdHlfbG93LmlubmVyVGV4dCA9IFwiTG93XCI7XG5cbiAgaW5wdXRfcHJpb3JpdHkuY2xhc3NMaXN0ID0gXCJuZXdfdG9kb19wcmlvcml0eVwiO1xuXG4gIGlucHV0X3ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5X2hpZ2gpO1xuICBpbnB1dF9wcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eV9tZWQpO1xuICBpbnB1dF9wcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eV9sb3cpO1xuICBpbnB1dF9wcmlvcml0eS5vcHRpb25zWzFdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgY29uc3QgaW5wdXRfcHJpb3JpdHlfbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGlucHV0X3ByaW9yaXR5X2xhYmVsLmlubmVyVGV4dCA9IFwiUHJpb3JpdHk6IFwiO1xuICBwcmlvcml0eV9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfcHJpb3JpdHlfbGFiZWwpO1xuICBwcmlvcml0eV9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfcHJpb3JpdHkpO1xuXG4gIGNvbnN0IHByb2plY3RfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdF9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJvamVjdF9sYWJlbC5pbm5lclRleHQgPSBcIlByb2plY3Q6IFwiO1xuICBwcm9qZWN0X2Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0X2xhYmVsKTtcbiAgY29uc3QgaW5wdXRfcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbnN0IHByb2plY3Rfb3B0aW9uX2RlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBwcm9qZWN0X29wdGlvbl9kZWZhdWx0LnZhbHVlID0gbnVsbDtcbiAgcHJvamVjdF9vcHRpb25fZGVmYXVsdC5pbm5lclRleHQgPSBcIm5vbmVcIjtcbiAgaW5wdXRfcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0X29wdGlvbl9kZWZhdWx0KTtcbiAgLy8gY29uc29sZS5sb2cocHJvamVjdF9kYXRhKTtcbiAgaWYgKChwcm9qZWN0X2RhdGEgIT09IG51bGwpICYgKHByb2plY3RfZGF0YS5nZXREYXRhKCkgIT09IG51bGwpKSB7XG4gICAgcHJvamVjdF9kYXRhLmdldERhdGEoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgIGxldCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBwcm9qZWN0Ll90aXRsZTtcbiAgICAgIHByb2plY3RPcHRpb24uaW5uZXJUZXh0ID0gcHJvamVjdC5fdGl0bGU7XG4gICAgICBpbnB1dF9wcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgIH0pO1xuICB9XG4gIHByb2plY3RfZGl2LmFwcGVuZENoaWxkKGlucHV0X3Byb2plY3QpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSBcIkNyZWF0ZVwiO1xuICBzdWJtaXRCdG4uY2xhc3NMaXN0ID0gXCJkaWFsb2ctc3VibWl0LWJ0blwiO1xuICBzdWJtaXRCdG4uaWQgPSBcImNyZWF0ZS10b2RvLXN1Ym1pdC1idG5cIjtcbiAgc3VibWl0QnRuLnZhbHVlID0gXCJkZWZhdWx0XCI7XG5cbiAgY29uc3QgZGV0YWlsc19kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWxzX2Rpdi5pZCA9IFwiZGV0YWlsc19kaXZcIjtcbiAgZGV0YWlsc19kaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlfZGl2KTtcbiAgZGV0YWlsc19kaXYuYXBwZW5kQ2hpbGQoZGF0ZV9kaXYpO1xuICBkZXRhaWxzX2Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0X2Rpdik7XG4gIGRldGFpbHNfZGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgY3JlYXRlX3RvZG9fZm9ybS5hcHBlbmRDaGlsZChoZWFkZXJfdGV4dCk7XG4gIGNyZWF0ZV90b2RvX2Zvcm0uYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuICBjcmVhdGVfdG9kb19mb3JtLmFwcGVuZENoaWxkKGlucHV0X3RpdGxlKTtcbiAgY3JlYXRlX3RvZG9fZm9ybS5hcHBlbmRDaGlsZChpbnB1dF9kZXNjKTtcbiAgY3JlYXRlX3RvZG9fZm9ybS5hcHBlbmRDaGlsZChkZXRhaWxzX2Rpdik7XG5cbiAgZG9tX2RpYWxvZy5hcHBlbmRDaGlsZChjcmVhdGVfdG9kb19mb3JtKTtcblxuICAvLyBpZiAodG9kb09iamVjdCA9PSBudWxsKSB7XG4gIC8vICAgY29uc29sZS5sb2coXCJUb2RvIGlzIG51bGwhXCIpO1xuICAvLyB9IGVsc2Uge1xuICAvLyAgIGlucHV0X3RpdGxlLnZhbHVlID0gdG9kb09iamVjdC5fdGl0bGU7XG4gIC8vICAgaW5wdXRfZGVzYy52YWx1ZSA9IHRvZG9PYmplY3QuX2Rlc2NyaXB0aW9uO1xuICAvLyAgIGlucHV0X2R1ZWRhdGUudmFsdWUgPSB0b2RvT2JqZWN0Ll9kdWVEYXRlO1xuICAvLyAgIGlucHV0X3ByaW9yaXR5LnZhbHVlID0gdG9kb09iamVjdC5pbnB1dF9wcmlvcml0eTtcbiAgLy8gICBpbnB1dF9wcm9qZWN0LnZhbHVlID0gdG9kb09iamVjdC5fcHJvamVjdDtcbiAgLy8gfVxuXG4gIC8vVGhpcyBhZGRzIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgc3VibWl0IGJ1dHRvbiB0byBjaGVjayBmb3JtIHZhbGlkIHRoZW4gc3VibWl0IGFzIGEgY3VzdG9tIGV2ZW50XG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc29sZS5sb2coY3JlYXRlX3RvZG9fZm9ybS5jaGVja1ZhbGlkaXR5KCkpO1xuICAgIC8vIGNvbnNvbGUubG9nKGlucHV0X2R1ZWRhdGUudmFsdWUpO1xuICAgIGxldCBkdWVEYXRlT2JqO1xuICAgIC8vIGNvbnNvbGUubG9nKGR1ZURhdGVPYmopO1xuICAgIGxldCB2YWxpZEZvcm0gPSBjcmVhdGVfdG9kb19mb3JtLmNoZWNrVmFsaWRpdHkoKTtcbiAgICBpZiAodmFsaWRGb3JtKSB7XG4gICAgICBpZiAoaW5wdXRfZHVlZGF0ZS52YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGR1ZURhdGVPYmogPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHVlRGF0ZU9iaiA9IG5ldyBEYXRlKGlucHV0X2R1ZWRhdGUudmFsdWUpO1xuICAgICAgfVxuICAgICAgbGV0IGZvcm1EYXRhID0ge1xuICAgICAgICAvLyBFeHRyYWN0IGZvcm0gZGF0YSBoZXJlLCBlLmcuLCB1c2luZyBmb3JtIGVsZW1lbnRzIG9yIG90aGVyIG1ldGhvZHNcbiAgICAgICAgdGl0bGU6IGlucHV0X3RpdGxlLnZhbHVlLFxuICAgICAgICBkZXNjOiBpbnB1dF9kZXNjLnZhbHVlLFxuICAgICAgICBkdWVkYXRlOiBkdWVEYXRlT2JqLFxuICAgICAgICBwcmlvcml0eTogaW5wdXRfcHJpb3JpdHkudmFsdWUsXG4gICAgICAgIHByb2plY3Q6IGlucHV0X3Byb2plY3QudmFsdWUsXG4gICAgICAgIC8vIEFkZCBtb3JlIHByb3BlcnRpZXMgYXMgbmVlZGVkXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjdXN0b21FdmVudCA9IG5ldyBDdXN0b21FdmVudChcImNyZWF0ZU5ld1RvZG9FdmVudFwiLCB7XG4gICAgICAgIGRldGFpbDogZm9ybURhdGEsXG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xuICAgICAgY29uc29sZS5sb2coXCJDcmVhdGUgdG9kbyBldmVudCBmaXJlZCFcIik7XG4gICAgICBjcmVhdGVfdG9kb19mb3JtLnJlc2V0KCk7XG4gICAgICBkb21fZGlhbG9nLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZV90b2RvX2Zvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vVE9ETzogQWRkIGEgbmV3IGZpZWxkIHRoYXQgaG9sZHMgdGhlIHByb2plY3RcbiAgcmV0dXJuIGRvbV9kaWFsb2c7XG59XG4iLCJpbXBvcnQgZWRpdFNWRyBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCI7XG5pbXBvcnQgZGVsZXRlU1ZHIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVRvZG9DYXJkRE9NKHRvZG8pIHtcbiAgLy8gY29uc3QgZWRpdEJ1dHRvblNWRyA9IFwic3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiO1xuICAvLyBjb25zdCBkZWxldGVCdXR0b25TVkcgPSBcInNyYy9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Z1wiO1xuICAvLyBjb25zb2xlLmxvZyh0b2RvKTtcbiAgLy8gY29uc29sZS5sb2codG9kby5kdWVkYXRlKTtcbiAgLy8gY29uc29sZS5sb2codG9kby5fZHVlZGF0ZSk7XG4gIC8vIGNvbnNvbGUubG9nKHRvZG8uZ2V0RHVlRGF0ZSk7XG4gIC8vIGNvbnNvbGUubG9nKHRvZG8ucHJvamVjdCk7XG4gIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNhcmREaXYuY2xhc3NMaXN0ID0gXCJ0b2RvLWNhcmQgaGlkZGVuXCI7XG5cbiAgbGV0IHRvZG9Db21wbGV0ZWQgPSB0b2RvLl9jb21wbGV0ZWQ7XG4gIGlmICh0b2RvQ29tcGxldGVkKSB7XG4gICAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICB9IGVsc2Uge1xuICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZChcInVuY29tcGxldGVkXCIpO1xuICB9XG5cbiAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKHRvZG8uX3ByaW9yaXR5KTtcblxuICBjb25zdCB0b2RvSUQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9kb0lELmlubmVySFRNTCA9IHRvZG8uX2lkO1xuICB0b2RvSUQuY2xhc3NMaXN0ID0gXCJ0b2RvLWlkXCI7XG4gIHRvZG9JRC5zdHlsZSA9IFwiZGlzcGxheTogbm9uZVwiO1xuXG4gIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdG9kb1RpdGxlLmlubmVySFRNTCA9IHRvZG8uX3RpdGxlO1xuICB0b2RvVGl0bGUuY2xhc3NMaXN0ID0gXCJ0b2RvLXRpdGxlXCI7XG5cbiAgY29uc3QgdG9kb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvRGV0YWlscy5jbGFzc0xpc3QgPSBcInRvZG8tZGV0YWlsc1wiO1xuXG4gIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRvZG9EZXNjLmlubmVySFRNTCA9IHRvZG8uX2Rlc2NyaXB0aW9uO1xuICB0b2RvRGVzYy5jbGFzc0xpc3QgPSBcInRvZG8tZGVzY1wiO1xuXG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRvZG9EdWVEYXRlLmlubmVySFRNTCA9IHRvZG8uZHVlRGF0ZTtcbiAgLy8gY29uc29sZS5sb2codG9kby5kdWVEYXRlKTtcbiAgdG9kb0R1ZURhdGUuY2xhc3NMaXN0ID0gXCJ0b2RvLWR1ZWRhdGVcIjtcblxuICBjb25zdCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbXBsZXRlQnV0dG9uLmlubmVySFRNTCA9IFwiRG9uZVwiO1xuICBjb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QgPSBcInRvZG8tY29tcGxldGUtYnRuXCI7XG5cbiAgY29uc3QgZWRpdERlbGV0ZUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlZGl0RGVsZXRlQnRucy5jbGFzc0xpc3QgPSBcImVkaXQtZGVsZXRlLWJ0bnNcIjtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgZGVsZXRlQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGRlbGV0ZUJ0bkljb24uc3JjID0gZGVsZXRlU1ZHO1xuICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuSWNvbik7XG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBlZGl0QnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGVkaXRCdG5JY29uLnNyYyA9IGVkaXRTVkc7XG4gIGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEJ0bkljb24pO1xuICBlZGl0RGVsZXRlQnRucy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgZWRpdERlbGV0ZUJ0bnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICBjb25zdCB0b2RvRGV0YWlsc0JvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9EZXRhaWxzQm90dG9tLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRldGFpbHMtYm90dG9tXCIpO1xuICAvLyBjb25zb2xlLmxvZyh0b2RvKTtcbiAgaWYgKHRvZG8ucHJvamVjdCAhPSBcIm51bGxcIikge1xuICAgIGNvbnN0IHRvZG9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9kb1Byb2plY3QuaW5uZXJIVE1MID0gdG9kby5wcm9qZWN0O1xuICAgIHRvZG9Qcm9qZWN0LmNsYXNzTGlzdCA9IFwidG9kby1wcm9qZWN0XCI7XG4gICAgdG9kb0RldGFpbHNCb3R0b20uYXBwZW5kQ2hpbGQodG9kb1Byb2plY3QpO1xuICB9XG5cbiAgdG9kb0RldGFpbHNCb3R0b20uYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xuICB0b2RvRGV0YWlsc0JvdHRvbS5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG5cbiAgdG9kb0RldGFpbHMuYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xuICB0b2RvRGV0YWlscy5hcHBlbmRDaGlsZCh0b2RvRGV0YWlsc0JvdHRvbSk7XG5cbiAgY2FyZERpdi5hcHBlbmRDaGlsZCh0b2RvSUQpO1xuICBjYXJkRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gIGNhcmREaXYuYXBwZW5kQ2hpbGQodG9kb0RldGFpbHMpO1xuICBjYXJkRGl2LmFwcGVuZENoaWxkKGVkaXREZWxldGVCdG5zKTtcblxuICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICBjb25zdCB0b2dnbGVDb21wbGV0ZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwidG9nZ2xlVG9kb0NvbXBsZXRlXCIsIHtcbiAgICAgIGRldGFpbDogdG9kby5faWQsXG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCh0b2dnbGVDb21wbGV0ZUV2ZW50KTtcbiAgfSk7XG5cbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlIHRvZG8gZXZlbnQgZmlyZWRcIik7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBkZWxldGVUb2RvRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJkZWxldGVUb2RvXCIsIHtcbiAgICAgIGRldGFpbDogdG9kby5faWQsXG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChkZWxldGVUb2RvRXZlbnQpO1xuICB9KTtcblxuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJFRElUXCIpO1xuXG4gICAgY29uc3QgZWRpdFRvZG9FdmVudCA9IG5ldyBDdXN0b21FdmVudChcIm9wZW5FZGl0VG9kb0RpYWxvZ1wiLCB7XG4gICAgICBkZXRhaWw6IHRvZG8uX2lkLFxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChlZGl0VG9kb0V2ZW50KTtcbiAgfSk7XG5cbiAgY2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0Lm5vZGVOYW1lKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID09PSBcIkJVVFRPTlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYXJkRGl2LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgICAgY2FyZERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2FyZERpdjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVG9kb0J0bigpIHtcbiAgY29uc3QgY3JlYXRlX2J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjcmVhdGVfYnV0dG9ucy5pZCA9IFwiY3JlYXRlLWJ1dHRvbnNcIjtcbiAgY3JlYXRlX2J1dHRvbnMuY2xhc3NOYW1lID0gXCJtaW5pbWlzZWRcIjtcblxuICBjb25zdCBidXR0b25fbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbl9tYWluLmlkID0gXCJtYWluLWJ1dHRvblwiO1xuICBidXR0b25fbWFpbi5jbGFzc0xpc3QgPSBcImNyZWF0ZS1tYWluLWJ0biBhbmltYXRlZC1idXR0b25cIjtcblxuICAvL0RpdiB0byBob3VzZSB0aGUgbWluaW1pc2VkIGJ1dHRvbnNcbiAgY29uc3QgbWluaW1pc2VkX2J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtaW5pbWlzZWRfYnV0dG9ucy5pZCA9IFwibWluaW1pc2VkLWJ1dHRvbnNcIjtcbiAgLy8gbWluaW1pc2VkX2J1dHRvbnMuY2xhc3NMaXN0LmFkZChcIm1pbmltaXNlZFwiKTtcblxuICAvL0NyZWF0ZSB0b2RvIGJ1dHRvblxuICBjb25zdCBjcmVhdGVfdG9kb19idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjcmVhdGVfdG9kb19idG4uaWQgPSBcImNyZWF0ZS10b2RvLWJ0blwiO1xuICBjcmVhdGVfdG9kb19idG4uaW5uZXJUZXh0ID0gXCJDcmVhdGUgVG9kb1wiO1xuICBjcmVhdGVfdG9kb19idG4uY2xhc3NMaXN0ID0gXCJhbmltYXRlZC1idXR0b25cIjtcblxuICAvL0NyZWF0ZSBwcm9qZWN0IGJ1dHRvblxuICBjb25zdCBjcmVhdGVfcHJvamVjdF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjcmVhdGVfcHJvamVjdF9idG4uaWQgPSBcImNyZWF0ZS1wcm9qZWN0LWJ0blwiO1xuICBjcmVhdGVfcHJvamVjdF9idG4uaW5uZXJUZXh0ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xuICBjcmVhdGVfcHJvamVjdF9idG4uY2xhc3NMaXN0ID0gXCJhbmltYXRlZC1idXR0b25cIjtcblxuICAvL0NyZWF0ZSBub3RlIGJ1dHRvblxuICBjb25zdCBjcmVhdGVfbm90ZV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjcmVhdGVfbm90ZV9idG4uaWQgPSBcImNyZWF0ZS1ub3RlLWJ0blwiO1xuICBjcmVhdGVfbm90ZV9idG4uaW5uZXJUZXh0ID0gXCJDcmVhdGUgTm90ZVwiO1xuICBjcmVhdGVfbm90ZV9idG4uY2xhc3NMaXN0ID0gXCJhbmltYXRlZC1idXR0b25cIjtcblxuICBtaW5pbWlzZWRfYnV0dG9ucy5hcHBlbmRDaGlsZChjcmVhdGVfdG9kb19idG4pO1xuICBtaW5pbWlzZWRfYnV0dG9ucy5hcHBlbmRDaGlsZChjcmVhdGVfcHJvamVjdF9idG4pO1xuICBtaW5pbWlzZWRfYnV0dG9ucy5hcHBlbmRDaGlsZChjcmVhdGVfbm90ZV9idG4pO1xuXG4gIGNyZWF0ZV9idXR0b25zLmFwcGVuZENoaWxkKG1pbmltaXNlZF9idXR0b25zKTtcbiAgY3JlYXRlX2J1dHRvbnMuYXBwZW5kQ2hpbGQoYnV0dG9uX21haW4pO1xuXG4gIC8vQWRkaW5nIHRoZSBldmVudCBsaXN0ZW5lcnNcbiAgYnV0dG9uX21haW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNyZWF0ZV9idXR0b25zLmNsYXNzTGlzdC50b2dnbGUoXCJtaW5pbWlzZWRcIik7XG4gICAgLy8gY29uc29sZS5sb2coY3JlYXRlX2J1dHRvbnMuY2xhc3NMaXN0KTtcbiAgfSk7XG4gIGNyZWF0ZV90b2RvX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNyZWF0aW5nIG5ldyBUb2RvXCIpO1xuICAgIGNvbnN0IGNyZWF0ZV90b2RvX2V2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwib3BlbkNyZWF0ZVRvZG9EaWFsb2dFdmVudFwiKTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZV90b2RvX2V2ZW50KTtcbiAgfSk7XG4gIGNyZWF0ZV9wcm9qZWN0X2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNyZWF0aW5nIG5ldyBwcm9qZWN0XCIpO1xuICAgIGNvbnN0IGNyZWF0ZV9wcm9qZWN0X2V2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFxuICAgICAgXCJvcGVuQ3JlYXRlUHJvamVjdERpYWxvZ0V2ZW50XCJcbiAgICApO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlX3Byb2plY3RfZXZlbnQpO1xuICB9KTtcbiAgY3JlYXRlX25vdGVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgbmV3IG5vdGVcIik7XG4gICAgY29uc3QgY3JlYXRlX25vdGVfZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJvcGVuQ3JlYXRlTm90ZURpYWxvZ0V2ZW50XCIpO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlX25vdGVfZXZlbnQpO1xuICB9KTtcblxuICAvLyBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAvLyBidXR0b24uaW5uZXJIVE1MID0gXCJORVcgVE9ET1wiO1xuICAvLyBidXR0b24uY2xhc3NMaXN0LmFkZChcIm5ldy10b2RvLWJ0blwiKTtcblxuICByZXR1cm4gY3JlYXRlX2J1dHRvbnM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUVkaXRUb2RvRE9NKHByb2plY3RfZGF0YSwgdG9kb09iamVjdCkge1xuICBjb25zdCBkb21fZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgZG9tX2RpYWxvZy5pZCA9IFwiY3JlYXRlLXRvZG8tZG9tXCI7XG4gIGRvbV9kaWFsb2cuY2xhc3NMaXN0ID0gXCJjcmVhdGUtZGlhbG9nXCI7XG5cbiAgY29uc3QgY3JlYXRlX3RvZG9fZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAvLyBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNyZWF0ZV90b2RvX2Zvcm0uaWQgPSBcImNyZWF0ZS10b2RvLWZvcm1cIjtcbiAgY3JlYXRlX3RvZG9fZm9ybS5jbGFzc0xpc3QgPSBcImNyZWF0ZS1kaWFsb2ctZm9ybVwiO1xuICAvLyBjcmVhdGVfdG9kb19mb3JtLm1ldGhvZCA9IFwiZGlhbG9nXCI7XG5cbiAgY29uc3QgaGVhZGVyX3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlcl90ZXh0LmlubmVyVGV4dCA9IFwiRWRpdCBUb2RvXCI7XG4gIGhlYWRlcl90ZXh0LmNsYXNzTGlzdCA9IFwiZGlhbG9nLWhlYWRlclwiO1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2xvc2VCdG4uaWQgPSBcImNyZWF0ZVRvZG9DbG9zZUJ0blwiO1xuICBjbG9zZUJ0bi5jbGFzc0xpc3QgPSBcInVuaXZlcnNhbC1jbG9zZS1idG5cIjtcbiAgY2xvc2VCdG4uZm9ybU1ldGhvZCA9IFwiZGlhbG9nXCI7XG4gIGNsb3NlQnRuLnZhbHVlID0gXCJjYW5jZWxcIjtcbiAgY2xvc2VCdG4ub25jbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvbV9kaWFsb2cuY2xvc2UoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkNsb3NpbmcgbW9kYWxcIik7XG4gIH07XG5cbiAgY29uc3QgaW5wdXRfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0X3RpdGxlLnBsYWNlaG9sZGVyID0gXCJUaXRsZTogbmV3IHRvZG9cIjtcbiAgaW5wdXRfdGl0bGUuY2xhc3NMaXN0LmFkZChcIm5ld19lbnRyeV90aXRsZVwiKTtcbiAgaW5wdXRfdGl0bGUuaWQgPSBcIm5ld190b2RvX3RpdGxlXCI7XG4gIGlucHV0X3RpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgaW5wdXRfdGl0bGUubmFtZSA9IFwiaW5wdXRfdGl0bGVcIjtcblxuICBjb25zdCBpbnB1dF9kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBpbnB1dF9kZXNjLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xuICBpbnB1dF9kZXNjLmNsYXNzTGlzdC5hZGQoXCJuZXdfdG9kb19kZXNjXCIpO1xuXG4gIGNvbnN0IGRhdGVfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5wdXRfZHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRfZHVlZGF0ZS5jbGFzc0xpc3QgPSBcIm5ld190b2RvX2R1ZWRhdGVcIjtcbiAgaW5wdXRfZHVlZGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gIGNvbnN0IGlucHV0X2R1ZWRhdGVfbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGlucHV0X2R1ZWRhdGVfbGFiZWwuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTpcIjtcbiAgZGF0ZV9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfZHVlZGF0ZV9sYWJlbCk7XG4gIGRhdGVfZGl2LmFwcGVuZENoaWxkKGlucHV0X2R1ZWRhdGUpO1xuXG4gIGNvbnN0IHByaW9yaXR5X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGlucHV0X3ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgcHJpb3JpdHlfaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IHByaW9yaXR5X21lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IHByaW9yaXR5X2xvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgcHJpb3JpdHlfaGlnaC52YWx1ZSA9IFwiaGlnaC1wcmlvcml0eVwiO1xuICBwcmlvcml0eV9oaWdoLmlubmVyVGV4dCA9IFwiSGlnaFwiO1xuICBwcmlvcml0eV9tZWQudmFsdWUgPSBcIm1lZC1wcmlvcml0eVwiO1xuICBwcmlvcml0eV9tZWQuaW5uZXJUZXh0ID0gXCJNZWRcIjtcbiAgcHJpb3JpdHlfbG93LnZhbHVlID0gXCJsb3ctcHJpb3JpdHlcIjtcbiAgcHJpb3JpdHlfbG93LmlubmVyVGV4dCA9IFwiTG93XCI7XG5cbiAgaW5wdXRfcHJpb3JpdHkuY2xhc3NMaXN0ID0gXCJuZXdfdG9kb19wcmlvcml0eVwiO1xuXG4gIGlucHV0X3ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5X2hpZ2gpO1xuICBpbnB1dF9wcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eV9tZWQpO1xuICBpbnB1dF9wcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eV9sb3cpO1xuICBpbnB1dF9wcmlvcml0eS5vcHRpb25zWzFdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgY29uc3QgaW5wdXRfcHJpb3JpdHlfbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGlucHV0X3ByaW9yaXR5X2xhYmVsLmlubmVyVGV4dCA9IFwiUHJpb3JpdHk6IFwiO1xuICBwcmlvcml0eV9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfcHJpb3JpdHlfbGFiZWwpO1xuICBwcmlvcml0eV9kaXYuYXBwZW5kQ2hpbGQoaW5wdXRfcHJpb3JpdHkpO1xuXG4gIGNvbnN0IHByb2plY3RfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdF9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJvamVjdF9sYWJlbC5pbm5lclRleHQgPSBcIlByb2plY3Q6IFwiO1xuICBwcm9qZWN0X2Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0X2xhYmVsKTtcbiAgY29uc3QgaW5wdXRfcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbnN0IHByb2plY3Rfb3B0aW9uX2RlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBwcm9qZWN0X29wdGlvbl9kZWZhdWx0LnZhbHVlID0gbnVsbDtcbiAgcHJvamVjdF9vcHRpb25fZGVmYXVsdC5pbm5lclRleHQgPSBcIm5vbmVcIjtcbiAgaW5wdXRfcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0X29wdGlvbl9kZWZhdWx0KTtcbiAgLy8gY29uc29sZS5sb2cocHJvamVjdF9kYXRhKTtcbiAgaWYgKChwcm9qZWN0X2RhdGEgIT09IG51bGwpICYgKHByb2plY3RfZGF0YS5nZXREYXRhKCkgIT09IG51bGwpKSB7XG4gICAgcHJvamVjdF9kYXRhLmdldERhdGEoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgIGxldCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBwcm9qZWN0Ll90aXRsZTtcbiAgICAgIHByb2plY3RPcHRpb24uaW5uZXJUZXh0ID0gcHJvamVjdC5fdGl0bGU7XG4gICAgICBpbnB1dF9wcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgIH0pO1xuICB9XG4gIHByb2plY3RfZGl2LmFwcGVuZENoaWxkKGlucHV0X3Byb2plY3QpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSBcIkVkaXRcIjtcbiAgc3VibWl0QnRuLmNsYXNzTGlzdCA9IFwiZGlhbG9nLXN1Ym1pdC1idG5cIjtcbiAgc3VibWl0QnRuLmlkID0gXCJjcmVhdGUtdG9kby1zdWJtaXQtYnRuXCI7XG4gIHN1Ym1pdEJ0bi52YWx1ZSA9IFwiZGVmYXVsdFwiO1xuXG4gIGNvbnN0IGRldGFpbHNfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGV0YWlsc19kaXYuaWQgPSBcImRldGFpbHNfZGl2XCI7XG4gIGRldGFpbHNfZGl2LmFwcGVuZENoaWxkKHByaW9yaXR5X2Rpdik7XG4gIGRldGFpbHNfZGl2LmFwcGVuZENoaWxkKGRhdGVfZGl2KTtcbiAgZGV0YWlsc19kaXYuYXBwZW5kQ2hpbGQocHJvamVjdF9kaXYpO1xuICBkZXRhaWxzX2Rpdi5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIGNyZWF0ZV90b2RvX2Zvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyX3RleHQpO1xuICBjcmVhdGVfdG9kb19mb3JtLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgY3JlYXRlX3RvZG9fZm9ybS5hcHBlbmRDaGlsZChpbnB1dF90aXRsZSk7XG4gIGNyZWF0ZV90b2RvX2Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfZGVzYyk7XG4gIGNyZWF0ZV90b2RvX2Zvcm0uYXBwZW5kQ2hpbGQoZGV0YWlsc19kaXYpO1xuXG4gIGRvbV9kaWFsb2cuYXBwZW5kQ2hpbGQoY3JlYXRlX3RvZG9fZm9ybSk7XG5cbiAgaWYgKHRvZG9PYmplY3QgPT0gbnVsbCkge1xuICAgIGNvbnNvbGUubG9nKFwiVG9kbyBpcyBudWxsIVwiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyh0b2RvT2JqZWN0KTtcbiAgICBpbnB1dF90aXRsZS52YWx1ZSA9IHRvZG9PYmplY3QuX3RpdGxlO1xuICAgIGlucHV0X2Rlc2MudmFsdWUgPSB0b2RvT2JqZWN0Ll9kZXNjcmlwdGlvbjtcbiAgICBpZiAodG9kb09iamVjdC5fZHVlRGF0ZSAhPSBudWxsKSB7XG4gICAgICBpbnB1dF9kdWVkYXRlLnZhbHVlID0gdG9kb09iamVjdC5fZHVlRGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcbiAgICB9XG4gICAgaW5wdXRfcHJpb3JpdHkudmFsdWUgPSB0b2RvT2JqZWN0Ll9wcmlvcml0eTtcbiAgICBpbnB1dF9wcm9qZWN0LnZhbHVlID0gdG9kb09iamVjdC5fcHJvamVjdDtcbiAgfVxuXG4gIC8vVGhpcyBhZGRzIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgc3VibWl0IGJ1dHRvbiB0byBjaGVjayBmb3JtIHZhbGlkIHRoZW4gc3VibWl0IGFzIGEgY3VzdG9tIGV2ZW50XG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coY3JlYXRlX3RvZG9fZm9ybS5jaGVja1ZhbGlkaXR5KCkpO1xuICAgIGNvbnNvbGUubG9nKGlucHV0X2R1ZWRhdGUudmFsdWUpO1xuICAgIGxldCBkdWVEYXRlT2JqO1xuICAgIGNvbnNvbGUubG9nKGR1ZURhdGVPYmopO1xuICAgIGxldCB2YWxpZEZvcm0gPSBjcmVhdGVfdG9kb19mb3JtLmNoZWNrVmFsaWRpdHkoKTtcbiAgICBpZiAodmFsaWRGb3JtKSB7XG4gICAgICBpZiAoaW5wdXRfZHVlZGF0ZS52YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGR1ZURhdGVPYmogPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHVlRGF0ZU9iaiA9IG5ldyBEYXRlKGlucHV0X2R1ZWRhdGUudmFsdWUpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coZHVlRGF0ZU9iaik7XG4gICAgICBsZXQgZm9ybURhdGEgPSB7XG4gICAgICAgIC8vIEV4dHJhY3QgZm9ybSBkYXRhIGhlcmUsIGUuZy4sIHVzaW5nIGZvcm0gZWxlbWVudHMgb3Igb3RoZXIgbWV0aG9kc1xuICAgICAgICBpZDogdG9kb09iamVjdC5faWQsXG4gICAgICAgIHRpdGxlOiBpbnB1dF90aXRsZS52YWx1ZSxcbiAgICAgICAgZGVzYzogaW5wdXRfZGVzYy52YWx1ZSxcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZU9iaixcbiAgICAgICAgcHJpb3JpdHk6IGlucHV0X3ByaW9yaXR5LnZhbHVlLFxuICAgICAgICBwcm9qZWN0OiBpbnB1dF9wcm9qZWN0LnZhbHVlLFxuICAgICAgICAvLyBBZGQgbW9yZSBwcm9wZXJ0aWVzIGFzIG5lZWRlZFxuICAgICAgfTtcblxuICAgICAgY29uc3QgY3VzdG9tRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJlZGl0VG9kb0V2ZW50XCIsIHtcbiAgICAgICAgZGV0YWlsOiBmb3JtRGF0YSxcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkVkaXQgdG9kbyBldmVudCBmaXJlZCFcIik7XG4gICAgICBjcmVhdGVfdG9kb19mb3JtLnJlc2V0KCk7XG4gICAgICBkb21fZGlhbG9nLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZV90b2RvX2Zvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vVE9ETzogQWRkIGEgbmV3IGZpZWxkIHRoYXQgaG9sZHMgdGhlIHByb2plY3RcbiAgcmV0dXJuIGRvbV9kaWFsb2c7XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vdG9kby9wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdHNMaXN0RE9NKHByb2plY3RfZGF0YSkge1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0X2RhdGEpO1xuICBjb25zdCBwcm9qZWN0X2xpc3RfZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBwcm9qZWN0X2xpc3RfZG9tLmlkID0gXCJwcm9qZWN0LWxpc3QtZG9tXCI7XG5cbiAgY29uc3QgcHJvamVjdF90b2RheSA9IHsgX2lkOiAwLCBfdGl0bGU6IFwidG9kYXlcIiB9O1xuICBjb25zdCBwcm9qZWN0X2FsbCA9IHsgX2lkOiAxLCBfdGl0bGU6IFwiYWxsXCIgfTtcbiAgLy8gY29uc29sZS5sb2cocHJvamVjdF90b2RheSk7XG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RfYWxsKTtcblxuICBjb25zdCBwcm9qZWN0X2xpc3QgPSBbLi4ucHJvamVjdF9kYXRhLmdldERhdGEoKV07XG4gIHByb2plY3RfbGlzdC51bnNoaWZ0KHByb2plY3RfdG9kYXkpO1xuICBwcm9qZWN0X2xpc3QudW5zaGlmdChwcm9qZWN0X2FsbCk7XG4gIC8vIHByb2plY3RfZGF0YS5wdXNoKHByb2plY3RfYWxsLCBwcm9qZWN0X3RvZGF5KVxuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0X2RhdGEuZ2V0RGF0YSgpKTtcbiAgLy8gY29uc29sZS5sb2cocHJvamVjdF9saXN0KTtcblxuICBwcm9qZWN0X2xpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIGNvbnN0IGxpc3RfZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RfZWxtLmNsYXNzTGlzdCA9IFwicHJvamVjdC1saXN0LWl0ZW1cIjtcbiAgICBjb25zdCBwcm9qZWN0X2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJvamVjdF9idXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RfYnRuXCIpO1xuICAgIHByb2plY3RfYnV0dG9uLmlkID0gcHJvamVjdC5faWQ7XG4gICAgcHJvamVjdF9idXR0b24uaW5uZXJIVE1MID0gcHJvamVjdC5fdGl0bGU7XG4gICAgbGlzdF9lbG0uYXBwZW5kQ2hpbGQocHJvamVjdF9idXR0b24pO1xuXG4gICAgcHJvamVjdF9idXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgcHJvamVjdF9saXN0X2RvbS5jaGlsZE5vZGVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVsKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIGxldCBidG4gPSBlbC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICBidG4uc3R5bGUuZm9udFdlaWdodCA9IFwibm9ybWFsXCI7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IGJ0bi50ZXh0Q29udGVudC5yZXBsYWNlKC9bPD5dL2csIFwiXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhidG4pO1xuICAgICAgfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0X2J1dHRvbik7XG4gICAgICBwcm9qZWN0X2J1dHRvbi50ZXh0Q29udGVudCA9IGA8ICR7cHJvamVjdF9idXR0b24udGV4dENvbnRlbnR9ID5gO1xuICAgICAgcHJvamVjdF9idXR0b24uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QuX3RpdGxlKTtcbiAgICAgIGNvbnN0IGZpbHRlcl9kYXRhID0ge1xuICAgICAgICBwcm9qZWN0SUQ6IHByb2plY3QuX2lkLFxuICAgICAgICBwcm9qZWN0X3RpdGxlOiBwcm9qZWN0Ll90aXRsZSxcbiAgICAgIH07XG4gICAgICAvLyBjb25zb2xlLmxvZyhmaWx0ZXJfZGF0YSk7XG4gICAgICBjb25zdCBmaWx0ZXJFdmVudCA9IG5ldyBDdXN0b21FdmVudChcImZpbHRlckV2ZW50XCIsIHtcbiAgICAgICAgZGV0YWlsOiBmaWx0ZXJfZGF0YSxcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChmaWx0ZXJFdmVudCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkZpbHRlciBldmVudCBmaXJlZCFcIik7XG4gICAgfTtcblxuICAgIHByb2plY3RfbGlzdF9kb20uYXBwZW5kQ2hpbGQobGlzdF9lbG0pO1xuICB9KTtcblxuICBwcm9qZWN0X2xpc3RfZG9tLmNsYXNzTGlzdCA9IFwicHJvamVjdC1saXN0XCI7XG5cbiAgcmV0dXJuIHByb2plY3RfbGlzdF9kb207XG59XG4iLCJmdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZUlkKCkge1xuICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgY29uc3QgdW5pcXVlSWQgPSBgaWRfJHt0aW1lc3RhbXB9YDtcbiAgcmV0dXJuIHVuaXF1ZUlkO1xufVxuXG4vLyBFeGFtcGxlIHVzYWdlXG4vLyBjb25zdCBuZXdVbmlxdWVJZCA9IGdlbmVyYXRlVW5pcXVlSWQoKTtcbi8vIGNvbnNvbGUubG9nKG5ld1VuaXF1ZUlkKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVVbmlxdWVJZDtcbiIsImltcG9ydCBnZW5lcmF0ZVVuaXF1ZUlkIGZyb20gXCIuLi9oZWxwZXIvaWRfZ2VuZXJhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0X3RpdGxlKSB7XG4gICAgdGhpcy5faWQgPSBnZW5lcmF0ZVVuaXF1ZUlkKCk7XG4gICAgdGhpcy5fdGl0bGU7XG4gICAgdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH1cblxuICBzZXQgdGl0bGUobmV3VGl0bGUpIHtcbiAgICB0aGlzLl90aXRsZSA9IG5ld1RpdGxlO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbihuZXdEZXNjKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBuZXdEZXNjO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IGdlbmVyYXRlVW5pcXVlSWQgZnJvbSBcIi4uL2hlbHBlci9pZF9nZW5lcmF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2lkID0gZ2VuZXJhdGVVbmlxdWVJZCgpO1xuICAgIHRoaXMuX3RpdGxlO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2R1ZURhdGU7XG4gICAgdGhpcy5fcHJpb3JpdHk7IC8vIDEgZm9yIGxvdywgMiBmb3IgbWVkaXVtLCAzIGZvciBoaWdoXG4gICAgdGhpcy5fY29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcHJvamVjdCA9IG51bGw7XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgc2V0IGlkKG5ld0lEKSB7XG4gICAgdGhpcy5faWQgPSBuZXdJRDtcbiAgfVxuXG4gIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgIHRoaXMuX3RpdGxlID0gbmV3VGl0bGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKG5ld0Rlc2MpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUobmV3RHVlRGF0ZSkge1xuICAgIGlmIChuZXdEdWVEYXRlID09IG51bGwpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibm90aGluZyFcIik7XG4gICAgICB0aGlzLl9kdWVEYXRlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZShuZXdEdWVEYXRlKTtcbiAgICAgIHRoaXMuX2R1ZURhdGUgPSBuZXdEYXRlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIGlmICh0aGlzLl9kdWVEYXRlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkYXRlU3RyaW5nID0gdGhpcy5fZHVlRGF0ZS50b0xvY2FsZVN0cmluZygpO1xuICAgICAgY29uc3QgW2RhdGVQYXJ0LCB0aW1lUGFydF0gPSBkYXRlU3RyaW5nLnNwbGl0KFwiLCBcIik7XG4gICAgICByZXR1cm4gZGF0ZVBhcnQ7XG4gICAgfVxuICB9XG5cbiAgc2V0IHByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cblxuICBnZXQgY29tcGxldGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZWQ7XG4gIH1cblxuICBzZXQgY29tcGxldGVkKHZhbHVlKSB7XG4gICAgdGhpcy5fY29tcGxldGVkID0gdmFsdWU7XG4gIH1cblxuICB0b2dnbGVDb21wbGV0ZSgpIHtcbiAgICBpZiAodGhpcy5fY29tcGxldGVkID09IHRydWUpIHtcbiAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzZXQgcHJvamVjdChwcm9qZWN0SUQpIHtcbiAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdElEO1xuICB9XG5cbiAgZ2V0IHByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3Q7XG4gIH1cblxuICBkaXNwbGF5VG9kbygpIHtcbiAgICAvL1RoaXMgc2hvdWxkIGhhdmUgcHJpbnQgdGhlIHRvZG9cbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvL3RvZG9cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3RvZG8vcHJvamVjdFwiO1xuaW1wb3J0IGdlbmVyYXRlVG9kb0NhcmRET00gZnJvbSBcIi4vZG9tL2RvbV9jYXJkXCI7XG5pbXBvcnQgZ2VuZXJhdGVUb2RvQnRuIGZyb20gXCIuL2RvbS9kb21fbmV3X3RvZG9fYnRuXCI7XG5pbXBvcnQgZ2VuZXJhdGVDcmVhdGVUb2RvRE9NIGZyb20gXCIuL2RvbS9jcmVhdGVfdG9kb19kaWFsb2dcIjtcbmltcG9ydCB7XG4gIHdpcGVEYXRhLFxuICBmZXRjaEFsbERhdGEsXG4gIHB1c2hEYXRhLFxuICBpbml0aWFsaXNlRGF0YWJhc2UsXG4gIGNoZWNrRGF0YWJhc2UsXG59IGZyb20gXCIuL2RhdGFiYXNlL2RhdGFiYXNlX2hlbHBlcl9mdW5jdGlvbnNcIjtcbmltcG9ydCBnZW5lcmF0ZVByb2plY3RzTGlzdERPTSBmcm9tIFwiLi9kb20vcHJvamVjdF9saXN0XCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdERPTSBmcm9tIFwiLi9kb20vY3JlYXRlX3Byb2plY3RfZGlhbG9nXCI7XG5pbXBvcnQgZGF0YWJhc2UgZnJvbSBcIi4vZGF0YWJhc2UvZGF0YWJhc2VcIjtcbmltcG9ydCBnZW5lcmF0ZUVkaXRUb2RvRE9NIGZyb20gXCIuL2RvbS9lZGl0X3RvZG9fZGlhbG9nXCI7XG5cbmxldCB0b2RvX2RhdGFiYXNlO1xubGV0IHByb2plY3RfZGF0YWJhc2U7XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRGF0YWJhc2UoKSB7XG4gIGxldCB0b2RvRGF0YSA9IGZldGNoQWxsRGF0YSgpO1xuXG4gIHRvZG9fZGF0YWJhc2UgPSBuZXcgZGF0YWJhc2UoKTtcbiAgcHJvamVjdF9kYXRhYmFzZSA9IG5ldyBkYXRhYmFzZSgpO1xuXG4gIHRvZG9EYXRhLnRvZG9zLmZvckVhY2goKHRvZG9PYmopID0+IHtcbiAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKCk7XG4gICAgbmV3VG9kby5pZCA9IHRvZG9PYmouX2lkO1xuICAgIG5ld1RvZG8udGl0bGUgPSB0b2RvT2JqLl90aXRsZTtcbiAgICBuZXdUb2RvLmRlc2NyaXB0aW9uID0gdG9kb09iai5fZGVzY3JpcHRpb247XG4gICAgbmV3VG9kby5kdWVEYXRlID0gdG9kb09iai5fZHVlRGF0ZTtcbiAgICBuZXdUb2RvLnByaW9yaXR5ID0gdG9kb09iai5fcHJpb3JpdHk7XG4gICAgbmV3VG9kby5jb21wbGV0ZWQgPSB0b2RvT2JqLl9jb21wbGV0ZWQ7XG4gICAgbmV3VG9kby5wcm9qZWN0ID0gdG9kb09iai5fcHJvamVjdDtcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdUb2RvKTtcbiAgICB0b2RvX2RhdGFiYXNlLmFkZChuZXdUb2RvKTtcbiAgfSk7XG4gIHRvZG9EYXRhLnByb2plY3RzLmZvckVhY2goKHByb2plY3RPYmopID0+IHtcbiAgICBwcm9qZWN0X2RhdGFiYXNlLmFkZChwcm9qZWN0T2JqKTtcbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2codG9kb19kYXRhYmFzZSwgcHJvamVjdF9kYXRhYmFzZSk7XG59XG5pZiAoY2hlY2tEYXRhYmFzZSA9PT0gdHJ1ZSkge1xuICBpbml0aWFsaXNlRGF0YWJhc2UoKTtcbn1cblxucG9wdWxhdGVEYXRhYmFzZSgpO1xuLy8gY29uc29sZS5sb2cocHJvamVjdF9kYXRhYmFzZSk7XG5cbi8vQ3JlYXRlIHRvZG8gZG9tIGVsZW1lbnRcblxuY29uc3QgY3JlYXRlX3Byb2plY3RfZG9tID0gY3JlYXRlUHJvamVjdERPTSgpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVfcHJvamVjdF9kb20pO1xuXG4vL1NJREUgQkFSXG5jb25zdCBzaWRlX2Jhcl9kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGUtYmFyXCIpO1xuLy9UT0RPOiBhZGQgdGhlIHByb2plY3RzIGhlclxuXG4vL0RFQlVHR0VSIERPTSBFTEVNRU5UOiBGT1IgREVCVUdHSU5HXG4vLyBjb25zdCBkZWJ1Z19kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gZGVidWdfZG9tLmlkID0gXCJkZWJ1Z19kb21cIjtcbi8vIGRlYnVnX2RvbS5pbm5lclRleHQgPSBcIkRFQlVHR0VSXCI7XG4vLyBzaWRlX2Jhcl9kb20uYXBwZW5kQ2hpbGQoZGVidWdfZG9tKTtcblxuY29uc3Qgc2lkZV9iYXJfcHJvamVjdF9saXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNpZGVfYmFyX2RvbS5hcHBlbmRDaGlsZChzaWRlX2Jhcl9wcm9qZWN0X2xpc3QpO1xuXG5jb25zdCB0b2RvX2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1saXN0XCIpO1xuXG5jb25zdCBuZXdUb2RvQnRuID0gZ2VuZXJhdGVUb2RvQnRuKCk7XG4vLyBjb25zb2xlLmxvZyhuZXdUb2RvQnRuKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3VG9kb0J0bik7XG4vLyBuZXdUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbi8vICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgY3JlYXRlX3RvZG9fZG9tLnNob3dNb2RhbCgpO1xuLy8gfSk7XG5cbi8vVE9ETzogTU9WRSBUSEVTRSBGVU5DVElPTlMgT1VUIE9GIEhFUkUhXG5mdW5jdGlvbiBjcmVhdGVOZXdUb2RvKGRldGFpbHMpIHtcbiAgLy8gY29uc29sZS5sb2coZGV0YWlscyk7XG4gIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbygpO1xuICBuZXdUb2RvLnRpdGxlID0gZGV0YWlsc1tcInRpdGxlXCJdO1xuICBuZXdUb2RvLmRlc2NyaXB0aW9uID0gZGV0YWlsc1tcImRlc2NcIl07XG4gIG5ld1RvZG8ucHJpb3JpdHkgPSBkZXRhaWxzW1wicHJpb3JpdHlcIl07XG4gIG5ld1RvZG8uZHVlRGF0ZSA9IGRldGFpbHNbXCJkdWVkYXRlXCJdO1xuICBuZXdUb2RvLnByb2plY3QgPSBkZXRhaWxzW1wicHJvamVjdFwiXTtcbiAgLy8gY29uc29sZS5sb2cobmV3VG9kbyk7XG4gIC8vIGNvbnNvbGUubG9nKG5ld1RvZG8uZHVlRGF0ZSk7XG4gIHJldHVybiBuZXdUb2RvO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KGRldGFpbHMpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCk7XG4gIG5ld1Byb2plY3QudGl0bGUgPSBkZXRhaWxzW1wicHJvamVjdElEXCJdO1xuICAvLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcbiAgLy8gbmV3UHJvamVjdC50aXRsZSA9IGRldGFpbHNbXCJ0aXRsZVwiXTtcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjcmVhdGVOZXdUb2RvRXZlbnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgbmV3IHRvZG8gYW5kIHB1c2hpbmcgdG8gZGF0YWJhc2UhXCIpO1xuICBjb25zdCByZWNlaXZlZERhdGEgPSBldmVudC5kZXRhaWw7XG4gIC8vIGNvbnNvbGUubG9nKHJlY2VpdmVkRGF0YSk7XG4gIC8vIEhhbmRsZSB0aGUgcmVjZWl2ZWQgZGF0YSBhcyBuZWVkZWRcbiAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZU5ld1RvZG8ocmVjZWl2ZWREYXRhKTtcbiAgdG9kb19kYXRhYmFzZS5hZGQobmV3VG9kbyk7XG4gIHB1c2hEYXRhKHRvZG9fZGF0YWJhc2UuZ2V0RGF0YSgpLCBwcm9qZWN0X2RhdGFiYXNlLmdldERhdGEoKSk7XG4gIC8vIHN0b3JlVG9kbyhuZXdUb2RvKTtcbiAgcG9wdWxhdGVEYXRhYmFzZSgpO1xuICBzaG93X3RvZG9zKCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImVkaXRUb2RvRXZlbnRcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiQ2FwdHVyZWQgZWRpdGVkIHRvZG9cIik7XG4gIGNvbnN0IHJlY2VpdmVkRGF0YSA9IGV2ZW50LmRldGFpbDtcbiAgLy8gY29uc29sZS5sb2codG9kb19kYXRhYmFzZS5nZXREYXRhKCkpO1xuICBjb25zb2xlLmxvZyhyZWNlaXZlZERhdGEpO1xuICBsZXQgb2xkVG9kb0luZGV4ID0gdG9kb19kYXRhYmFzZVxuICAgIC5nZXREYXRhKClcbiAgICAuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLl9pZCA9PT0gcmVjZWl2ZWREYXRhLmlkKTtcbiAgbGV0IG9sZFRvZG8gPSB0b2RvX2RhdGFiYXNlLmdldERhdGEoKVtvbGRUb2RvSW5kZXhdO1xuICAvLyBjb25zb2xlLmxvZyhvbGRUb2RvKTtcbiAgY29uc3QgdXBkYXRlZF90b2RvID0gbmV3IFRvZG8oKTtcbiAgdXBkYXRlZF90b2RvLmlkID0gcmVjZWl2ZWREYXRhLmlkO1xuICB1cGRhdGVkX3RvZG8udGl0bGUgPSByZWNlaXZlZERhdGEudGl0bGU7XG4gIHVwZGF0ZWRfdG9kby5kZXNjcmlwdGlvbiA9IHJlY2VpdmVkRGF0YS5kZXNjO1xuICB1cGRhdGVkX3RvZG8uZHVlRGF0ZSA9IHJlY2VpdmVkRGF0YS5kdWVEYXRlO1xuICB1cGRhdGVkX3RvZG8ucHJpb3JpdHkgPSByZWNlaXZlZERhdGEucHJpb3JpdHk7XG4gIHVwZGF0ZWRfdG9kby5jb21wbGV0ZWQgPSBvbGRUb2RvLl9jb21wbGV0ZWQ7XG4gIHVwZGF0ZWRfdG9kby5wcm9qZWN0ID0gcmVjZWl2ZWREYXRhLnByb2plY3Q7XG4gIGNvbnNvbGUubG9nKG9sZFRvZG8pO1xuICBjb25zb2xlLmxvZyh1cGRhdGVkX3RvZG8pO1xuICB0b2RvX2RhdGFiYXNlLnVwZGF0ZShyZWNlaXZlZERhdGEuaWQsIHVwZGF0ZWRfdG9kbyk7XG4gIHB1c2hEYXRhKHRvZG9fZGF0YWJhc2UuZ2V0RGF0YSgpLCBwcm9qZWN0X2RhdGFiYXNlLmdldERhdGEoKSk7XG4gIHBvcHVsYXRlRGF0YWJhc2UoKTtcbiAgc2hvd190b2RvcygpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjcmVhdGVOZXdQcm9qZWN0RXZlbnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgbmV3IHByb2plY3QgYW5kIHB1c2hpbmcgdG8gZGF0YWJhc2UhXCIpO1xuICBjb25zdCByZWNlaXZlZERhdGEgPSBldmVudC5kZXRhaWw7XG4gIC8vIGNvbnNvbGUubG9nKHJlY2VpdmVkRGF0YSk7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVOZXdQcm9qZWN0KHJlY2VpdmVkRGF0YSk7XG4gIC8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuICBwcm9qZWN0X2RhdGFiYXNlLmFkZChuZXdQcm9qZWN0KTtcblxuICBwdXNoRGF0YSh0b2RvX2RhdGFiYXNlLmdldERhdGEoKSwgcHJvamVjdF9kYXRhYmFzZS5nZXREYXRhKCkpO1xuICAvLyBzaG93X3RvZG9zKCk7XG4gIHBvcHVsYXRlRGF0YWJhc2UoKTtcbiAgc2hvd1Byb2plY3RzKCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvZ2dsZVRvZG9Db21wbGV0ZVwiLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgZGF0YSA9IGV2ZW50LmRldGFpbDtcbiAgbGV0IHVwZGF0ZWRfdG9kbyA9IHRvZG9fZGF0YWJhc2VcbiAgICAuZ2V0RGF0YSgpXG4gICAgLmZpbHRlcigodG9kbykgPT4gdG9kby5faWQgPT0gZGF0YSlbMF07XG4gIGlmICh1cGRhdGVkX3RvZG8uX2NvbXBsZXRlZCA9PSBmYWxzZSkge1xuICAgIHVwZGF0ZWRfdG9kby5fY29tcGxldGVkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB1cGRhdGVkX3RvZG8uX2NvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG4gIHB1c2hEYXRhKHRvZG9fZGF0YWJhc2UuZ2V0RGF0YSgpLCBwcm9qZWN0X2RhdGFiYXNlLmdldERhdGEoKSk7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAvLyB0b2dnbGVUb2RvQ29tcGxldGlvbihkYXRhKTtcbiAgcG9wdWxhdGVEYXRhYmFzZSgpO1xuICBzaG93X3RvZG9zKCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRlbGV0ZVRvZG9cIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgdG9kb1RvRGVsZXRlSUQgPSBldmVudC5kZXRhaWw7XG4gIC8vIGNvbnNvbGUubG9nKFwiZGVsZXRlIHRvZG8gZXZlbnQgY2FwdHVyZWRcIik7XG4gIGNvbnN0IHRvZG9Ub0RlbGV0ZSA9IHRvZG9fZGF0YWJhc2VcbiAgICAuZ2V0RGF0YSgpXG4gICAgLmZpbHRlcigodG9kbykgPT4gdG9kby5faWQgPT0gdG9kb1RvRGVsZXRlSUQpWzBdO1xuICB0b2RvX2RhdGFiYXNlLmRlbGV0ZSh0b2RvVG9EZWxldGUpO1xuICBwdXNoRGF0YSh0b2RvX2RhdGFiYXNlLmdldERhdGEoKSwgcHJvamVjdF9kYXRhYmFzZS5nZXREYXRhKCkpO1xuXG4gIC8vIGRlbGV0ZVRvZG8oZGF0YSk7XG4gIHBvcHVsYXRlRGF0YWJhc2UoKTtcbiAgc2hvd190b2RvcygpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuRWRpdFRvZG9EaWFsb2dcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnNvbGUubG9nKGBFZGl0IHRvIGV2ZW50IGV2ZW50IGNhcHR1cmVkOiAke2V2ZW50LmRldGFpbH1gKTtcbiAgbGV0IHRvZG8gPSB0b2RvX2RhdGFiYXNlXG4gICAgLmdldERhdGEoKVxuICAgIC5maWx0ZXIoKHRvZG8pID0+IHRvZG8uX2lkID09PSBldmVudC5kZXRhaWwpWzBdO1xuICBjb25zb2xlLmxvZyh0b2RvKTtcbiAgY29uc3QgZWRpdF90b2RvX2RpYWxvZyA9IGdlbmVyYXRlRWRpdFRvZG9ET00ocHJvamVjdF9kYXRhYmFzZSwgdG9kbyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWRpdF90b2RvX2RpYWxvZyk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGVkaXRfdG9kb19kaWFsb2cuc2hvd01vZGFsKCk7XG59KTtcblxuLy9FdmVudCBsaXN0ZW5lcnMgdG8gc2hvdyBtb2RhbHNcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5DcmVhdGVUb2RvRGlhbG9nRXZlbnRcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGNyZWF0ZV90b2RvX2RvbSA9IGdlbmVyYXRlQ3JlYXRlVG9kb0RPTShwcm9qZWN0X2RhdGFiYXNlKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVfdG9kb19kb20pO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjcmVhdGVfdG9kb19kb20uc2hvd01vZGFsKCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5DcmVhdGVQcm9qZWN0RGlhbG9nRXZlbnRcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNyZWF0ZV9wcm9qZWN0X2RvbS5zaG93TW9kYWwoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwib3BlbkNyZWF0ZU5vdGVEaWFsb2dFdmVudFwiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gY3JlYXRlX3Byb2plY3RfZG9tLnNob3dNb2RhbCgpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmaWx0ZXJFdmVudFwiLCAoZXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coXCJmaWx0ZXIgZXZlbnQgY2FwdHVyZWQhXCIpO1xuICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwucHJvamVjdF90aXRsZSk7XG4gIHNob3dfdG9kb3MoZXZlbnQuZGV0YWlsLnByb2plY3RfdGl0bGUpO1xufSk7XG5cbmZ1bmN0aW9uIHNob3dfdG9kb3MoZmlsdGVyID0gXCJhbGxcIikge1xuICAvLyBjb25zdCB0b2Rvc0FycmF5ID0gZ2V0VG9kb3MoKTtcbiAgY29uc3QgdG9kb3NBcnJheSA9IHRvZG9fZGF0YWJhc2UuZ2V0RGF0YSgpO1xuICAvLyBjb25zb2xlLmxvZyh0b2RvX2RhdGFiYXNlKTtcbiAgLy8gY29uc29sZS5sb2coZmlsdGVyKTtcbiAgLy8gY29uc29sZS5sb2codG9kb3NBcnJheSk7XG4gIHRvZG9fY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgaWYgKGZpbHRlciA9PSBcImFsbFwiKSB7XG4gICAgdG9kb19jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0b2Rvc0FycmF5LmZvckVhY2goKHRvZG9fb2JqKSA9PiB7XG4gICAgICBsZXQgdG9kb19kb21fY2FyZCA9IGdlbmVyYXRlVG9kb0NhcmRET00odG9kb19vYmopO1xuICAgICAgdG9kb19jb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb19kb21fY2FyZCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoZmlsdGVyID09IFwidG9kYXlcIikge1xuICAgIC8vR2V0IHRvZGF5J3MgZGF0ZVxuICAgIC8vR2V0IGFsbCB0b2RvcyB0aGF0IGFyZSBlaXRoZXIgZHVlIHRvZGF5IG9yIGhhdmUgYmVlbiBkdWVcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZUZpbHRlcmVkVG9kb3MgPSB0b2Rvc0FycmF5LmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgcmV0dXJuIHRvZG8uX2R1ZURhdGU/LnRvRGF0ZVN0cmluZygpID09PSB0b2RheS50b0RhdGVTdHJpbmcoKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhkYXRlRmlsdGVyZWRUb2Rvcyk7XG4gICAgZGF0ZUZpbHRlcmVkVG9kb3MuZm9yRWFjaCgodG9kb19vYmopID0+IHtcbiAgICAgIGxldCB0b2RvX2RvbV9jYXJkID0gZ2VuZXJhdGVUb2RvQ2FyZERPTSh0b2RvX29iaik7XG4gICAgICB0b2RvX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvX2RvbV9jYXJkKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmaWx0ZXJlZFRvZG9zID0gdG9kb3NBcnJheS5maWx0ZXIoKHRvZG8pID0+IHRvZG8uX3Byb2plY3QgPT09IGZpbHRlcik7XG4gICAgLy8gY29uc29sZS5sb2coZmlsdGVyZWRUb2Rvcyk7XG5cbiAgICBmaWx0ZXJlZFRvZG9zLmZvckVhY2goKHRvZG9fb2JqKSA9PiB7XG4gICAgICBsZXQgdG9kb19kb21fY2FyZCA9IGdlbmVyYXRlVG9kb0NhcmRET00odG9kb19vYmopO1xuICAgICAgdG9kb19jb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb19kb21fY2FyZCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3RzKCkge1xuICBjb25zdCBwcm9qZWN0X2xpc3RfZG9tID0gZ2VuZXJhdGVQcm9qZWN0c0xpc3RET00ocHJvamVjdF9kYXRhYmFzZSk7XG4gIHNpZGVfYmFyX3Byb2plY3RfbGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICBzaWRlX2Jhcl9wcm9qZWN0X2xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdF9saXN0X2RvbSk7XG59XG5cbi8vIGZ1bmN0aW9uIHNob3dfcHJvamVjdHMoKXtcbi8vICAgY29uc3Rcbi8vIH1cbi8vIHBvcHVsYXRlRGF0YWJhc2UoKTtcbnNob3dfdG9kb3MoKTtcbnNob3dQcm9qZWN0cygpO1xuXG4vLyB3aXBlRGF0YSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9